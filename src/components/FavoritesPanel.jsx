import { Link } from "react-router-dom";

function FavoritesPanel({ favorites, toggleFavorite, setIsFavoritesOpen }) {
  return (
    <aside className="favorites-panel">
      {/* header del pannello */}
      <div className="favorites-header">
        <h3>favorites</h3>

        {/* chiusura del pannello */}
        <button
          className="close-favorites-btn"
          onClick={() => setIsFavoritesOpen(false)}
        >
          ×
        </button>
      </div>

      {/* stato vuoto */}
      {favorites.length === 0 ? (
        <p className="favorites-empty">no favorite perfumes yet</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((perfume) => (
            <div className="favorite-item" key={perfume.id}>
              {/* link al dettaglio */}
              <Link to={`/perfumes/${perfume.id}`} className="favorite-link">
                <img src={perfume.imageUrl} alt={perfume.title} />

                <div className="favorite-text">
                  <p>{perfume.title}</p>
                  <span>{perfume.brand}</span>
                </div>
              </Link>

              {/* rimozione dai preferiti */}
              <button
                className="remove-favorite-btn"
                onClick={() => toggleFavorite(perfume)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default FavoritesPanel;
