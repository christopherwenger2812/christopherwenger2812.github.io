# christopherwenger2812.github.io

Meine persönlichen Web-Apps, gehostet auf **GitHub Pages**. Jede App liegt in einem eigenen Ordner, hat ein eigenes README und lässt sich auf dem Handy oder PC als eigene App installieren.

| App | Wofür | Adresse | Doku |
|---|---|---|---|
| **Alltag** | Kalender, To-Dos, Einkauf und Tresor in einer App | https://christopherwenger2812.github.io/alltag/ | [alltag/README.md](alltag/README.md) |
| **Oche Stars** | Darts-Karrierespiel | https://christopherwenger2812.github.io/darts/ | [darts/README.md](darts/README.md) |

Die Startseite https://christopherwenger2812.github.io/ verlinkt auf beide Apps.

## Aufbau

```
/
├── index.html              Startseite mit Links zu beiden Apps
├── sw.js                   Aufräum-Service-Worker (entfernt die alte Alltag-Registrierung im Hauptordner)
├── README.md               diese Übersicht
│
├── alltag/                 Alltag
│   ├── index.html
│   ├── manifest.webmanifest
│   ├── sw.js
│   ├── lib/
│   └── Icons (.png)
│
└── darts/                  Oche Stars
    ├── index.html          das komplette Spiel in einer Datei
    ├── manifest.webmanifest
    ├── sw.js               Offline-Cache, Name wird bei jedem Update hochgezählt
    ├── Icons (.png)
    └── audio/caller/       optional: Caller-Sprachdateien (MP3 + index.json)
```

## Updates einspielen

1. Den Ordner der App öffnen (`alltag/` oder `darts/`).
2. **Add file → Upload files** und nur die geänderten Dateien hochladen. Gleichnamige Dateien werden ersetzt.
3. Mit **Commit changes** speichern. Nach ein bis zwei Minuten ist die neue Version online.
4. Die App einmal schließen und wieder öffnen. Der Service Worker lädt dann die neue Version.

GitHub lädt höchstens **100 Dateien pro Upload** hoch und entpackt keine ZIP-Dateien. Größere Mengen, zum Beispiel die Caller-Sprachdateien, in mehreren Durchgängen hochladen.

## Warum getrennte Ordner?

Eine installierte Web-App öffnet alle Links in ihrem Bereich (Scope). Als Alltag noch im Hauptordner lag, gehörte die ganze Seite zu Alltag, und auch `/darts/` öffnete sich in der Alltag-App. Seit jede App einen eigenen Ordner hat, hat auch jede ihren eigenen Bereich.

## Spielstände und Daten

Beide Apps speichern ihre Daten nur im Browser des jeweiligen Geräts (localStorage bzw. IndexedDB), nicht auf GitHub. Wer die Browserdaten löscht, löscht auch die Daten der Apps. Darum regelmäßig die Export- bzw. Backup-Funktion der jeweiligen App nutzen.

## Alte Dateien im Hauptordner

Nach dem Umzug können im Hauptordner noch `manifest.webmanifest`, `lib/` und alte `.png`-Dateien liegen. Sie werden nicht mehr benutzt und stören nicht. Du kannst sie bei Gelegenheit löschen (Datei öffnen → ⋯ → **Delete file**).
