# Sito MMarchetti Digital

Sito statico (HTML/CSS/JS). La cartella principale è la radice del sito: qui andranno index.html e le altre pagine.

## Struttura
- `_brand/`  Riferimenti del brand, NON fanno parte del sito
  - `DESIGN.md`  regole del brand (fonte di verità: colori, font, logo, componenti, tono di voce)
  - `colors_and_type.css`, `components.css`  token e componenti generati da Open Design (riferimento)
  - `prototipo-home/`  prototipo React della home generato da Open Design (solo riferimento, non da pubblicare)
- `_docs/`  Brief, sitemap e testi del sito (`testi/` per le bozze dei contenuti)
- `assets/css/`  fogli di stile del sito
- `assets/js/`  script
- `assets/fonts/`  IBM Plex Sans e Mono in woff2 (licenza OFL)
- `assets/logo/`  logo SVG: principale, compatta, negativa, monocromatica, avatar
- `assets/icons/`  favicon e icone (c'è l'avatar 400 px come base)
- `assets/img/foto/`  fotografie del sito
- `assets/img/social/`  immagini di anteprima per i social (Open Graph)

## Nota sulla pubblicazione
Le cartelle che iniziano con `_` vengono ignorate da GitHub Pages (Jekyll).
Su Netlify o Hostinger vanno escluse a mano dalla pubblicazione.
