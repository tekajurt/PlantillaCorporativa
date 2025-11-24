# PlantillaCorporativa

Plantilla de demo para una página corporativa construida con Next.js (App Router), Tailwind y componentes accesibles. Este README documenta las APIs y utilidades principales añadidas al proyecto.

## Resumen rápido

- Uso de `next/image` con placeholders generados (`blurDataURL`) para mejorar la carga percibida.
- Helper runtime `getBlur(path)` para obtener el `blurDataURL` seguro con fallback transparente.
- Scripts ESM para generar y validar placeholders en CI (`generate-blur`, `validate-blur`).
- `GalleryModal` con props para mostrar imágenes con placeholder en un modal accesible.
- Endpoint `POST /api/contact` para recibir envíos de contacto y persistirlos en `code/data/messages.json` (demo).

---

## `getBlur(path)`

Archivo: `code/lib/getBlur.js`

Descripción: helper runtime que devuelve el `blurDataURL` para una ruta de imagen concreta. Si no existe entrada en el mapping (`code/lib/blur-placeholders.json`) o si `path` es falsy, devuelve un GIF transparente como fallback.

API

- Entrada: `path` (string) — ruta relativa de la imagen, por ejemplo: `/file.svg` o `/images/team.jpg`.
- Salida: cadena `blurDataURL` (string).

Ejemplos de uso:

Frontend (Next Image):

```jsx
import Image from 'next/image';
import getBlur from './lib/getBlur';

<Image
  src="/file.svg"
  alt="Ejemplo"
  width={800}
  height={450}
  placeholder="blur"
  blurDataURL={getBlur('/file.svg')}
/>;
```

Nota: el helper es seguro para ejecutar en runtime y evita errores si falta una entrada en el mapping.

---

## Scripts útiles (en `code/package.json`)

- `npm run generate-blur` — recorre `public/` (y/o paths configurados) y genera `code/lib/blur-placeholders.json` con `blurDataURL` por imagen usando `sharp`.
- `npm run validate-blur` — valida que imágenes estáticas referenciadas en el código tengan una entrada en el mapping (ideal para CI).
- `npm run ci` — alias útil para `lint && build && test`.

Recomendación: ejecutar `cd code && npm run generate-blur` y commitear `code/lib/blur-placeholders.json` para que CI valide el mapping.

---

## `GalleryModal` (props)

Archivo: `code/components/ui/GalleryModal.jsx`

Props:

- `open` (boolean): si el modal está visible.
- `image` (string): src de la imagen a mostrar.
- `alt` (string): texto alternativo.
- `blurDataURL` (string): placeholder para `next/image` en el modal.
- `onClose` (function): callback para cerrar el modal.

Uso (ejemplo):

```jsx
<GalleryModal
  open={open}
  image={selected.image}
  alt={selected.title}
  blurDataURL={selected.blur}
  onClose={() => setOpen(false)}
/>
```

El componente incluye comportamiento básico de accesibilidad: enfocado al abrir y cierre con `Escape`.

---

## API: `POST /api/contact`

Ruta: `code/app/api/contact/route.js` (App Router)

Descripción: endpoint simple que recibe `name`, `email` y `message` en JSON, valida de forma básica y persiste las entradas en `code/data/messages.json` (archivo JSON). Está pensado como demo/local — para producción deberías conectar un datastore o servicio de correos.

Request (ejemplo curl):

```bash
curl -X POST http://localhost:3000/api/contact \
	-H "Content-Type: application/json" \
	-d '{"name":"Juan","email":"juan@example.com","message":"Hola desde la web"}'
```

Response esperado (201):

```json
{ "ok": true, "entry": { "id": 169..., "name": "Juan", "email": "juan@example.com", "message": "...", "createdAt": "..." } }
```

Dónde se guarda: `code/data/messages.json` (array con mensajes). Nota: en entornos serverless la persistencia en disco es efímera — usa una base de datos o un bucket para producción.

---

## Cómo probar localmente

1. Instala dependencias en la carpeta `code` y levanta la app:

```bash
cd code
npm install
npm run dev
```

2. Generar placeholders (opcional pero recomendado):

```bash
cd code
npm run generate-blur
```

3. Probar envío de contacto (desde otra terminal):

```bash
curl -X POST http://localhost:3000/api/contact \
	-H "Content-Type: application/json" \
	-d '{"name":"Test","email":"test@example.com","message":"Hola"}'
```

4. Ejecutar validación de placeholders (CI):

```bash
cd code
npm run validate-blur
```

---

Si quieres, puedo añadir ejemplos de uso para cada componente (Header, Section, Card) o generar una página `/docs` con la documentación auto-inyectada. ¿Prefieres que deje la documentación en `README.md` (como ahora) o que cree `docs/API.md` separado?

---

## CI (GitHub Actions)

El repositorio incluye un workflow en `.github/workflows/ci.yml` que ejecuta pruebas unitarias antes del build y corre la suite completa de tests tras compilar.

Flujo principal (ejecutado en `code/`):

1. `npm ci` — instalación reproducible usando `code/package-lock.json`.
2. `npm run test:unit` — ejecutar solo tests unitarios (rápido, usado antes del build).
3. `npm run lint` — comprobaciones de estilo/errores con ESLint.
4. `npm run build` — compilación de la app Next.js.
5. `npm test` — ejecución completa de la suite de pruebas.

Comandos locales equivalentes:

```bash
cd code
npm ci
npm run test:unit    # tests unitarios rápidos
npm run lint
npm run build
npm test             # suite completa
```

Si quieres añadir un badge de estado CI o separar los jobs (`unit-tests`, `build`) para paralelizar, puedo proponer un cambio en el workflow para hacerlo más rápido.
