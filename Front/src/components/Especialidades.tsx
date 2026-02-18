import React from "react";

// Componente que muestra las categorías principales de productos de la pastelería.
const Especialidades: React.FC = () => {
  return (
    <section className="destacados fullwidth">

      {/* Cabecera de la sección con título y descripción */}
      <div className="section-header">
        <h2>Explora nuestras especialidades</h2>
        <p>Selecciona una categoría para descubrir nuestros productos más destacados.</p>
      </div>

      {/* Línea decorativa que separa el título del contenido */}
      <div className="section-line"></div>

      {/* Grid que contiene las tarjetas de cada categoría */}
      <div className="grid fade-up">

        {/* TARJETA 1: Repostería */}
        <article className="card">
          <a href="/reposteria">
            <div className="card-image">
              {/* Imagen optimizada con lazy loading */}
              <img src="img index/card1.png" loading="lazy" alt="Repostería" />
            </div>

            <div className="card-body">
              <h3>Repostería</h3>
              <p>Delicados postres elaborados con mimo y tradición.</p>
            </div>
          </a>
        </article>

        {/* TARJETA 2: Bollería */}
        <article className="card">
          <a href="/bolleria">
            <div className="card-image">
              <img src="img index/card2.png" loading="lazy" alt="Bollería" />
            </div>

            <div className="card-body">
              <h3>Bollería</h3>
              <p>Piezas recién horneadas con masa madre y mantequilla auténtica.</p>
            </div>
          </a>
        </article>

        {/* TARJETA 3: Tartas personalizadas */}
        <article className="card">
          <a href="/tartas">
            <div className="card-image">
              <img src="img index/card3.png" loading="lazy" alt="Tartas personalizadas" />
            </div>

            <div className="card-body">
              <h3>Tartas personalizadas</h3>
              <p>Diseños únicos para celebraciones inolvidables.</p>
            </div>
          </a>
        </article>

        {/* TARJETA 4: Pastelería para eventos */}
        <article className="card">
          <a href="/eventos">
            <div className="card-image">
              <img src="img index/card4.png" loading="lazy" alt="Pastelería para eventos" />
            </div>

            <div className="card-body">
              <h3>Pastelería para eventos</h3>
              <p>Creaciones exclusivas para bodas, comuniones y celebraciones.</p>
            </div>
          </a>
        </article>

      </div>
    </section>
  );
};

export default Especialidades;
