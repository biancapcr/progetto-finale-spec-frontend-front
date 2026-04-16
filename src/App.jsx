import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import PerfumeDetailPage from "./pages/PerfumeDetailPage";
import FavoritesPanel from "./components/FavoritesPanel";
import ComparePage from "./pages/ComparePage";

function App() {
  // stato che contiene la lista dei profumi
  const [perfumes, setPerfumes] = useState([]);

  // stato della barra di ricerca
  const [searchQuery, setSearchQuery] = useState("");

  // stato del filtro categoria
  const [selectedCategory, setSelectedCategory] = useState("");

  // stato dell'ordinamento
  const [sortOption, setSortOption] = useState("");

  // stato dei preferiti
  const [favorites, setFavorites] = useState([]);

  // stato di apertura del pannello preferiti
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(true);

  // stato del comparatore
  const [compareItems, setCompareItems] = useState([]);

  // effetto eseguito al montaggio del componente
  useEffect(() => {
    fetch("http://localhost:3001/perfumes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPerfumes(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // funzione per aggiungere o rimuovere un profumo dai preferiti
  function toggleFavorite(perfume) {
    const isAlreadyFavorite = favorites.some((item) => item.id === perfume.id);

    if (isAlreadyFavorite) {
      setFavorites(favorites.filter((item) => item.id !== perfume.id));
    } else {
      setFavorites([...favorites, perfume]);
    }
  }

  // funzione per aggiungere o rimuovere un profumo dal comparatore
  function toggleCompare(perfume) {
    const isAlreadyInCompare = compareItems.some(
      (item) => item.id === perfume.id,
    );

    // rimozione se già presente
    if (isAlreadyInCompare) {
      setCompareItems(compareItems.filter((item) => item.id !== perfume.id));
      return;
    }

    // aggiunta se ci sono meno di 2 elementi
    if (compareItems.length < 2) {
      setCompareItems([...compareItems, perfume]);
    }
  }

  // copia dell'array originale
  let filteredPerfumes = [...perfumes];

  // filtro per titolo
  if (searchQuery) {
    filteredPerfumes = filteredPerfumes.filter((perfume) =>
      perfume.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  // filtro per categoria
  if (selectedCategory) {
    filteredPerfumes = filteredPerfumes.filter(
      (perfume) =>
        perfume.category.toLowerCase() === selectedCategory.toLowerCase(),
    );
  }

  // ordinamento per titolo crescente
  if (sortOption === "title-asc") {
    filteredPerfumes.sort((a, b) => a.title.localeCompare(b.title));
  }

  // ordinamento per titolo decrescente
  if (sortOption === "title-desc") {
    filteredPerfumes.sort((a, b) => b.title.localeCompare(a.title));
  }

  // ordinamento per categoria crescente
  if (sortOption === "category-asc") {
    filteredPerfumes.sort((a, b) => a.category.localeCompare(b.category));
  }

  // ordinamento per categoria decrescente
  if (sortOption === "category-desc") {
    filteredPerfumes.sort((a, b) => b.category.localeCompare(a.category));
  }

  return (
    <MainLayout>
      {isFavoritesOpen && (
        <FavoritesPanel
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          setIsFavoritesOpen={setIsFavoritesOpen}
        />
      )}

      {!isFavoritesOpen && (
        <button
          className="favorites-floating-btn"
          onClick={() => setIsFavoritesOpen(true)}
        >
          ♥
        </button>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              perfumes={filteredPerfumes}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortOption={sortOption}
              setSortOption={setSortOption}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              compareItems={compareItems}
              toggleCompare={toggleCompare}
            />
          }
        />

        <Route
          path="/perfumes/:id"
          element={
            <PerfumeDetailPage
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              compareItems={compareItems}
              toggleCompare={toggleCompare}
            />
          }
        />

        <Route
          path="/compare"
          element={
            <ComparePage
              compareItems={compareItems}
              toggleCompare={toggleCompare}
            />
          }
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
