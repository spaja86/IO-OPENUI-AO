import React from 'react';
import ScrollAnimation from '../ScrollAnimation';

export const cardStyle: React.CSSProperties = {
  padding: '24px',
  borderRadius: '18px',
  background: 'rgba(18, 35, 64, 0.7)',
  border: '1px solid rgba(0, 212, 255, 0.16)',
  backdropFilter: 'blur(16px)',
};

export function badgeStyle(color: string): React.CSSProperties {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 12px',
    borderRadius: '999px',
    background: `${color}20`,
    border: `1px solid ${color}4d`,
    color,
    fontSize: '0.78rem',
    fontWeight: 700,
  };
}

export function listStyle(color: string): React.CSSProperties {
  return {
    padding: '10px 14px',
    borderRadius: '12px',
    background: 'rgba(15, 23, 42, 0.92)',
    border: '1px solid rgba(148,163,184,0.28)',
    color,
  };
}

const toneColor: Record<'core' | 'advanced' | 'future' | 'audit', string> = {
  core: '#06b6d4',
  advanced: '#8b5cf6',
  future: '#10b981',
  audit: '#f97316',
};

export function AnchorNavigation({
  items,
}: {
  items: Array<{ id: string; label: string; tone: 'core' | 'advanced' | 'future' | 'audit' }>;
}) {
  return (
    <div
      style={{
        ...cardStyle,
        position: 'sticky',
        top: 'calc(var(--header-height) + 16px)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        zIndex: 5,
      }}
    >
      {items.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          style={{ ...badgeStyle(toneColor[item.tone]), textDecoration: 'none' }}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export function SectionShell({
  id,
  tone,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  tone: 'core' | 'advanced' | 'future' | 'audit';
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ padding: '0 0 64px', scrollMarginTop: 'calc(var(--header-height) + 24px)' }}>
      <div className="container">
        <ScrollAnimation>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
              <span style={badgeStyle(toneColor[tone])}>{eyebrow}</span>
            </div>
            <h2 style={{ marginBottom: '10px' }}>{title}</h2>
            <p style={{ color: 'var(--io-muted)', maxWidth: '900px', lineHeight: 1.7 }}>{subtitle}</p>
          </div>
        </ScrollAnimation>
        {children}
      </div>
    </section>
  );
}

export function InfoCard({
  title,
  badge,
  badgeColor = '#06b6d4',
  children,
}: {
  title: string;
  badge?: string;
  badgeColor?: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollAnimation>
      <article style={cardStyle}>
        {badge ? <div style={{ ...badgeStyle(badgeColor), marginBottom: '12px' }}>{badge}</div> : null}
        <h3 style={{ marginBottom: '12px' }}>{title}</h3>
        {children}
      </article>
    </ScrollAnimation>
  );
}

export function StatTile({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div style={{ ...listStyle('#e2e8f0'), border: `1px solid ${color}55` }}>
      <strong style={{ display: 'block', marginBottom: '6px' }}>{label}</strong>
      <span style={{ color, fontSize: '1.15rem', fontWeight: 800 }}>{value}</span>
    </div>
  );
}

export function MeterRow({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '6px' }}>
        <span style={{ color: 'var(--io-text)', fontSize: '0.9rem' }}>{label}</span>
        <strong style={{ color }}>{value}</strong>
      </div>
      <div style={{ height: '8px', borderRadius: '999px', background: 'rgba(148,163,184,0.18)' }}>
        <div style={{ width: `${value}%`, height: '100%', borderRadius: '999px', background: color }} />
      </div>
    </div>
  );
}
