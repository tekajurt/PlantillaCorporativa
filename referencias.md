# Referencias de Contenido

Escuela de Carnaval Arcoíris — Guía central de mensajes, copys, estructuras y plantillas. Usar este documento como fuente única para relleno de secciones, SEO, accesibilidad y futuras expansiones.

## Índice

1. Identidad (Misión, Visión, Valores, Diferenciales)
2. Mensajes Clave por Sección
3. Matriz de Copy de Botones y CTAs
4. Estructuras de Datos (Programas, Instructores, Precios, Testimonios, FAQ)
5. Lineamientos de SEO y Metadatos
6. Estilo y Tono Editorial
7. Accesibilidad de Contenido
8. Textos Legales (Resumen)
9. Plantillas de Email y Microcopy UI
10. Internacionalización (i18n) — Claves sugeridas
11. Esquema JSON-LD (Ejemplo)
12. Roadmap de Contenido Futuro

---

## 1. Identidad

### Misión

Formar nuevas generaciones en el arte del carnaval integrando danza, música, construcción escénica y valores comunitarios; preservando la tradición mientras innovamos con creatividad e inclusión.

### Visión

Ser referente cultural que impulsa participación comunitaria y desarrollo artístico sostenible, expandiendo el alcance educativo del carnaval a nivel regional.

### Valores

- Inclusión: Todos los cuerpos y edades son bienvenidos.
- Tradición viva: Rescatamos historia creando futuro.
- Comunidad: Aprendizaje colaborativo y respeto mutuo.
- Creatividad sostenible: Materiales responsables y reutilización.
- Disciplina artística: Constancia en técnica y cuidado corporal.

### Diferenciales

- Formación integral (baile, música, figuras, producción).
- Metodologías por niveles (iniciación → avanzado).
- Calendario público transparente.
- Talleres abiertos + eventos participativos.
- Enfoque familiar e intergeneracional.

---

## 2. Mensajes Clave por Sección

### Hero

- Título principal (versión A): Color, ritmo y tradición.
- Alternativas título:
  1. Donde el carnaval aprende a respirar.
  2. Formación artística con identidad.
  3. Creando el desfile del mañana.
- Subtítulo base: Formando el carnaval del mañana. Talleres, ensayos y presentaciones para todas las edades.
- CTA primario: Contactar / Inscribirme.
- CTA secundario: Conócenos / Ver calendarios.
- Imagen alt ejemplo: Desfile con trajes multicolores avanzando frente al público.

### Nosotros

- Encabezado: Quiénes somos.
- Storytelling breve: Nacimos en 1998 impulsando la transmisión de la cultura carnavalesca local. Hoy somos una comunidad diversa que integra arte y educación.
- Párrafo visión histórica: Crecimiento de pasacalles iniciales a escuela formal con participación anual en desfile regional.
- Fundadores (mantener lista actual, ampliar roles futuros).
- Bloques adicionales sugeridos:
  - Línea temporal (1998 / 2005 / 2015 / actualidad).
  - Impacto comunitario (número aproximado de participantes formados).

### Cuerpos del Carnaval

- Intro: Tres cuerpos articulados que forman la puesta en escena total.
- Figuras: Enfoque visual, vestuario, estructuras, presencia. Copy corto: Creatividad expresada en cada detalle.
- Baile: Coreografía, técnica, coordinación grupal. Copy corto: Movimiento que da vida al ritmo.
- Banda: Percusión y bronces sostienen energía. Copy corto: Latido sonoro del desfile.
- CTA local sugerido: Unirme a (Figuras / Baile / Banda).
- Alt text genérico elementos: Integrantes del cuerpo de [nombre] ensayando estructura/coreografía/instrumentación.

### Calendario y Actividades

- Introducción: Agenda pública de ensayos, talleres y presentaciones especiales.
- Categorías:
  - Ensayo general (símbolo 🔁)
  - Taller técnico (símbolo 🛠️)
  - Presentación pública (símbolo 🎭)
  - Convocatoria / inscripción (símbolo ✉️)
- Mensaje de utilidad: Añade fechas clave a tu calendario personal y activa recordatorios.

