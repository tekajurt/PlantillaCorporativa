'use client';
import React, { createContext, useContext, useMemo } from 'react';
import esCommon from './locales/es/common.json';
import esNav from './locales/es/nav.json';
import esHero from './locales/es/hero.json';
import esNosotros from './locales/es/nosotros.json';
import esCuerpos from './locales/es/cuerpos.json';
import esCalendario from './locales/es/calendario.json';
import esGaleria from './locales/es/galeria.json';
import esBlog from './locales/es/blog.json';
import esCTA from './locales/es/cta.json';
import esContacto from './locales/es/contacto.json';
import esFooter from './locales/es/footer.json';

const I18nContext = createContext({ t: (k) => k, dict: {} });

function flatten(obj, prefix = '', res = {}) {
  for (const [key, val] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${key}` : key;
    if (val && typeof val === 'object' && !Array.isArray(val)) flatten(val, p, res);
    else res[p] = val;
  }
  return res;
}

export default function I18nProvider({ children }) {
  const dict = useMemo(
    () => ({
      common: esCommon,
      nav: esNav,
      hero: esHero,
      nosotros: esNosotros,
      cuerpos: esCuerpos,
      calendario: esCalendario,
      galeria: esGaleria,
      blog: esBlog,
      cta: esCTA,
      contacto: esContacto,
      footer: esFooter,
    }),
    []
  );

  const flat = useMemo(() => flatten(dict), [dict]);
  const t = (key, vars) => {
    const str = flat[key] ?? key;
    if (!vars) return str;
    return Object.entries(vars).reduce(
      (s, [k, v]) => s.replace(new RegExp(`{{${k}}}`, 'g'), v),
      str
    );
  };

  return <I18nContext.Provider value={{ t, dict }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
