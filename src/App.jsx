import { useEffect, useState } from "react";

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
        console.log(data); // debug
        setPerfumes(data);
      })
      // gestione errori
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Perfumes</h1>

      {/* contenitore delle card */}
      <div className="card-container">
        {perfumes.map((perfume) => (
          <div className="card" key={perfume.id}>
            {/* immagine del profumo */}
            <img src={perfume.imageUrl} alt={perfume.title} />

            {/* titolo */}
            <h3>{perfume.title}</h3>

            {/* categoria */}
            <p>{perfume.category}</p>

            {/* brand */}
            <p>{perfume.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
