import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const styles: Record<string, React.CSSProperties> = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '8px',
    fontWeight: 600,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'none',
  },
  primary: {
    background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
    color: '#fff',
  },
  secondary: {
    background: 'rgba(124, 58, 237, 0.2)',
    color: '#7c3aed',
    border: '1px solid #7c3aed',
  },
  outline: {
    background: 'transparent',
    color: '#f1f5f9',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  ghost: {
    background: 'transparent',
    color: '#94a3b8',
  },
  sm: { padding: '6px 14px', fontSize: '0.875rem' },
  md: { padding: '10px 20px', fontSize: '1rem' },
  lg: { padding: '14px 28px', fontSize: '1.1rem' },
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  style,
  ...props
}: ButtonProps) {
  const [hovered, setHovered] = React.useState(false);

  const hoverStyle: React.CSSProperties = hovered
    ? variant === 'primary'
      ? { transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(124, 58, 237, 0.4)' }
      : { transform: 'translateY(-2px)', opacity: 0.9 }
    : {};

  return (
    <button
      style={{
        ...styles.base,
        ...styles[variant],
        ...styles[size],
        ...hoverStyle,
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}
