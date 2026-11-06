# Cómo usar la aplicación de test

La aplicación es una **PWA**: una única aplicación web que funciona igual en PC, en móvil Android, en tablet y en iPad, se instala como si fuera una app nativa y **funciona sin conexión a internet**. Todo tu progreso se guarda en el propio dispositivo.

---

## 1. En el PC — ahora mismo, sin instalar nada

Haz doble clic en **`index.html`**. Se abre en el navegador y funciona todo: los test, los simulacros, las estadísticas y el repaso.

Con este método el progreso se guarda, pero **no se sincroniza con el móvil** y no se instala como aplicación. Para eso hace falta el paso 2.

---

## 2. Para instalarla en el móvil, la tablet o el iPad

Un navegador solo permite instalar una PWA si la página se sirve por internet (`https://`), no desde un archivo local. Necesitas poner la carpeta `app` en una dirección web. Tienes tres opciones, de más fácil a más técnica.

### Opción A · Netlify Drop — la más rápida, sin registrarte

1. Entra en **https://app.netlify.com/drop** desde el PC.
2. Arrastra la carpeta **`app`** entera a la ventana.
3. En unos segundos te da una dirección del tipo `https://algo-aleatorio.netlify.app`.
4. Abre esa dirección en el móvil y sigue el paso 3 de aquí abajo.

La dirección es pública pero imposible de adivinar. Si te registras (gratis), puedes cambiarle el nombre y que no caduque.

### Opción B · GitHub Pages — gratis y permanente

1. Crea una cuenta en **https://github.com** si no la tienes.
2. Crea un repositorio nuevo, por ejemplo `test-cocina`.
3. Sube los archivos de la carpeta `app`.
4. En *Settings → Pages*, en «Branch» elige `main` y `/ (root)`. Guarda.
5. En un par de minutos tendrás `https://tuusuario.github.io/test-cocina/`.

### Opción C · Servidor en tu propio PC — solo para usarlo en casa

Con Python instalado, abre una terminal en la carpeta `app` y ejecuta:

```
python -m http.server 8000
```

Después, desde el móvil conectado a la misma wifi, entra en `http://LA-IP-DE-TU-PC:8000`. En Windows, la IP la ves con `ipconfig`.

Con este método el móvil solo funciona mientras el PC esté encendido y en la misma red.

---

## 3. Instalar la app una vez tienes la dirección web

### Android (móvil o tablet), con Chrome
1. Abre la dirección.
2. Toca el menú **⋮** arriba a la derecha.
3. Elige **«Instalar aplicación»** o **«Añadir a pantalla de inicio»**.
4. Aparecerá un icono en el escritorio y se abrirá a pantalla completa, sin barra de navegador.

### iPad y iPhone, con Safari
1. Abre la dirección **en Safari** (en Chrome para iOS no funciona la instalación).
2. Toca el botón **Compartir** (el cuadrado con la flecha hacia arriba).
3. Baja y elige **«Añadir a pantalla de inicio»**.
4. Confirma. Ya tienes el icono.

### PC con Chrome o Edge
En la barra de direcciones aparece un icono de instalación (una pantalla con una flecha). Púlsalo y confirma.

---

## 4. Qué hace la aplicación

| Función | Descripción |
|---|---|
| **Temario completo** | Los 22 temas íntegros dentro de la propia app: texto literal de los artículos, explicación, esquemas, tablas y trampas de examen. Con índice por secciones, búsqueda dentro del tema y búsqueda global en todo el temario |
| **Test rápido** | 20 preguntas de todo el temario, priorizando lo que menos dominas |
| **Test por tema** | Eliges temas, número de preguntas y modo estudio o examen con cronómetro |
| **Simulacro oficial** | Réplica exacta del examen: 1.er ejercicio (80 preguntas), 2.º ejercicio (40 prácticas) y simulacro completo de 120 preguntas en 160 minutos |
| **Repaso espaciado** | El sistema calcula cuándo debes volver a ver cada pregunta, como en Anki |
| **Falladas y marcadas** | Cuaderno de las que se te resisten y de las que marcas con la estrella |
| **Estadísticas** | Acierto por tema, evolución de los últimos 14 días, racha de días seguidos, preguntas dominadas y flojas |
| **Bilingüe** | Botón GL/ES en la cabecera para cambiar de idioma al instante, incluso a mitad de un test |
| **Modo claro y oscuro** | Automático según el sistema, o forzado |
| **Sin conexión** | Una vez instalada, funciona en el metro, en el coche o donde sea |
| **Copia de seguridad** | En Ajustes puedes exportar tu progreso a un archivo y volver a importarlo en otro dispositivo |
| **Todo conectado** | Desde cualquier pregunta puedes saltar al tema del que sale, y desde cualquier tema lanzar un test de esas 20 preguntas. La app recuerda por dónde ibas leyendo |

