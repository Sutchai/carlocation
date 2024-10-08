self.addEventListener('install', event = {
  event.waitUntil(
    caches.open('pwa-cache').then(cache = {
      return cache.addAll([
        '.index.html',
        '.app.js',
        'httpsunpkg.comleaflet@1.7.1distleaflet.css',
        'httpsunpkg.comleaflet@1.7.1distleaflet.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event = {
  event.respondWith(
    caches.match(event.request).then(response = {
      return response  fetch(event.request);
    })
  );
});