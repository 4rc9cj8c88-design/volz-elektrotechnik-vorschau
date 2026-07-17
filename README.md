# Volz Elektrotechnik — Website-Vorschau (Relaunch)

Alternativentwurf für **Volz Elektrotechnik, Inh. Maik Volz**, Bad Liebenzell
([elektrotechnik-volz.de](https://www.elektrotechnik-volz.de)).

Dunkel-editorialer Relaunch, der die **Braun/Gold-Marken-DNA** aus dem alten Logo
(„Markenqualität & Service") aufnimmt und modern inszeniert.

## Struktur
- `index.html` — One-Pager (Hero, Betrieb, Leistungen, Warum Volz, Marken-Band, CTA)
- `kontakt.html` — Kontakt & Anfahrt (OpenStreetMap)
- `impressum.html` / `datenschutz.html` — Rechtstexte (inhaltlich aus dem Original übernommen)
- `styles.css`, `js/main.js`, `img/` — Assets

## Wichtige Hinweise (vor echter Veröffentlichung)
- **Bilder sind KI-generierte Platzhalter** (Atmosphäre) — vor Live-Gang durch echte Fotos ersetzen.
- **Impressum-Lücken**: Das alte Impressum enthielt keine Handwerkskammer, Berufsbezeichnung und
  zuständige Kammer. In `impressum.html` sind diese Stellen als Hinweis-Box markiert und müssen mit
  den echten Kammerdaten befüllt werden.
- **Datenschutz**: Hoster und ggf. Datenschutzbeauftragte/r vor Live-Gang eintragen/prüfen.
- Vor Deploy Sicherheits-Header (`.htaccess`: HTTPS-Redirect, CSP, HSTS, nosniff …) ergänzen.

Nicht für Suchmaschinen indexiert (Rechtstexte auf `noindex`). Reine Vorschau.
