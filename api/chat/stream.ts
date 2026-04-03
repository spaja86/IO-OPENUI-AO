import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'OPENAI_API_KEY is not configured' });
  }

  const body = req.body as { text?: unknown };
  const text = typeof body?.text === 'string' ? body.text.trim() : '';
  if (!text) {
    return res.status(400).json({ error: 'Missing required field: text' });
  }
  if (text.length > 4000) {
    return res.status(400).json({ error: 'Text too long (max 4000 characters)' });
  }

  const model = process.env.RESP_MODEL || 'gpt-4o-mini';

  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  try {
    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        stream: true,
        messages: [
          { role: 'system', content: 'You are a concise and helpful assistant.' },
          { role: 'user', content: text },
        ],
        temperature: 0.2,
      }),
    });

    if (!upstream.ok || !upstream.body) {
      const errText = await upstream.text();
      res.write(`data: ${JSON.stringify({ error: errText })}\n\n`);
      res.end();
      return;
    }

    const reader = upstream.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';
      for (const line of lines) {
        // Forward all non-empty lines verbatim (preserves OpenAI SSE format)
        if (line.trim()) res.write(line + '\n');
      }
    }
    if (buffer.trim()) res.write(buffer + '\n');
    res.write('\ndata: [DONE]\n\n');
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    res.write(`data: ${JSON.stringify({ error: msg })}\n\n`);
  }

  res.end();
}
