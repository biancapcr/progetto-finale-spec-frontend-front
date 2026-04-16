function ComparePage({ compareItems, toggleCompare }) {
  return (
    <main className="container compare-page">
      {/* intestazione pagina */}
      <div className="compare-heading">
        <p>comparison</p>
        <h2>compare perfumes</h2>
      </div>

      {/* stato vuoto */}
      {compareItems.length === 0 && (
        <p className="status-message">no perfumes selected for comparison</p>
      )}

      {/* stato con un solo elemento */}
      {compareItems.length === 1 && (
        <p className="status-message">
          select one more perfume to complete the comparison
        </p>
      )}

      {/* confronto di 2 profumi */}
      {compareItems.length === 2 && (
        <div className="compare-grid">
          {compareItems.map((perfume) => (
            <div className="compare-card" key={perfume.id}>
              {/* immagine */}
              <img src={perfume.imageUrl} alt={perfume.title} />

              {/* titolo */}
              <h3>{perfume.title}</h3>

              {/* brand */}
              <p className="compare-brand">{perfume.brand}</p>

              {/* dati confrontabili */}
              <div className="compare-info">
                <p>
                  <span>category</span>
                  {perfume.category}
                </p>

                <p>
                  <span>concentration</span>
                  {perfume.concentration}
                </p>

                <p>
                  <span>longevity</span>
                  {perfume.longevity}
                </p>

                <p>
                  <span>season</span>
                  {perfume.season}
                </p>

                <p>
                  <span>description</span>
                  {perfume.description}
                </p>
              </div>

              {/* rimozione dal comparatore */}
              <button
                className="secondary-btn"
                onClick={() => toggleCompare(perfume)}
              >
                remove from compare
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default ComparePage;
