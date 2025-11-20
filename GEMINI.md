## Lista crítica por componente - PlantillaCorporativa

Este documento lista de forma detallada los aspectos críticos pendientes por componente/ sección para completar, endurecer y llevar a producción la plantilla.

Notas:

- Ruta base del código: `code/`.
- Revisar dependencias (Next, React, Tailwind, PostCSS) y Node >=18.
- Prioriza correcciones de seguridad, accesibilidad y fallos en build.

--

### 1) Root / Configuración general

- `package.json`:
  - Verificar `type": "module"` si se usan `.mjs` (p.ej. `postcss.config.mjs`).
  - Asegurar versiones compatibles de `next`, `react`, `react-dom`, `tailwindcss`, `postcss` y `autoprefixer`.
  - Añadir scripts útiles: `lint`, `format`, `type-check` si aplica.
- `next.config.mjs`:
  - Revisar `images.remotePatterns` y `experimental` flags que cambian entre versiones.
  - Ajustar `output` o `assetPrefix` si se desplegará en subpath.
- `postcss.config.mjs` y `tailwind.config.mjs`:
  - Confirmar uso de `@tailwindcss/postcss` (plugin separado) y configuración `content` para escaneo de clases.

### 2) `app/layout.js` (RootLayout)

- `className` del `body`:
  - Validar clases de gradiente (`bg-gradient-to-r from-... to-...`) y su soporte en `tailwind.config.js`.
  - Evitar clases que dependan de plugins no instalados.
- Accesibilidad:
  - Añadir `lang` correcto y meta tags relevantes (charset, viewport) si no están en `head`.
  - Revisar orden lógico: `Nav` antes de `main` etc.

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

--

Si quieres, puedo:

- Generar plantillas de `Card`, `Form`, `Header` y `Logo` y aplicarlas donde correspondan.
- Ejecutar `npm run build` y capturar errores para priorizar las correcciones.
- Crear PR con estos cambios y un README corto para despliegue.

Marca una opción y procedo.
