import React from "react";

const Especialidades: React.FC = () => {
  return (
    <section className="destacados fullwidth">
      <div className="section-header">
        <h2>Explora nuestras especialidades</h2>
        <p>Selecciona una categoría para descubrir nuestros productos más destacados.</p>
      </div>

      <div className="section-line"></div>

      <div className="grid fade-up">
        <article className="card">
          <a href="/reposteria">
            <div className="card-image">
              <img src="img index/card1.png" loading="lazy" alt="Repostería" />
            </div>
            <div className="card-body">
              <h3>Repostería</h3>
              <p>Delicados postres elaborados con mimo y tradición.</p>
            </div>
          </a>
        </article>

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