### Blog / Noticias

- Línea editorial:
  - Convocatorias y plazos.
  - Reconocimientos y prensa.
  - Innovación pedagógica y técnica.
  - Historias de integrantes.
- Tag sugeridos: convocatoria / premio / taller / crónica / prensa.

### Galería

- Intro: Selección multimedia filtrable por año y cuerpo.
- Directrices de captions:
  - Qué se ve + contexto breve + emoción (máx 140 caracteres).
  - Ejemplo: Banda marcando ritmo final previo al desfile principal.
- Privacidad: Evitar datos sensibles en texto.

### Contacto

- Texto de motivación: Escríbenos para inscripciones, propuestas colaborativas o difusión cultural.
- Mensaje de confirmación (placeholder): Gracias por tu mensaje. Responderemos dentro de las próximas 48 horas.
- Mensaje error genérico: Ocurrió un problema. Intenta nuevamente o escribe a info@carnaval-arcoiris.org.

### CTA Central

- Título A: ¿Listo para participar?
- Título B: Da el primer paso hacia el carnaval.
- Párrafo: Inscripciones abiertas en talleres y clases según niveles. Cupos limitados.
- CTA: Inscribirme / Reservar cupo / Solicitar información.

### Footer

- Pitch breve: Escuela de Carnaval Arcoíris — formación artística comunitaria desde 1998.
- Enlaces obligatorios: Inicio | Nosotros | Cuerpos | Calendario | Galería | Noticias | Contacto.
- Legales: Privacidad | Términos | Cookies.
- Derechos: © Año dinámico — Escuela de Carnaval Arcoíris.

---

## 3. Matriz de Copy de Botones y CTAs

| Contexto | Primario | Secundario | Terciario |
| Hero | Contactar | Conócenos | Próximos eventos |
| Cuerpos | Unirme | Ver horarios | Consultar plazas |
| Calendario | Agregar al calendario | Descargar PDF | Recordatorios |
| Blog | Leer más | Compartir | Guardar |
| Galería | Ampliar | Ver álbum | Reportar |
| Contacto | Enviar | Limpiar campos | Ver email directo |
| CTA global | Inscribirme | Solicitar información | Ver niveles |
| Testimonios | Sumarte | Conocer programa | Charlas abiertas |

---

## 4. Estructuras de Datos (Ejemplos)

### Programas (programs.json)

```json
[
  {
    "id": "iniciacion-baile",
    "titulo": "Baile — Iniciación",
    "descripcion": "Primer acercamiento a coordinación, ritmo básico y cuidado corporal.",
    "duracionSemanas": 12,
    "nivel": "Inicial",
    "cupos": 25
  },
  {
    "id": "percusion-intermedio",
    "titulo": "Percusión — Intermedio",
    "descripcion": "Estructuras rítmicas avanzadas y ensamble grupal.",
    "duracionSemanas": 16,
    "nivel": "Intermedio",
    "cupos": 20
  }
]
```

### Instructores (instructors.json)

```json
[
  {
    "id": "maria-perez",
    "nombre": "María Pérez",
    "especialidad": "Coordinación y producción",
    "bioCorta": "Fundadora y enlace con instituciones culturales.",
    "foto": "/instructores/maria.jpg",
    "redes": { "instagram": "https://instagram.com/maria" }
  }
]
```

### Precios (pricing.json)

```json
{
  "moneda": "EUR",
  "niveles": [
    {
      "plan": "Mensual",
      "precio": 40,
      "incluye": ["1 taller semanal", "Acceso a eventos internos"]
    },
    {
      "plan": "Trimestral",
      "precio": 110,
      "incluye": ["2 talleres semanales", "Prioridad en cupos"]
    },
    { "plan": "Anual", "precio": 400, "incluye": ["Acceso completo", "Descuentos especiales"] }
  ],
  "notas": ["Descuentos para menores de 12 años", "Becas sociales limitadas"]
}
```

### Testimonios (testimonials.json)

```json
[
  {
    "id": "test-1",
    "nombre": "Lucía R.",
    "rol": "Integrante cuerpo de figuras",
    "texto": "Aprendí a expresarme con materiales y diseño. La comunidad es increíble."
  }
]
```

