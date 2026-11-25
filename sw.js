// Aufräum-Service-Worker für den Hauptordner.
// Alltag liegt jetzt in /alltag/ und hat dort seinen eigenen Service Worker.
// Dieser Worker entfernt die alte Registrierung im Hauptordner, die sonst
// auch /darts/ kontrolliert hat, und lädt offene Seiten einmal neu.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    for (const client of clients) client.navigate(client.url);
  })());
});
