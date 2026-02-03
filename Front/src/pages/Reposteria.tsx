import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Reposteria: React.FC = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="Repostería artesanal"
          subtitle="Dulces hechos con cariño"
          text="Magdalenas, brownies, tartas, galletas y mucho más."
        />

        <section className="fullwidth">
          <div className="section-header">
            <h2>Nuestra repostería</h2>
            <p>Elige tus dulces favoritos y añádelos al carrito.</p>
          </div>

          <div className="section-line"></div>

          <div className="grid fade-up">

            <article className="card">
              <div className="card-image">
                <img src="/img reposteria/card1.png" alt="Magdalenas caseras" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Magdalenas caseras</h3>
                <p>Esponjosas, aromáticas y con un toque de limón.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="/img reposteria/card2.png" alt="Brownie de chocolate" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Brownie de chocolate</h3>
                <p>Intenso, húmedo y con nueces tostadas.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="/img reposteria/card3.png" alt="Tarta de queso" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta de queso</h3>
                <p>Cremosa, suave y con base de galleta crujiente.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="/img reposteria/card4.png" alt="Galletas de mantequilla" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Galletas de mantequilla</h3>
                <p>Clásicas, delicadas y perfectas para acompañar café.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="/img reposteria/card5.png" alt="Rollos de canela" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Rollos de canela</h3>
                <p>Masa tierna con canela y glaseado dulce.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="/img reposteria/card6.png" alt="Tarta de chocolate" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta de chocolate</h3>
                <p>Bizcocho húmedo con cobertura de cacao puro.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="/img reposteria/card7.png" alt="Merengues artesanos" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Merengues artesanos</h3>
                <p>Ligeros, dulces y crujientes.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="/img reposteria/card8.png" alt="Pastas surtidas" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pastas surtidas</h3>
                <p>Variedad de sabores para todos los gustos.</p>
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

export default Reposteria;
