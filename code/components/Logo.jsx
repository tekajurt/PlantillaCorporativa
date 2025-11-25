import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <div className={className} aria-hidden="false">
      <a href="#hero" className="inline-flex items-center gap-3 text-foreground font-semibold">
        <svg
          className="w-10 h-10 text-accent"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="12" cy="12" r="10" fill="currentColor" />
        </svg>
        <span className="text-lg">Escuela de Carnaval Arcoíris</span>
      </a>
    </div>
  );
}
