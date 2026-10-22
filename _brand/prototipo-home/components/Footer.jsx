/* Footer — sezione Grafite con logo negativo; link in Evidenziatore, sottolineati.
   Dati di contatto lasciati come segnaposto onesti. */
function Footer({ onNavigate }) {
  const go = (id) => (e) => { e.preventDefault(); onNavigate(id); };
  return (
    <footer className="footer theme-grafite">
      <div className="container">
        <div className="footer__grid">
          <div>
            <img className="footer__logo" src="../../assets/logo/mmarchetti-digital-negativa.svg" alt="MMarchetti Digital" />
            <p>Comunicazione digitale e AI, in pratica.</p>
            <p>Formazione e consulenza in Veneto: Venezia, Padova, Treviso.</p>
          </div>
          <div>
            <span className="mm-label" style={{ display: 'block', marginBottom: 12, color: 'var(--linea)' }}>Sezioni</span>
            <ul>
              {window.NAV_ITEMS.map((i) => <li key={i.id}><a className="mm-link" href={'#' + i.id} onClick={go(i.id)}>{i.label}</a></li>)}
            </ul>
          </div>
          <div>
            <span className="mm-label" style={{ display: 'block', marginBottom: 12, color: 'var(--linea)' }}>Contatti</span>
            <ul>
              <li><a className="mm-link" href="#contatti" onClick={go('contatti')}>Scrivimi dal modulo</a></li>
              <li style={{ color: 'var(--linea)' }}>Email — <span className="mono">segnaposto</span></li>
              <li style={{ color: 'var(--linea)' }}>LinkedIn — <span className="mono">segnaposto</span></li>
            </ul>
          </div>
        </div>
        <div className="footer__base">
          <span>© Marco Marchetti · P.IVA segnaposto</span>
          <span>Privacy · Cookie</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
