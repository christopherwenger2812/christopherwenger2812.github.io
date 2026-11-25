# Alltag

Persönliche All-in-One-App für PC und Handy. Sie ist eine einzelne HTML-Datei, installierbar als **PWA** und gehostet über **GitHub Pages**.

**Adresse:** https://christopherwenger2812.github.io/alltag/

> Im selben Repo liegt außerdem das Spiel **Darts Karriere** im Ordner [`darts/`](../darts/).

## Funktionen

- **Kalender** für Termine im Überblick
- **To-Dos** mit Aufgaben und Erledigt-Status
- **Einkaufsliste**
- **Ablesungen**, um Zählerstände zu erfassen
- **Tresor** als geschützter Bereich für vertrauliche Notizen
- **Shortcuts** auf dem Startbildschirm: Aufgabe, Einkauf, Ablesung
- **Offline nutzbar** über den Service Worker

## Dateien

```
alltag/
├── index.html              die App
├── manifest.webmanifest    PWA-Manifest (Name, Icons, Shortcuts)
├── sw.js                   Service Worker (Offline-Cache)
├── lib/                    lokale Bibliotheken: Tailwind, Font Awesome, Alpine.js, Fonts
├── icon-192.png            App-Icons
├── icon-512.png
├── icon-maskable-512.png
├── apple-touch-icon.png
├── shortcut-aufgabe.png    Icons für die Shortcuts
├── shortcut-einkauf.png
├── shortcut-ablesung.png
└── README.md               diese Datei
```

## Installation auf dem Handy

1. https://christopherwenger2812.github.io/alltag/ in **Chrome** öffnen.
2. Oben rechts auf **⋮** tippen, dann auf **„App installieren“**.
3. Alltag startet danach wie eine normale App. Ein langer Druck auf das Icon zeigt die Shortcuts.

## Daten

- Alle Daten liegen **nur lokal im Browser** des Geräts. Es gibt keinen Server.
- Ein Update der Dateien löscht keine Daten.
- Auf einem anderen Gerät oder in einem anderen Browser startet die App leer.
- Browserdaten löschen entfernt auch die App-Daten.

## Offline und Service Worker

- Cache-Name: `space-cache-v2`. Beim Aktivieren werden ältere Caches gelöscht.
- Seitenaufrufe laufen **network-first**: Online kommt immer die neueste Version, offline die gespeicherte Kopie.
- Bibliotheken, Schriften und Bilder laufen **cache-first** und werden im Hintergrund aktualisiert.
- Fehlen Dateien in `lib/`, lädt die App sie aus dem CDN.

## Update einspielen

1. Geänderte Dateien auf GitHub hochladen: **Add file → Upload files → Commit changes**.
2. Ändern sich Icons, Manifest oder Dateien in `lib/`, in `sw.js` den Cache-Namen hochzählen, z. B. `space-cache-v2` → `space-cache-v3`.
3. Nach ein bis zwei Minuten ist die neue Version online. Die App einmal online öffnen, damit sich der Service Worker aktualisiert.

## Hosting

- GitHub Pages, Branch `main`, Ordner `/` (Root), die App liegt im Unterordner `alltag/`
- Der Bereich (Scope) der App ist `/alltag/`. Dadurch öffnen sich andere Seiten im Repo, z. B. `/darts/`, nicht mehr in der Alltag-App.
- Einstellungen: **Settings → Pages**
