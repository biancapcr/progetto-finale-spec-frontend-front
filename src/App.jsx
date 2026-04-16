import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import PerfumeDetailPage from "./pages/PerfumeDetailPage";
import FavoritesPanel from "./components/FavoritesPanel";

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

  // effetto eseguito al montaggio del componente
  useEffect(() => {
    // chiamata GET all'endpoint per ottenere tutti i profumi
    fetch("http://localhost:3001/perfumes")
      // conversione della risposta in json
      .then((res) => res.json())
      // aggiornamento dello stato con i dati ricevuti
      .then((data) => {
        console.log(data);
        setPerfumes(data);
      })
      // gestione errori
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
      {/* pannello preferiti aperto */}
      {isFavoritesOpen && (
        <FavoritesPanel
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          setIsFavoritesOpen={setIsFavoritesOpen}
        />
      )}

      {/* bottone floating quando il pannello è chiuso */}
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
            />
          }
        />

        <Route
          path="/perfumes/:id"
          element={
            <PerfumeDetailPage
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
