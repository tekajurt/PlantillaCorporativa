import React from 'react';
import Image from 'next/image';
import { useI18n } from '@/app/i18n/I18nProvider.jsx';

export default function Logo({
  className = '',
  src = '/images/placeholders/logo.svg',
  altKey = 'nav.logo.alt',
}) {
  const { t } = useI18n?.() ?? { t: (k) => k };
  return (
    <div className={className} aria-hidden="false">
      <a href="#hero" className="inline-flex items-center gap-3 text-foreground font-semibold">
        <Image
          src={src}
          alt={t(altKey) || 'Logo'}
          width={40}
          height={40}
          className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10"
          priority
        />
        <span className="inline text-sm  md:hidden">Escuela de Carnaval Arcoíris</span>
      </a>
    </div>
  );
}
