import VideoCallDemo from '../components/demos/VideoCallDemo';

export default function VideoPage() {
  return (
    <div style={{ padding: '60px 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.8rem)',
              fontWeight: 800,
              marginBottom: '12px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            📹 WebRTC Video Pozivi
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>
            Peer-to-peer video pozivi bez servera — privatno, sigurno, brzo
          </p>
        </div>

        <VideoCallDemo />

        {/* Info cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginTop: '32px',
          }}
        >
          {[
            { icon: '🔒', title: 'End-to-End', desc: 'Sav video i audio saobraćaj je enkriptovan DTLS/SRTP protokolom' },
            { icon: '⚡', title: 'Peer-to-peer', desc: 'Direktna konekcija između korisnika — minimum latencije' },
            { icon: '🌐', title: 'Browser-first', desc: 'Radi u svim modernim pretraživačima bez instalacije' },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                padding: '20px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{c.icon}</div>
              <h3 style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '6px', fontSize: '0.95rem' }}>{c.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
