# TODO — Plantilla Corporativa (Ideas y plan de desarrollo)

## Pendientes (prioridad alta → baja)

- [ ] Accesibilidad: auditoría a11y (axe, `eslint-plugin-jsx-a11y`) — revisar componentes migrados y reglas de a11y.
- [ ] Theming: pulir modo `dark` y variables en `code/styles/tokens.css` (contraste y tests visuales).
- [ ] Performance: optimizar imágenes (revisar `next/image` sizes, lazy/priority) y ejecutar bundle analyzer.
- [ ] Seguridad: `npm audit` y plan de mitigación; añadir cabeceras de seguridad en respuestas (CSP, HSTS, etc.).
- [ ] I18n: preparar estructura de locales y evaluar `next-intl` u otra solución de i18n.
- [ ] Pre-commit / prepush hooks: comprobar `husky` + `lint-staged` en entornos de colaboradores y documentar instalación.
- [ ] Completar `CONTRIBUTING.md` con pasos para generar/validar placeholders y checklist de PR (ya iniciada, revisar detalles añadidos).
- [ ] Opcional: añadir badge de estado CI en `README.md` (requiere URL del workflow / branch).

---

## Completados / Implementado

- [x] Página de inicio (`/`) — Hero (imagen principal + carrusel), Secciones informativas (Nosotros, Cuerpos, Calendario, Galería, Noticias), Contacto, CTA y Footer (implementado; usa `getBlur('/file.svg')`).
- [x] Añadir `priority` a la imagen principal del Hero (mejorar LCP).
- [x] Helper `getBlur()` implementado y documentado en `code/lib/getBlur.js` / `README.md`.
- [x] Scripts para placeholders: `generate-blur` y `validate-blur` añadidos en `code/package.json` (ejecutar para completar mapping y commitear `code/lib/blur-placeholders.json`).
- [x] Galería + Modal (`GalleryModal`, `Card`) implementados y pasan `blurDataURL` (verificar focus-trap / roles ARIA).
- [x] Formulario y API mínima: `POST /api/contact` implementado en `code/app/api/contact/route.js` (persistencia demo en `code/data/messages.json`).
- [x] Tests: unitarios y de UI añadidos para `getBlur`, `Header`, `Section`, `Card`, `GalleryModal` y `Contact` (incluye tests de formulario y modal).
- [x] `test:unit` script añadido en `code/package.json` y la suite de tests local pasa (`cd code && npm test`).
- [x] CI workflow actualizado: `.github/workflows/ci.yml` ejecuta `npm run test:unit` antes del build y usa `code/package-lock.json` para cache.
- [x] ESLint migrado a flat config (`code/eslint.config.cjs`) y `@typescript-eslint` añadido.
- [x] `eslint` + `prettier` + `lint-staged` + `husky` (configuración principal aplicada; documentar instalación local pendiente).
- [x] Scripts convertidos a ESM donde aplicaba (`code/scripts`).
- [x] `engines.node` añadido en `code/package.json` (Node >=20.9.0).
- [x] Validar CI (Node 20+, lockfile y cache path correctos) — workflows revisados.
- [x] Normalizar estilos: tokens creados en `code/styles/tokens.css` y mapeados en `code/tailwind.config.mjs` (migración parcial/completa en componentes principales).
- [x] Reemplazar sitemap/robots estáticos por rutas dinámicas y exportar `metadata` en `layout.js`.
- [x] `README.md` actualizado con documentación de `getBlur`, API `POST /api/contact` y sección CI.
