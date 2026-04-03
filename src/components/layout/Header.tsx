import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';

const ECOSYSTEM = [
  { name: '🎮 IO-OPENUI-AO', url: 'https://io-openui-ao.vercel.app', active: true },
  { name: '💱 Ai-Iq-Menjačnica', url: 'https://spaja86.github.io/Ai-Iq-Menja-nica' },
  { name: '🏦 Ai-Iq-World-Bank', url: 'https://spaja86.github.io/Ai-Iq-World-Bank' },
  { name: '🏢 Kompanija SPAJA', url: 'https://spaja86.github.io/Kompanija-SPAJA' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ecoOpen, setEcoOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(13,13,26,0.95)' : 'rgba(13,13,26,0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(124,58,237,0.2)',
        transition: 'background 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontWeight: 800,
            fontSize: '1.3rem',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          IO-OPENUI-AO
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2px', alignItems: 'center', flex: 1, justifyContent: 'center' }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: '6px 10px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: location.pathname === link.path ? '#7c3aed' : '#94a3b8',
                background: location.pathname === link.path ? 'rgba(124,58,237,0.15)' : 'transparent',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Ecosystem dropdown */}
          <div style={{ position: 'relative' }} onMouseLeave={() => setEcoOpen(false)}>
            <button
              onMouseEnter={() => setEcoOpen(true)}
              onClick={() => setEcoOpen(o => !o)}
              style={{
                padding: '6px 10px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#94a3b8',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              🌐 Ekosistem ▾
            </button>
            {ecoOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '8px',
                  background: 'rgba(13,13,26,0.97)',
                  border: '1px solid rgba(124,58,237,0.3)',
                  borderRadius: '12px',
                  padding: '8px',
                  minWidth: '220px',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                  zIndex: 2000,
                }}
              >
                {ECOSYSTEM.map(item => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      color: item.active ? '#7c3aed' : '#94a3b8',
                      fontSize: '0.875rem',
                      fontWeight: item.active ? 700 : 500,
                      textDecoration: 'none',
                      background: item.active ? 'rgba(124,58,237,0.1)' : 'transparent',
                      transition: 'background 0.15s',
                    }}
                  >
                    {item.name}
                    {item.active && (
                      <span style={{ marginLeft: 'auto', fontSize: '0.65rem', background: 'rgba(16,185,129,0.2)', color: '#10b981', padding: '2px 7px', borderRadius: '8px' }}>
                        aktivan
                      </span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            title={lang === 'sr' ? 'Switch to English' : 'Prebaci na Srpski'}
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '8px',
              color: '#f1f5f9',
              cursor: 'pointer',
              padding: '5px 9px',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
            className="header-icon-btn"
          >
            {lang === 'sr' ? '🇷🇸' : '🇬🇧'}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Svetla tema' : 'Tamna tema'}
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '8px',
              color: '#f1f5f9',
              cursor: 'pointer',
              padding: '5px 9px',
              fontSize: '1rem',
            }}
            className="header-icon-btn"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'none',
              border: 'none',
              color: '#f1f5f9',
              cursor: 'pointer',
              padding: '8px',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
            }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#7c3aed' : '#94a3b8', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#7c3aed' : '#94a3b8', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: menuOpen ? '#7c3aed' : '#94a3b8', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(13,13,26,0.98)',
            borderTop: '1px solid rgba(124,58,237,0.2)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 500,
                color: location.pathname === link.path ? '#7c3aed' : '#f1f5f9',
                background: location.pathname === link.path ? 'rgba(124,58,237,0.15)' : 'transparent',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '8px', paddingTop: '8px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {ECOSYSTEM.map(item => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '8px 12px', borderRadius: '8px', fontSize: '0.85rem', color: item.active ? '#7c3aed' : '#94a3b8', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', textDecoration: 'none' }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
