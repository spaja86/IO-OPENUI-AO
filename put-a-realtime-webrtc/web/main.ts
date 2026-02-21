const statusEl = document.getElementById('status')!;
const logEl = document.getElementById('log')!;
const btnConnect = document.getElementById('connect') as HTMLButtonElement;
const btnHangup = document.getElementById('hangup') as HTMLButtonElement;
const remoteAudio = document.getElementById('remote') as HTMLAudioElement;

const SERVER =
  (import.meta as any).env?.VITE_SERVER_URL ||
  `${location.protocol}//${location.hostname}:3000`;

let pc: RTCPeerConnection | null = null;
let dc: RTCDataChannel | null = null;
let localStream: MediaStream | null = null;

function log(...args: unknown[]) {
  console.log(...args);
  logEl.textContent += args
    .map(a => (typeof a === 'string' ? a : JSON.stringify(a, null, 2)))
    .join(' ') + '\n';
  logEl.scrollTop = logEl.scrollHeight;
}

async function createEphemeralSecret(): Promise<string> {
  const r = await fetch(`${SERVER}/api/realtime/ephemeral`, { method: 'POST' });
  if (!r.ok) throw new Error(`Failed to get client secret: ${r.status}`);
  const json = await r.json();
  const secret = json?.client_secret?.value as string;
  if (!secret) throw new Error('No client_secret.value in response');
  return secret;
}

async function connect() {
  btnConnect.disabled = true;
  statusEl.textContent = 'connecting…';

  localStream = await navigator.mediaDevices.getUserMedia({ audio: true });

  const EPHEMERAL = await createEphemeralSecret();
  log('Ephemeral key received');

  pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });

  pc.ontrack = (e) => {
    remoteAudio.srcObject = e.streams[0];
    remoteAudio.play().catch(() => {});
  };

  pc.oniceconnectionstatechange = () => log('ICE:', pc?.iceConnectionState);
  pc.onconnectionstatechange = () => {
    statusEl.textContent = pc?.connectionState || 'unknown';
    btnHangup.disabled = pc?.connectionState !== 'connected';
  };

  localStream.getAudioTracks().forEach(t => pc!.addTrack(t, localStream!));

  dc = pc.createDataChannel('oai-events');
  dc.onopen = () => {
    log('DataChannel open');
    dc!.send(JSON.stringify({
      type: 'response.create',
      response: {
        instructions: 'Pozdravi korisnika na srpskom i pitaj kako možeš pomoći.'
      }
    }));
  };
  dc.onmessage = (ev) => log('evt:', ev.data);

  const offer = await pc.createOffer({ offerToReceiveAudio: true, offerToReceiveVideo: false });
  await pc.setLocalDescription(offer);

  const model = (import.meta as any).env?.VITE_REALTIME_MODEL || 'gpt-4o-realtime-preview';
  const resp = await fetch(
    `https://api.openai.com/v1/realtime?model=${encodeURIComponent(model)}`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${EPHEMERAL}`, 'Content-Type': 'application/sdp' },
      body: offer.sdp
    }
  );

  if (!resp.ok) throw new Error(`Realtime SDP failed: ${await resp.text()}`);

  await pc.setRemoteDescription({ type: 'answer', sdp: await resp.text() });
  log('Connected to Realtime');
}

function hangup() {
  btnConnect.disabled = false;
  btnHangup.disabled = true;
  statusEl.textContent = 'disconnected';
  if (dc && dc.readyState !== 'closed') dc.close();
  if (pc) { pc.getSenders().forEach(s => s.track?.stop()); pc.close(); }
  pc = null; dc = null;
  localStream?.getTracks().forEach(t => t.stop());
  localStream = null;
  log('Disconnected');
}

btnConnect.onclick = () =>
  connect().catch(e => { log('ERR', String(e)); btnConnect.disabled = false; statusEl.textContent = 'error'; });
btnHangup.onclick = hangup;