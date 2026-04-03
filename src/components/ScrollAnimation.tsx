import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollAnimation({
  children,
  threshold = 0.1,
  className = '',
  style = {},
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation(threshold);

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
