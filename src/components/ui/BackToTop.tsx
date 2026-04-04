import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '90px',
        left: '24px',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'rgba(124,58,237,0.3)',
        border: '1px solid rgba(124,58,237,0.5)',
        color: '#f1f5f9',
        cursor: 'pointer',
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 6000,
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.3s ease',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.6)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.3)'; }}
    >
      ↑
    </button>
  );
}
