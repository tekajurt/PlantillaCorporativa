# TODO para MVP listo para producción — PlantillaCorporativa

Resumen: esta lista condensada agrupa y prioriza las tareas que faltan para llevar la plantilla (Escuela de Carnaval) de demo a un MVP listo para iniciar un flujo de producción. Cada ítem incluye objetivo, archivos relevantes y criterio de aceptación.

## 1) Root / Configuración general

- `package.json`:
- [x] Verificar `type": "module"` si se usan `.mjs` (p.ej. `postcss.config.mjs`).
- [ ] Asegurar versiones compatibles de `next`, `react`, `react-dom`, `tailwindcss`, `postcss` y `autoprefixer`.
- [x] Asegurar versiones compatibles de `next`, `react`, `react-dom`, `tailwindcss`, `postcss` y `autoprefixer`.
- Nota: versiones fijadas en `code/package.json`: `next@16.0.4`, `react@19.2.0`, `react-dom@19.2.0`, `tailwindcss@4.1.17`, `postcss@8.5.6`, `autoprefixer@10.4.22`.
- [x] Añadir scripts útiles: `lint`, `format`, `type-check` si aplica. (los scripts `dev`, `build`, `lint`, `format`, `type-check` existen)
- `next.config.mjs`:
- `next.config.mjs`:
- [x] Revisar `images.remotePatterns` y `experimental` flags que cambian entre versiones. (`remotePatterns` configurado)
- [ ] Ajustar `output` o `assetPrefix` si se desplegará en subpath.
- `postcss.config.mjs` y `tailwind.config.mjs`:
- `postcss.config.mjs` y `tailwind.config.mjs`:
- [x] Confirmar uso de `@tailwindcss/postcss` (plugin separado) y configuración `content` para escaneo de clases. (`postcss.config.mjs` y `tailwind.config.mjs` presentes y configurados)
- [x] Scripts en `code/scripts/` convertidos a ESM (`generate-blur.js`, `ci-validate-blur.js`).

## 2) `app/layout.js` (RootLayout)

- `className` del `body`:
  - Validar clases de gradiente (`bg-gradient-to-r from-... to-...`) y su soporte en `tailwind.config.js`.
  - Evitar clases que dependan de plugins no instalados.
- Accesibilidad:

## Prioridad Alta (imprescindible antes de despliegue)

- **1. Revisión y estabilización de la configuración root**

  - Objetivo: asegurar que `next`, `react`, `tailwind` y `postcss` funcionen correctamente y que `npm run build` pase.
  - Archivos: `code/package.json`, `code/next.config.mjs`, `code/postcss.config.mjs`, `code/tailwind.config.mjs`.
  - Pasos concretos:
    - Confirmar `type: "module"` y scripts (`dev`,`build`,`lint`,`format`).
    - Bloquear versiones críticas y probar `npm ci` + `npm run build`.
  - Acceptance: `npm run build` finaliza sin errores críticos.
  - Acceptance: `npm run build` finaliza sin errores críticos.
  - [x] Build local: OK (Next 16, SSG) — se generaron páginas estáticas correctamente.

- **2. Accesibilidad y navegación (Header/Nav)** — EN PROGRESO

  - Objetivo: menú accesible y robusto en desktop y móvil.
  - Archivos: `code/app/layout.js`, `code/components/Header.jsx`, `code/app/componentes/nav.js`, `code/app/componentes/NavLink.js`.
  - Pasos concretos:
    - Implementar focus-trap o manejo de foco al abrir/cerrar menú.
    - Soporte keyboard: Escape para cerrar, Tab order correcto, `aria-controls`/`aria-expanded` en botones.
    - Pruebas manuales con teclado y lector de pantalla básico.
  - Acceptance: navegación verificable manualmente (abrir/cerrar con teclado) y audit básico con `eslint-plugin-jsx-a11y` sin errores críticos.

- **3. CI / CD (GitHub Actions)**
  - Objetivo: validar PRs con pipeline que corra install, lint, build y test.
  - Archivos: `.github/workflows/ci.yml`, `README.md` (badge).
  - Pasos concretos:
    - Crear workflow que instale dependencias, corra `npm run lint`, `npm run build` y `npm test`.
  - Acceptance: PR dispara CI; main presenta builds verdes en cambios triviales.
  - [x] Workflows actualizados: Node 20 configurado y validación de placeholders agregada.

---

## Prioridad Media (funcionalidades MVP)

