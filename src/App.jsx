import { useEffect, useState } from "react";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";

function App() {
  // stato che contiene la lista dei profumi
  const [perfumes, setPerfumes] = useState([]);

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

  return (
    <MainLayout>
      <HomePage perfumes={perfumes} />
    </MainLayout>
  );
}

export default App;
