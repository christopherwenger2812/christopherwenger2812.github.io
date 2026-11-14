/**
 * Christophers Space – Offline-Unterstützung
 *
 * Diese Datei gehört neben die index.html (gleicher Ordner im GitHub-Repository).
 * Sie speichert die App und die benötigten Bibliotheken im Browser, damit alles
 * auch ohne Internet startet. Deine Daten liegen weiterhin im Browser-Speicher
 * und werden hier nicht angefasst.
 */
const CACHE = 'space-cache-v1';
const APP_URLS = ['./', './index.html'];

/* Nur diese fremden Adressen werden zwischengespeichert (Bibliotheken und Schriften). */
const EXTERN = [
    /^https:\/\/cdn\.tailwindcss\.com\//,
    /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome\//,
    /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/pdf\.js\//,
    /^https:\/\/cdn\.jsdelivr\.net\/npm\//,
    /^https:\/\/fonts\.googleapis\.com\//,
    /^https:\/\/fonts\.gstatic\.com\//
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE)
            .then(c => Promise.all(APP_URLS.map(u => c.add(new Request(u, { cache: 'reload' })).catch(() => {}))))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });

self.addEventListener('fetch', e => {
    const req = e.request;
    if (req.method !== 'GET') return;
    let url;
    try { url = new URL(req.url); } catch (err) { return; }
    const own = url.origin === self.location.origin;
    const lib = EXTERN.some(r => r.test(req.url));
    // Google-Script, Passwort-Prüfung und PeerJS-Server laufen immer direkt ins Netz
    if (!own && !lib) return;
    if (req.mode === 'navigate' || (own && (req.cache === 'reload' || req.cache === 'no-store'))) {
        e.respondWith(netzZuerst(req));
        return;
    }
    e.respondWith(speicherZuerst(req));
});

/* Seite selbst: immer zuerst aus dem Netz (damit Updates ankommen), sonst aus dem Speicher */
async function netzZuerst(req) {
    const key = seitenSchluessel(req);
    try {
        const res = await fetch(req);
        if (res && res.ok) { const c = await caches.open(CACHE); await c.put(key, res.clone()); }
        return res;
    } catch (err) {
        const c = await caches.open(CACHE);
        return (await c.match(key)) || (await c.match('./index.html')) || (await c.match('./')) || Response.error();
    }
}

/* Bibliotheken und Schriften: aus dem Speicher anzeigen und im Hintergrund auffrischen */
async function speicherZuerst(req) {
    const c = await caches.open(CACHE);
    const hit = await c.match(req, { ignoreVary: true });
    const netz = fetch(req).then(res => {
        if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()).catch(() => {});
        return res;
    }).catch(() => null);
    if (hit) { netz.catch(() => {}); return hit; }
    return (await netz) || Response.error();
}

function seitenSchluessel(req) {
    const u = new URL(req.url);
    return new Request(u.origin + u.pathname);
}
