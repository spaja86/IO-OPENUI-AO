import { io } from 'socket.io-client';

const thread = document.getElementById('thread')!;
const form = document.getElementById('f') as HTMLFormElement;
const inp = document.getElementById('inp') as HTMLInputElement;

const SOCKET_URL =
  (import.meta as any).env?.VITE_SOCKET_URL ||
  `${location.protocol}//${location.hostname}:3001`;

const socket = io(SOCKET_URL, { transports: ['websocket'] });

function append(role: 'user' | 'assistant', text: string): HTMLSpanElement | null {
  const div = document.createElement('div');
  div.style.margin = '6px 0';
  const label = document.createElement('b');
  label.textContent = role === 'user' ? 'Ti: ' : 'Asistent: ';
  div.appendChild(label);
  if (role === 'user') {
    const textNode = document.createTextNode(text);
    div.appendChild(textNode);
    thread.appendChild(div);
    thread.scrollTop = thread.scrollHeight;
    return null;
  } else {
    const span = document.createElement('span');
    div.appendChild(span);
    thread.appendChild(div);
    thread.scrollTop = thread.scrollHeight;
    return span;
  }
}

form.onsubmit = (e) => {
  e.preventDefault();
  const text = inp.value.trim();
  if (!text) return;

  const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
  append('user', text);
  const target = append('assistant', '');
  inp.value = '';

  socket.emit('user_message', { id, text });

  const onDelta = ({ id: got, delta }: { id: string; delta: string }) => {
    if (got !== id || !target) return;
    target.textContent += delta;
    thread.scrollTop = thread.scrollHeight;
  };

  const onDone = ({ id: got }: { id: string }) => {
    if (got !== id) return;
    socket.off('assistant_delta', onDelta);
    socket.off('assistant_done', onDone);
  };

  const onError = ({ id: got, error }: { id: string; error: string }) => {
    if (got !== id || !target) return;
    target.textContent = `Greška: ${error}`;
    socket.off('assistant_delta', onDelta);
    socket.off('assistant_done', onDone);
    socket.off('assistant_error', onError);
  };

  socket.on('assistant_delta', onDelta);
  socket.on('assistant_done', onDone);
  socket.on('assistant_error', onError);
};