- **4. Formularios y backend mínimo (`/api/contact`)**

  - Objetivo: formulario de `contacto` funcional (validación client+server) y entrega/logging del mensaje.
  - Archivos: `code/app/sections/contacto.js`, `code/pages/api/contact.js` o `code/app/api/contact/route.js` (app router), configuraciones ENV para email si aplica.
  - Pasos concretos:
    - Implementar endpoint que valide input (name,email,message) y guarde en `storage/mock.json` o loggee en servidor.
    - Retornar códigos HTTP correctos y mensajes de error legibles.
  - Acceptance: enviar formulario devuelve 200 y muestra confirmación en UI.

- **5. Normalizar `Section` y estructura de secciones**

  - Objetivo: `Section` con `id?` y `className?`, evitar aplicar `min-h-screen` globalmente.
  - Archivos: `code/app/componentes/section.js`, `code/app/sections/*`.
  - Pasos concretos:
    - Refactorizar secciones para usar `max-w-* mx-auto` y clases responsive.
  - Acceptance: secciones consistentes en móvil y desktop.

- **6. Galería y multimedia (MVP)**

  - Objetivo: galería filtrable por cuerpo (Figuras/Baile/Banda) con vista ampliada.
  - Archivos: `code/app/sections/galeria.js`, `code/components/Card.jsx`, modal/lightbox component.
  - Pasos concretos:
    - Implementar filtros y modal accesible (Escape cierra, foco entrante/retenido).
  - Acceptance: filtrar lista + abrir imagen en modal funcional.

- **7. Noticias/Blog (MVP)**
  - Objetivo: listado de posts desde JSON local y vista detalle simple.
  - Archivos: `code/data/posts.json`, `code/app/sections/blog.js`, `code/app/blog/[slug]/page.js` (opcional).
  - Acceptance: lista de posts y vista detalle disponible.

---

## Prioridad Baja / Mejoras (para pulir antes del release final)

- **8. Tests, linting y formateo**

  - Objetivo: ESLint + Prettier y tests básicos (Header, Contact, Section).
  - Archivos: `.eslintrc`, `.prettierrc`, `jest.config.js`, `__tests__/*`.
  - Acceptance: `npm run lint` sin errores bloqueantes; tests críticos pasan.

- **9. Performance y producción**

  - Objetivo: optimizar imágenes, revisar `next.config.mjs` y bundle analyzer.
  - Pasos concretos:
    - Añadir `images.remotePatterns`, usar `next/image` donde aplique.
    - Ejecutar `next build` y resolver warnings.
  - Acceptance: build sin warnings críticos y mejoras en bundle report.

- **10. Seguridad y dependencias**

  - Objetivo: `npm audit` y mitigación de vulnerabilidades de alto riesgo.
  - Pasos concretos: actualizar dependencias inseguras o documentar mitigación.
  - Acceptance: auditoría con plan y solución para issues graves.

- **11. Documentación y despliegue**

  - Objetivo: README reproducible con pasos de dev/build/deploy y variables ENV.
  - Acceptance: README claro y PR listo para revisión.

- **12. Preparar release MVP**
  - Objetivo: PR final, tests verdes en CI y tag `v0.1.0` con release notes.
  - Acceptance: tag creado y release notes publicadas.

---

## Consideraciones operativas y criterios de aceptación (resumidos)

- Validaciones automatizadas: CI que ejecute `lint` + `build` + `test` antes de merge.
- Interactividad: todo comportamiento que use event handlers debe vivir en Client Components (`"use client"`).
- Accesibilidad: soporte keyboard para menú y modal, roles/labels en controles. Usar `eslint-plugin-jsx-a11y`.
- Entregables: `/api/contact` mínimo, galería filtrable con modal, posts de ejemplo, CI configurado.

---

### 3) `app/componentes/nav.js` y `app/componentes/NavLink.js`

- Estado y visibilidad:
  - Actualmente usa `useState` con `hidden/block`. Mejor usar clases responsivas: `hidden md:block` y controlar con `aria-expanded`.
  - Considerar animaciones de apertura (`transition`, `transform`) y manejo de cierre al cambiar de ruta.
- Accesibilidad:
  - Botón con `aria-controls` apuntando al `id` del menú.
  - Soporte para navegación por teclado (escape para cerrar, foco en primer elemento cuando abre).
- Clases:
  - Consolidar estilos de link en `NavLink` (hecho) y evitar duplicación.

### 4) `app/componentes/section.js` (ahora `Section`)

- API:
  - `id` debe entregarse solo si existe; `Section` ahora permite `className`.
  - Confirmar que `min-h-screen` es deseado en todas las secciones (puede causar saltos visuales en pantallas pequeñas).

