import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const TartasPersonalizadas: React.FC = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="Tartas personalizadas"
          subtitle="Diseñadas a tu gusto"
          text="Elige sabores, tamaños, decoraciones y crea tu tarta perfecta."
        />

        <section className="fullwidth">
          <div className="section-header">
            <h2>Ejemplos de tartas personalizadas</h2>
            <p>Inspírate con algunos de nuestros diseños más populares y mandanos un mensaje de como quieres que sea tu personalización.</p>
          </div>

          <div className="section-line"></div>

          <div className="grid fade-up">

            {/* 1 — Doraemon */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card1.png" alt="Tarta Doraemon" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta Doraemon</h3>
                <p>Diseño divertido inspirado en el famoso gato cósmico.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 2 — Fútbol */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card2.png" alt="Tarta de fútbol" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta de fútbol</h3>
                <p>Perfecta para los amantes del deporte rey.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 3 — Harry Potter */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card3.png" alt="Tarta Harry Potter" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta Harry Potter</h3>
                <p>Magia, varitas y un diseño digno de Hogwarts.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 4 — La selva */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card4.png" alt="Tarta de la selva" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta de la selva</h3>
                <p>Animales, hojas y un estilo salvaje y colorido.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 5 — Princesas */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card5.png" alt="Tarta de princesas" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta de princesas</h3>
                <p>Ideal para las pequeñas reinas de la casa.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 6 — Pocoyó */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card6.png" alt="Tarta Pocoyó" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta Pocoyó</h3>
                <p>Un diseño tierno y alegre para los más peques.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 7 — Spiderman */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card7.png" alt="Tarta Spiderman" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta Spiderman</h3>
                <p>Acción, telarañas y el héroe favorito de muchos.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 8 — Peppa Pig */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card8.png" alt="Tarta Peppa Pig" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta Peppa Pig</h3>
                <p>Colorida, adorable y perfecta para cumpleaños infantiles.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
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

export default TartasPersonalizadas;
