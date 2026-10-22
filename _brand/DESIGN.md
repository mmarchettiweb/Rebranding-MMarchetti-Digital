# MMarchetti Digital — brand Design System

> Category: Custom · Personal brand
> Surface: web, slide (16:9), LinkedIn, documenti
> Fonte di verità del brand. Ogni output generato deve rispettare questo documento.
> In caso di conflitto tra questo file e una richiesta generica, vale questo file.
> Fonte originale: `assets_DESIGN.md` (caricato dall'utente in setup) — vedi `context/provenance.md`.

Token pronti all'uso: `colors_and_type.css`. Anteprime: `preview/`. Kit applicato: `ui_kits/app/`.

---

## 0. Product Context — contesto

- **Nome:** MMarchetti Digital
- **Chi è:** Marco Marchetti, consulente e formatore freelance in Veneto (Venezia, Padova, Treviso). Lavora da solo, con il proprio nome come garanzia.
- **Concetto:** **Concretezza** — comunicazione digitale e AI usate nel lavoro di tutti i giorni. Niente hype, niente progetti che restano nel cassetto.
- **Descrittore:** "Comunicazione digitale e AI, in pratica."
- **Servizi (in ordine di peso nella comunicazione):**
  1. Formazione (aziende, enti di formazione, programmi GOL, scuole) e consulenza in comunicazione digitale e web marketing
  2. AI applicata ai processi e alla comunicazione (tema di punta)
  3. Siti web (servizio di supporto, mai in primo piano)
- **Pubblico:** titolari di PMI, marketing manager, enti di formazione, scuole.
- **Output previsti:** logo, brand book, slide per l'aula, kit LinkedIn, sito.

### Superfici primarie
| Superficie | Formato | Note |
|---|---|---|
| Sito personale | web responsive, 12 colonne, max 1200px | Carta come fondo; Grafite solo per citazioni e footer |
| Slide per l'aula | 1920×1080 | testo ≥ 28px, max 6 righe; Grafite per slide di sezione |
| Kit LinkedIn | avatar 400×400, banner 1584×396, post 1200×1200 / 1080×1350 | avatar = monogramma MM su Evidenziatore |
| Brand book / documenti / preventivi | A4 | Carta o Bianco, registro "Lei/voi" per enti e scuole |

### Cosa il brand NON è
- Non è un'agenzia: niente "noi", niente estetica da team o studio.
- Non è un brand "AI-first" o futuristico: niente gradienti, glow, neon, robot, circuiti, cervelli, particelle.
- Non è un web designer: i siti non sono mai il messaggio principale.
- **Vincolo cromatico:** evitare fondi nero-blu, viola e verde neon/volt, e l'abbinamento "accento fluo su fondo nero".

---

## 1. Visual Theme & Atmosphere

**Registro visivo:** tecnico e pulito nella struttura (griglia, rigore, poco ornamento); il calore arriva dal colore carta, dal gesto dell'evidenziatore e dal tono di voce.

- Sensazione: un quaderno di lavoro ben tenuto. Carta chiara, inchiostro grafite, una parola sottolineata col giallo perché è quella che conta.
- L'evidenziatore è l'unico gesto espressivo. Tutto il resto è griglia, tipografia e spazio bianco.
- Nessun effetto: niente gradienti, glow, neon, ombre colorate, trasparenze sul giallo, texture.
- Densità media: frasi brevi, molto respiro, informazioni ordinate da etichette Mono numerate.

---

## 2. Color

### Palette (7 colori, nessun altro)

| Token | HEX | Ruolo |
|---|---|---|
| `--grafite` | `#23211E` | Testo principale; fondo scuro (solo slide di sezione, footer, aree di contrasto) |
| `--carta` | `#F6F4EF` | Fondo principale di sito, documenti, slide |
| `--bianco` | `#FFFFFF` | Superfici, card, campi di modulo |
| `--evidenziatore` | `#FFD43B` | **Unico accento.** Evidenzia ciò che conta |
| `--blu` | `#2A5585` | Link, dati, grafici, informazioni secondarie (solo su fondi chiari) |
| `--grigio` | `#5E5A54` | Testo secondario, didascalie, bordi funzionali (solo su fondi chiari) |
| `--linea` | `#D9D5CC` | Divisori decorativi su fondo chiaro; testo secondario su fondo grafite |

Proporzione indicativa: Carta/Bianco 70% · Grafite 20% · Evidenziatore 5% · Blu/Grigio/Linea 5%.

### Ruoli semantici (`colors_and_type.css`)
| Ruolo | Tema chiaro (standard) | Sezione Grafite (`.theme-grafite`) |
|---|---|---|
| `--bg` | Carta | Grafite |
| `--surface` | Bianco | Grafite |
| `--fg` | Grafite | Carta |
| `--fg-muted` | Grigio | Linea |
| `--border` (decorativo) | Linea | Linea al 35% |
| `--border-strong` (funzionale) | Grigio | Linea |
| `--link` | Blu, sottolineato | Evidenziatore, sottolineato |
| `--focus-ring` | Blu 2px, offset 2px | Evidenziatore 2px, offset 2px |
| `--accent` | Evidenziatore come fondo dietro testo Grafite | Evidenziatore come testo/elemento |

### Contrasti verificati (WCAG 2.x)

| Testo su fondo | Rapporto | Livello |
|---|---|---|
| Grafite su Carta | 14.61 | AAA |
| Grafite su Bianco | 16.06 | AAA |
| Carta su Grafite | 14.61 | AAA |
| Grafite su Evidenziatore | 11.27 | AAA |
| Evidenziatore su Grafite | 11.27 | AAA |
| Linea su Grafite | 10.97 | AAA |
| Blu su Bianco | 7.67 | AAA |
| Blu su Carta | 6.98 | AA |
| Grigio su Bianco | 6.85 | AA |
| Grigio su Carta | 6.23 | AA |
| Evidenziatore su Blu | 5.38 | AA |

### Coppie vietate
- **Evidenziatore su Carta/Bianco come testo: 1.30 — vietato.**
- Blu su Grafite: 2.09 — vietato.
- Grigio su Grafite: 2.34 — vietato.
- Linea su Carta come testo: 1.33 — solo decorativo.

### Regole d'uso
- Il giallo **non è mai colore del testo su fondo chiaro**. Si usa: (a) come fondo piatto dietro testo grafite (effetto evidenziatore), (b) come testo o elemento su fondo grafite, (c) come fondo dell'avatar.
- Superficie standard del brand: **chiara** (Carta). Il fondo Grafite è un'eccezione per slide di sezione, footer, blocchi di citazione.
- Su fondo Grafite: testo Carta, testo secondario Linea, link ed evidenze in Evidenziatore (sottolineati).
- Su fondo chiaro: link in Blu, sottolineati.
- Bordi di campi e componenti interattivi: Grigio (≥3:1). Linea solo per divisori decorativi.
- Focus da tastiera: outline 2px Blu su fondi chiari, 2px Evidenziatore su Grafite, offset 2px.
- Niente gradienti, ombre colorate, trasparenze sul giallo.

### Stati (palette chiusa)
Non esistono rosso o verde di stato. Gli stati si comunicano con forma + testo esplicito:
- **Errore:** bordo campo 2px Grafite + messaggio sotto il campo, preceduto da "Errore:" in Plex Sans 600. Mai solo colore.
- **Successo:** etichetta Mono `FATTO` su fondo Evidenziatore + frase di conferma concreta. (Niente card con bordo sinistro colorato.)
- **Informazione:** testo Blu sottolineato se è un link, altrimenti Grigio.
- **Disabilitato:** testo Grigio, bordo Linea, cursore `not-allowed`.

### Dati e grafici
Serie principale Blu; serie di confronto Grigio; il valore da notare in Evidenziatore (fondo barra) con etichetta Grafite. Massimo 3 serie. Griglie in Linea. Numeri in Plex Mono, cifre tabulari.

---

## 3. Typography

Famiglia unica: **IBM Plex** (licenza OFL). File locali in `fonts/` (woff2 + ttf), dichiarati in `colors_and_type.css`.

| Uso | Font | Peso |
|---|---|---|
| Titoli | IBM Plex Sans | 600 / 700 |
| Testo | IBM Plex Sans | 400 (enfasi 600) |
| Etichette, dati, numeri, "Digital", codice | IBM Plex Mono | 400 / 500 |

Fallback: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif` · `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`.

### Scala (web, base 16px, rapporto ~1.25)

| Livello | Token | Dimensione | Interlinea | Peso | Note |
|---|---|---|---|---|---|
| Display | `--text-display` | 56px / 3.5rem | 1.05 | 700 | tracking -0.02em, solo hero |
| H1 | `--text-h1` | 44px / 2.75rem | 1.1 | 700 | tracking -0.015em |
| H2 | `--text-h2` | 32px / 2rem | 1.2 | 600 | |
| H3 | `--text-h3` | 24px / 1.5rem | 1.3 | 600 | |
| H4 | `--text-h4` | 20px / 1.25rem | 1.4 | 600 | |
| Corpo | `--text-body` | 18px / 1.125rem | 1.6 | 400 | larghezza riga max 68ch |
| Corpo piccolo | `--text-small` | 16px / 1rem | 1.55 | 400 | |
| Etichetta | `--text-label` | 13px / 0.8125rem | 1.4 | 500 Mono | maiuscolo, tracking +0.08em |

Su mobile (≤720px) ridurre Display a 40px e H1 a 34px (già nei token).

### Slide (16:9, 1920×1080)
- Titolo: Plex Sans 700, 64–80px
- Testo: Plex Sans 400, minimo 28px (leggibilità in aula con proiettore)
- Etichette/numeri: Plex Mono 500, minimo 22px
- Massimo 6 righe di testo per slide

### Regole
- Niente maiuscolo nei titoli (solo nelle etichette Mono).
- Niente corsivo decorativo; corsivo solo per titoli di opere o termini stranieri.
- Mono va dosato: etichette, numeri, dati, la parola "Digital". Mai per paragrafi.

---

## 4. Spacing

- **Base 8px:** 8, 16, 24, 32, 48, 64, 96, 128 → `--space-1` … `--space-8`.
- **Raggi:** 4px (`--radius`) per bottoni, card e campi. Nessun pill, nessun arrotondamento marcato. Barra evidenziatore e avatar: 0 (angoli vivi).
- **Bordi:** 1px Linea (decorativi) / 1px Grigio (funzionali).
- **Ombre:** nessuna, o al massimo `0 1px 2px rgba(35,33,30,0.08)` sulle card (`--shadow-card`).
- Ritmo verticale delle sezioni web: 96px desktop, 64px mobile. Tra titolo ed etichetta: 16px. Tra titolo e corpo: 24px.

---

## 5. Layout & Composition

- **Griglia:** 12 colonne web, gutter 24px, max-width contenuti 1200px; margini laterali 16px su mobile.
- **Struttura tipo pagina:** header chiaro con wordmark compatto → hero su Carta (Display + una evidenza) → sezioni numerate con etichetta Mono (`01 — FORMAZIONE`) → un blocco Grafite (citazione) → contatto → footer Grafite.
- **Asimmetria controllata:** testo su 7 colonne, elemento di supporto (dato, lista, foto) su 4–5. Niente griglie di card tutte uguali per default.
- **Densità:** un'idea per blocco, frasi brevi. Lunghezza riga ≤ 68ch.
- **Navigazione:** voci in Plex Sans 600 16px Grafite; voce attiva con barra Evidenziatore 3px sotto. Su mobile (<840px) menu in pannello a tutta larghezza su Carta, voci da 48px.
- **Breakpoint:** 360 / 600 / 840 / 1200. Nessuno scroll orizzontale da 360px in su.
- **Slide:** margine 120px laterale, etichetta Mono in alto a sinistra, numero slide in basso a destra in Mono. Una sola idea per slide.

---

## 6. Components

| Componente | Specifica |
|---|---|
| Bottone primario | Fondo Grafite, testo Carta, Plex Sans 600 16px, padding 14×24px, raggio 4px. Hover: compare una barra Evidenziatore di 3px sotto il testo (il fondo non cambia) |
| Bottone accento | Fondo Evidenziatore, testo Grafite, stesse misure. Max 1 per schermata |
| Bottone secondario | Fondo trasparente, bordo 1px Grafite, testo Grafite |
| Link | Blu su chiaro / Evidenziatore su Grafite, sempre sottolineati (spessore 1px, offset 3px) |
| Card | Fondo Bianco, bordo 1px Linea, raggio 4px, padding 32px |
| Campo modulo | Fondo Bianco, bordo 1px Grigio, raggio 4px, etichetta sopra in Plex Sans 600 14px |
| Citazione / testimonianza | Fondo Grafite, testo Carta, una parola chiave evidenziata |
| Dato numerico | Numero in Plex Mono 500 grande, etichetta in Plex Sans sotto |
| Etichetta di sezione | Plex Mono 500 13px maiuscolo +0.08em, preceduta da numero: `01 — FORMAZIONE` |
| Evidenza nel testo | Barra Evidenziatore piatta dietro 1–3 parole (`.mm-hl`), max una per blocco |

### Stati dei componenti
- **Bottoni:** hover = barra 3px Evidenziatore sotto il testo (primario e secondario); il bottone accento in hover mostra la barra in Grafite. Su Grafite il primario si inverte (fondo Carta, testo Grafite) e il secondario usa bordo e testo Carta. Active = spostamento 1px verso il basso. Focus = outline 2px Blu, offset 2px. Disabled = fondo Carta, testo Grigio, bordo Linea.
- **Campi:** focus = bordo Grafite + outline Blu 2px; errore = bordo 2px Grafite + messaggio esplicito; testo di aiuto in Grigio 14px.
- **Card:** non cliccabili per default. Se cliccabili: hover = bordo Grigio, il titolo riceve la sottolineatura link.
- **Altezza minima target touch:** 44px.

### Implementazione di riferimento
Classi CSS in `components.css` (`.mm-btn`, `.mm-field`, `.mm-input`, `.mm-card`, `.mm-quote`, `.mm-stat`, `.mm-tag`, `.mm-photo`). `ui_kits/app/components/` contiene le versioni React di Header, Hero, ServicesSection, CaseStudy, FigureStat, QuoteBlock, FaqList, ContactForm, Footer e il guscio App. Le anteprime singole sono in `preview/components-buttons.html`, `preview/components-inputs.html`, `preview/components-cards.html`.

---

## 7. Motion & Interaction

- Movimento minimo e funzionale. Durate: 120ms (hover), 180ms (pannelli). Easing `cubic-bezier(0.2, 0, 0, 1)`.
- L'unico movimento "di brand" è la barra evidenziatore che compare (hover dei bottoni, voce di menu attiva): cresce in larghezza da sinistra, 180ms.
- Niente parallax, niente animazioni di ingresso a cascata, niente contatori che "girano", niente cursori custom.
- `prefers-reduced-motion: reduce` → tutte le transizioni a 0 (già in `colors_and_type.css`).
- Feedback sempre testuale: dopo l'invio di un modulo, frase di conferma concreta ("Ricevuto. Ti rispondo entro due giorni lavorativi.").

---

## 8. Voice & Brand

Parla Marco, in prima persona singolare. Mai "noi".

1. **Concreto prima di tutto** — compiti, tempi, risultati, esempi dal lavoro quotidiano.
   - Sì: "In mezza giornata il team impara a preparare le risposte ai clienti con un assistente AI."
   - No: "Accompagno le imprese nella trasformazione digitale guidata dall'AI."
2. **Chiaro, senza trattare nessuno da principiante** — frasi brevi, un'idea per frase, termini tecnici spiegati la prima volta.
3. **Onesto sui limiti** — dire cosa non funziona rende credibile ciò che funziona.
   - Sì: "L'AI scrive una buona bozza. Rileggerla e decidere resta compito tuo."
4. **In prima persona, alla pari** — "lavoro con te / con voi".

**Registro:** "tu" o forma impersonale su sito e LinkedIn; "Lei"/"voi" in preventivi e comunicazioni a enti e scuole.

**Lessico — usa:** usare, funzionare, risparmiare tempo, casi reali, in pratica, passo per passo.
**Lessico — evita:** rivoluzionare, disruptive, game changer, soluzioni innovative, ecosistema, sinergie, potenziare, in pochi click, risultati garantiti.

**Maiuscole:** solo iniziale nei titoli ("Formazione per i team", non "Formazione Per I Team"). Etichette Mono in maiuscolo.

**Testi di esempio**
- Sito (hero): "Comunicazione digitale e AI, in pratica. Lavoro con PMI, enti di formazione e scuole su casi reali, con un obiettivo semplice: alla fine il tuo team sa farlo da solo."
- LinkedIn: "Martedì in aula: 14 persone, un'ora, un compito vero. Rispondere alle email dei clienti con l'AI. Nessuna rivoluzione: circa 20 minuti risparmiati a testa, ogni giorno. È da qui che si parte." *(numeri segnaposto: usare solo dati reali)*

### Lingua e contenuti
- Lingua: italiano.
- Nessun nome di cliente nei materiali.
- Nessun riferimento ad altri brand o partnership.
- Numeri e dati nei materiali di esempio vanno marcati come segnaposto (etichetta Mono `SEGNAPOSTO` o nota in Grigio).

---

## 9. Anti-patterns

Visivi
- Qualsiasi colore fuori dai 7 della palette (niente rosso/verde di stato, niente tinte "derivate").
- Giallo Evidenziatore come colore del testo su Carta o Bianco.
- Blu o Grigio come testo su Grafite.
- Fondi nero-blu, viola, verde neon/volt; accento fluo su fondo nero.
- Gradienti, glow, neon, ombre colorate, glassmorphism, texture, barra a pennello.
- Raggi > 4px, bottoni a pillola, card molto arrotondate.
- Card con bordo sinistro colorato.
- Icone 3D, emoji, illustrazioni stock, icone accanto a ogni titolo.
- Fotografia stock con robot, ologrammi, mani che toccano schermi luminosi, cervelli digitali, circuiti, particelle.
- Più di un'evidenza gialla per blocco di testo; più di un bottone accento per schermata.
- Titoli in maiuscolo; corsivo decorativo; Mono per paragrafi.
- Grafite come tema globale: le pagine scure intere non sono il brand.

Di contenuto
- "Noi", estetica da agenzia o studio.
- Metriche inventate ("+300% di produttività") o dati non marcati come segnaposto.
- Nomi di clienti, loghi di partner, riferimenti ad altri brand.
- Siti web come messaggio principale.
- Lessico da hype (vedi §8).

Di interazione
- Stati comunicati solo col colore.
- Animazioni decorative di ingresso, parallax, contatori animati.
- Link non sottolineati.

---

## 10. Logo

### Concetto
Wordmark con **evidenziatore**: il gesto di chi studia e lavora quando sottolinea la cosa utile. È la traduzione grafica di "in pratica".

### Costruzione (logo principale, orizzontale)
- **"MMarchetti"** in IBM Plex Sans Bold, colore Grafite, tracking -0.01em, "MM" maiuscole, resto minuscolo.
- **Barra evidenziatore:** rettangolo piatto Evidenziatore `#FFD43B`, angoli vivi, posizionato **dietro** la parola, dalla baseline fino a circa il 45% dell'altezza della x; sporge di circa mezzo spessore d'asta oltre la prima e l'ultima lettera. **Non** un tratto di pennello.
- **"Digital"** in IBM Plex Mono Medium, colore Grigio, altezza circa 40% del wordmark, allineato alla baseline, a destra di "MMarchetti" con spazio pari alla larghezza di una "a". "Digital" è graficamente secondario: il logo deve poter funzionare anche senza.
- Testo **convertito in tracciati** nei file SVG (fatto: `context/scripts/build_logos.py` disegna i contorni dai font in `fonts/`, con kerning GPOS).

### File (in `assets/logo/`)
| Variante | File | Uso |
|---|---|---|
| Principale | `mmarchetti-digital-principale.svg` | su Carta o Bianco, orizzontale con "Digital" |
| Compatta | `mmarchetti-digital-compatta.svg` | solo "MMarchetti" + barra; header, spazi stretti |
| Negativa | `mmarchetti-digital-negativa.svg` | su Grafite — "MMarchetti" Carta, barra Evidenziatore, "Digital" Linea |
| Monocromatica | `mmarchetti-digital-monocromatica.svg` | tutto Grafite, barra Grafite al 20%; stampa a un colore, fotocopie |
| Avatar / monogramma | `mmarchetti-avatar-mm.svg`, `mmarchetti-avatar-mm-400.png` | quadrato Evidenziatore, "MM" Grafite nel 60% centrale; LinkedIn, favicon |

### Regole
- Area di rispetto: pari all'altezza della "M" su tutti i lati.
- Dimensione minima: 120px di larghezza (logo principale), 24px (avatar).
- Vietato: ruotare, deformare, aggiungere ombre o contorni, cambiare colori, cambiare font, usare la barra a pennello o con texture, mettere il logo principale su foto senza un fondo pieno.

---

## 11. Elementi grafici

- **Evidenziatore come sistema:** la stessa barra gialla piatta si usa per evidenziare 1–3 parole chiave in titoli, slide e post (mai più di un'evidenza per blocco di testo). Su fondo chiaro è una barra dalla baseline a ~45% dell'altezza x; su Grafite diventa un blocco pieno Evidenziatore con testo Grafite (la barra parziale renderebbe illeggibile la parte alta delle lettere). Classe `.mm-hl` (campitura a tinta unica: il `linear-gradient` con due stop identici è solo una tecnica CSS per una barra piatta, non un gradiente).
- **Etichette di sezione:** Plex Mono maiuscolo, preceduto da numero (es. `01 — FORMAZIONE`).
- **Icone:** lineari, tratto 1.5px, angoli vivi, colore Grafite (es. Lucide o Phosphor Regular). Mai icone 3D, emoji o illustrazioni stock.
- **Fotografia:** reale, situazioni di lavoro e aula, luce naturale, persone vere al lavoro su compiti concreti. Vietate foto stock con robot, ologrammi, mani che toccano schermi luminosi, cervelli digitali. In assenza di foto: riquadro Carta con bordo Linea ed etichetta Mono `FOTO — AULA, LUCE NATURALE`.

---

## 12. Package map

| Percorso | Contenuto |
|---|---|
| `DESIGN.md` | questo documento (regole canoniche) |
| `colors_and_type.css` | token + `@font-face` verso `fonts/` |
| `components.css` | classi dei componenti base (§6) |
| `fonts/` | IBM Plex Sans 400/400i/600/700, IBM Plex Mono 400/500 (woff2 + ttf) + `OFL.txt` |
| `assets/logo/` | 5 varianti logo SVG in tracciati + avatar PNG 400px |
| `preview/` | card di revisione (colori, tipo, spazi, componenti, logo, voce) — elenco in `README.md` § Preview Manifest |
| `ui_kits/app/` | homepage del sito come kit React modulare (`index.html`, `app.css`, `components/*.jsx`) |
| `build/` | assente: le fonti non contengono icone runtime |
| `source_examples/` | sorgenti originali: brand spec caricato + script logo |
| `context/` | provenienza, contesto di setup, script |
