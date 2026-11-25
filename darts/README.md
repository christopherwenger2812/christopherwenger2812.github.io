# Oche Stars · Darts-Karriere

Darts-Karrierespiel mit Spielerkarten, Walk-ons und kompletter Laufbahn vom Jugend-Cup bis zum WM-Titel, optimiert für das Handy. Das Spiel ist eine einzelne HTML-Datei und läuft direkt im Browser, ohne Server und ohne Installation.

**Spielen:** https://christopherwenger2812.github.io/darts/

## Funktionen

### Werfen
- **Fadenkreuz mit Timing-Ring:** Finger aufs Board legen und loslassen, wenn der Ring grün und eng ist („Perfekt!“).
- **Lupe** zeigt das Zielfeld vergrößert an.
- **Wurf-Animation** mit Flugbahn, Einschlag und Flights in der eigenen Farbe.
- **Caller-Stimme** sagt die Scores auf Englisch an, z. B. „One hundred and eighty!“.

### Karriere
- **Spielerkarte** mit Portrait und 6 Werten: Präzision, Konstanz, Scoring, Doppel, Nerven, Ausdauer.
- **Start bei null**, wahlweise ab 8 Jahren: Jugend- und Lokalturniere, Challenge Tour, Development Tour, Q-School, Tour Card, Profi.
- **Saison mit 24 Wochen** und PDC-ähnlichen Turnieren mit echten Teilnehmerzahlen und Quali-Wegen:

| Turnier | Teilnehmer | Qualifikation |
|---|---|---|
| Weltmeisterschaft | 128 | Top 40 Welt, Top 40 ProTour, Challenge/Development Top 2, WM-Quali |
| Kingdom Open | 160 | Einstieg je nach Rang in Runde 1 bis 4 |
| Masters | 32 (+ Vorrunde) | Top 24 gesetzt, Platz 25 bis 120 in der Vorrunde |
| Euro Tour (7×) | 48 | Top 16 + 16 ProTour + Quali (Tour Card, Gastland, Nordic & Baltic, Osteuropa) |
| Floor-Events (6×) | 128 | alle Tour-Card-Spieler |
| Matchplay / Grand Prix | 32 | Top 16 Welt + 16 ProTour |
| Tour Finals | 64 | Top 64 ProTour |
| Euro Championship | 32 | Top 32 Euro-Tour-Rangliste |
| Grand Slam | 32 | Turniersieger + Rangliste, Gruppenphase |
| Nationen-Cup | 40 Nationen | die 2 Besten je Nation, Gruppenphase |
| World Series (3× + Finals) | 16 / 24 | Top 8 + Gastregion |
| Liga der Besten | 8 | 12 Liga-Abende + Playoffs |
| Q-School | 64 | Halbfinalisten bekommen die Tour Card |

- **Ranglisten:** Welt, ProTour, Euro, Challenge, Development, Liga.
- **300 Spieler** aus 40 Nationen, mit Alter, Entwicklung, Karriereende und Nachwuchs.
- **KI-Spielstile** (Schnellwerfer, Grübler, Doppel-Spezialist, Nervenbündel, Scoring-Maschine, Allrounder) und **Scouting** vor jedem Match.
- **Erzrivalen, Form, Frische und Verletzungen, Pressekonferenzen.**
- **Sponsoren, Manager, Verein mit Team-Liga, eigene Kneipe, Darts-Akademie.**
- **Hallen** mit Licht, Publikum und Bedingungen. **Walk-ons** mit eigenem Song-Titel, Beat, Pyro und Fan-Gesang.
- **Hall of Fame** für beendete Karrieren.
- **Story-Momente und Privatleben:** Ereignisse mit Entscheidungen, z. B. eine Hochzeit in der Turnierwoche.
- **Social-Media-Feed:** Fans, Profis und dein Rivale kommentieren deine Ergebnisse.
- **Trainerteam:** 5 Trainer mit Spezialgebiet (Doppel, Mental, Scoring, Fitness, Präzision) und Wochengehalt.
- **Saisonziele** mit Belohnung, eine Bewertung vom Manager, falls du einen hast.
- **Spezialkarten:** Team der Woche, Hero, Icon.

