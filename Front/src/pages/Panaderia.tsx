import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Panaderia: React.FC = () => {
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

            {/* PRODUCTO 1 */}
            <article className="card">
              <div className="card-image">
                <img src="/img panaderia/card1.png" alt="Barra artesana" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Barra artesana</h3>
                <p>Corteza crujiente y miga suave. Ideal para el día a día.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* PRODUCTO 2 */}
            <article className="card">
              <div className="card-image">
                <img src="/img panaderia/card2.png" alt="Hogaza rústica" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Hogaza rústica</h3>
                <p>Pan de masa madre con fermentación lenta y sabor profundo.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* PRODUCTO 3 */}
            <article className="card">
              <div className="card-image">
                <img src="/img panaderia/card3.png" alt="Pan integral" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan integral</h3>
                <p>100% harina integral. Rico en fibra y muy saludable.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* PRODUCTO 4 */}
            <article className="card">
              <div className="card-image">
                <img src="/img panaderia/card4.png" alt="Pan de centeno" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan de centeno</h3>
                <p>Intenso, aromático y perfecto para acompañar quesos.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* PRODUCTO 5 */}
            <article className="card">
              <div className="card-image">
                <img src="/img panaderia/card5.png" alt="Baguette francesa" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Baguette francesa</h3>
                <p>Ligera, crujiente y con un aroma irresistible.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* PRODUCTO 6 */}
            <article className="card">
              <div className="card-image">
                <img src="/img panaderia/card6.png" alt="Pan de molde artesano" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan de molde artesano</h3>
                <p>Suave, tierno y sin aditivos. Perfecto para tostadas.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* PRODUCTO 7 */}
            <article className="card">
              <div className="card-image">
                <img src="/img panaderia/card7.png" alt="Pan chapata" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan chapata</h3>
                <p>Textura alveolada, corteza fina y sabor suave. Perfecto para bocadillos.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* PRODUCTO 8 */}
            <article className="card">
              <div className="card-image">
                <img src="/img panaderia/card8.png" alt="Galleta panadera" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Galleta panadera</h3>
                <p>Clásica, crujiente y con un toque dulce. Ideal para desayunos.</p>
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

export default Panaderia;
