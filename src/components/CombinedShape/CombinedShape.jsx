import React from 'react';
import './CombinedShape.css';

export default function CombinedShape({
  children,
  className = '',
  ariaLabel,
  ariaHidden = false,
}) {
  return (
    <div
      className={['combined-shape', className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    >
      {children}
    </div>
  );
}
