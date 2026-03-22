import React from 'react';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
  delay?: number;
}

export default function FeatureCard({ feature, delay = 0 }: FeatureCardProps) {
  const categoryColors: Record<Feature['category'], string> = {
    realtime: '#00d4ff',
    ai: '#10b981',
    security: '#f59e0b',
    collaboration: '#7c3aed',
  };

  const color = categoryColors[feature.category];

  return (
    <div
      className="glass-card"
      style={{
        padding: '32px',
        animationDelay: `${delay}ms`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          background: `rgba(${color === '#00d4ff' ? '0,212,255' : color === '#7c3aed' ? '124,58,237' : color === '#10b981' ? '16,185,129' : '245,158,11'}, 0.12)`,
          border: `1px solid ${color}30`,
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.7rem',
          marginBottom: '20px',
        }}
      >
        {feature.icon}
      </div>

      <h3
        style={{
          fontSize: '1.1rem',
          fontWeight: 700,
          marginBottom: '10px',
          color: 'var(--io-text)',
        }}
      >
        {feature.title}
      </h3>

      <p style={{ color: 'var(--io-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
        {feature.description}
      </p>

      <div
        style={{
          marginTop: '20px',
          display: 'inline-block',
          padding: '3px 10px',
          background: `${color}15`,
          border: `1px solid ${color}30`,
          borderRadius: '20px',
          color: color,
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {feature.category}
      </div>
    </div>
  );
}