### 5) `app/componentes/footer.js`

- Contenido estático: reemplazar `Your Company Name` y `Your Name` por valores reales o variables de entorno.
- Responsive: asegurarse de que `container mx-auto` tenga padding lateral (`px-4`) en móviles.

### 6) `components/ui/button.jsx`

- Revisión de variantes:
  - `buttonVariants` usa muchas clases avanzadas (CVA) y selectors (`[&_svg]`). Verificar compatibilidad con tu versión de PostCSS y Tailwind.
  - Añadir `type` por defecto o prop para `button` si se usa dentro de formularios.
- Accesibilidad:
  - Asegurar `aria-pressed` / `aria-expanded` según variantes interactivas.

### 7) `components/ui/carousel.jsx`

- Seguridad/Robustez:
  - Manejo correcto del SSR: `useEmblaCarousel` y acceso a `window` deben ser seguros en SSR (ya está en client components).
  - Asegurar que `ArrowLeft/Right` tengan `aria-hidden` y botones tengan `aria-label` (ya existe `sr-only`).
- Clases:
  - Consolidar valores `-left-12` / `-right-12` para que sean responsivos (p.ej. `-left-6 md:-left-12`).

### 8) Secciones del `app/sections/` (por cada archivo)

Las secciones identificadas: `hero`, `nosotros`, `cuerpos`, `galeria`, `blog`, `calendario`, `contacto`, `cta`.

Para cada sección revisar:

- Contenido estático vs dinámico: si usa `lorem-ipsum` o placeholders, reemplazar con datos reales o JSON de ejemplo.
- Accesibilidad semántica: usar `section`/`main`/`article` y encabezados `h1..h6` en orden lógico.
- Responsive: comprobar anchos fijos (`w-1/2`) que pueden romper en móviles; preferir utilidades `max-w` y `mx-auto`.

Detalle por sección:

- `hero.js`:
  - Imagen con `width`/`height` fijos: considerar `layout="responsive"` o `fill` + contenedor relativo.
  - Texto grande: comprobar contraste sobre background (usamos `text-white` en layout).
  - Carousel: validar comportamiento en pantallas pequeñas (usar `w-full` en móviles).
- `nosotros.js`:
  - Imagen con `w-1/2` dentro de contenedor: corregir a `w-full md:w-1/2` para móviles.
  - Espaciado: `mb-6` vs `mt-8` — revisar coherencia.
- `cuerpos.js`:
  - Uso de colores de fondo como `bg-green-500`, `bg-red-500`, `bg-yellow-500`: verificar contraste del texto y consistencia visual.
- `galeria.js`, `blog.js`, `calendario.js`, `contacto.js`, `cta.js`:
  - Son placeholders: definir contenido requerido (inputs, galerías, formularios). Añadir validaciones y estados.

### 9) `lib/utils.js`

- Revisar `cn` utilitario: preferir `clsx` o una función robusta que soporte arrays y objetos. Confirmar `cn` export.

### 10) `public/` (assets SVG)

- Verificar atributos `fill`/`viewBox` y optimizar SVGs (limpiar atributos innecesarios). Añadir `aria-hidden` cuando sean decorativos.
- [x] `public/favicon.ico` añadido y placeholder generado en `code/lib/blur-placeholders.json`.

### 11) Estilos globales (`app/globals.css`)

- Contenido:
  - Confirmar reglas `@tailwind base; @tailwind components; @tailwind utilities;` al inicio.
  - Revisar custom properties y resets.

### 12) Testing / CI / Lint

- Añadir ESLint y configuración recomendada para Next.js + React.
- Añadir Prettier o similar para consistencia de formato.
- Agregar test minimal con Jest/React Testing Library si se quiere cobertura básica.

### 13) Performance y producción

- Revisar imágenes: usar `next/image` correctamente y configurar `remotePatterns`.
- Hacer build `npm run build` y corregir errores de producción.

### 14) Seguridad

- Revisar dependencias con `npm audit` y parchear vulnerabilidades.
- Revisar CSP (Content Security Policy) y cabeceras de seguridad si será desplegado.

### 15) Componentes faltantes / recomendados

- `Main` o `Page` wrapper si necesitas un contenedor semántico.
- `NavLink` (añadido) y `Logo`/`Brand` component.
- `Header` component está vacío: implementar/crear o eliminar si no se usa.
- `Card` o `MediaCard` para galerías y proyectos.
- `Form` components (Input, Textarea, Label, Button) para `contacto`.
- `SEO` component para meta tags por página.
