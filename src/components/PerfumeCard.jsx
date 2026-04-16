import { Link } from "react-router-dom";

function PerfumeCard({ perfume }) {
  return (
    <Link to={`/perfumes/${perfume.id}`} className="card-link">
      <div className="card">
        {/* immagine del profumo */}
        <img src={perfume.imageUrl} alt={perfume.title} />

        {/* contenuto testuale */}
        <div className="card-body">
          <p className="card-category">{perfume.category}</p>
          <h3>{perfume.title}</h3>
          <p className="card-brand">{perfume.brand}</p>
        </div>
      </div>
    </Link>
  );
}

export default PerfumeCard;
