const thread = document.getElementById('thread')!;
const form = document.getElementById('f') as HTMLFormElement;
const inp = document.getElementById('inp') as HTMLInputElement;
const sendBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;

const API_BASE = (import.meta as any).env?.VITE_API_BASE ?? '';

function append(role: 'user' | 'assistant', text = ''): HTMLSpanElement | null {
  const row = document.createElement('div');
  row.style.margin = '6px 0';
  const label = document.createElement('b');
  label.textContent = role === 'user' ? 'Ti: ' : 'Asistent: ';
  row.appendChild(label);
  if (role === 'user') {
    row.appendChild(document.createTextNode(text));
    thread.appendChild(row);
    thread.scrollTop = thread.scrollHeight;
    return null;
  }
  const span = document.createElement('span');
  row.appendChild(span);
  thread.appendChild(row);
  thread.scrollTop = thread.scrollHeight;
  return span;
}

form.onsubmit = async (e) => {
  e.preventDefault();
  const text = inp.value.trim();
  if (!text || sendBtn.disabled) return;

  sendBtn.disabled = true;
  append('user', text);
  const target = append('assistant');
  inp.value = '';

  try {
    const resp = await fetch(`${API_BASE}/api/chat/stream`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    if (!resp.ok || !resp.body) {
      if (target) target.textContent = `Greška: ${resp.status} ${resp.statusText}`;
      return;
    }

    const reader = resp.body.getReader();
    const dec = new TextDecoder();
    let buf = '';
    let finished = false;

    while (!finished) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const lines = buf.split('\n');
      buf = lines.pop() ?? '';
      for (const line of lines) {
        const l = line.trim();
        if (!l.startsWith('data:')) continue;
        const data = l.slice(5).trim();
        if (data === '[DONE]') { finished = true; break; }
        try {
          const json = JSON.parse(data) as {
            error?: string;
            choices?: Array<{ delta?: { content?: string } }>;
          };
          if (json.error) {
            if (target) target.textContent = `Greška: ${json.error}`;
            finished = true;
            break;
          }
          const delta = json?.choices?.[0]?.delta?.content;
          if (delta && target) {
            target.textContent += delta;
            thread.scrollTop = thread.scrollHeight;
          }
        } catch {
          // ignore non-JSON SSE lines
        }
      }
    }
  } catch (e: unknown) {
    if (target) target.textContent = `Greška: ${e instanceof Error ? e.message : String(e)}`;
  } finally {
    sendBtn.disabled = false;
  }
};
