/* QuoteBlock — testimonianza su Grafite, una parola chiave evidenziata.
   Nessun nome di cliente: ruolo + settore + area (DESIGN.md §8). */
function QuoteBlock({ children, role }) {
  return (
    <section className="quote-section theme-grafite" aria-label="Testimonianza">
      <div className="container">
        <figure className="mm-quote" style={{ margin: 0 }}>
          <span className="mm-label" style={{ display: 'block', marginBottom: 'var(--space-3)', color: 'var(--linea)' }}>Testimonianza</span>
          <blockquote>{children}</blockquote>
          <figcaption>{role} · <span className="mm-tag mm-tag--placeholder" style={{ color: 'var(--linea)', borderColor: 'var(--linea)' }}>Segnaposto</span></figcaption>
        </figure>
      </div>
    </section>
  );
}

window.QuoteBlock = QuoteBlock;