### Gameplay-Details
- **Wurfrhythmus:** Gleichmäßiges Werfen bringt dich „in den Flow“ (kleinerer Ring), langes Zögern macht nervös.
- **Bounce-outs und Robin Hoods**, selten, aber mit Kommentar.
- **Checkout-Wahl:** Caller-Tipp plus alternative Wege zum Antippen, das Ziel leuchtet auf dem Board.
- **Highlights:** Nach jedem Match laufen 180er, Hochfinishes und der Matchdart noch einmal in Zeitlupe.

### Sammeln und Anpassen
- **Ausrüstung:** Barrels, Shafts, Flight-Form und Flight-Farbe einzeln kaufen, jeweils mit kleinen Werte-Boni.
- **Trikot-Designer:** Farben, Muster, Rückenname und Nummer, mit dem Sponsor auf der Brust. Das Trikot erscheint beim Walk-on.
- **Erfolge** (24 Abzeichen) und **Trophäenschrank** mit allen Pokalen.
- **Fotoalbum:** gezeichnete Szenen deiner größten Momente.

### Training und Modi
- **6 Trainings:** Around the Clock, Bob's 27, 121-Checkout, Scoring-Drill, Shanghai, Halve-It.
- **Tages-Challenge** mit Belohnung.
- **Schnelles Spiel:** 501, 301, Cricket, Killer, gegen die KI oder zu zweit an einem Handy.
- **Geister-Duell** gegen den eigenen besten Leg.

## Einstellungen

- Schwierigkeit: Leicht, Normal, Profi
- Matchlänge: Kurz oder Original (echte Distanzen)
- Abstand des Fadenkreuzes zum Finger, Links- oder Rechtshänder
- Caller-Stimme an/aus
- Spielstand exportieren und importieren

## Auf dem Handy als App nutzen

Darts Karriere ist eine eigene Web-App mit Manifest und Icon (Bereich `/darts/`).

1. https://christopherwenger2812.github.io/darts/ in **Chrome** öffnen.
2. Oben rechts auf **⋮** tippen, dann auf **„App installieren“** bzw. **„Zum Startbildschirm hinzufügen“**.

## Spielstand

- Der Spielstand liegt **nur lokal im Browser** des Geräts.
- Ein Update der Datei löscht den Spielstand nicht.
- **Gerät wechseln:** In den Einstellungen „Spielstand exportieren“ wählen, den Code kopieren und auf dem neuen Gerät über „Spielstand importieren“ einfügen.
- Browserdaten löschen entfernt den Spielstand. Exportiere deshalb ab und zu den Code.

## Dateien

```
darts/
├── index.html             das Spiel
├── manifest.webmanifest   App-Manifest (Name, Icon, Bereich /darts/)
├── icon-192.png
├── icon-512.png
└── README.md
```

## Update einspielen

1. Neue Version herunterladen und in **`index.html`** umbenennen. In der Datei müssen oben die Zeile `<link rel="manifest" href="manifest.webmanifest">` und die Icon-Links stehen. Die Versionen, die ich dir für GitHub schicke, haben sie schon drin.
2. Auf GitHub in den Ordner `darts/` wechseln.
3. **Add file → Upload files**, Datei hochladen, dann **Commit changes**.
4. Nach ein bis zwei Minuten ist die neue Version online.

## Hinweise

- Alle Spieler- und Turniernamen sind **erfunden**. Echte Namen lassen sich in der Rangliste per Antippen selbst eintragen.
- Die Musik bei den Walk-ons ist ein im Browser erzeugter Beat. Der Song-Titel wird nur angezeigt.
- Ohne Internet läuft das Spiel mit einer Ersatzschrift.

## Neu in Version 9

- Komplett neues Design mit unterer Navigation (Start, Kalender, Training, Tabellen, Mehr)
- Charakter-Editor: Hautton, Frisur, Haarfarbe, Bart, Brille und Shirt erscheinen auf deiner Karte
- Jeder Gegner hat eine eigene Karte mit Portrait und allen 6 Werten. Die Werte bestimmen auch, wie er spielt
- Ausbullen vor jedem Match: Wer näher am Bull ist, beginnt
- Ausführliche Leg-Statistik nach jedem Leg (8 Sekunden oder per Tipp weiter)
- Nachwuchs wie im echten System: Junior-Tour (10 bis 17), Junior Super 16, Junior World Masters, Junior-WM mit Finale auf der WM-Bühne, Nachwuchs-Akademie
- Development Tour: Top 2 bekommen die Tour Card, Platz 3 bis 16 einen Freiplatz für die Q-School
- Challenge Tour nur nach Teilnahme an der Q-School

