import React from 'react';
import type { Feature } from '../../types';

interface FeatureCardProps {
  feature: Feature;
  delay?: number;
}

export default function FeatureCard({ feature, delay = 0 }: FeatureCardProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        border: hovered ? `1px solid ${feature.color}66` : '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '28px',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? `0 12px 40px ${feature.color}22` : 'none',
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          background: `${feature.color}22`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          marginBottom: '16px',
          border: `1px solid ${feature.color}33`,
        }}
      >
        {feature.icon}
      </div>
      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: '#f1f5f9' }}>
        {feature.title}
      </h3>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
        {feature.description}
      </p>
    </div>
  );
}
