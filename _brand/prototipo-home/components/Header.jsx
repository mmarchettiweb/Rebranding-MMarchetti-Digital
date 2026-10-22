/* Header — wordmark compatto, navigazione per sezioni, CTA primaria, menu mobile.
   Voce attiva: barra Evidenziatore 3px sotto (DESIGN.md §5). */
const NAV_ITEMS = [
  { id: 'servizi', n: '01', label: 'Servizi' },
  { id: 'metodo', n: '02', label: 'Come lavoro' },
  { id: 'domande', n: '03', label: 'Domande' },
  { id: 'contatti', n: '04', label: 'Contatti' },
];

function Header({ active, onNavigate }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  const go = (id) => (e) => { e.preventDefault(); setOpen(false); onNavigate(id); };

  return (
    <header className="header">
      <div className="container header__bar">
        <a className="header__logo" href="#top" onClick={go('top')} aria-label="MMarchetti Digital — inizio pagina">
          <img src="../../assets/logo/mmarchetti-digital-compatta.svg" alt="MMarchetti" />
        </a>
        <nav className="nav" aria-label="Principale">
          <ul className="nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a className="nav__link" href={'#' + item.id} aria-current={active === item.id ? 'true' : undefined} onClick={go(item.id)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="mm-btn" href="#contatti" onClick={go('contatti')}><span className="mm-btn__label">Scrivimi</span></a>
        </nav>
        <button className="menu-btn" type="button" aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(!open)}>
          {open ? 'Chiudi' : 'Menu'}
        </button>
      </div>
      <div id="drawer" className={'drawer' + (open ? ' is-open' : '')} aria-hidden={!open}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={'#' + item.id} onClick={go(item.id)} tabIndex={open ? 0 : -1}>
                <span className="mm-label">{item.n}</span>{item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="mm-btn" href="#contatti" onClick={go('contatti')} tabIndex={open ? 0 : -1} style={{ width: '100%' }}>
          <span className="mm-btn__label">Scrivimi</span>
        </a>
      </div>
    </header>
  );
}

window.Header = Header;
window.NAV_ITEMS = NAV_ITEMS;
