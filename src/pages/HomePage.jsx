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
    </>
  );
}

export default HomePage;
