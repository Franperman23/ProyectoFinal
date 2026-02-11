import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { CartContext } from "../context/CartContext";

const Panaderia: React.FC = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="Panadería artesanal"
          subtitle="El pan de siempre, hecho como antes"
          text="Hogazas, barras, integrales, rústicos y mucho más."
        />

        <section className="fullwidth">
          <div className="section-header">
            <h2>Nuestros panes</h2>
            <p>Selecciona tus favoritos y añádelos al carrito.</p>
          </div>

          <div className="section-line"></div>

          <div className="grid fade-up">

            {/* 1 */}
            <article className="card">
              <div className="card-image">
                <img src="img panaderia/card1.png" alt="Barra artesana" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Barra artesana</h3>
                <p>Corteza crujiente y miga suave. Ideal para el día a día.</p>
                <p className="price">1.20 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 201,
                      nombre: "Barra artesana",
                      precio: 1.2,
                      imagen: "img panaderia/card1.png",
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
                <img src="img panaderia/card2.png" alt="Hogaza rústica" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Hogaza rústica</h3>
                <p>Pan de masa madre con fermentación lenta y sabor profundo.</p>
                <p className="price">3.50 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 202,
                      nombre: "Hogaza rústica",
                      precio: 3.5,
                      imagen: "img panaderia/card2.png",
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
                <img src="img panaderia/card3.png" alt="Pan integral" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan integral</h3>
                <p>100% harina integral. Rico en fibra y muy saludable.</p>
                <p className="price">2.80 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 203,
                      nombre: "Pan integral",
                      precio: 2.8,
                      imagen: "img panaderia/card3.png",
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
                <img src="img panaderia/card4.png" alt="Pan de centeno" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan de centeno</h3>
                <p>Intenso, aromático y perfecto para acompañar quesos.</p>
                <p className="price">3.20 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 204,
                      nombre: "Pan de centeno",
                      precio: 3.2,
                      imagen: "img panaderia/card4.png",
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
                <img src="img panaderia/card5.png" alt="Baguette francesa" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Baguette francesa</h3>
                <p>Ligera, crujiente y con un aroma irresistible.</p>
                <p className="price">1.40 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 205,
                      nombre: "Baguette francesa",
                      precio: 1.4,
                      imagen: "img panaderia/card5.png",
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
                <img src="img panaderia/card6.png" alt="Pan de molde artesano" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan de molde artesano</h3>
                <p>Suave, tierno y sin aditivos. Perfecto para tostadas.</p>
                <p className="price">2.50 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 206,
                      nombre: "Pan de molde artesano",
                      precio: 2.5,
                      imagen: "img panaderia/card6.png",
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
                <img src="img panaderia/card7.png" alt="Pan chapata" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan chapata</h3>
                <p>Textura alveolada, corteza fina y sabor suave. Perfecto para bocadillos.</p>
                <p className="price">1.80 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 207,
                      nombre: "Pan chapata",
                      precio: 1.8,
                      imagen: "img panaderia/card7.png",
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
                <img src="img panaderia/card8.png" alt="Galleta panadera" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Galleta panadera</h3>
                <p>Clásica, crujiente y con un toque dulce. Ideal para desayunos.</p>
                <p className="price">0.90 €</p>

                <button
                  className="btn add-cart"
                  onClick={() =>
                    addToCart({
                      id: 208,
                      nombre: "Galleta panadera",
                      precio: 0.9,
                      imagen: "img panaderia/card8.png",
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

export default Panaderia;
