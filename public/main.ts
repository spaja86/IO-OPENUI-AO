// Realtime WebRTC Frontend TypeScript Client

class WebRTCClient {
    private peerConnection: RTCPeerConnection;
    private dataChannel: RTCDataChannel;

    constructor() {
        this.peerConnection = new RTCPeerConnection();
        this.dataChannel = this.peerConnection.createDataChannel('chat');
        this.setupListeners();
    }

    private setupListeners() {
        this.dataChannel.onopen = () => {
            console.log('Data channel is open');
        };

        this.dataChannel.onmessage = (event) => {
            console.log('Message from other peer: ', event.data);
        };
    }

    public async createOffer() {
        const offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer);
        return offer;
    }

    public async handleOffer(offer: RTCSessionDescriptionInit) {
        await this.peerConnection.setRemoteDescription(offer);
        const answer = await this.peerConnection.createAnswer();
        await this.peerConnection.setLocalDescription(answer);
        return answer;
    }

    // Additional methods for handling ICE candidates, etc., can be added here
}

// Usage
const client = new WebRTCClient();

// Example of creating an offer
client.createOffer().then(offer => {
    console.log('Created offer: ', offer);
});