### FAQ (faq.json)

```json
[
  {
    "pregunta": "¿Necesito experiencia previa?",
    "respuesta": "No. Contamos con niveles iniciales en baile, música y figuras."
  },
  {
    "pregunta": "¿Desde qué edad se puede participar?",
    "respuesta": "A partir de los 8 años en talleres adaptados."
  }
]
```

---

## 5. Lineamientos de SEO y Metadatos

- Meta title (≤60 chars): Escuela de Carnaval Arcoíris — Formación y Tradición.
- Meta description (≤155 chars): Talleres, ensayos y presentaciones. Únete a la Escuela de Carnaval Arcoíris y vive el ritmo y color de nuestra cultura.
- Keywords (moderado): carnaval, escuela, talleres, danza, percusión, figuras, comunidad.
- Alt text fórmula: [Acción/Contexto] + [Elemento distintivo] + [Emoción/Resultado].
- Ejemplo alt: Integrantes del cuerpo de baile ensayando coreografía final con energía.
- Open Graph:
  - og:title: Formación carnavalesca integral — Escuela Arcoíris.
  - og:description: Danza, música y figuras. Tradición con inclusión.
  - og:image: /og/portada.jpg (1200x630).
- Twitter Card: summary_large_image.
- Canonical: https://www.carnaval-arcoiris.org/

---

## 6. Estilo y Tono Editorial

- Voz: Cercana, comunitaria, entusiasta pero profesional.
- Persona gramatical: Preferente primera persona plural (nosotros).
- Lecturabilidad: Frases ≤ 20 palabras cuando sea posible.
- Inclusión: Evitar lenguaje excluyente; usar neutro cuando proceda.
- Evitar: Jergas internas sin explicación, mayúsculas excesivas.

---

## 7. Accesibilidad de Contenido

- Contraste: Verificado con tokens (AA mínima).
- Enlaces: Texto descriptivo (no “haz clic aquí”).
- Formularios: Labels claros, mensajes de error concretos (Ej: “Introduce un correo válido”).
- Multimedia: Subtítulos para videos futuros, transcripciones en eventos.
- Galería modal: Añadir descripción extendida (aria-describedby).

---

## 8. Textos Legales (Resumen)

### Política de Privacidad (resumen corto)

Recopilamos datos de contacto (nombre, correo) únicamente para gestión de inscripciones y comunicación interna. No cedemos datos a terceros sin autorización legal. Puedes solicitar eliminación escribiendo a privacidad@carnaval-arcoiris.org.

### Términos de Uso (resumen corto)

El sitio provee información de actividades y permite solicitudes de inscripción. Uso indebido (spam, difusión de contenido ofensivo) implicará bloqueo. Propiedad de materiales gráficos pertenece a la Escuela salvo terceros acreditados.

### Cookies (resumen corto)

Usamos cookies técnicas y de preferencia (tema claro/oscuro). No empleamos perfiles publicitarios. Puedes ajustar preferencias desde el banner inicial.

Banner copy:
“Usamos cookies esenciales y de preferencia para mejorar tu experiencia. Aceptas su uso?”
Botones: Aceptar | Configurar | Rechazar

---

## 9. Plantillas de Email y Microcopy

### Email Bienvenida

Asunto: Bienvenido/a a la Escuela de Carnaval Arcoíris
Cuerpo:
Hola [Nombre],
Gracias por inscribirte. Pronto recibirás fechas de tu primer taller.
Cualquier consulta: info@carnaval-arcoiris.org
¡Nos vemos en el próximo ensayo!
Equipo Arcoíris

### Recordatorio de Evento

Asunto: Recordatorio — [Evento] mañana
Cuerpo:
Hola [Nombre], te recordamos: [Evento] — [Fecha y hora] en [Lugar].
Trae vestuario cómodo y agua. Hasta pronto.

### Confirmación de Mensaje (UI)

“Mensaje enviado. Te responderemos en 48 h.”

### Error genérico

“No pudimos procesar tu solicitud. Intenta de nuevo.”