---

## 5. Cómo se corrige (convocatoria 2026-27)

Convocatoria del **DOG núm. 208, de 30 de octubre de 2026** (base II.1.1). Cada ejercicio es **eliminatorio** y se corrige **por separado**:

- **Primer ejercicio**: 80 preguntas —20 de la parte general y 60 de la específica— más **5 de reserva** (2 + 3). De 0 a 60 puntos, **mínimo 30**. Hay que llegar al **40 %** de respuestas correctas una vez hechos los descuentos. En acceso libre, además, solo lo superan las mejores notas hasta **cinco veces** el número de plazas. La promoción interna está exenta de la parte general.
- **Segundo ejercicio**: 40 preguntas prácticas de la parte específica, más **3 de reserva**. De 0 a 40 puntos, **mínimo 20**, con el **50 %** de respuestas correctas netas. **Solo se corrige si se supera el primero**; si no, el aspirante queda «no evaluable».
- Los dos se hacen **en la misma sesión**, con un máximo conjunto de **160 minutos**. Cuatro respuestas por pregunta, una correcta. **Cada error descuenta un cuarto de un acierto**; las no contestadas ni puntúan ni penalizan.
- **Tercer ejercicio**: prueba práctica de cocina (menú de primero, segundo y postre en 60 minutos, de 0 a 100 puntos). No se simula en la app; la guía está en el anexo A3 del temario.
- **Prueba de gallego**: traducción castellano–gallego y gallego–castellano, 60 minutos, apto o no apto. Exento quien acredite el **Celga 3** antes de que acabe el plazo de solicitudes.

**El simulacro de la app** corrige cada ejercicio por separado y solo da por superado el completo si se superan los dos. Las bases fijan el porcentaje mínimo y los puntos mínimos, pero **no la fórmula** que convierte aciertos en puntos: la app la estima de forma que el 40 % (o el 50 %) equivalga a los 30 (o 20) puntos. Tómalo como **orientativo**, sobre todo en acceso libre, donde el corte real depende de las notas de los demás.

La penalización se puede desactivar en Ajustes mientras estudias, pero conviene dejarla puesta para acostumbrarse a decidir cuándo merece la pena arriesgar. En los simulacros se aplica siempre.

---

## 6. Estado del banco de preguntas

Bilingüe, revisado en octubre y noviembre de 2026. El recuento por tema se ve en la propia app (Estadísticas) y con `node tools/validar_preguntas.js`. Las preguntas importadas de los tests de academia que no se han podido contrastar llevan un aviso y se pueden excluir en Ajustes con «Solo preguntas verificadas».

El tema 15 del programa antiguo (CENPOS) no figura en el programa 2026-27; sus preguntas están retiradas del banco.

## 7. Añadir más preguntas

El banco está en **`preguntas.js`**, en texto plano. Cada pregunta tiene esta forma:

```js
{id:"E6-006", tema:"E6", tipo:"practica", r:2, ref:"artículo o fuente",
 es:{q:"Enunciado…", o:["Opción A","Opción B","Opción C","Opción D"], exp:"Explicación…"},
 gl:{q:"Enunciado…", o:["Opción A","Opción B","Opción C","Opción D"], exp:"Explicación…"}},
```

- `r` es el índice de la respuesta correcta: **0 es la primera opción, 3 la cuarta**.
- Las opciones deben ir **en el mismo orden** en castellano y en gallego.
- `tipo` puede ser `"teorica"` o `"practica"`. Las prácticas son las que alimentan el segundo ejercicio del simulacro.

Si añades preguntas a mano, vuelve a subir el archivo al sitio donde tengas alojada la app.
