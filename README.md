# Test Auxiliar de Cociña · Xunta de Galicia

Aplicación de estudio para el proceso selectivo de ingreso en el **cuerpo de auxiliares de carácter técnico de Administración especial de la Xunta de Galicia, subgrupo C2, escala auxiliar de cocina**, convocado por la Resolución de 24 de junio de 2025 (DOG núm. 123, de 30 de junio).

**→ https://crocgupigupi.github.io/c2-cocina-xunta/**

Funciona en ordenador, móvil Android, tablet e iPad. Se instala como aplicación y funciona sin conexión.

## Qué incluye

- **Temario completo**: los 22 temas con texto literal de los artículos, explicación, esquemas y trampas de examen. Con índice por secciones y búsqueda en todo el temario.
- **607 preguntas** tipo test, bilingües en castellano y gallego, con explicación y referencia a la fuente en cada una.
- **Simulacro oficial**: réplica del examen real. Primer ejercicio de 80 preguntas (20 generales + 60 específicas), segundo de 40 prácticas, penalización de un cuarto por error y 160 minutos.
- **Repaso espaciado**, cuaderno de falladas y marcadas, estadísticas por tema y racha de días.

## Instalación

- **Android (Chrome)**: menú ⋮ → *Instalar aplicación*
- **iPad / iPhone (Safari)**: Compartir → *Añadir a pantalla de inicio*
- **Ordenador (Chrome o Edge)**: icono de instalación en la barra de direcciones

## Estructura

| Fichero | Contenido |
|---|---|
| `index.html` | Interfaz y estilos |
| `app.js` | Motor: test, simulacros, repaso, temario, estadísticas |
| `preguntas.js` | Banco de preguntas |
| `temario.js` | Los 22 temas completos |
| `sw.js` | Funcionamiento sin conexión |
| `manifest.webmanifest` | Datos de instalación |

## Aviso

El contenido se ha elaborado a partir de fuentes oficiales (BOE, DOG, AESAN, MAPA) verificadas en su momento. **La normativa cambia**: conviene comprobar la vigencia de los textos antes del examen. Cada tema incluye una nota de trazabilidad que indica qué es texto literal y qué es explicación.
