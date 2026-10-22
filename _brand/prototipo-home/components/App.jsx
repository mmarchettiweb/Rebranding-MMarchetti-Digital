/* App — guscio del sito MMarchetti Digital. Compone header, hero, servizi, metodo,
   citazione, domande, contatto e footer; tiene traccia della sezione attiva. */
function App() {
  const { Header, Hero, ServicesSection, CaseStudy, QuoteBlock, FaqList, ContactForm, Footer } = window;
  const [active, setActive] = React.useState(null);

  const navigate = React.useCallback((id) => {
    const el = id === 'top' ? document.body : document.getElementById(id);
    if (!el) return;
    const y = id === 'top' ? 0 : el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top: y, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    setActive(id === 'top' ? null : id);
  }, []);

  // Sezione attiva durante lo scroll (barra Evidenziatore sotto la voce di menu)
  React.useEffect(() => {
    const ids = window.NAV_ITEMS.map((i) => i.id);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ids.forEach((id) => { const el = document.getElementById(id); el && obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="site mm-root">
      <a className="skip" href="#main">Vai al contenuto</a>
      <Header active={active} onNavigate={navigate} />
      <main id="main">
        <Hero onNavigate={navigate} />
        <ServicesSection />
        <CaseStudy />
        <QuoteBlock role="Responsabile marketing, PMI del trevigiano">
          "Niente slide da guardare: abbiamo lavorato sulle nostre email e il giorno dopo il metodo <span className="mm-hl">funzionava</span>."
        </QuoteBlock>
        <FaqList />
        <ContactForm />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

window.App = App;
