/* ContactForm — modulo di contatto con validazione reale.
   Errori: bordo 2px Grafite + messaggio "Errore: …" (mai solo colore). Successo: tag FATTO + frase concreta. */
const TOPICS = ['Formazione per il team', 'AI applicata ai processi', 'Consulenza su comunicazione digitale', 'Corso per ente o scuola', 'Sito web'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Field({ id, label, hint, error, children }) {
  return (
    <div className="mm-field">
      <label className="mm-field__label" htmlFor={id}>{label}</label>
      {children}
      {error ? <span className="mm-field__error" id={id + '-e'}><strong>Errore:</strong> {error}</span>
        : hint ? <span className="mm-field__hint" id={id + '-h'}>{hint}</span> : null}
    </div>
  );
}

function ContactForm() {
  const [v, setV] = React.useState({ nome: '', email: '', tema: '', msg: '', privacy: false });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const formRef = React.useRef(null);

  const set = (k) => (e) => setV({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const validate = () => {
    const e = {};
    if (!v.nome.trim()) e.nome = 'scrivi come ti chiami.';
    if (!v.email.trim()) e.email = 'serve un indirizzo per risponderti.';
    else if (!EMAIL_RE.test(v.email.trim())) e.email = 'l\'indirizzo non è completo (es. nome@azienda.it).';
    if (!v.tema) e.tema = 'scegli un argomento, così preparo la risposta giusta.';
    if (!v.privacy) e.privacy = 'serve la conferma dell\'informativa privacy.';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      setSent(false);
      requestAnimationFrame(() => { const el = formRef.current.querySelector('[aria-invalid="true"]'); el && el.focus(); });
      return;
    }
    setSent(true);
  };

  const aria = (k) => ({ 'aria-invalid': errors[k] ? 'true' : undefined, 'aria-describedby': errors[k] ? k + '-e' : undefined });

  return (
    <section className="section" id="contatti" aria-labelledby="contatti-title">
      <div className="container contact">
        <div className="contact__aside">
          <span className="mm-label">04 — Contatti</span>
          <h2 id="contatti-title" className="mm-h1" style={{ margin: 'var(--space-2) 0 var(--space-3)' }}>Raccontami il compito che vorresti semplificare</h2>
          <p className="mm-p">Ti rispondo io, di persona, entro due giorni lavorativi. Se serve, ti propongo una call di 20 minuti.</p>
          <p className="mm-small mm-muted">Per enti e scuole preparo preventivo e programma in formato ufficiale.</p>
        </div>
        <div className="mm-card">
          {sent ? (
            <div role="status">
              <p className="contact__done"><span className="mm-tag mm-tag--done">Fatto</span> Ricevuto, {v.nome.trim().split(' ')[0]}.</p>
              <p className="mm-p" style={{ margin: 'var(--space-2) 0 var(--space-3)' }}>Ti rispondo entro due giorni lavorativi all'indirizzo {v.email.trim()}.</p>
              <button className="mm-btn mm-btn--secondary" type="button" onClick={() => { setSent(false); setV({ nome: '', email: '', tema: '', msg: '', privacy: false }); }}>
                <span className="mm-btn__label">Invia un'altra richiesta</span>
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={submit} noValidate>
              <div className="contact__row">
                <Field id="nome" label="Nome e cognome" error={errors.nome}>
                  <input className="mm-input" id="nome" autoComplete="name" value={v.nome} onChange={set('nome')} {...aria('nome')} />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input className="mm-input" id="email" type="email" autoComplete="email" placeholder="nome@azienda.it" value={v.email} onChange={set('email')} {...aria('email')} />
                </Field>
              </div>
              <Field id="tema" label="Di cosa hai bisogno" error={errors.tema}>
                <select className="mm-select" id="tema" value={v.tema} onChange={set('tema')} {...aria('tema')}>
                  <option value="">Scegli un'opzione</option>
                  {TOPICS.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
              <Field id="msg" label="Il compito, in due righe" hint="Facoltativo. Es. rispondere alle richieste di preventivo.">
                <textarea className="mm-textarea" id="msg" value={v.msg} onChange={set('msg')} aria-describedby="msg-h" />
              </Field>
              <div>
                <label className="mm-check">
                  <input type="checkbox" id="privacy" checked={v.privacy} onChange={set('privacy')} {...aria('privacy')} />
                  <span>Ho letto l'<a className="mm-link" href="#contatti">informativa privacy</a>.</span>
                </label>
                {errors.privacy ? <span className="mm-field__error" id="privacy-e" style={{ display: 'block', marginTop: 6 }}><strong>Errore:</strong> {errors.privacy}</span> : null}
              </div>
              <div><button className="mm-btn" type="submit"><span className="mm-btn__label">Invia la richiesta</span></button></div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

window.ContactForm = ContactForm;
