import React from 'react';
import type { Platform } from '../../types';
import Badge from './Badge';

interface PlatformCardProps {
  platform: Platform;
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const [hovered, setHovered] = React.useState(false);

  const statusColors: Record<string, string> = {
    live: '#10b981',
    active: '#06b6d4',
    'coming-soon': '#f59e0b',
  };

  const statusLabels: Record<string, string> = {
    live: 'Live',
    active: 'Aktivno',
    'coming-soon': 'Uskoro',
  };

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        border: hovered ? '1px solid rgba(124,58,237,0.6)' : '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '28px',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 12px 40px rgba(124,58,237,0.25)' : 'none',
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <span style={{ fontSize: '2.5rem' }}>{platform.icon}</span>
        <Badge color={statusColors[platform.status]}>{statusLabels[platform.status]}</Badge>
      </div>
      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: '#f1f5f9' }}>
        {platform.name}
      </h3>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
        {platform.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {platform.tech.map(t => (
          <Badge key={t} color="#7c3aed">{t}</Badge>
        ))}
      </div>
      <div style={{ marginTop: '16px', color: '#7c3aed', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
        Poseti platformu →
      </div>
    </a>
  );
}
