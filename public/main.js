// Realtime WebRTC Frontend Client

class WebRTCClient {
    constructor() {
        this.peerConnection = new RTCPeerConnection();
        this.dataChannel = this.peerConnection.createDataChannel('chat');
        this.setupListeners();
    }

    setupListeners() {
        this.dataChannel.onopen = () => {
            console.log('Data channel is open');
            this.log('Data channel is open');
        };

        this.dataChannel.onmessage = (event) => {
            console.log('Message from other peer: ', event.data);
            this.log('Message from other peer: ' + event.data);
        };
    }

    async createOffer() {
        const offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer);
        return offer;
    }

    async handleOffer(offer) {
        await this.peerConnection.setRemoteDescription(offer);
        const answer = await this.peerConnection.createAnswer();
        await this.peerConnection.setLocalDescription(answer);
        return answer;
    }

    log(message) {
        const logElement = document.getElementById('log');
        if (logElement) {
            const timestamp = new Date().toLocaleTimeString();
            logElement.innerHTML += `[${timestamp}] ${message}\n`;
            logElement.scrollTop = logElement.scrollHeight;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const client = new WebRTCClient();
    const statusElement = document.getElementById('status');
    const connectButton = document.getElementById('connect');
    const disconnectButton = document.getElementById('disconnect');
    const logElement = document.getElementById('log');

    function log(message) {
        const timestamp = new Date().toLocaleTimeString();
        logElement.innerHTML += `[${timestamp}] ${message}\n`;
        logElement.scrollTop = logElement.scrollHeight;
    }

    connectButton.addEventListener('click', async () => {
        try {
            log('Connecting to WebRTC service...');
            
            // Fetch ephemeral key from API
            const response = await fetch('/api/realtime/key');
            const data = await response.json();
            
            log('Received key: ' + data.key);
            statusElement.textContent = 'Status: Connected';
            statusElement.className = 'status connected';
            
            connectButton.disabled = true;
            disconnectButton.disabled = false;
            
            // Create offer
            const offer = await client.createOffer();
            log('Created WebRTC offer');
            
        } catch (error) {
            log('Error: ' + error.message);
            console.error('Connection error:', error);
        }
    });

    disconnectButton.addEventListener('click', () => {
        log('Disconnected');
        statusElement.textContent = 'Status: Disconnected';
        statusElement.className = 'status disconnected';
        
        connectButton.disabled = false;
        disconnectButton.disabled = true;
    });

    log('WebRTC Client initialized. Click Connect to start.');
});
