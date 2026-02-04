import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Bolleria: React.FC = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="Bollería artesanal"
          subtitle="Recién hechos cada mañana"
          text="Croissants, napolitanas, ensaimadas y mucho más."
        />

        <section className="fullwidth">
          <div className="section-header">
            <h2>Nuestra bollería</h2>
            <p>Elige tus piezas favoritas y añádelas al carrito.</p>
          </div>

          <div className="section-line"></div>

          <div className="grid fade-up">

            {/* 1 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card1.png" alt="Croissant artesano" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Croissant artesano</h3>
                <p>Hojaldre crujiente y mantequilla de primera calidad.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 2 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card2.png" alt="Napolitana de chocolate" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Napolitana de chocolate</h3>
                <p>Rellena de chocolate fundido y hojaldre dorado.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 3 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card3.png" alt="Ensaimada" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Ensaimada</h3>
                <p>Tierna, esponjosa y con azúcar glas por encima.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 4 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card4.png" alt="Caracola de pasas" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Caracola de pasas</h3>
                <p>Hojaldre suave con crema pastelera y pasas.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 5 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card5.png" alt="Caña de crema" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Caña de crema</h3>
                <p>Rellena de crema suave y cubierta de azúcar.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 6 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card6.png" alt="Croissant de chocolate" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Croissant de chocolate</h3>
                <p>Perfecto para los amantes del cacao.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 7 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card7.png" alt="Berlinas rellenas" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Berlinas rellenas</h3>
                <p>Suaves, esponjosas y con un corazón de crema o chocolate.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 8 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card8.png" alt="Hojaldre de manzana" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Hojaldre de manzana</h3>
                <p>Láminas de hojaldre dorado con manzana caramelizada.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Bolleria;
