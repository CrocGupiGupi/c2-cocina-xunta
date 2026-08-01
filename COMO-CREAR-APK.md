# Cómo conseguir un .apk instalable en Android

## Antes de nada: ¿de verdad te hace falta?

Instalar la app como PWA desde Chrome deja **exactamente el mismo resultado** que un APK: un icono en el escritorio, pantalla completa sin barra de navegador, y funciona sin conexión. Y además:

| | PWA desde Chrome | APK |
|---|---|---|
| Icono en el escritorio | Sí | Sí |
| Pantalla completa, sin barra | Sí | Sí |
| Funciona sin conexión | Sí | Sí |
| Ocupa | ~1 MB | ~5 MB |
| Se actualiza sola | Sí | Hay que reinstalar |
| Avisos de seguridad al instalar | Ninguno | «Fuente desconocida», hay que autorizar |
| Pasos para instalarlo | 3 toques | Descargar, autorizar fuentes, instalar |

En la práctica el APK es **más incómodo**, no menos. Si aun así lo quieres —por ejemplo para pasárselo a otra persona por WhatsApp sin explicarle nada—, aquí tienes cómo.

---

## Por qué no te lo puedo generar yo directamente

Construir un APK real y firmado requiere el SDK de Android (aapt2, d8, zipalign, apksigner) y descargarlo de los servidores de Google. Mi entorno de trabajo no tiene acceso a `dl.google.com`, `maven.org` ni `gradle.org`, así que no puedo compilarlo. Lo que sí he hecho es **dejar la aplicación preparada** para que cualquiera de las herramientas de abajo la convierta en APK sin que tengas que tocar nada: manifiesto completo, iconos en los tres formatos, capturas de pantalla y atajos.

---

## Opción 1 · PWABuilder — la recomendada

Herramienta gratuita de Microsoft. Genera un **APK firmado** de verdad, y también el `.aab` por si algún día quieres subirlo a Google Play.

1. Sube la carpeta `app` a internet. Lo más rápido: entra en **https://app.netlify.com/drop** y arrastra la carpeta. En segundos tienes una dirección tipo `https://algo.netlify.app`.
2. Entra en **https://www.pwabuilder.com**.
3. Pega esa dirección y pulsa **Start**.
4. Te dará una puntuación. Con los archivos tal como están debería salir en verde.
5. Pulsa **Package for stores** → **Android** → **Generate package**.
6. Descarga el ZIP. Dentro está:
   - `app-release-signed.apk` — este es el que se instala.
   - `signing.keystore` y `signing-key-info.txt` — **guárdalos**. Los necesitarás si algún día quieres publicar una actualización.
7. Pasa el `.apk` al móvil y ábrelo. Android pedirá permiso para instalar desde esa fuente: acéptalo.

**Nota importante:** el APK que genera PWABuilder es una *Trusted Web Activity*. Necesita conexión la primera vez que se abre; después funciona sin conexión gracias al service worker. Si quieres que funcione sin conexión **desde el primer arranque**, usa la opción 2.

---

## Opción 2 · APK totalmente offline, con los archivos dentro

Estas herramientas empaquetan los archivos HTML dentro del propio APK, así que no necesitan que la app esté alojada en ningún sitio y funcionan sin conexión desde el primer momento.

- **WebIntoApp** — https://www.webintoapp.com — admite subir un ZIP con los archivos HTML. Versión gratuita con marca de agua.
- **Median.co** (antes GoNative) — https://median.co — muy completo, capa gratuita limitada.
- **Appsgeyser** — https://appsgeyser.com — gratuito, incluye publicidad en la versión libre.

Para cualquiera de ellas: comprime la carpeta `app` en un ZIP y súbelo. Indica `index.html` como página de inicio.

---

## Opción 3 · Compilarlo tú con Android Studio

Es la vía limpia si te manejas o conoces a alguien que lo haga. Con **Bubblewrap**, la herramienta oficial de Google:

```
npm install -g @bubblewrap/cli
bubblewrap init --manifest https://TU-DIRECCION/manifest.webmanifest
bubblewrap build
```

Requiere Node.js, JDK 17 y el SDK de Android instalados. El resultado es el mismo APK firmado que da PWABuilder, pero con control total sobre el nombre del paquete, la versión y la clave de firma.

---

## Si solo quieres el icono en el móvil, sin APK

1. Abre la dirección de Netlify en **Chrome** en el móvil.
2. Menú **⋮** arriba a la derecha.
3. **«Instalar aplicación»**.

Ya está. Tres toques, sin avisos de seguridad, y se actualiza sola cuando yo añada preguntas nuevas y tú vuelvas a subir la carpeta.

En **iPad o iPhone** el APK no sirve de nada: allí el único camino es Safari → botón **Compartir** → **«Añadir a pantalla de inicio»**.
