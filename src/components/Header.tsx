import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS } from '../utils/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 'var(--header-height)',
        background: scrolled
          ? 'rgba(5, 10, 20, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 212, 255, 0.15)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>🌐</span>
          <span
            style={{
              fontWeight: 800,
              fontSize: '1.2rem',
              background: 'var(--gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            IO-OPENUI-AO
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            gap: '4px',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              style={({ isActive }) => ({
                padding: '8px 16px',
                borderRadius: '8px',
                color: isActive ? 'var(--io-accent)' : 'var(--io-text)',
                background: isActive ? 'rgba(0, 212, 255, 0.1)' : 'transparent',
                fontWeight: isActive ? 600 : 400,
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(v => !v)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px',
          }}
          className="hamburger-btn"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: 'var(--io-text)',
                transition: 'all 0.3s ease',
                transformOrigin: 'center',
                transform:
                  menuOpen && i === 0
                    ? 'rotate(45deg) translate(5px, 5px)'
                    : menuOpen && i === 1
                    ? 'scaleX(0)'
                    : menuOpen && i === 2
                    ? 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(5, 10, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(0, 212, 255, 0.15)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                padding: '12px 16px',
                borderRadius: '8px',
                color: isActive ? 'var(--io-accent)' : 'var(--io-text)',
                background: isActive ? 'rgba(0, 212, 255, 0.1)' : 'transparent',
                fontWeight: isActive ? 600 : 400,
                textDecoration: 'none',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
