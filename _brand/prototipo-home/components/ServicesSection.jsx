/* ServicesSection — i tre servizi in ordine di peso (DESIGN.md §0).
   Le schede "Per chi" cambiano l'esempio concreto mostrato in ogni card. */
const AUDIENCES = [
  { id: 'pmi', label: 'Titolari di PMI' },
  { id: 'marketing', label: 'Marketing manager' },
  { id: 'enti', label: 'Enti e scuole' },
];

const SERVICES = [
  {
    n: '01', title: 'Formazione e consulenza',
    body: 'Corsi in azienda e consulenza su comunicazione digitale e web marketing. Si lavora su materiale vero, non su esempi da manuale.',
    examples: {
      pmi: 'Mezza giornata con l\'ufficio commerciale: post LinkedIn e newsletter scritti partendo dai vostri prodotti.',
      marketing: 'Un piano editoriale di tre mesi costruito insieme, con i tempi reali del tuo team.',
      enti: 'Moduli per corsi finanziati e programmi GOL, con esercitazioni pronte per l\'aula.',
    },
  },
  {
    n: '02', title: 'AI applicata',
    body: 'Scelgo con te un processo ripetitivo e lo rendo più veloce con l\'AI. Con regole chiare su cosa resta a te.',
    examples: {
      pmi: 'Risposte alle richieste di preventivo: l\'AI prepara la bozza, tu controlli prezzi e tempi.',
      marketing: 'Schede prodotto e testi per le campagne: prima bozza con l\'AI, revisione con una checklist.',
      enti: 'Lezione per docenti: come usare l\'AI per preparare esercizi, e dove non fidarsi.',
    },
  },
  {
    n: '03', title: 'Siti web', support: true,
    body: 'Quando serve, un sito semplice che il team aggiorna da solo. È un servizio di supporto, non il punto di partenza.',
    examples: {
      pmi: 'Sito vetrina chiaro, con le pagine che i clienti cercano davvero.',
      marketing: 'Landing page per una campagna, collegata agli strumenti che usi già.',
      enti: 'Pagine corso con calendario e iscrizioni facili da aggiornare.',
    },
  },
];

function ServicesSection() {
  const [aud, setAud] = React.useState('pmi');
  const tabRefs = React.useRef([]);

  const onKey = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + AUDIENCES.length) % AUDIENCES.length;
    setAud(AUDIENCES[next].id);
    tabRefs.current[next] && tabRefs.current[next].focus();
  };

  return (
    <section className="section" id="servizi" aria-labelledby="servizi-title">
      <div className="container">
        <div className="section__head">
          <span className="mm-label">01 — Servizi</span>
          <h2 id="servizi-title" className="mm-h1">Cosa faccio, in ordine di importanza</h2>
          <p className="mm-p">Scegli chi sei: in ogni card vedi un esempio di lavoro concreto.</p>
        </div>
        <div className="tabs" role="tablist" aria-label="Per chi">
          {AUDIENCES.map((a, i) => (
            <button key={a.id} ref={(el) => { tabRefs.current[i] = el; }} className="tab" role="tab" type="button"
              id={'tab-' + a.id} aria-selected={aud === a.id} aria-controls="servizi-panel" tabIndex={aud === a.id ? 0 : -1}
              onClick={() => setAud(a.id)} onKeyDown={(e) => onKey(e, i)}>
              {a.label}
            </button>
          ))}
        </div>
        <div className="services" id="servizi-panel" role="tabpanel" aria-labelledby={'tab-' + aud}>
          {SERVICES.map((s) => (
            <article key={s.n} className={'mm-card service' + (s.support ? ' service--support' : '')}>
              <span className="mm-label">{s.n} — {s.support ? 'Supporto' : 'Servizio'}</span>
              <h3 className="mm-h3">{s.title}</h3>
              <p>{s.body}</p>
              <p className="service__example" aria-live="polite">
                <span className="mm-label">Esempio</span>
                {s.examples[aud]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ServicesSection = ServicesSection;
