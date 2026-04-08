// Vercel serverless function for Socket.IO chat API
import dotenv from 'dotenv';
dotenv.config();

export default function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Basic response for chat server
    if (req.method === 'GET') {
        res.status(200).json({ 
            message: 'Chat server is running!',
            status: 'online'
        });
    } else if (req.method === 'POST') {
        // Handle chat message
        const { message } = req.body;
        res.status(200).json({ 
            received: message,
            timestamp: new Date().toISOString()
        });
    } else {
        res.status(404).json({ error: 'Not found' });
    }
}