## Neu in Version 10

- Menü im EA-FC-Stil: Reiter Start, Spielen, Karriere, Spieler und Store mit großen Kacheln
- Walk-on in 4 Akten: Hallen-Intro, Einlauf des Gegners, dein Einlauf durchs Publikum mit Security und Pyro, Face-off mit Werte-Vergleich. Tippen springt zum nächsten Akt
- Animiertes Publikum im Match mit Schildern, Fahnen und Hüten, das bei 180ern und Checkouts aufspringt
- Männliche Caller-Stimme mit Stimmauswahl und Tonhöhe in den Einstellungen
- Spielstände als Datei speichern, teilen und laden, mit Vorschau vor dem Laden und automatischer Sicherung
- „Woche auslassen“ abgesichert

## Neu in Version 11

- Fehler behoben: Ab etwa Saison 4 waren Turnierfelder (z. B. Development Tour) zu klein, die Wochen-Simulation stürzte ab und „Woche auslassen“ reagierte nicht. Fehlende Plätze werden jetzt mit neuen Talenten im passenden Alter aufgefüllt
- Sicherheit: Importierte und gespeicherte Spielstände werden bereinigt, bevor sie angezeigt werden (Schutz vor eingeschleustem Code). Dazu eine Content-Security-Policy und eine Größengrenze beim Entpacken
- Fehlerprotokoll in den Einstellungen, automatische Sicherung zu jedem Saisonstart, Schutz bei beschädigtem Spielstand
- Bildschirm bleibt während eines Matches an, Speichern beim Verlassen der App
- Ungenutzter Code und tote CSS-Regeln entfernt

## Neu in Version 12

- Euro Tour mit allen 15 Stationen der Saison 2026 (Krakau bis Maastricht)
- 17 Floor-Events (die Hälfte der 34 Players Championships) in Wigan, Leicester, Hildesheim, Milton Keynes und Rosmalen
- World Series mit den 6 echten Stationen 2026: Bahrain, Saudi-Arabien, Kopenhagen, New York, Auckland, Wollongong, dazu die Finals in Amsterdam
- Spielerinnen: Frauen-Serie mit 8 Events, eigene Frauen-Rangliste und Frauen-Matchplay (Top 8). Siegerin: Grand Slam und WM, Top 2 der Rangliste: WM
- Partner-Touren mit WM-Startplatz für 10 Regionen (DACH, Nordic & Baltic, Osteuropa, Westeuropa, Asien, Nordamerika, Australien, Neuseeland, Afrika, Lateinamerika)
- Fehler behoben: Beschädigte Turnierbäume werden automatisch repariert. Neuer Knopf „Turnier überspringen“, wenn du nicht (mehr) im Turnier bist
- Bestehende Karrieren laufen weiter, ein laufendes Turnier wird normal zu Ende gespielt

## Neu in Version 13

- Neuer Name und neues Logo: **Oche Stars**
- Amateur-Serie: Die 4 Amateur-Turniere (ab 16, ohne Tour Card) zählen für eine nationale Amateur-Rangliste. Die Top 2 spielen die Amateur-WM (64 Spieler aus allen Ländern)
- Freiplatz für die Q-School für Landesmeister, Amateur-Weltmeister und die Nummer 1 der Amateur-Rangliste. Die Landesmeisterschaft bringt Punkte für die Partner-Tour
- Lokalmatador-Bonus (mehr Fans) und Preisgeld, das bei Amateur- und Jugend-Turnieren mit dem OVR wächst
- Eigene Turniernamen für alle 43 Länder
- Jugend in 4 Altersklassen (U11, U13, U15, U18) mit je 2 nationalen Cups, einer Kontinentalmeisterschaft (z. B. Jugend-EM) und einer Jugend-WM. Alle Jugend-Turniere zählen für die Junior-Rangliste
- Karrierestart ab 8 Jahren
- Euro Tour, Floor-Events und World Series erst ab 16 Jahren
