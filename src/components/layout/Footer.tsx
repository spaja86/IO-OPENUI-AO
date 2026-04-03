import { Link } from 'react-router-dom';
import { OWNER_INFO, PLATFORMS, NAV_LINKS } from '../../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'rgba(10,10,20,0.95)',
        borderTop: '1px solid rgba(124,58,237,0.2)',
        padding: '60px 0 24px',
        marginTop: 'auto',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontWeight: 800,
                fontSize: '1.3rem',
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '12px',
              }}
            >
              IO-OPENUI-AO
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Platforma za profesionalnu saradnju uz WebRTC video pozive, Socket.IO chat i igrice.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {[
                { href: OWNER_INFO.social.facebook, label: 'FB', color: '#1877f2' },
                { href: OWNER_INFO.social.instagram, label: 'IG', color: '#e4405f' },
                { href: OWNER_INFO.social.tiktok, label: 'TT', color: '#000' },
                { href: OWNER_INFO.social.youtube, label: 'YT', color: '#ff0000' },
                { href: OWNER_INFO.social.github, label: 'GH', color: '#333' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: `${s.color}22`,
                    border: `1px solid ${s.color}44`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: s.color === '#000' ? '#fff' : s.color,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '16px' }}>Navigacija</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ color: '#64748b', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '16px' }}>Ekosistem</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {PLATFORMS.map(p => (
                <a
                  key={p.id}
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#64748b', fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  {p.icon} {p.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#f1f5f9', fontWeight: 600, marginBottom: '16px' }}>Kontakt</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 600 }}>Nikola Spajic</p>
              {OWNER_INFO.emails.map(e => (
                <a key={e} href={`mailto:${e}`} style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none' }}>
                  ✉ {e}
                </a>
              ))}
              <a
                href={OWNER_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none' }}
              >
                Facebook: /Spaja86
              </a>
              <a
                href={OWNER_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none' }}
              >
                Instagram: @spaja.1986
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
            © {currentYear} Nikola Spajic — IO-OPENUI-AO. Sva prava zadrzana.
          </p>
          <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
            Izgradeno sa ❤️ uz React, TypeScript i Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
