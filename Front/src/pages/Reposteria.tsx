import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { CartContext } from "../context/CartContext";

const Reposteria: React.FC = () => {
  const { addToCart } = useContext(CartContext);

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

            {/* 1 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card1.png" alt="Magdalenas caseras" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Magdalenas caseras</h3>
                <p>Esponjosas, aromáticas y con un toque de limón.</p>
                <p className="price">3.50 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 1,
                      nombre: "Magdalenas caseras",
                      precio: 3.5,
                      imagen: "img reposteria/card1.png",
                    })
                  }
                >
                  Añadir al carrito
                </button>
              </div>
            </article>

            {/* 2 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card2.png" alt="Brownie de chocolate" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Brownie de chocolate</h3>
                <p>Intenso, húmedo y con nueces tostadas.</p>
                <p className="price">2.80 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 2,
                      nombre: "Brownie de chocolate",
                      precio: 2.8,
                      imagen: "img reposteria/card2.png",
                    })
                  }
                >
                  Añadir al carrito
                </button>
              </div>
            </article>

            {/* 3 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card3.png" alt="Tarta de queso" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta de queso</h3>
                <p>Cremosa, suave y con base de galleta crujiente.</p>
                <p className="price">14.00 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 3,
                      nombre: "Tarta de queso",
                      precio: 14.0,
                      imagen: "img reposteria/card3.png",
                    })
                  }
                >
                  Añadir al carrito
                </button>
              </div>
            </article>

            {/* 4 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card4.png" alt="Galletas de mantequilla" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Galletas de mantequilla</h3>
                <p>Clásicas, delicadas y perfectas para acompañar café.</p>
                <p className="price">2.20 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 4,
                      nombre: "Galletas de mantequilla",
                      precio: 2.2,
                      imagen: "img reposteria/card4.png",
                    })
                  }
                >
                  Añadir al carrito
                </button>
              </div>
            </article>

            {/* 5 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card5.png" alt="Rollos de canela" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Rollos de canela</h3>
                <p>Masa tierna con canela y glaseado dulce.</p>
                <p className="price">3.00 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 5,
                      nombre: "Rollos de canela",
                      precio: 3.0,
                      imagen: "img reposteria/card5.png",
                    })
                  }
                >
                  Añadir al carrito
                </button>
              </div>
            </article>

            {/* 6 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card6.png" alt="Tarta de chocolate" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta de chocolate</h3>
                <p>Bizcocho húmedo con cobertura de cacao puro.</p>
                <p className="price">16.00 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 6,
                      nombre: "Tarta de chocolate",
                      precio: 16.0,
                      imagen: "img reposteria/card6.png",
                    })
                  }
                >
                  Añadir al carrito
                </button>
              </div>
            </article>

            {/* 7 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card7.png" alt="Merengues artesanos" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Merengues artesanos</h3>
                <p>Ligeros, dulces y crujientes.</p>
                <p className="price">1.50 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 7,
                      nombre: "Merengues artesanos",
                      precio: 1.5,
                      imagen: "img reposteria/card7.png",
                    })
                  }
                >
                  Añadir al carrito
                </button>
              </div>
            </article>

            {/* 8 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card8.png" alt="Pastas surtidas" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pastas surtidas</h3>
                <p>Variedad de sabores para todos los gustos.</p>
                <p className="price">4.00 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 8,
                      nombre: "Pastas surtidas",
                      precio: 4.0,
                      imagen: "img reposteria/card8.png",
                    })
                  }
                >
                  Añadir al carrito
                </button>
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
