# Portfolio-Website – Laurin Polla

Schulprojekt Modul 293 · GBS St. Gallen  
Live: [laurin-gbssg.github.io/portfolio-website](https://laurin-gbssg.github.io/portfolio-website)

## Seiten

| Seite | Datei | Inhalt |
|---|---|---|
| Über mich | `index.html` | Kurzvorstellung, Profilfoto, Schnellnavigation |
| Fähigkeiten | `faehigkeiten.html` | Skill-Cards mit Beschreibungen, animierte Skill-Tabelle |
| Portfolio | `portfolio.html` | Projektkarten (Snake, Orbit War), Demo-Video |
| Kontakt | `kontakt.html` | Kontaktformular, E-Mail, LinkedIn, GitHub, Telefon |

## Technische Entscheidungen

### Bildformat: WebP
Alle Bilder liegen als WebP vor statt als PNG, um die Ladezeiten zu optimieren:

| Datei | Vorher (PNG) | Nachher (WebP) | Ersparnis |
|---|---|---|---|
| `profil` | 797 KB | 386 KB | −52 % |
| `orbitwar` | 722 KB | 488 KB | −32 % |
| `snake` | 16 KB | 4 KB | −75 % |
| `logo` | ~130 KB | 19 KB | −85 % |

Logo und Snake wurden lossless konvertiert (Transparenz/Qualität erhalten), Fotos lossy mit Qualität 85.

### Animierte Skill-Balken
Die Skill-Übersicht auf der Fähigkeiten-Seite zeigt animierte CSS-Balken mit gestaffeltem Einlauf (kein JavaScript). Die Füllbreite wird über BEM-Modifier-Klassen (`--high`, `--mid`, `--low`) gesetzt – keine Inline-Styles.

### CSS-Konzept
- Alle Farben, Abstände und Radien als CSS-Variablen in `:root`
- Keine Inline-Styles, keine fixen Schriftgrössen (ausschliesslich `rem` und `clamp()`)
- Responsive für Desktop (1200px), Tablet (1024px) und Mobile (768px)
- Hamburger-Menü per JavaScript (`js/nav.js`)
