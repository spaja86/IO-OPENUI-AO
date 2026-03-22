import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'OPENAI_API_KEY is not configured' });
  }

  const model = process.env.REALTIME_MODEL || 'gpt-4o-realtime-preview';

  try {
    const r = await fetch('https://api.openai.com/v1/realtime/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model, voice: 'alloy' }),
    });

    const json = await r.json() as unknown;
    if (!r.ok) {
      console.error('[ephemeral] OpenAI error:', json);
      return res.status(502).json({ error: 'Failed to create Realtime session', details: json });
    }
    return res.status(200).json(json);
  } catch (e: unknown) {
    console.error('[ephemeral]', e);
    return res.status(500).json({ error: 'Internal error' });
  }
}
