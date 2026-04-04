import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cookieConsent');
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (type: 'all' | 'essential') => {
    localStorage.setItem('cookieConsent', type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(560px, calc(100vw - 32px))',
          background: 'rgba(13,13,26,0.97)',
          border: '1px solid rgba(124,58,237,0.4)',
          borderRadius: '16px',
          padding: '20px 24px',
          zIndex: 8000,
          backdropFilter: 'blur(16px)',
          boxShadow: '0 8px 40px rgba(124,58,237,0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          animation: 'slideUp 0.4s ease',
        }}
      >
        <div style={{ flex: 1, minWidth: '200px' }}>
          <p style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '4px', fontSize: '0.95rem' }}>
            🍪 Koristimo kolačiće
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5 }}>
            Koristimo kolačiće za bolje korisničko iskustvo i analitiku.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
          <button
            onClick={() => accept('essential')}
            style={{
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px',
              color: '#94a3b8',
              fontSize: '0.85rem',
              cursor: 'pointer',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            Samo neophodni
          </button>
          <button
            onClick={() => accept('all')}
            style={{
              padding: '8px 20px',
              background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '0.85rem',
              cursor: 'pointer',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            Prihvatam sve
          </button>
        </div>
      </div>
    </>
  );
}
