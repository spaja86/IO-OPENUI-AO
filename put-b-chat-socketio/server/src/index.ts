import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server as IOServer } from 'socket.io';
import rateLimit from 'express-rate-limit';

const app = express();
const httpServer = createServer(app);

const PORT = Number(process.env.PORT ?? 3001);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const RESP_MODEL = process.env.RESP_MODEL || 'gpt-4o-mini';

if (!OPENAI_API_KEY) {
  console.error('Error: OPENAI_API_KEY environment variable is not set.');
  process.exit(1);
}

const allowed = new Set(
  (process.env.CORS_ORIGIN || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)
);

const corsCfg = {
  origin(origin: string | undefined, cb: (err: Error | null, ok?: boolean) => void) {
    if (!origin || allowed.size === 0 || allowed.has(origin)) return cb(null, true);
    return cb(new Error('Not allowed by CORS'));
  },
  credentials: true
};

app.use(cors(corsCfg));
app.use(express.json());

const io = new IOServer(httpServer, { cors: corsCfg });

const limiter = rateLimit({ windowMs: 60_000, max: 60, standardHeaders: true });
app.use('/health', limiter);

app.get('/health', (_req, res) => res.json({ ok: true }));

io.on('connection', (socket) => {
  socket.on('user_message', async ({ id, text }: { id: string; text: string }) => {
    try {
      const resp = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: RESP_MODEL,
          stream: true,
          messages: [
            { role: 'system', content: 'You are a concise and helpful assistant.' },
            { role: 'user', content: text }
          ],
          temperature: 0.2
        })
      });

      if (!resp.ok || !resp.body) {
        const errTxt = await resp.text();
        io.to(socket.id).emit('assistant_error', { id, error: errTxt });
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        for (const line of lines) {
          const l = line.trim();
          if (!l.startsWith('data:')) continue;
          const data = l.slice(5).trim();
          if (data === '[DONE]') {
            io.to(socket.id).emit('assistant_done', { id });
            return;
          }
          try {
            const json = JSON.parse(data);
            const delta = (json as any)?.choices?.[0]?.delta;
            if (delta?.content) {
              io.to(socket.id).emit('assistant_delta', { id, delta: delta.content as string });
            }
          } catch {
            // ignore non-JSON lines
          }
        }
      }
      io.to(socket.id).emit('assistant_done', { id });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      io.to(socket.id).emit('assistant_error', { id, error: msg });
    }
  });
});

httpServer.listen(PORT, () => {
  console.log(`Chat Socket.IO server on :${PORT}`);
});