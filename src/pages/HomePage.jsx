import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import PerfumeCard from "../components/PerfumeCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortSelect from "../components/SortSelect";

function HomePage({
  perfumes,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  sortOption,
  setSortOption,
  favorites,
  toggleFavorite,
  compareItems,
  toggleCompare,
}) {
  const navigate = useNavigate();

  // stato che gestisce l'apertura del modal compare
  const [showCompareModal, setShowCompareModal] = useState(false);

  // apertura automatica del modal quando ci sono 2 profumi selezionati
  // chiusura automatica se i profumi tornano meno di 2
  useEffect(() => {
    if (compareItems.length === 2) {
      setShowCompareModal(true);
    }

    if (compareItems.length < 2) {
      setShowCompareModal(false);
    }
  }, [compareItems]);

  return (
    <>
      <Hero />

      <main className="container">
        <section className="products-section">
          <div className="section-heading">
            <p>our collection</p>
            <h2>trending perfumes</h2>
          </div>

          <div className="controls">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
          </div>

          <div className="card-container">
            {perfumes.map((perfume) => (
              <PerfumeCard
                key={perfume.id}
                perfume={perfume}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                compareItems={compareItems}
                toggleCompare={toggleCompare}
              />
            ))}
          </div>
        </section>
      </main>

      {showCompareModal && compareItems.length === 2 && (
        <div className="compare-overlay">
          <div className="compare-modal">
            <button
              className="compare-close-btn"
              onClick={() => setShowCompareModal(false)}
            >
              ×
            </button>

            <p>2 perfumes selected</p>
            <h3>ready to compare?</h3>

            <div className="compare-actions">
              <button
                className="primary-btn"
                onClick={() => navigate("/compare")}
              >
                compare now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
