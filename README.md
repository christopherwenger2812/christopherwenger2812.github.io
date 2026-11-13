# Christopher's Space

Eine persönliche All-in-One-App für Kalender, Aufgaben, Notizen, Einkauf, E-Mail und Passwörter – als einzelne HTML-Datei, gehostet über GitHub Pages.

**→ [christopherwenger2812.github.io](https://christopherwenger2812.github.io/)**

Keine Installation, kein Konto, kein Server: Die App läuft im Browser, speichert alles lokal und gleicht auf Wunsch verschlüsselt mit den eigenen Geräten ab.

---

## Was drin ist

**Heute** – Übersicht über Termine, offene Aufgaben, ungelesene Mails und die Einkaufsliste. Aufgaben lassen sich direkt von hier anlegen.

**Kalender** – Monat, Woche und Tag, wiederkehrende Termine, Feiertage je Bundesland, Erinnerungen, Import aus Google Kalender, Countdown für die nächsten Termine.

**To-Dos** – Listen im Stil von Microsoft To Do: Mein Tag, Wichtig, Geplant, eigene Listen, Fälligkeiten, wiederkehrende Aufgaben, Notizen je Aufgabe.

**Notizen** – Pinnwand mit Farben, Anheften, Volltextsuche und „als Aufgabe übernehmen".

**Einkauf** – Im Stil von Bring!: 535 Produkte mit eigenem Symbol je Artikel, nach Kategorien gruppiert und einklappbar, mehrere Listen, Mengen und Varianten, Teilen als Text.

**E-Mail** – Gmail im Outlook-Aufbau: Ordnerleiste, nach Zeitraum gruppierte Nachrichtenliste, Lesebereich, Antworten und Weiterleiten, Anhänge, Signatur und Textbausteine, Auswahl der Absenderadresse („Senden als"), Umwandeln einer Mail in eine Aufgabe oder einen Termin.

**Tresor** – Passwortverwaltung im Stil von Bitwarden: mehrere Tresore mit je eigenem Master-Passwort, Logins, Karten, Notizen und Identitäten, Ordner, Passwortgenerator, 2FA-Codes (TOTP), Passwort-Gesundheitscheck inklusive Abgleich mit bekannten Datenlecks, automatische Sperre, Import und Export (auch Bitwarden-Format).

**Dazu** – Globale Suche über alles (Strg + K), 13 Designs mit Schrift-, Ecken- und Hintergrundoptionen, Geräte-Abgleich, automatische Sicherung in Google Drive, Offline-Betrieb, automatische Update-Prüfung.

---

## Einrichten

### 1. Hosten

Beide Dateien in dieses Repository legen und GitHub Pages aktivieren (Settings → Pages → Branch `main`, Ordner `/root`):

```
index.html    die komplette App
sw.js         für den Offline-Betrieb
```

Danach die Seite einmal mit Internet öffnen. Von da an startet sie auch ohne Verbindung, und über „Zum Startbildschirm hinzufügen" verhält sie sich wie eine installierte App.

### 2. Geräte-Abgleich (optional)

Der Abgleich läuft über ein eigenes Google-Apps-Script im eigenen Google-Drive, zusätzlich direkt zwischen Geräten im selben Netz über PeerJS.

1. In der App: Einstellungen → Geräte-Abgleich
2. Raumname und Sync-Passwort festlegen (beides auf allen Geräten gleich)
3. „Script kopieren", bei [script.google.com](https://script.google.com) ein neues Projekt anlegen, einfügen
4. Bereitstellen → Neue Bereitstellung → Web-App, Ausführen als „Ich", Zugriff „Jeder"
5. Die `…/exec`-URL zurück in die App

Alles wird mit dem Sync-Passwort im Browser verschlüsselt, bevor es das Gerät verlässt. Google sieht nur eine verschlüsselte Datei. Geht das Sync-Passwort verloren, sind die abgelegten Daten nicht wiederherstellbar.

### 3. E-Mail (optional)

Gmail wird über ein zweites, eigenes Apps-Script angebunden: Einstellungen → E-Mail → Postfächer, dort dem gleichen Weg folgen. Das Script ist nur mit einem zufälligen Schlüssel erreichbar, der in der App erzeugt wird.

Andere Anbieter (GMX, web.de, Outlook.com, iCloud) lassen sich nur über eine Weiterleitung an die Gmail-Adresse einbinden.

### 4. Updates

Die App prüft beim Start, beim Zurückkehren und alle 15 Minuten, ob auf GitHub eine neue Version liegt, und bietet sie an. Nach einer Änderung an `index.html` also einfach hochladen – die Geräte ziehen von selbst nach. Gespeicherte Daten bleiben dabei erhalten.

Wenn sich eines der beiden Apps-Scripts geändert hat, muss es neu kopiert und als **neue Version** bereitgestellt werden. Die App weist darauf hin, falls ein Script veraltet ist.

---

## Wo die Daten liegen

Alles im Browser des jeweiligen Geräts (`localStorage`). Es gibt keinen Server, der mitliest, und keine Fremdanbieter außer den eigenen Google-Scripts.

- **Tresore** sind mit AES-256-GCM verschlüsselt, der Schlüssel wird per PBKDF2 aus dem Master-Passwort abgeleitet. Entschlüsselt wird nur im Arbeitsspeicher, solange der Tresor offen ist.
- **Abgleich und Sicherungen** werden vor dem Hochladen verschlüsselt.
- **Der Passwort-Check** gegen bekannte Datenlecks sendet nur die ersten fünf Zeichen eines Hashwerts an die Have-I-Been-Pwned-API, nie das Passwort selbst.
- **Mails** werden nicht gespeichert, sondern bei jedem Öffnen frisch aus dem eigenen Postfach geladen. Fremdes HTML wird vor der Anzeige bereinigt und in einem abgeschotteten Rahmen angezeigt, externe Bilder sind standardmäßig blockiert.

Beim Löschen der Browserdaten ist alles weg, was nicht abgeglichen oder gesichert wurde. Deshalb: Sicherung in Google Drive einschalten oder gelegentlich über Einstellungen → Daten & Backup exportieren.

---

## Technisch

Eine einzige HTML-Datei, rund 450 KB, ohne Build-Schritt. Aus dem Netz kommen nur [Tailwind CSS](https://tailwindcss.com) 3.4, [Alpine.js](https://alpinejs.dev) 3.14, [Font Awesome](https://fontawesome.com) 6.4, Plus Jakarta Sans und – wenn der Abgleich zwischen Geräten läuft – [PeerJS](https://peerjs.com) 1.5. Mit `sw.js` liegen auch diese nach dem ersten Start lokal vor.

Das Layout richtet sich nach Fensterbreite und Eingabeart: unter 768 Pixel die untere Navigationsleiste, unter 640 Pixel Dialoge als Blatt von unten, bei Touchbedienung größere Tippflächen.

---

## Grenzen

- Erinnerungen erscheinen nur, solange die App im Browser geöffnet ist.
- Passwörter lassen sich nicht automatisch in andere Apps oder Webseiten einfüllen.
- Standortbezogene Erinnerungen sind nicht möglich.
- E-Mail und Abgleich brauchen Internet; der Rest funktioniert offline.

---

Privates Projekt, geschrieben für den eigenen Gebrauch. Wer es nachbauen möchte: Die Datei ist bewusst eigenständig und mit deutschen Kommentaren versehen.
