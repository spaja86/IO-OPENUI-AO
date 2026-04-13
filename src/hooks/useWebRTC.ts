import { useState, useCallback } from 'react';

export interface WebRTCState {
  isConnected: boolean;
  isConnecting: boolean;
  isMuted: boolean;
  isCameraOff: boolean;
  isCallActive: boolean;
  isScreenSharing: boolean;
}

export function useWebRTC() {
  const [state, setState] = useState<WebRTCState>({
    isConnected: false,
    isConnecting: false,
    isMuted: false,
    isCameraOff: false,
    isCallActive: false,
    isScreenSharing: false,
  });

  const startCall = useCallback(() => {
    setState(prev => ({ ...prev, isConnecting: true }));
    setTimeout(() => {
      setState(prev => ({ ...prev, isConnecting: false, isCallActive: true, isConnected: true }));
    }, 1500);
  }, []);

  const endCall = useCallback(() => {
    setState({
      isConnected: false,
      isConnecting: false,
      isMuted: false,
      isCameraOff: false,
      isCallActive: false,
      isScreenSharing: false,
    });
  }, []);

  const toggleMute = useCallback(() => {
    setState(prev => ({ ...prev, isMuted: !prev.isMuted }));
  }, []);

  const toggleCamera = useCallback(() => {
    setState(prev => ({ ...prev, isCameraOff: !prev.isCameraOff }));
  }, []);

  const toggleScreenShare = useCallback(() => {
    setState(prev => ({ ...prev, isScreenSharing: !prev.isScreenSharing }));
  }, []);

  return {
    state,
    isConnecting: state.isConnecting,
    isConnected: state.isConnected,
    isMuted: state.isMuted,
    isCameraOff: state.isCameraOff,
    isScreenSharing: state.isScreenSharing,
    startCall,
    endCall,
    toggleMute,
    toggleCamera,
    toggleScreenShare,
  };
}
