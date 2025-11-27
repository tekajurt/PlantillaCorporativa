# TODO — Plantilla Corporativa (Revisión y plan ordenado)

> Estado: tareas registradas también en el gestor de TODOs (para seguimiento). A continuación se muestra la lista reordenada por prioridad y el estado actualizado.

## Prioridad Alta

- [ ] Accesibilidad — auditoría completa (axe, `eslint-plugin-jsx-a11y`): ejecutar tests automáticos y revisión manual de componentes migrados (`code/components`, `code/app/componentes`).
- [ ] Revisar Header / Nav: ajustar `pt-` en `layout.js`, confirmar `h-16`, y validar `z-index` del header y menú móvil.
- [ ] Unificar contenedores: aplicar `max-w-6xl mx-auto px-4` o `container` consistentemente en secciones y documentarlo.
- [ ] Espaciado vertical — escala: homologar `gap`/`mt` y revisar uso de `min-h-screen` en `Section`.

## Prioridad Media

- [ ] Focus rings y estados: mejorar `:focus-visible` en `code/app/globals.css` y probar navegación por teclado.
- [ ] Menú móvil — z-index y hit targets: ajustar spacing y accesibilidad del toggle de tema.
- [ ] Imágenes — optimización y proporciones: revisar `next/image` `sizes`, `priority`, `blurDataURL` por imagen y usar `aspect-ratio` para evitar CLS.
- [ ] Render-blocking CSS — mitigar: revisar `/_next/static/chunks/428464902ddf8cc2.css` y cargar no bloqueante.
- [ ] Legacy JS — revisar build targets (posible ahorro ≈13 KiB detectado por Lighthouse).

## Prioridad Baja / Operacional

- [ ] Pre-commit hooks — verificar `husky` + `lint-staged` y documentar instalación local.
- [ ] CI — integrar checks finales (`test`, `contrast-check`, `validate-blur`, `npm audit`) y añadir badge cuando esté estable.
- [ ] Completar `CONTRIBUTING.md`: pasos para generar/validar placeholders, checklist de PR y convenciones.
- [ ] Seguridad — `npm audit` y plan de mitigación; añadir cabeceras de seguridad (CSP/HSTS) si procede.
- [ ] I18n — preparar estructura de locales y evaluar `next-intl`.
- [ ] Opcional: Bundle analyzer y treemap para optimizar bundles.
- [ ] Badge CI en `README` (opcional) una vez el workflow esté estable.

## QA / Validación final

- [ ] QA visual final (z-index, overlays, modales) en varios breakpoints.
- [ ] Ejecutar `generate-blur` y `validate-blur` para completar/validar `code/lib/blur-placeholders.json` y añadir validación en CI.

## Completados (verificados)

- [x] Theming y tokens: `code/styles/tokens.css` y mapeo en `code/tailwind.config.mjs`.
- [x] Selector tema (light/dark) en navegación con persistencia.
- [x] Home/Secciones: Hero, Galería, Contacto, CTA implementados; `getBlur` usado y `priority` en la imagen principal.
- [x] Helper `getBlur()` y placeholders: `code/lib/getBlur.js`, `code/lib/blur-placeholders.json` y scripts scaffold añadidos.
- [x] Galería/Card/Modal implementados con `blurDataURL`.
- [x] Formulario y API `POST /api/contact` implementados (demo persistencia `code/data/messages.json`).
- [x] Tests (Jest/RTL) añadidos y suite pasa; `test:unit` funciona.
- [x] CI workflow básico: `.github/workflows/ci.yml` ejecuta tests.
- [x] ESLint (flat) y Prettier + Husky + lint-staged (configuración aplicada).
- [x] Scripts ESM y `engines.node` especificado.
- [x] `README.md` actualizado con `getBlur` y API docs.

---

Notas:

- He movido y consolidado las tareas para facilitar seguimiento. Muchas tareas están ya implementadas (sección "Completados").
- Si quieres, sincronizo la sección "Prioridad Alta" con issues o creo ramas para empezar a trabajar en el primer ítem.
