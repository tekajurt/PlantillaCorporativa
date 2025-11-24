# TODO — Plantilla Corporativa (Ideas y plan de desarrollo)

Este archivo recoge ideas, prioridades y tareas concretas para llevar la plantilla de demo a un MVP de página corporativa listo para producción.

## Objetivo

- Entregar una plantilla corporativa accesible, responsive y fácil de personalizar, con CI, pruebas básicas y buenas prácticas de rendimiento y SEO.

## Prioridad Alta (MVP)

1) Estructura básica

  - Página de inicio (`/`): Hero (imagen principal + carrusel), Secciones informativas (Nosotros, Cuerpos, Calendario, Galería, Noticias), Contacto, CTA y Footer 
  
  — implementado y funcional; usa `getBlur('/file.svg')` para placeholders.

  Recomendaciones: 
  
    ejecutar el generador de placeholders (`cd code && npm run generate-blur`),
    añadir `priority` a la imagen principal del Hero para mejorar LCP y 
    actualizar el `<title>`/`<meta description>` en `code/app/layout.js`.

  - Secciones reutilizables: `Section`, `Header`, `Footer`, `NavLink` 
  
  — implementadas parcialmente; revisar API de props y documentar ejemplos. Recomendación: añadir ejemplos de uso en `README.md` y test visual para mobile/desktop.

  - Criterio de aceptación: navegación y layout responsivo funcionando en móvil y desktop — criterio OK para MVP cuando se validen responsividad y links internos.

2) Imágenes y placeholders

  - Imágenes y placeholders: Generar `blurDataURL` por imagen y usar `next/image` con `placeholder="blur"` donde sea aplicable — estado: helper `getBlur()` y scripts de generación/validación están añadidos en `code/scripts` y `code/lib/blur-placeholders.json` parcialmente; ejecutar generador para completar el mapping y commitear. Recomendación/Comando: `cd code && npm run generate-blur` y luego `npm run validate-blur` en CI.

3) Galería + Modal accesible

  - Galería + Modal accesible: Implementar galería con lightbox/modal accesible (trap focus, Escape cierra, aria-labels) 
  — estado: `GalleryModal`, `Card` y passing de `blurDataURL` existen; verificar focus-trap y roles ARIA. 
  Recomendación: auditar con `axe` o `eslint-plugin-jsx-a11y` y añadir tests de interacción.

4) Formularios y API mínima

  - Formularios y API mínima: Formulario cliente con validación básica ya implementado; endpoint `POST /api/contact` pendiente — crear `app/api/contact/route.js` que valide y registre mensajes. Recomendación: usar `zod` para validación y añadir test de integración para el endpoint.

5) Build y CI
  - Build y CI: Workflows CI preparados (lint/build/test) y workflows de generación/validación de placeholders añadidos — estado: configuraciones en `.github/workflows` apuntan a `code/` y Node 20.x; verificar que `code/package-lock.json` se use como `cache-dependency-path`. Recomendación: asegurarse de que el job de `generate-blur` se ejecute antes del merge y de cachear `code/node_modules` correctamente.

## Prioridad Media

1) Accesibilidad

  - Accesibilidad: revisar y aplicar mejoras de accesibilidad (menu keyboard, aria-controls/expanded y modal con focus trap) — estado: partes interactivas marcadas como `use client` y estructura semántica presente; pendiente auditoría a11y. Recomendación: instalar y ejecutar `eslint-plugin-jsx-a11y`, correr `axe-core` en CI o localmente.

2) Componentes UI

  - Componentes UI: `Button`, `Input`, `Textarea`, `Label` y `Card` existen como base — estado: implementaciones básicas listas; recomendación: añadir variantes, documentar props y agregar tests visuales y de accesibilidad.

3) Blog/Noticias

  - Blog/Noticias: Listado de posts estático en `code/app/sections/blog.js` implementado como demo — recomendación: soportar MDX/JSON para contenido real y añadir SSG/SSRed routes si se requiere.

4) Normalización estilos

  - Normalización estilos: Sistema de variables/tema (colores) pendiente — recomendación: centralizar tokens en `styles/vars.css` o `tailwind.config` y documentar en `README`.

5) Tests
  - Tests: Tests unitarios básicos para `Header`, `Section` y `Contact` con Jest + Testing Library — estado: suite de ejemplo y smoke tests pasan; recomendación: añadir tests para formularios y modal interactivo.

## Prioridad Baja / Mejora

1) SEO & Social

  - SEO & Social: `SEO` component pendiente — recomendación: crear `components/SEO.jsx` y generar `sitemap.xml` + `robots.txt` en `public/`.

2) Performance

  - Performance: optimizar imágenes y revisar bundling — recomendaciones: ejecutar `next build && ANALYZE=true next build` (o usar `@next/bundle-analyzer`) y comprimir imágenes; usar `next/image` con `remotePatterns` si hay assets externos.

3) Seguridad

  - Seguridad: ejecutar `npm audit` y planificar mitigaciones — recomendación: añadir headers de seguridad a nivel de hosting y revisar dependencias críticas.

4) I18n

  - I18n: Soporte básico pendiente — recomendación: preparar estructura de locales (`/locales`) y evaluar `next-intl` o `next-i18next` según necesidades.

5) Theming
  - Theming: Soporte dark/light y variables CSS pendiente — recomendación: implementar CSS variables y alternar con `class` (Tailwind `dark`), documentar tokens.


## CI / Developer Experience

1) Pre-commit / prepush hooks

  - Pre-commit / prepush hooks: `lint-staged` para `prettier` y `eslint --fix` en archivos modificados — estado: pendiente; recomendación: añadir `husky` + `lint-staged` y configurar scripts en `code/package.json`.

2) Scripts útiles

  - Scripts útiles: `npm run generate-blur` (genera placeholders), `npm run validate-blur` (valida mapeo en CI) y `npm run ci` (`lint && build && test`) — estado: scripts añadidos en `code/package.json`; recomendación: documentar su uso en `CONTRIBUTING.md`.

3) Documentación
  - Documentación: `CONTRIBUTING.md` y `README.md` deben incluir pasos para generar/validar placeholders, checklist de PR y setup local — estado: archivos base creados; recomendación: completar instrucciones paso a paso.

## Checklist técnica (roles/tareas concretas)

- [x] Revisar y consolidar config ESLint (flat vs legacy) y añadir `@typescript-eslint` — estado: migración a flat config en `code/eslint.config.cjs` realizada; validar reglas finales.
- [ ] Añadir `eslint` + `prettier` + `lint-staged` + `husky` — pendiente.
- [x] Convertir scripts a ESM donde aplique (ya en `code/scripts`) — hecho.
- [x] Añadir `engines.node` en `code/package.json` y pin de versiones críticas — hecho en `code/package.json`, verificar en CI.
- [x] Validar CI (Node 20+, lockfile y cache path correctos) — revisar workflows y ejecutar en PR.


## Experiencia y UI

- Sistema de componentes documentado (BREVI guide): prop API, variantes y ejemplos.
- Demo content: posts.json, sample images, y datos para galería.

## Deployment

- Preparar scripts para deploy en Vercel (recomendado) y Netlify como alternativa.
- Considerar `assetPrefix` si se va a servir desde subpath.

## Ideas futuras (Más allá del MVP)

- Integración con CMS ligero (e.g., Netlify CMS, Sanity) para contenido dinámico.
- Panel administrativo simple para actualizar posts/galería.
- Internacionalización avanzada y A/B testing para CTAs.

Fecha: 2025-11-24
Creador: Tareas generadas por paired-assistant (puedes editar y priorizar según tu roadmap).-
