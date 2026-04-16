import { Link } from "react-router-dom";

function PerfumeCard({ perfume, favorites, toggleFavorite }) {
  // controllo se il profumo è già nei preferiti
  const isFavorite = favorites.some((item) => item.id === perfume.id);

  return (
    <div className="card">
      {/* bottone preferiti */}
      <button className="favorite-btn" onClick={() => toggleFavorite(perfume)}>
        {isFavorite ? "♥" : "♡"}
      </button>

      {/* link al dettaglio */}
      <Link to={`/perfumes/${perfume.id}`} className="card-link">
        {/* immagine del profumo */}
        <img src={perfume.imageUrl} alt={perfume.title} />

        {/* contenuto testuale */}
        <div className="card-body">
          <p className="card-category">{perfume.category}</p>
          <h3>{perfume.title}</h3>
          <p className="card-brand">{perfume.brand}</p>
        </div>
      </Link>
    </div>
  );
}

export default PerfumeCard;
