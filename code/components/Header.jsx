"use client";
import React from 'react'

import Link from 'next/link'
import Logo from './Logo'

const sections = [
  { href: '#hero', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#cuerpos', label: 'Cuerpos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#blog', label: 'Noticias' },
  { href: '#calendario', label: 'Calendario' },
  { href: '#contacto', label: 'Contacto' },
  { href: '#cta', label: 'Participa' },
]

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <header className="w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav aria-label="Main navigation" className="hidden md:flex gap-6 items-center">
            {sections.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="text-gray-700 dark:text-gray-200 hover:underline cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  handleScroll(s.href);
                }}
              >
                {s.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
        </div>
        {/* Menú móvil */}
        {open && (
          <nav aria-label="Mobile navigation" className="md:hidden flex flex-col gap-2 py-4">
            {sections.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="text-gray-700 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  handleScroll(s.href);
                }}
              >
                {s.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
