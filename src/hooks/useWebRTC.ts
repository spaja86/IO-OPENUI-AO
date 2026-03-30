import { useState, useCallback } from 'react';

interface WebRTCState {
  isConnecting: boolean;
  isConnected: boolean;
  isMuted: boolean;
  isCameraOff: boolean;
  isScreenSharing: boolean;
}

export function useWebRTC() {
  const [state, setState] = useState<WebRTCState>({
    isConnecting: false,
    isConnected: false,
    isMuted: false,
    isCameraOff: false,
    isScreenSharing: false,
  });

  const startCall = useCallback(() => {
    setState(s => ({ ...s, isConnecting: true }));
    setTimeout(() => {
      setState(s => ({ ...s, isConnecting: false, isConnected: true }));
    }, 2000);
  }, []);

  const endCall = useCallback(() => {
    setState({
      isConnecting: false,
      isConnected: false,
      isMuted: false,
      isCameraOff: false,
      isScreenSharing: false,
    });
  }, []);

  const toggleMute = useCallback(() => {
    setState(s => ({ ...s, isMuted: !s.isMuted }));
  }, []);

  const toggleCamera = useCallback(() => {
    setState(s => ({ ...s, isCameraOff: !s.isCameraOff }));
  }, []);

  const toggleScreenShare = useCallback(() => {
    setState(s => ({ ...s, isScreenSharing: !s.isScreenSharing }));
  }, []);

  return { ...state, startCall, endCall, toggleMute, toggleCamera, toggleScreenShare };
}
