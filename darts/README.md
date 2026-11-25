# Darts Karriere

Darts-Karrierespiel im FIFA-Stil, optimiert für das Handy. Das Spiel ist eine einzelne HTML-Datei und läuft direkt im Browser, ohne Server und ohne Installation.

**Spielen:** https://christopherwenger2812.github.io/darts/

## Funktionen

### Werfen
- **Fadenkreuz mit Timing-Ring:** Finger aufs Board legen und loslassen, wenn der Ring grün und eng ist („Perfekt!“).
- **Lupe** zeigt das Zielfeld vergrößert an.
- **Wurf-Animation** mit Flugbahn, Einschlag und Flights in der eigenen Farbe.
- **Caller-Stimme** sagt die Scores auf Englisch an, z. B. „One hundred and eighty!“.

### Karriere
- **Spielerkarte** im FIFA-Stil mit 6 Werten: Präzision, Konstanz, Scoring, Doppel, Nerven, Ausdauer.
- **Start bei null**, wahlweise ab 12 Jahren: Jugend- und Lokalturniere, Challenge Tour, Development Tour, Q-School, Tour Card, Profi.
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
- **Spezialkarten** im FIFA-Stil: Team der Woche, Hero, Icon.

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

1. https://christopherwenger2812.github.io/darts/ in **Chrome** öffnen.
2. Oben rechts auf **⋮** tippen, dann auf **„Zum Startbildschirm hinzufügen“**.

## Spielstand

- Der Spielstand liegt **nur lokal im Browser** des Geräts.
- Ein Update der Datei löscht den Spielstand nicht.
- **Gerät wechseln:** In den Einstellungen „Spielstand exportieren“ wählen, den Code kopieren und auf dem neuen Gerät über „Spielstand importieren“ einfügen.
- Browserdaten löschen entfernt den Spielstand. Exportiere deshalb ab und zu den Code.

## Update einspielen

1. Neue Version herunterladen und in **`index.html`** umbenennen.
2. Auf GitHub in den Ordner `darts/` wechseln.
3. **Add file → Upload files**, Datei hochladen, dann **Commit changes**.
4. Nach ein bis zwei Minuten ist die neue Version online.

## Hinweise

- Alle Spieler- und Turniernamen sind **erfunden**. Echte Namen lassen sich in der Rangliste per Antippen selbst eintragen.
- Die Musik bei den Walk-ons ist ein im Browser erzeugter Beat. Der Song-Titel wird nur angezeigt.
- Ohne Internet läuft das Spiel mit einer Ersatzschrift.
