import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Realtime WebRTC ephemeral key endpoint
app.get('/api/webrtc/key', (req, res) => {
    const ephemeralKey = generateEphemeralKey();
    res.json({ key: ephemeralKey });
});

const generateEphemeralKey = () => {
    // Placeholder for key generation logic
    // In production, this should generate actual ephemeral keys using OpenAI API
    return 'your-generated-key';
};

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
