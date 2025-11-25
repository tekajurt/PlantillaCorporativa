# Tokens de diseño

Este archivo describe cómo usar los tokens CSS centralizados y las utilidades Tailwind mapeadas en este proyecto.

Resumen rápido

- Los tokens están definidos en `code/styles/tokens.css` como variables CSS (`--foreground`, `--background`, `--muted`, etc.).
- `code/tailwind.config.mjs` mapea varias de estas variables a nombres de colores de Tailwind (por ejemplo `foreground`, `background`, `primary`, `muted`, `card`, `border`, ...).
- En los componentes, prefiere las utilidades tokenizadas de Tailwind en lugar de clases de color genéricas (`text-gray-700`, `bg-gray-800`, etc.).

Clases recomendadas

- Texto principal: `text-foreground`
- Texto secundario / muted: `text-muted`
- Fondo de la página: `bg-background`
- Fondo de tarjetas / secciones: `bg-card`
- Color primario (botones, enlaces): `bg-primary` / `text-primary-foreground`
- Color de acento (badges, highlights): `text-accent` / `bg-accent`
- Borde estándar: `border-border`

Ejemplos

- Encabezado principal:

```html
<h1 class="text-foreground">Título</h1>
```

- Tarjeta:

```html
<article class="bg-card text-card-foreground p-6 rounded-lg">
  <h3 class="text-foreground">Título</h3>
  <p class="text-muted">Descripción</p>
</article>
```

Cómo añadir o modificar tokens

1. Edita `code/styles/tokens.css` y añade/ajusta variables CSS en `:root` y la clase `.dark` para sus variantes en modo oscuro.
2. Si quieres usar la variable desde Tailwind (por ejemplo `--new-token`), añade una entrada en `code/tailwind.config.mjs` dentro de `theme.extend.colors`:

```js
colors: {
  'new-token': 'var(--new-token)'
}
```

3. Recompila el proyecto (Next/Tailwind) si es necesario.

Notas

- La clase `.dark` se usa para controlar variantes en modo oscuro; la implementación actual aplica `.dark` al elemento raíz cuando el tema está en modo oscuro.
- Algunos utilitarios de Tailwind con opacidades (`bg-muted/10`) dependen de la configuración JIT. Si tu build no reconoce una utilidad específica, usa estilos CSS o añade utilidades personalizadas en Tailwind.

Siguiente paso recomendado

- Migrar gradualmente los componentes más usados (`Header`, `Footer`, `Card`, `Hero`) para usar estas utilidades tokenizadas. Evita cambios masivos en una sola PR; haz lotes pequeños y revisables.
