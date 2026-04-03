import React, { useEffect, useRef } from 'react';

export function useRipple(color = 'rgba(255,255,255,0.3)') {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleClick = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.style.cssText = `
        position:absolute;
        border-radius:50%;
        width:${size}px;height:${size}px;
        left:${x - size / 2}px;top:${y - size / 2}px;
        background:${color};
        transform:scale(0);
        animation:ripple-anim 0.6s linear;
        pointer-events:none;
      `;
      el.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    };

    el.addEventListener('click', handleClick);
    return () => el.removeEventListener('click', handleClick);
  }, [color]);

  return ref;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  rippleColor?: string;
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
    position: 'relative',
    overflow: 'hidden',
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
  rippleColor,
  children,
  style,
  ...props
}: ButtonProps) {
  const [hovered, setHovered] = React.useState(false);
  const ref = useRipple(rippleColor || 'rgba(255,255,255,0.3)');

  const hoverStyle: React.CSSProperties = hovered
    ? variant === 'primary'
      ? { transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(124, 58, 237, 0.4)' }
      : { transform: 'translateY(-2px)', opacity: 0.9 }
    : {};

  return (
    <>
      <button
        ref={ref}
        style={{ ...styles.base, ...styles[variant], ...styles[size], ...hoverStyle, ...style }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
