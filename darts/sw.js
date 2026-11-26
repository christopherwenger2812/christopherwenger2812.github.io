/* Oche Stars: Offline-Speicher. Das Spiel wird beim ersten Öffnen gespeichert und läuft danach auch ohne Internet. */
const CACHE = 'oche-stars-v28';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('oche-stars-') && k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

/* Erst das Netz fragen (damit Updates sofort ankommen), ohne Netz den Speicher nehmen. */
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res && res.ok) { const c = await caches.open(CACHE); c.put(req, res.clone()); }
      return res;
    } catch (e) {
      const hit = await caches.match(req, { ignoreSearch: true });
      return hit || caches.match('./index.html');
    }
  })());
});
