# Contribuir

Gracias por querer contribuir a este proyecto. Antes de abrir un _pull request_ por favor lea y siga las indicaciones mínimas que aparecen a continuación.

**Aviso importante sobre placeholders `blur`**

- Este repositorio genera automáticamente un archivo de placeholders para `next/image` en `code/lib/blur-placeholders.json` mediante el script de generación.
- En el CI se ejecuta la generación y una validación que comprueba que todas las imágenes estáticas referenciadas en código tengan un `blurDataURL` en ese JSON. Si falta una entrada, el CI fallará.

Por tanto, antes de crear un PR que añada, mueva o edite imágenes, ejecuta localmente las comprobaciones indicadas abajo para evitar fallos en la integración continua.

**Comprobaciones locales recomendadas**

1. Instala dependencias y genera los placeholders (directorio `code/`):

```
cd code
npm ci
npm run generate-blur
```

2. Valida que el mapeo incluye las rutas usadas en el código:

```
# Desde la raíz del repo
node code/scripts/ci-validate-blur.js
```

3. Ejecuta la app en modo desarrollo y revisa visualmente los cambios:

```
cd code
npm run dev
```

Si encuentras un caso complejo (imágenes usadas como fondo CSS, `Image` con `fill` sin `sizes`, o `src` dinámico), documenta el caso en la descripción del PR y añade la entrada correspondiente al `blur-placeholders.json` si procede. El script de generación no cubre automáticamente todos los casos dinámicos.

**Notas adicionales**

- La CI ejecuta los pasos de generación y validación; si tu PR falla por estos motivos, actualiza `code/lib/blur-placeholders.json` ejecutando `npm run generate-blur` y vuelve a probar localmente antes de empujar.
- Si quieres que yo haga el commit y push de este cambio, indícamelo y lo haré.

Gracias por colaborar.
