# christopherwenger2812.github.io

Meine persönlichen Web-Apps auf **GitHub Pages**. Jede App liegt in einem eigenen Ordner, hat ihr eigenes README und lässt sich als eigene App installieren.

| App | Ordner | Adresse | Beschreibung |
|---|---|---|---|
| **Alltag** | [`alltag/`](alltag/) | https://christopherwenger2812.github.io/alltag/ | [alltag/README.md](alltag/README.md) |
| **Darts Karriere** | [`darts/`](darts/) | https://christopherwenger2812.github.io/darts/ | [darts/README.md](darts/README.md) |

Die Startseite https://christopherwenger2812.github.io/ verlinkt auf beide Apps.

## Aufbau

```
/
├── index.html    Startseite mit Links zu beiden Apps
├── sw.js         Aufräum-Service-Worker: entfernt die alte Alltag-Registrierung im Hauptordner
├── README.md     diese Übersicht
├── alltag/       Alltag (PWA mit Manifest, Service Worker, Icons, lib/)
└── darts/        Darts Karriere (index.html, Manifest, Icons)
```

## Warum getrennte Ordner?

Eine installierte Web-App öffnet alle Links in ihrem Bereich (Scope). Lag Alltag im Hauptordner, gehörte die ganze Seite zu Alltag, und auch `/darts/` öffnete sich in der Alltag-App. Seit Alltag in `alltag/` liegt, hat jede App ihren eigenen Bereich.

## Alte Dateien im Hauptordner

Nach dem Umzug können im Hauptordner noch `manifest.webmanifest`, `lib/` und die alten `.png`-Dateien liegen. Sie werden nicht mehr benutzt und stören nicht. Du kannst sie bei Gelegenheit löschen (Datei öffnen → ⋯ → Delete file).
