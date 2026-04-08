// Vercel serverless function for WebRTC realtime API
import dotenv from 'dotenv';
dotenv.config();

const generateEphemeralKey = () => {
    // Placeholder for key generation logic
    // In production, this should generate actual ephemeral keys using OpenAI API
    const key = process.env.OPENAI_API_KEY || 'your-generated-key';
    return key;
};

export default function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.url.includes('/api/realtime/key') || req.method === 'GET') {
        const ephemeralKey = generateEphemeralKey();
        res.status(200).json({ key: ephemeralKey });
    } else {
        res.status(404).json({ error: 'Not found' });
    }
}
