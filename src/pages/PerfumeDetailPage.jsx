import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function PerfumeDetailPage({ favorites, toggleFavorite }) {
  // recupero dell'id dinamico dall'url
  const { id } = useParams();

  // stato che contiene il singolo profumo
  const [perfume, setPerfume] = useState(null);

  // stato che contiene i profumi correlati
  const [relatedPerfumes, setRelatedPerfumes] = useState([]);

  // stato per gestire il loading
  const [loading, setLoading] = useState(true);

  // stato per eventuali errori
  const [error, setError] = useState(false);

  // fetch del profumo selezionato
  useEffect(() => {
    fetch(`http://localhost:3001/perfumes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPerfume(data.perfume);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  // fetch dei profumi correlati
  useEffect(() => {
    if (!perfume) return;

    fetch("http://localhost:3001/perfumes")
      .then((res) => res.json())
      .then((data) => {
        const filteredRelated = data
          .filter(
            (item) =>
              item.id !== perfume.id &&
              item.category.toLowerCase() === perfume.category.toLowerCase(),
          )
          .slice(0, 3);

        setRelatedPerfumes(filteredRelated);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [perfume]);

  // stato di caricamento
  if (loading) {
    return <p className="status-message">loading perfume...</p>;
  }

  // stato di errore o dato non trovato
  if (error || !perfume) {
    return <p className="status-message">perfume not found</p>;
  }

  // controllo se il profumo è già nei preferiti
  const isFavorite = favorites.some((item) => item.id === perfume.id);

  return (
    <main className="container perfume-detail-page">
      {/* layout principale */}
      <div className="detail-layout">
        {/* colonna sinistra: immagine singola */}
        <section className="detail-gallery">
          <div className="main-detail-image">
            <img src={perfume.imageUrl} alt={perfume.title} />
          </div>
        </section>

        {/* colonna centrale: informazioni prodotto */}
        <section className="detail-info-panel">
          <p className="detail-label">{perfume.category}</p>

          <h2>{perfume.title}</h2>

          <p className="detail-brand">{perfume.brand}</p>

          <p className="detail-main-description">{perfume.description}</p>

          <div className="detail-meta">
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
          </div>

          <div className="detail-actions">
            <button
              className="primary-btn"
              onClick={() => toggleFavorite(perfume)}
            >
              {isFavorite ? "remove from favorites" : "add to favorites"}
            </button>

            <button className="secondary-btn">add to compare</button>
          </div>
        </section>

        {/* colonna destra: prodotti correlati */}
        <aside className="detail-sidebar">
          <div className="sidebar-card related-card">
            <h4>you may also like</h4>

            <div className="related-mini-grid">
              {relatedPerfumes.map((item) => (
                <Link
                  to={`/perfumes/${item.id}`}
                  className="related-mini-item"
                  key={item.id}
                >
                  <img src={item.imageUrl} alt={item.title} />

                  <div className="related-mini-text">
                    <p>{item.title}</p>
                    <span>{item.brand}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default PerfumeDetailPage;
