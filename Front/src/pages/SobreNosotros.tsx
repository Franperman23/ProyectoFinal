import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const SobreNosotros: React.FC = () => {
  return (
    <>
      {/* Barra de navegación superior */}
      <Navbar />

      <main>
        {/* Sección principal con imagen destacada y texto */}
        <Hero
          title="Pasión por lo artesanal"
          subtitle="Nuestra historia"
          text="Más de 40 años elaborando dulces con tradición, cariño y calidad."
        />

        {/* ORÍGENES */}
        <section className="fullwidth" id="origenes">
          <div className="section-header">
            <h2>Nuestros orígenes</h2>
            <p>
              Pastelería Lama nació en 1980 con un objetivo claro: ofrecer
              productos artesanales elaborados con ingredientes de primera
              calidad.
            </p>
          </div>

          <div className="section-line"></div>

          {/* Tres bloques explicativos */}
          <div className="grid">
            <div className="why-item">
              <h3>Tradición familiar</h3>
              <p>
                Desde nuestros inicios, hemos mantenido vivas las recetas
                tradicionales que han pasado de generación en generación,
                respetando los procesos artesanales que nos caracterizan.
              </p>
            </div>

            <div className="why-item">
              <h3>Calidad ante todo</h3>
              <p>
                Seleccionamos cuidadosamente cada ingrediente para garantizar un
                sabor auténtico y una textura perfecta en cada elaboración.
              </p>
            </div>

            <div className="why-item">
              <h3>Innovación constante</h3>
              <p>
                Aunque respetamos la tradición, también nos encanta innovar y
                crear nuevas propuestas que sorprendan a nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        {/* OBRADOR */}
        <section className="why why-soft">
          <div className="section-header">
            <h2>Nuestro obrador</h2>
            <p>
              El corazón de Pastelería Lama: donde la técnica, la creatividad y
              la pasión se unen para dar vida a cada dulce.
            </p>
          </div>

          {/* Tres bloques explicativos del obrador */}
          <div className="why-grid">
            <div className="why-item">
              <h3>Hecho a mano</h3>
              <p>
                Cada pieza es elaborada de forma artesanal, respetando los
                tiempos y procesos que garantizan un resultado excepcional.
              </p>
            </div>

            <div className="why-item">
              <h3>Equipo experto</h3>
              <p>
                Nuestro equipo está formado por profesionales con años de
                experiencia en el sector de la pastelería y panadería.
              </p>
            </div>

            <div className="why-item">
              <h3>Compromiso con el cliente</h3>
              <p>
                Nos esforzamos por ofrecer un servicio cercano, personalizado y
                orientado a superar las expectativas de cada persona que confía
                en nosotros.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <Footer />
    </>
  );
};

export default SobreNosotros;
