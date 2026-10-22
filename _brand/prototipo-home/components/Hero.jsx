/* Hero — Display con una sola evidenza, testo d'esempio da DESIGN.md §8,
   un bottone accento (max 1 per schermata) + un secondario, foto reale (segnaposto). */
function Hero({ onNavigate }) {
  const go = (id) => (e) => { e.preventDefault(); onNavigate(id); };
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div>
          <span className="mm-label">Formazione e consulenza · Veneto</span>
          <h1 id="hero-title" className="mm-display">
            Comunicazione digitale e AI, <span className="mm-hl">in{'\u00a0'}pratica</span>.
          </h1>
          <p className="mm-p hero__lead">
            Lavoro con PMI, enti di formazione e scuole su casi reali, con un obiettivo semplice:
            alla fine il tuo team sa farlo da solo.
          </p>
          <div className="hero__actions">
            <a className="mm-btn mm-btn--accent" href="#contatti" onClick={go('contatti')}>
              <span className="mm-btn__label">Prenota una call di 20 minuti</span>
            </a>
            <a className="mm-btn mm-btn--secondary" href="#servizi" onClick={go('servizi')}>
              <span className="mm-btn__label">Vedi cosa faccio</span>
            </a>
          </div>
          <div className="hero__facts">
            <span className="mm-tag">Venezia · Padova · Treviso</span>
            <span className="mm-tag">In azienda o in aula</span>
          </div>
        </div>
        <div className="mm-photo hero__photo" role="img" aria-label="Segnaposto foto: Marco in aula con un gruppo al lavoro">
          Foto — in aula, luce naturale, persone al lavoro
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
