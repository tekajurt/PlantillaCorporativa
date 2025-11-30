# Contribuir

Gracias por querer contribuir a este proyecto. Antes de abrir un pull request por favor lee y sigue las indicaciones mínimas que aparecen a continuación.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

**1) Placeholders de imagen (blurDataURL)**

- El repositorio mantiene un mapeo de placeholders en `code/lib/blur-placeholders.json` usado por `next/image` como `blurDataURL`.
- Hay dos scripts útiles en `code/package.json`:

  - `npm run generate-blur` — genera/actualiza `code/lib/blur-placeholders.json` a partir de las imágenes estáticas del proyecto.
  - `node code/scripts/ci-validate-blur.js` — valida que todas las rutas de imágenes referenciadas en el código tengan entrada en el JSON (usado en CI).

Comprobaciones locales recomendadas:

```bash
# desde la raíz del repo
cd code
npm ci
npm run generate-blur   # actualiza code/lib/blur-placeholders.json
# validar desde la raíz
node code/scripts/ci-validate-blur.js
```

Si añades, mueves o renombrás imágenes, ejecuta `npm run generate-blur` y asegúrate de que `ci-validate-blur.js` pasa localmente antes de abrir el PR.

Si usas imágenes dinámicas que no puede detectar el script (por ejemplo `src` construido en runtime, fondos CSS, etc.), documenta el caso en la descripción del PR y añade manualmente la entrada necesaria en `code/lib/blur-placeholders.json`.

**2) Tokens de estilo y theming**

Hemos centralizado tokens en `code/styles/tokens.css` y mapeado en `code/tailwind.config.mjs`. Cuando añadas o migres estilos sigue estas reglas:

- Colores: usa las utilidades tokenizadas en lugar de `text-gray-*`, `bg-white`, etc. Ejemplos:
  - `text-foreground`, `text-muted`, `text-primary`
  - `bg-card`, `bg-input`, `bg-primary`, `bg-accent`, `bg-destructive`
  - `border-border`, `focus:ring-ring`
- Theming: `:root` define valores por defecto y `.dark` variables para modo oscuro. No añadas colores hard-codeados; si necesitas uno nuevo, agrégalo a `code/styles/tokens.css` y al `tailwind.config.mjs`.

Guía rápida para migrar un componente:

1. Reemplaza clases como `bg-white dark:bg-gray-900` por `bg-card`.
2. Reemplaza `text-gray-700` por `text-foreground` o `text-muted` según el propósito.
3. Ejecuta `npx eslint . --ext .js,.jsx --fix` y `npx prettier --write .` en `code/`.

Ejemplo de comandos:

```bash
cd code
npx eslint . --ext .js,.jsx --fix
npx prettier --write .
```

**3) Pre-commit, lint y tests (local / CI)**

- Pre-commit hooks: usamos `husky` y `lint-staged`. Si las hooks no están instaladas en tu entorno:

```bash
# desde la raíz del repo
cd code
npx husky install
```

- Antes de abrir PR asegúrate de que:
  - `npx eslint . --ext .js,.jsx` no reporta errores (puedes ejecutar con `--fix`).
  - `npx prettier --check .` devuelve OK o aplica `npx prettier --write .`.
  - `cd code && npm test` pasa la suite de tests.

**4) Checklist mínimo para un Pull Request**

- [ ] Actualicé/ejecuté `npm run generate-blur` si añadí o moví imágenes, y `ci-validate-blur.js` pasa.
- [ ] Ejecuté `npx eslint . --ext .js,.jsx --fix` y `npx prettier --write .`.
- [ ] Ejecuté `cd code && npm test` y todos los tests pasan.
- [ ] Añadí o actualicé documentación si el cambio afecta a la UX o al contenido (README / CONTRIBUTING).
- [ ] Si el PR introduce componentes visuales, incluí screenshots y comprobé contraste en oscuro/clar0.
- [ ] Si hay cambios de diseño, añadí notas en `CONTRIBUTING.md` o en la descripción del PR para que el reviewer lo compruebe.

**5) Convenciones de commit**

Usa mensajes claros y con prefijo tipo `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, por ejemplo:

```
chore(styles): tokenizar botones y migrar componentes Header/Card
```

**6) Si el CI falla por placeholders**

1. Ejecuta `npm run generate-blur` en `code/`.
2. Corre `node code/scripts/ci-validate-blur.js` desde la raíz.
3. Si todo OK, commitea `code/lib/blur-placeholders.json` y reintenta el push.

--

Gracias por contribuir. Si tienes dudas sobre el flujo de placeholders o la estrategia de tokens, abre un issue o comenta en el PR y te ayudo.
