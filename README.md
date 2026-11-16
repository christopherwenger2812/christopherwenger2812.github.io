# Alltag

Eine persönliche All-in-One-App für Kalender, Aufgaben, Notizen, Einkauf, Rezepte, Verbrauch, E-Mail und Passwörter – als einzelne HTML-Datei, gehostet über GitHub Pages.

**→ [christopherwenger2812.github.io](https://christopherwenger2812.github.io/)**

Keine Installation, kein Konto, kein Server: Die App läuft im Browser, speichert alles lokal und gleicht auf Wunsch verschlüsselt mit den eigenen Geräten ab.

---

## Was drin ist

**Heute** – Übersicht über Termine, offene Aufgaben, ungelesene Mails und die Einkaufsliste. Aufgaben lassen sich direkt von hier anlegen.

**Kalender** – Monat, Woche und Tag, wiederkehrende Termine, Feiertage je Bundesland, Erinnerungen, Import aus Google Kalender, Countdown für die nächsten Termine.

**To-Dos** – Listen im Stil von Microsoft To Do: Mein Tag, Wichtig, Geplant, eigene Listen, Fälligkeiten, wiederkehrende Aufgaben, Notizen je Aufgabe.

**Notizen** – Pinnwand mit Farben, Anheften, Volltextsuche und „als Aufgabe übernehmen".

**Einkauf** – Im Stil von Bring!: 535 Produkte mit eigenem Symbol je Artikel, nach Kategorien gruppiert und einklappbar, mehrere Listen, Mengen und Varianten, Teilen als Text.

**Rezepte** – Eigene Rezepte mit Zutaten und Schritten, Portionen hoch- und runterrechnen, Zutaten direkt auf die Einkaufsliste. Einlesen per Link (über das eigene Google-Script), aus einer PDF oder aus eingefügtem Text.

**Wetter** – Eigene Seite für mehrere Orte, jeder mit aktueller Lage und vier Tagen Vorschau. Der erste Ort steht auf der Startseite. Aktualisiert sich alle 15 Minuten von selbst, solange die App offen ist.

**Kundenkarten** – Payback, DeutschlandCard, dm, Ikea Family und alles andere mit aufgedruckter Nummer. Der Strichcode wird in der App erzeugt (EAN-13, EAN-8, Code 128) und ist auch offline da. Karten, deren Code die jeweilige App bei jedem Einkauf neu erzeugt, lassen sich nicht ablegen – ein gespeicherter Abzug wäre an der Kasse ungültig.

**Verbrauch** – Zähler für Strom, Gas und Wasser. Aus den Ablesungen entstehen Tagesschnitt, Hochrechnung aufs Jahr, Vergleich mit dem geplanten Jahreswert und die Kosten gegen den monatlichen Abschlag, dazu ein Balkendiagramm je Monat.

**E-Mail** – Gmail im Outlook-Aufbau: Ordnerleiste, nach Zeitraum gruppierte Nachrichtenliste, Lesebereich, Antworten und Weiterleiten, Anhänge, Signatur und Textbausteine, Auswahl der Absenderadresse („Senden als"), Umwandeln einer Mail in eine Aufgabe oder einen Termin.

**Tresor** – Passwortverwaltung im Stil von Bitwarden: mehrere Tresore mit je eigenem Master-Passwort, Logins, Karten, Notizen und Identitäten, Ordner, Passwortgenerator, 2FA-Codes (TOTP), Passwort-Gesundheitscheck inklusive Abgleich mit bekannten Datenlecks, automatische Sperre, Import und Export (auch Bitwarden-Format).

**Dazu** – Aktuelle Uhrzeit im Kopf, eigener App-Name, globale Suche über alles (Strg + K), 13 Designs mit Schrift-, Ecken- und Hintergrundoptionen, Geräte-Abgleich, automatische Sicherung in Google Drive, Offline-Betrieb, automatische Update-Prüfung.

---

## Wie es aussieht

Jeder Bereich hat eine eigene Farbwelt: Kalender blau, To-Dos violett, Notizen ocker, Rezepte rot, Verbrauch orange, Einkauf grün, E-Mail dunkelblau, Tresor stahlgrau. Die Farbe steckt nicht nur im Symbol, sondern auch in den Flächen und Rändern der Karten – man sieht also, wo man ist, bevor man etwas liest.

Je Bereich ist dafür genau eine Farbe hinterlegt. Schriftfarbe, Flächen- und Randton werden daraus berechnet und passen sich dem gewählten Design an: in hellen Designs dunkelt die Farbe ab, in dunklen hellt sie auf. Alle 130 Kombinationen aus 13 Designs und 10 Bereichen liegen über dem Lesbarkeitsgrenzwert von 4,5:1.

Die frei wählbare Akzentfarbe bleibt davon unberührt – sie steuert Knöpfe, Links und Auswahlzustände. Ob die Schrift darauf schwarz oder weiß ist, entscheidet die App anhand der Helligkeit.

Überschriften und große Zahlen laufen in Bricolage Grotesque, die Oberfläche in Manrope. Zahlen stehen auf fester Breite, damit Beträge und Zählerstände untereinander passen.

---

## Einrichten

### 1. Hosten

Beide Dateien in dieses Repository legen und GitHub Pages aktivieren (Settings → Pages → Branch `main`, Ordner `/root`):

```
index.html                 die komplette App
sw.js                      für den Offline-Betrieb
manifest.webmanifest       Name und Symbol der installierten App
icon-192.png               Symbol
icon-512.png               Symbol
icon-maskable-512.png      Symbol für runde Darstellung
apple-touch-icon.png       Symbol für iOS
shortcut-aufgabe.png       Symbol für den Kurzbefehl
shortcut-einkauf.png       Symbol für den Kurzbefehl
shortcut-ablesung.png      Symbol für den Kurzbefehl
.nojekyll                  damit GitHub Pages alle Dateien ausliefert
```

Nur `index.html` und `sw.js` sind zwingend nötig. Ohne die übrigen Dateien läuft alles weiter, die App erzeugt Symbol und Manifest dann selbst – nur APK-Generatoren können sie dann nicht lesen.

Danach die Seite einmal mit Internet öffnen. Von da an startet sie auch ohne Verbindung, und über „Zum Startbildschirm hinzufügen" verhält sie sich wie eine installierte App.

### 2. Verbundene Geräte (optional)

Das Script übernimmt auch das Laden von Rezeptseiten, weil der Browser fremde Seiten nicht selbst lesen darf.

Der Abgleich läuft über ein eigenes Google-Apps-Script im eigenen Google-Drive, zusätzlich direkt zwischen Geräten im selben Netz über PeerJS.

1. In der App: Einstellungen → Verbundene Geräte
2. Raumname und Sync-Passwort festlegen (beides auf allen Geräten gleich)
3. „Script kopieren", bei [script.google.com](https://script.google.com) ein neues Projekt anlegen, einfügen
4. Bereitstellen → Neue Bereitstellung → Web-App, Ausführen als „Ich", Zugriff „Jeder"
5. Die `…/exec`-URL zurück in die App

Alles wird mit dem Sync-Passwort im Browser verschlüsselt, bevor es das Gerät verlässt. Google sieht nur eine verschlüsselte Datei. Geht das Sync-Passwort verloren, sind die abgelegten Daten nicht wiederherstellbar.

### 3. E-Mail (optional)

Gmail wird über ein zweites, eigenes Apps-Script angebunden: Einstellungen → E-Mail → Postfächer, dort dem gleichen Weg folgen. Das Script ist nur mit einem zufälligen Schlüssel erreichbar, der in der App erzeugt wird.

Andere Anbieter (GMX, web.de, Outlook.com, iCloud) lassen sich nur über eine Weiterleitung an die Gmail-Adresse einbinden.

### 4. Als App aufs Handy

Am einfachsten: Seite in Chrome öffnen → Menü → „App installieren". Damit gibt es ein Symbol auf dem Startbildschirm, Vollbild und Offline-Betrieb.

Danach kommen zwei Dinge dazu, die nur der installierten App zur Verfügung stehen:

- **Teilen:** Alltag steht im Teilen-Menü. Eine geteilte Rezeptadresse landet direkt im Rezept-Import; geteilter Text fragt nach, ob Rezept, Notiz, Aufgabe oder Einkauf – bei Einkauf wird jede Zeile ein Artikel.
- **Kurzbefehle:** App-Symbol lange drücken für „Aufgabe hinzufügen", „Einkaufsliste" und „Ablesung eintragen".

Wer eine echte APK-Datei möchte (zum Weitergeben oder für ein Gerät ohne Play-Dienste): [pwabuilder.com](https://www.pwabuilder.com) aufrufen, die Adresse der Seite eintragen, bei Android auf „Package for stores" gehen und das Paket erzeugen lassen. Darin liegen die signierte `.apk`, ein Schlüssel (gut aufheben, er wird für jedes Update gebraucht) und eine `assetlinks.json`.

Damit die App ohne Adressleiste startet, muss diese Datei als `.well-known/assetlinks.json` in dieses Repository – dafür ist `.nojekyll` da.

### 5. Updates

Die App prüft beim Start, beim Zurückkehren und alle 15 Minuten, ob auf GitHub eine neue Version liegt, und bietet sie an. Nach einer Änderung an `index.html` also einfach hochladen – die Geräte ziehen von selbst nach. Gespeicherte Daten bleiben dabei erhalten.

Die APK muss dafür nicht neu gebaut werden: Sie zeigt nur auf diese Seite und bekommt jedes Update automatisch mit.

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

Eine einzige HTML-Datei, rund 550 KB, ohne Build-Schritt. Aus dem Netz kommen nur [Tailwind CSS](https://tailwindcss.com) 3.4, [Alpine.js](https://alpinejs.dev) 3.14, [Font Awesome](https://fontawesome.com) 6.4, Manrope und Bricolage Grotesque und – nur bei Bedarf – [PeerJS](https://peerjs.com) 1.5 für den Abgleich im selben Netz sowie [pdf.js](https://mozilla.github.io/pdf.js/) 3.11 zum Einlesen von Rezept-PDFs. Mit `sw.js` liegen auch diese nach dem ersten Start lokal vor.

Das Layout richtet sich nach Fensterbreite und Eingabeart: unter 768 Pixel die untere Navigationsleiste, unter 640 Pixel Dialoge als Blatt von unten, bei Touchbedienung größere Tippflächen.

---

## Grenzen

- Erinnerungen erscheinen nur, solange die App im Browser geöffnet ist.
- Kundenkarten mit wechselndem Code (von der jeweiligen App je Einkauf neu erzeugt) lassen sich nicht hinterlegen. QR-Codes werden noch nicht erzeugt, nur Strichcodes.
- Passwörter lassen sich nicht automatisch in andere Apps oder Webseiten einfüllen.
- Standortbezogene Erinnerungen sind nicht möglich.
- E-Mail, Abgleich und das Einlesen von Rezepten aus Link oder PDF brauchen Internet; der Rest funktioniert offline.

---

Privates Projekt, geschrieben für den eigenen Gebrauch. Wer es nachbauen möchte: Die Datei ist bewusst eigenständig und mit deutschen Kommentaren versehen.
