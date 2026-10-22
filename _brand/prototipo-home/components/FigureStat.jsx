/* FigureStat — dato numerico: numero in Plex Mono 500, etichetta Sans sotto.
   placeholder=true aggiunge l'etichetta SEGNAPOSTO (DESIGN.md §8: usare solo dati reali). */
function FigureStat({ value, label, placeholder }) {
  return (
    <div className="mm-stat">
      <span className="mm-stat__value">{value}</span>
      <span className="mm-stat__label">{label}</span>
      {placeholder ? <span><span className="mm-tag mm-tag--placeholder">Segnaposto</span></span> : null}
    </div>
  );
}

window.FigureStat = FigureStat;
