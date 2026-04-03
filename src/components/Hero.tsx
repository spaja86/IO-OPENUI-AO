import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: 'var(--header-height)',
      }}
    >
      {/* Animated gradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #050a14 0%, #0d1b2a 40%, #050a14 100%)',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float-glow 8s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float-glow 10s ease-in-out infinite reverse',
          zIndex: 0,
        }}
      />

      {/* Particles */}
      <div className="particles">
        {Array.from({ length: 12 }, (_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              animationDuration: `${8 + Math.random() * 12}s`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '80px 24px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            background: 'rgba(0, 212, 255, 0.08)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderRadius: '20px',
            color: 'var(--io-accent)',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '24px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              background: 'var(--io-green)',
              borderRadius: '50%',
              animation: 'blink 2s ease-in-out infinite',
            }}
          />
          🟢 Deployed na Vercel
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 900,
            marginBottom: '12px',
            lineHeight: 1.1,
          }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed, #00d4ff)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 4s ease infinite',
            }}
          >
            IO-OPENUI-AO
          </span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'var(--io-text)',
            marginBottom: '16px',
            fontWeight: 500,
          }}
        >
          Platforma za Profesionalnu Saradnju
        </p>

        <p
          style={{
            color: 'var(--io-muted)',
            fontSize: '1.05rem',
            maxWidth: '560px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}
        >
          Real-time video komunikacija, live chat, gaming i profesionalne alate —
          sve na jednom mestu. Powered by WebRTC + Socket.IO.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/realtime" className="btn-primary">
            🚀 Isprobaj Demo
          </Link>
          <Link to="/features" className="btn-secondary">
            📋 Funkcionalnosti
          </Link>
        </div>

        {/* Tech badges */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '60px',
          }}
        >
          {['WebRTC', 'Socket.IO', 'React 18', 'TypeScript', 'Vite'].map(tech => (
            <span
              key={tech}
              style={{
                padding: '4px 12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                color: 'var(--io-muted)',
                fontSize: '0.8rem',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float-glow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
      `}</style>
    </section>
  );
}