### Estados de carga

- Cargando datos…
- Guardando cambios…
- Subiendo archivo…

---

## 10. Internacionalización (Claves sugeridas)

```json
{
  "hero.title": "Color, ritmo y tradición",
  "hero.subtitle": "Formando el carnaval del mañana...",
  "cta.main": "Inscribirme",
  "nav.contact": "Contacto",
  "nav.calendar": "Calendario",
  "form.name": "Nombre",
  "form.email": "Correo electrónico",
  "form.message": "Mensaje",
  "form.submit": "Enviar",
  "status.loading": "Cargando...",
  "status.error": "Error. Intenta nuevamente.",
  "status.success": "Acción completada."
}
```

---

## 11. Esquema JSON-LD (Ejemplo)

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Escuela de Carnaval Arcoíris",
    "url": "https://www.carnaval-arcoiris.org/",
    "description": "Formación artística comunitaria en danza, música y producción de carnaval.",
    "foundingDate": "1998",
    "sameAs": ["https://instagram.com/escuela-arcoiris", "https://facebook.com/escuela-arcoiris"],
    "department": [
      { "@type": "PerformingGroup", "name": "Cuerpo de Figuras" },
      { "@type": "DanceGroup", "name": "Cuerpo de Baile" },
      { "@type": "MusicGroup", "name": "Banda Percusión y Bronces" }
    ]
  }
</script>
```

---

## 12. Roadmap de Contenido Futuro

- Testimonios ampliados (≥6 con diversidad etaria).
- Página detallada de programas (objetivos, materiales requeridos).
- Reportajes del desfile anual (crónica + galería).
- Sección de recursos educativos (PDF guías, patrones de vestuario).
- Módulo inscripción dinámica (cupos y estados).
- Versión bilingüe (es/en).
- Galería filtrable por etiqueta/año/cuerpo.

---

## Plantilla Ficha Instructor

Nombre completo
Rol principal
Especialidad (ej: percusión afro-latino / coreografía contemporánea)
Bio corta (≤280 chars)
Trayectoria (bullet points)
Red social (Instagram / YouTube)
Foto alt: Retrato de [Nombre], instructor/a de [Especialidad].

---

## Tabla de Precios (Copy)

| Plan | Descripción | Ideal para | Precio |
| Mensual | Acceso base a 1 taller | Nuevos integrantes | €40 |
| Trimestral | 2 talleres + prioridad cupos | Progreso estable | €110 |
| Anual | Acceso completo + descuentos | Compromiso integral | €400 |

Nota: Becas sociales (solicitud vía formulario). Descuento familiar (segundo integrante -15%).

---

## FAQ Ampliado (texto final)

1. ¿Qué necesito para comenzar? Ropa cómoda y motivación. Materiales específicos se indican en cada taller.
2. ¿Hay becas? Sí, con cupos limitados según situación socioeconómica.
3. ¿Se puede asistir a un ensayo de prueba? Ofrecemos una clase abierta mensual.
4. ¿Aceptan voluntariado? Sí, en logística y producción — escribir a voluntariado@carnaval-arcoiris.org.
5. ¿Cómo gestionan la seguridad? Supervisión constante y protocolos básicos de salud y emergencias.

---

## Testimonios (Plantillas)

Formato:
“[Impacto personal].” — [Nombre], [Rol].
Ej:
“Aprendí a confiar en mi creatividad y en el trabajo colectivo.” — Marta, Figuras.

---

## Galería (Guías de Caption)

Patrón: Acción + contexto + matiz emocional.
Ej: Integrantes ajustando última pieza antes del desfile final.

---

## Microcopy Extra

- Vacío de listado: “Aún no hay eventos publicados. Vuelve pronto.”
- Filtro sin resultados: “Sin coincidencias. Ajusta criterios.”
- Confirmación descarga calendario: “Archivo generado correctamente.”

---

## Notas de Implementación

- Usar tono consistente en nuevos componentes.
- Centralizar textos en un objeto para i18n futura.
- Leer `referencias.md` para evitar divergencias de copy.

---

Fin del documento.
