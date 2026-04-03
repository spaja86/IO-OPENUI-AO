import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
}

export default function Badge({ children, color = '#7c3aed' }: BadgeProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 10px',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: 600,
        background: `${color}22`,
        color,
        border: `1px solid ${color}44`,
      }}
    >
      {children}
    </span>
  );
}
