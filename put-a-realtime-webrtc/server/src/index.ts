import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT ?? 3000);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const REALTIME_MODEL = process.env.REALTIME_MODEL || 'gpt-4o-realtime-preview';

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

app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowed.size === 0 || allowed.has(origin)) return cb(null, true);
      return cb(new Error('Not allowed by CORS'));
    },
    credentials: true
  })
);

const limiter = rateLimit({ windowMs: 60_000, max: 5, standardHeaders: true });
app.use('/api/realtime/ephemeral', limiter);

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/realtime/ephemeral', async (_req, res) => {
  try {
    const r = await fetch('https://api.openai.com/v1/realtime/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: REALTIME_MODEL,
        voice: 'alloy'
      })
    });

    const json = await r.json();
    if (!r.ok) {
      console.error('Ephemeral error:', json);
      return res.status(500).json({ error: 'Failed to create client secret', details: json });
    }
    return res.json(json);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Unexpected error creating client secret' });
  }
});

app.listen(PORT, () => {
  console.log(`Realtime server on :${PORT}`);
});