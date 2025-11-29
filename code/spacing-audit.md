# Auditoría de espaciado — resumen

Fecha: 2025-11-29

Objetivo: detectar patrones de `margin`/`padding` vertical y proponer una escala uniforme para mejorar ritmo visual.

Hallazgos (extracto):

- `Section` base: `gap-6`, `py-12`, `min-h-[60vh]` (normalizado previamente).
- `app/layout.js`: `pt-16` reservado para compensar header fijo (mantener).
- Secciones (`app/sections/*`): uso mayoritario de `py-12`, `mb-4`, `mb-6`, `mt-6`, `mt-8`, `mt-10`.
- Componentes:
  - `Nav`: root `gap-4` y mobile menu `gap-2` (recomendado `gap-6` y `gap-4` respectivamente).
  - `Footer`: `mt-3` (recomendado `mt-6`).
  - `Card`: `mb-4` para imagen y `mb-2` para título — aceptable.
  - `Input/Label/Textarea`: `mb-1/mb-2` — mantener para compact form layout.
  - `Hero` y otras secciones: `mt-10`, `mt-8` — sugerencia de preferir `mt-6/mt-8` según jerarquía.

Recomendación de escala (propuesta):

- Espaciado vertical (component to component): `py-12` en secciones; `mt-6` entre bloques.
- Espaciado interno de sección: `gap-6`.
- Elementos compactos (form fields, labels): `mb-1` o `mb-2`.
- Botones y CTAs: `mt-6` para separación de bloque.

Cambios aplicados automáticamente (conservadores) — actualizados el 2025-11-29:

- `code/app/sections/cta.js`: `h2` `mb-4` → `mb-6`.
- `code/app/sections/contacto.js`: párrafo descriptivo `mb-4` → `mb-6`.
- `code/app/sections/galeria.js`: `h2` y `p` `mb-4` → `mb-6`.

Nota: se hicieron cambios puntuales y conservadores para alinear títulos y párrafos descriptivos con la política elegida (ver sección "Política aplicada" más abajo). Otras recomendaciones del audit siguen pendientes para revisión en batch.

Siguientes pasos recomendados:

1. Revisar visualmente las páginas (mobile y desktop) para validar ritmo y ajustar `mt-8` vs `mt-6` donde la jerarquía lo requiera.
2. Documentar la escala en `code/styles/README.md` y aplicar cambios en batch para otros componentes si se acepta la propuesta.
3. Añadir una prueba visual o capturas en PRs para cambios de espaciado significativos.

Si quieres, aplico cambios adicionales (ej. convertir `mt-10` a `mt-8` en `Hero`, o normalizar todas las `mt-*` a `mt-6/mt-8`) automáticamente. Indica si prefieres una política estricta (todos a `mt-6`) o una política por jerarquía (titulares = `mt-8`, bloques secundarios = `mt-6`).
