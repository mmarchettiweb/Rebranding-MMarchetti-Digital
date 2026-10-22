/* FaqList — domande frequenti ad accordion. Tono "onesto sui limiti" (DESIGN.md §8). */
const FAQS = [
  { q: 'L\'AI sostituisce qualcuno nel mio team?', a: 'No. Toglie lavoro ripetitivo, ma rileggere, decidere e firmare resta compito delle persone. In aula lo dico subito, e lo mostro con esempi.' },
  { q: 'Servono competenze tecniche per seguire un corso?', a: 'No. Serve sapere usare email e browser. I termini tecnici li spiego la prima volta che compaiono.' },
  { q: 'Lavori anche con enti di formazione e scuole?', a: 'Sì. Preparo moduli per corsi finanziati, programmi GOL e formazione docenti, con preventivo e programma in formato ufficiale.' },
  { q: 'Fai anche siti web?', a: 'Sì, ma come supporto: quando un sito semplice serve davvero al progetto in corso. Non è il mio servizio principale.' },
];

function FaqList() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section" id="domande" aria-labelledby="domande-title">
      <div className="container">
        <div className="section__head">
          <span className="mm-label">03 — Domande</span>
          <h2 id="domande-title" className="mm-h1">Prima di scrivermi</h2>
        </div>
        <div className="faq">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className="faq__item" key={f.q}>
                <h3 style={{ margin: 0 }}>
                  <button className="faq__q" type="button" aria-expanded={isOpen} aria-controls={'faq-' + i} id={'faq-q-' + i}
                    onClick={() => setOpen(isOpen ? -1 : i)}>
                    {f.q}<span className="faq__icon" aria-hidden="true"></span>
                  </button>
                </h3>
                <div className="faq__a" id={'faq-' + i} role="region" aria-labelledby={'faq-q-' + i} hidden={!isOpen}>
                  <p className="mm-p">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.FaqList = FaqList;
