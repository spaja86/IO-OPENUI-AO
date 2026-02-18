# Vercel Deployment Guide

This repository is configured for deployment on Vercel with the following structure:

## Project Structure

The repository contains two Node.js backend services:
- **put-a-realtime-webrtc/server**: WebRTC realtime server with OpenAI API integration
- **put-b-chat-socketio/server**: Socket.IO chat server

## Deployment Configuration

### Files Added
1. **vercel.json**: Main Vercel configuration at the root
2. **.vercelignore**: Excludes unnecessary files from deployment
3. **put-a-realtime-webrtc/server/vercel.json**: Individual service configuration
4. **put-b-chat-socketio/server/vercel.json**: Individual service configuration

### Build Process

Both servers are built during deployment:
1. TypeScript source is compiled to JavaScript
2. Output is placed in `dist/` directories
3. Vercel deploys the compiled JavaScript

### Environment Variables

Configure these environment variables in your Vercel project settings:

**For Realtime WebRTC Server:**
- `OPENAI_API_KEY`: Your OpenAI API key
- `REALTIME_MODEL`: OpenAI realtime model to use
- `CORS_ORIGIN`: Allowed CORS origin (default: http://localhost:3000)

**For Chat Socket.IO Server:**
- `OPENAI_API_KEY`: Your OpenAI API key
- `RESP_MODEL`: Response model (default: gpt-3.5-turbo)
- `CORS_ORIGIN`: Allowed CORS origin (default: *)

### Deployment Steps

1. **Connect to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import this GitHub repository

2. **Configure Environment Variables:**
   - In project settings, add all required environment variables
   - Make sure to add `OPENAI_API_KEY` at minimum

3. **Deploy:**
   - Vercel will automatically build and deploy on push to main branch
   - Manual deployments can be triggered from the Vercel dashboard

### API Endpoints

After deployment, your services will be available at:
- **Realtime API**: `https://your-domain.vercel.app/api/realtime/*`
- **Chat API**: `https://your-domain.vercel.app/api/chat/*`
- **Web Interface**: `https://your-domain.vercel.app/`

### Local Development

To run servers locally:

```bash
# Realtime WebRTC Server
cd put-a-realtime-webrtc/server
npm install
npm run dev

# Chat Socket.IO Server
cd put-b-chat-socketio/server
npm install
npm run dev
```

### Build Locally

To build the projects locally:

```bash
# Realtime WebRTC Server
cd put-a-realtime-webrtc/server
npm install
npm run build
npm start

# Chat Socket.IO Server
cd put-b-chat-socketio/server
npm install
npm run build
npm start
```

## Troubleshooting

### Build Failures
- Ensure all dependencies are listed in package.json
- Check TypeScript configuration in tsconfig.json
- Verify environment variables are set

### Runtime Issues
- Check Vercel function logs in the dashboard
- Ensure OPENAI_API_KEY is properly configured
- Verify CORS settings match your frontend domain
