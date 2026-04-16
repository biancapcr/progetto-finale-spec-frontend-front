import Hero from "../components/Hero";
import PerfumeCard from "../components/PerfumeCard";

function HomePage({ perfumes }) {
  return (
    <>
      <Hero />

      <main className="container">
        <section className="products-section">
          <div className="section-heading">
            <p>our collection</p>
            <h2>trending perfumes</h2>
          </div>

          <div className="card-container">
            {perfumes.map((perfume) => (
              <PerfumeCard key={perfume.id} perfume={perfume} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
