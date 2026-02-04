import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const PasteleriaEventos: React.FC = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="Pastelería para eventos"
          subtitle="Diseños únicos para ocasiones especiales"
          text="Tartas, mesas dulces y creaciones personalizadas para bodas, comuniones y celebraciones."
        />

        <section className="fullwidth">
          <div className="section-header">
            <h2>Ejemplos de pastelería para eventos</h2>
            <p>Inspírate con algunos de nuestros trabajos más solicitados.</p>
          </div>

          <div className="section-line"></div>

          <div className="grid fade-up">

            {/* 1 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card1.png" alt="Evento 1" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Boda elegante</h3>
                <p>Tarta de varios pisos con decoración floral.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            {/* 2 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card2.png" alt="Evento 2" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Comunión clásica</h3>
                <p>Diseños suaves y elegantes para un día especial.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            {/* 3 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card3.png" alt="Evento 3" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Baby shower</h3>
                <p>Colores pastel y detalles tiernos.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            {/* 4 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card4.png" alt="Evento 4" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Fiesta temática</h3>
                <p>Diseños personalizados según la temática del evento.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            {/* 5 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card5.png" alt="Evento 5" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Mesas dulces</h3>
                <p>Decoración completa con dulces variados.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            {/* 6 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card6.png" alt="Evento 6" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Eventos corporativos</h3>
                <p>Diseños sobrios y elegantes para empresas.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            {/* 7 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card7.png" alt="Evento 7" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Cumpleaños adultos</h3>
                <p>Diseños modernos y personalizados.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            {/* 8 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card8.png" alt="Evento 8" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Cumpleaños infantiles</h3>
                <p>Colores vivos y personajes favoritos.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
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

export default PasteleriaEventos;
