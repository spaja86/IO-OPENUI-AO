import { useState, useCallback } from 'react';

export interface WebRTCState {
  isConnected: boolean;
  isMuted: boolean;
  isCameraOff: boolean;
  isCallActive: boolean;
}

export function useWebRTC() {
  const [state, setState] = useState<WebRTCState>({
    isConnected: false,
    isMuted: false,
    isCameraOff: false,
    isCallActive: false,
  });

  const startCall = useCallback(() => {
    setState(prev => ({ ...prev, isCallActive: true, isConnected: true }));
  }, []);

  const endCall = useCallback(() => {
    setState({
      isConnected: false,
      isMuted: false,
      isCameraOff: false,
      isCallActive: false,
    });
  }, []);

  const toggleMute = useCallback(() => {
    setState(prev => ({ ...prev, isMuted: !prev.isMuted }));
  }, []);

  const toggleCamera = useCallback(() => {
    setState(prev => ({ ...prev, isCameraOff: !prev.isCameraOff }));
  }, []);

  return { state, startCall, endCall, toggleMute, toggleCamera };
}
