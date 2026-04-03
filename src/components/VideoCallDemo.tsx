import React from 'react';
import { useWebRTC } from '../hooks/useWebRTC';

function VideoBox({
  label,
  isLocal,
  isCameraOff,
  isPulsing,
}: {
  label: string;
  isLocal?: boolean;
  isCameraOff?: boolean;
  isPulsing?: boolean;
}) {
  return (
    <div
      style={{
        flex: 1,
        minHeight: '200px',
        background: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '12px',
        border: '1px solid rgba(0, 212, 255, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isLocal
            ? 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05))'
            : 'linear-gradient(135deg, rgba(124,58,237,0.05), rgba(0,212,255,0.05))',
        }}
      />

      {isCameraOff ? (
        <div style={{ fontSize: '2rem', marginBottom: '8px', position: 'relative' }}>🚫</div>
      ) : (
        <div style={{ position: 'relative' }}>
          {isPulsing && (
            <>
              <div
                style={{
                  position: 'absolute',
                  inset: '-16px',
                  background: 'rgba(0, 212, 255, 0.15)',
                  borderRadius: '50%',
                  animation: 'pulse-ring 2s ease-out infinite',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '-8px',
                  background: 'rgba(0, 212, 255, 0.1)',
                  borderRadius: '50%',
                  animation: 'pulse-ring 2s ease-out infinite 0.5s',
                }}
              />
            </>
          )}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: isLocal ? 'var(--gradient)' : 'linear-gradient(135deg, #7c3aed, #00d4ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {isLocal ? '👤' : '🧑‍💼'}
          </div>
        </div>
      )}

      <div
        style={{
          marginTop: '12px',
          color: 'var(--io-muted)',
          fontSize: '0.85rem',
          position: 'relative',
        }}
      >
        {isCameraOff ? 'Kamera isključena' : label}
      </div>

      {/* Label badge */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          padding: '3px 8px',
          background: 'rgba(0,0,0,0.6)',
          borderRadius: '6px',
          fontSize: '0.7rem',
          color: '#fff',
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function VideoCallDemo() {
  const { state, startCall, endCall, toggleMute, toggleCamera } = useWebRTC();

  return (
    <div className="glass-card" style={{ padding: '24px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.2rem' }}>📹</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Video Call Demo</div>
            <div style={{ color: 'var(--io-muted)', fontSize: '0.75rem' }}>
              Simulirani WebRTC Demo
            </div>
          </div>
        </div>
        <div
          style={{
            padding: '4px 10px',
            background: state.isConnected
              ? 'rgba(16, 185, 129, 0.1)'
              : 'rgba(100, 116, 139, 0.15)',
            border: `1px solid ${state.isConnected ? 'rgba(16,185,129,0.3)' : 'rgba(100,116,139,0.2)'}`,
            borderRadius: '20px',
            fontSize: '0.75rem',
            color: state.isConnected ? 'var(--io-green)' : 'var(--io-muted)',
          }}
        >
          {state.isConnected ? '🟢 U pozivu' : '⚪ Nije aktivan'}
        </div>
      </div>

      {/* Video windows */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '20px',
          flexWrap: 'wrap',
        }}
      >
        <VideoBox
          label="Ti (lokalni)"
          isLocal
          isCameraOff={state.isCameraOff}
          isPulsing={state.isCallActive && !state.isCameraOff}
        />
        <VideoBox
          label="Marko (udaljeni)"
          isCameraOff={false}
          isPulsing={state.isCallActive}
        />
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {state.isCallActive ? (
          <>
            <button
              onClick={toggleMute}
              style={{
                padding: '10px 20px',
                borderRadius: '10px',
                background: state.isMuted ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.07)',
                border: `1px solid ${state.isMuted ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.15)'}`,
                color: state.isMuted ? '#ef4444' : 'var(--io-text)',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.2s',
              }}
            >
              {state.isMuted ? '🔇 Unmute' : '🎙️ Mute'}
            </button>

            <button
              onClick={toggleCamera}
              style={{
                padding: '10px 20px',
                borderRadius: '10px',
                background: state.isCameraOff ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.07)',
                border: `1px solid ${state.isCameraOff ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.15)'}`,
                color: state.isCameraOff ? '#ef4444' : 'var(--io-text)',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.2s',
              }}
            >
              {state.isCameraOff ? '📷 Uključi' : '📷 Camera Off'}
            </button>

            <button
              onClick={endCall}
              style={{
                padding: '10px 20px',
                borderRadius: '10px',
                background: 'rgba(239,68,68,0.15)',
                border: '1px solid rgba(239,68,68,0.4)',
                color: '#ef4444',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.2s',
              }}
            >
              📵 Završi poziv
            </button>
          </>
        ) : (
          <button
            onClick={startCall}
            className="btn-primary"
            style={{ padding: '12px 32px' }}
          >
            📞 Pokreni demo poziv
          </button>
        )}
      </div>

      {state.isCallActive && (
        <div
          style={{
            marginTop: '16px',
            textAlign: 'center',
            color: 'var(--io-muted)',
            fontSize: '0.8rem',
          }}
        >
          ⚠️ Ovo je simulirani demo — pravi WebRTC server je u{' '}
          <code style={{ color: 'var(--io-accent)' }}>put-a-realtime-webrtc/</code>
        </div>
      )}
    </div>
  );
}
