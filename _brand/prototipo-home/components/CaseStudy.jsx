/* CaseStudy — "Come lavoro": quattro passi numerati in Mono + colonna dati.
   Testo 7 colonne, supporto 5 colonne (DESIGN.md §5). */
const STEPS = [
  { title: 'Scegli un compito vero', text: 'Una cosa che il team fa ogni settimana e che porta via tempo: email, post, preventivi, report.' },
  { title: 'Lo risolvo con il team, in aula', text: 'Mezza giornata di lavoro pratico sui vostri materiali. Ognuno prova, sbaglia, corregge.' },
  { title: 'Scrivo la procedura', text: 'Due pagine al massimo: i passaggi, i prompt che funzionano, cosa va sempre controllato a mano.' },
  { title: 'Il team la usa da solo', text: 'Dopo un mese faccio un controllo: cosa funziona, cosa togliere. Poi non servo più.' },
];

function CaseStudy() {
  const { FigureStat } = window;
  return (
    <section className="section" id="metodo" aria-labelledby="metodo-title">
      <div className="container">
        <div className="section__head">
          <span className="mm-label">02 — Come lavoro</span>
          <h2 id="metodo-title" className="mm-h1">Un compito, quattro passi, nessun progetto nel cassetto</h2>
        </div>
        <div className="method">
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step__n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="mm-h4">{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <aside className="mm-card stats" aria-label="Esempio da un'aula">
            <span className="mm-label">Martedì in aula · esempio</span>
            <FigureStat value="14" label="persone, un'ora, un compito vero" placeholder />
            <FigureStat value="20′" label="risparmiati a testa, ogni giorno, sulle email ai clienti" placeholder />
            <p className="mm-small mm-muted" style={{ margin: 0 }}>Nessuna rivoluzione. È da qui che si parte.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

window.CaseStudy = CaseStudy;
