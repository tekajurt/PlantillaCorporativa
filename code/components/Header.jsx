'use client';
import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

const sections = [
  { href: '#hero', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#cuerpos', label: 'Cuerpos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#blog', label: 'Noticias' },
  { href: '#calendario', label: 'Calendario' },
  { href: '#contacto', label: 'Contacto' },
  { href: '#cta', label: 'Participa' },
];

export default function Header() {
  // Header is a thin wrapper — navigation, theme and menu behavior live in `Nav`.

  return (
    <header className="w-full bg-background/70 dark:bg-card/70 backdrop-blur sticky top-0 z-40 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Nav sections={sections} />
        </div>
      </div>
    </header>
  );
}
