/* Service worker: permite usar la aplicación sin conexión.

   Sobre las actualizaciones. Los scripts se piden con un «?v=N» que cambia en
   cada publicación, así que una versión nueva estrena URL y el navegador no
   puede devolver la anterior. Además, al instalarse se descargan con
   cache:'reload' para saltarse también la caché HTTP del navegador, y el
   index.html se sirve siempre desde la red cuando la hay, de modo que las
   referencias a la versión nueva lleguen aunque el resto esté cacheado. */
const CACHE = 'auxcocina-v44';
const FILES = ['./','./index.html','./app.js?v=44','./preguntas.js?v=44','./temario.js?v=44','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(FILES.map(f =>
        fetch(new Request(f, { cache: 'reload' }))
          .then(r => (r && r.ok) ? c.put(f, r) : null)
          .catch(() => null)
      )))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const esDocumento = e.request.mode === 'navigate' ||
                      url.pathname.endsWith('/') ||
                      url.pathname.endsWith('index.html');

  if (esDocumento) {
    /* El documento, primero de la red: así se reciben las rutas con la
       versión nueva. Si no hay conexión, se usa la copia guardada. */
    e.respondWith(
      fetch(e.request)
        .then(r => {
          const copia = r.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copia));
          return r;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  /* El resto, primero de la caché: son ficheros versionados, de modo que
     una URL concreta nunca cambia de contenido. */
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      if (resp && resp.ok) {
        const copia = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copia));
      }
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
