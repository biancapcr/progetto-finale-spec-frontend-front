import { useEffect, useState } from "react";

function App() {
  // stato che contiene la lista dei profumi recuperati dal backend
  const [perfumes, setPerfumes] = useState([]);

  // effetto eseguito al montaggio del componente
  useEffect(() => {
    // chiamata GET all'endpoint per ottenere la lista dei profumi
    fetch("http://localhost:3001/perfumes")
      // conversione della risposta in formato json
      .then((res) => res.json())
      // aggiornamento dello stato con i dati ricevuti
      .then((data) => {
        console.log(data); // stampa di debug
        setPerfumes(data);
      })
      // gestione eventuali errori
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Perfumes</h1>

      <div className="card-container">
        {perfumes.map((perfume) => (
          <div className="card" key={perfume.id}>
            {/* immagine del profumo */}
            <img
              src={perfume.imageUrl || "https://via.placeholder.com/200"}
              alt={perfume.title}
            />

            {/* titolo */}
            <h3>{perfume.title}</h3>

            {/* categoria */}
            <p>{perfume.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
