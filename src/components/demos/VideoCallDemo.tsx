import { useWebRTC } from '../../hooks/useWebRTC';

const participants = ['Nikola Spajic', 'Ana Petrovic', 'Marko Nikolic'];

export default function VideoCallDemo() {
  const { isConnecting, isConnected, isMuted, isCameraOff, isScreenSharing, startCall, endCall, toggleMute, toggleCamera, toggleScreenShare } = useWebRTC();

  return (
    <div
      style={{
        background: 'rgba(13,13,26,0.95)',
        border: '1px solid rgba(124,58,237,0.3)',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      {/* Video grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          padding: '20px',
          background: 'rgba(0,0,0,0.4)',
          minHeight: '280px',
        }}
      >
        {/* Local */}
        <div
          style={{
            background: 'rgba(124,58,237,0.1)',
            border: '2px solid rgba(124,58,237,0.4)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px',
            position: 'relative',
          }}
        >
          <span style={{ fontSize: '3rem', marginBottom: '8px' }}>
            {isCameraOff ? '🚫' : '📷'}
          </span>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
            {isCameraOff ? 'Kamera isključena' : 'Lokalni video'}
          </p>
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              background: 'rgba(0,0,0,0.7)',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              color: '#f1f5f9',
            }}
          >
            Ti {isMuted ? '🔇' : '🎤'}
          </div>
        </div>

        {/* Remote */}
        <div
          style={{
            background: 'rgba(6,182,212,0.1)',
            border: isConnected ? '2px solid rgba(6,182,212,0.4)' : '2px dashed rgba(6,182,212,0.3)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px',
            position: 'relative',
          }}
        >
          {isConnecting ? (
            <>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: '3px solid rgba(6,182,212,0.3)',
                  borderTop: '3px solid #06b6d4',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  marginBottom: '12px',
                }}
              />
              <p style={{ color: '#06b6d4', fontSize: '0.9rem' }}>Povezivanje...</p>
            </>
          ) : isConnected ? (
            <>
              <span style={{ fontSize: '3rem', marginBottom: '8px' }}>👤</span>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Udaljeni video</p>
            </>
          ) : (
            <>
              <span style={{ fontSize: '3rem', marginBottom: '8px' }}>⏳</span>
              <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Cekanje na poziv...</p>
            </>
          )}
          {isConnected && (
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                background: 'rgba(0,0,0,0.7)',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                color: '#f1f5f9',
              }}
            >
              Gost
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div
        style={{
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          flexWrap: 'wrap',
        }}
      >
        <ControlBtn onClick={toggleMute} active={isMuted} label={isMuted ? '🔇 Unmute' : '🎤 Mute'} />
        <ControlBtn onClick={toggleCamera} active={isCameraOff} label={isCameraOff ? '🚫 Camera' : '📷 Camera'} />
        <ControlBtn onClick={toggleScreenShare} active={isScreenSharing} label="📋 Screen" color="#7c3aed" />

        {!isConnected && !isConnecting ? (
          <ControlBtn onClick={startCall} label="📞 Pozovi" color="#10b981" />
        ) : (
          <ControlBtn onClick={endCall} label="📞 Završi" color="#ef4444" danger />
        )}
      </div>

      {/* Participants */}
      <div
        style={{
          padding: '16px 20px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>Učesnici:</span>
        {participants.map((p, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '20px',
              fontSize: '0.8rem',
              color: '#94a3b8',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: i === 0 ? '#10b981' : isConnected ? '#10b981' : '#64748b',
              }}
            />
            {p}
          </span>
        ))}
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

interface ControlBtnProps {
  onClick: () => void;
  label: string;
  active?: boolean;
  color?: string;
  danger?: boolean;
}

function ControlBtn({ onClick, label, active = false, color, danger = false }: ControlBtnProps) {
  const bg = danger ? 'rgba(239,68,68,0.2)' : active ? 'rgba(239,68,68,0.15)' : color ? `${color}22` : 'rgba(255,255,255,0.08)';
  const border = danger ? '1px solid rgba(239,68,68,0.4)' : active ? '1px solid rgba(239,68,68,0.3)' : color ? `1px solid ${color}44` : '1px solid rgba(255,255,255,0.1)';
  const textColor = danger ? '#ef4444' : active ? '#ef4444' : color || '#94a3b8';

  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        background: bg,
        border,
        borderRadius: '8px',
        color: textColor,
        cursor: 'pointer',
        fontSize: '0.85rem',
        fontWeight: 500,
        transition: 'all 0.2s',
      }}
    >
      {label}
    </button>
  );
}
