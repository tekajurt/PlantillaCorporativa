import React from 'react';

export default function Label({ htmlFor, children, className = '' }) {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-muted mb-1 ${className}`}>
      {children}
    </label>
  );
}
