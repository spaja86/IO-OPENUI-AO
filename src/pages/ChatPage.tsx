import ChatDemo from '../components/demos/ChatDemo';

export default function ChatPage() {
  return (
    <div style={{ padding: '60px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
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
            💬 Real-time Chat
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>
            Socket.IO powered chat demo — kanali, poruke, sistem notifikacije
          </p>
        </div>

        <ChatDemo />

        <div
          style={{
            marginTop: '32px',
            padding: '20px 24px',
            background: 'rgba(6,182,212,0.08)',
            border: '1px solid rgba(6,182,212,0.2)',
            borderRadius: '12px',
          }}
        >
          <h3 style={{ color: '#06b6d4', fontWeight: 600, marginBottom: '8px', fontSize: '0.95rem' }}>
            ℹ️ Demo mod
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6 }}>
            Ovo je demo prikaz Socket.IO chat sistema. U produkciji, poruke se šalju u
            realnom vremenu svim korisnicima na istom kanalu. Prebaci između kanala da
            vidiš izolovane razgovore. Pritisni Enter ili dugme za slanje poruke.
          </p>
        </div>
      </div>
    </div>
  );
}
