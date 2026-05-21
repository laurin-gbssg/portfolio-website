# Portfolio-Website – Laurin Polla

## Technische Entscheidungen

### Bildformat: WebP (lossless)
Die Profilbilder (`profil.webp`) und Projekt-Screenshots (`orbitwar.webp`) wurden im lossless WebP-Format gespeichert statt als PNG.

**Grund:** Lossless WebP erzielt bei identischer Bildqualität deutlich kleinere Dateimengen als PNG, was die Ladezeit der Seite verkürzt:
- `profil.png` → `profil.webp`: 797 KB → 386 KB (−52 %)
- `orbitwar.png` → `orbitwar.webp`: 722 KB → 488 KB (−32 %)

Lossless wurde gewählt, um Kompressions-Artefakte zu vermeiden. WebP wird von allen modernen Browsern unterstützt.
