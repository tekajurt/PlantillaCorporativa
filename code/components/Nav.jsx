'use client';
import React, { useEffect, useState, useRef } from 'react';
import Logo from './Logo';

const defaultSections = [
  { href: '#hero', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#cuerpos', label: 'Cuerpos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#blog', label: 'Noticias' },
  { href: '#calendario', label: 'Calendario' },
  { href: '#contacto', label: 'Contacto' },
  { href: '#cta', label: 'Participa' },
];

export default function Nav({ sections = defaultSections, withLogo = false }) {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      const prefers =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      return !!prefers;
    } catch {
      return false;
    }
  });
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  // Keep document class and localStorage in sync when `isDark` changes.
  useEffect(() => {
    try {
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // ignore (e.g., SSR or privacy settings)
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const menu = menuRef.current;
    const focusable = menu
      ? Array.from(menu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')).filter(
          (el) => !el.hasAttribute('disabled')
        )
      : [];

    // move focus to first focusable element
    if (focusable.length) {
      focusable[0].focus();
    }

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        // return focus to toggle
        setTimeout(() => toggleRef.current?.focus(), 0);
      }

      if (e.key === 'Tab') {
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <div className="flex items-center gap-6">
      {withLogo && (
        <div className="flex items-center mr-4">
          <Logo />
        </div>
      )}

      <nav aria-label="Main navigation" className="hidden md:flex gap-6 items-center">
        {sections.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="text-foreground hover:underline cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleScroll(s.href);
            }}
          >
            {s.label}
          </a>
        ))}
      </nav>

      {/* Desktop theme toggle */}
      <div className="hidden md:flex items-center">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md text-foreground"
          aria-pressed={isDark}
          aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          title={
            isDark
              ? 'Tema: oscuro (clic para cambiar a claro)'
              : 'Tema: claro (clic para cambiar a oscuro)'
          }
        >
          {isDark ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 7a5 5 0 100 10 5 5 0 000-10z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          ref={toggleRef}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="p-2 rounded-md text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <nav
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="md:hidden absolute left-0 top-full w-full bg-card/95 shadow-md flex flex-col gap-4 py-4 z-60"
        >
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="text-foreground px-4 py-2 rounded hover:bg-muted/10 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(s.href);
              }}
            >
              {s.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="text-foreground px-4 py-2 rounded text-left hover:bg-muted/10"
            aria-pressed={isDark}
            aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          >
            {isDark ? 'Tema: oscuro' : 'Tema: claro'}
          </button>
        </nav>
      )}
    </div>
  );
}
