# ui_kits/app — sito MMarchetti Digital

Kit d'interfaccia applicato: la homepage del sito personale di Marco Marchetti, costruita solo con i token e i componenti del design system. Serve come riferimento per pagine web, landing di corsi e qualsiasi superficie web del brand.

## Structure — struttura

```
ui_kits/app/
├── index.html            entry: React 18 + Babel standalone, monta <App /> in #root
├── app.css               layout di pagina (sezioni, griglie, header, drawer, footer)
└── components/
    ├── App.jsx           guscio: compone tutte le sezioni, sezione attiva via IntersectionObserver
    ├── Header.jsx        wordmark compatto, nav con barra Evidenziatore, CTA, menu mobile (Esc chiude)
    ├── Hero.jsx          Display con una evidenza, bottone accento + secondario, foto segnaposto
    ├── ServicesSection.jsx  3 servizi in ordine di peso + schede "Per chi" (frecce ← →) che cambiano l'esempio
    ├── FigureStat.jsx    dato numerico Mono + etichetta Sans, flag `placeholder`
    ├── CaseStudy.jsx     "Come lavoro": 4 passi numerati + colonna dati
    ├── QuoteBlock.jsx    testimonianza su Grafite con una parola evidenziata
    ├── FaqList.jsx       accordion accessibile (aria-expanded / region)
    ├── ContactForm.jsx   modulo con validazione, errori espliciti, stato di conferma
    └── Footer.jsx        sezione Grafite, logo negativo, link Evidenziatore
```

`index.html` carica, nell'ordine: `../../colors_and_type.css` (token + `@font-face` IBM Plex), `../../components.css` (bottoni, campi, card, citazione, dato, tag), `app.css`, poi ogni file in `components/`. Ogni componente si espone come `window.NomeComponente`; `App.jsx` li recupera da `window` e l'ultimo script esegue `ReactDOM.createRoot(...).render(<App />)`.

## Usage — uso

1. Servire la root del pacchetto via HTTP (Babel carica i `.jsx` con XHR): `python3 -m http.server` → `/ui_kits/app/index.html`.
2. Per una nuova pagina: copiare `index.html`, togliere o aggiungere script di componenti, comporre un nuovo `App`.
3. Per comporre sezioni nuove riusa `components/Header.jsx`, `components/Hero.jsx`, `components/ContactForm.jsx` e `components/App.jsx` come modello (copy, then compose).
4. Per un componente nuovo: stesso schema — una funzione, classi di `components.css`, `window.Nome = Nome` in fondo.
5. In produzione: pre-compilare i JSX (esbuild/Vite) e servire i font da `fonts/`.

## Design Notes — note di design

- Fondo Carta ovunque; Grafite solo per citazione e footer (`.theme-grafite`).
- Un solo bottone accento per schermata (hero). Le altre CTA sono primarie o secondarie.
- Una sola evidenza gialla per blocco: "in pratica" nell'hero, "funzionava" nella citazione.
- Nessuna ombra tranne quella ammessa sulle card; raggio unico 4px.
- Testi in prima persona singolare, mai "noi" per Marco. I numeri sono marcati `SEGNAPOSTO`.
- Responsive verificato a 360, 820 e 1280px: menu in pannello sotto 840px, colonne singole sotto 900px.

## Source — provenienza

Nessun codice sorgente di prodotto era disponibile: il kit è derivato da DESIGN.md (§5 layout, §6 componenti, §8 voce), dal brand spec originale in `../../source_examples/brand-spec-originale.md` e dai file logo in `../../assets/logo/`.
