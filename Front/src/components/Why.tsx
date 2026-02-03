import React from "react";

const Why: React.FC = () => {
  return (
    <section className="why fullwidth">
      <div className="section-header">
        <h2>¿Por qué elegirnos?</h2>
        <p>Descubre lo que nos hace únicos y por qué nuestros clientes confían en nosotros cada día.</p>
      </div>

      <div className="section-line"></div>

      <div className="why-grid">
        <div className="why-item">
          <h3>Ingredientes de origen controlado</h3>
          <p>Seleccionamos materias primas de calidad superior, con trazabilidad garantizada y sabor auténtico.</p>
        </div>

        <div className="why-item">
          <h3>Recetas exclusivas</h3>
          <p>Fusionamos tradición y creatividad para ofrecer elaboraciones únicas que no encontrarás en otro lugar.</p>
        </div>

        <div className="why-item">
          <h3>Productos frescos cada día</h3>
          <p>Horneamos a diario para que cada pieza conserve su textura, aroma y frescura natural.</p>
        </div>

        <div className="why-item">
          <h3>Atención personalizada</h3>
          <p>Nos adaptamos a tus gustos y necesidades, creando experiencias dulces a medida para cada ocasión.</p>
        </div>

        <div className="why-item">
          <h3>Compromiso con la sostenibilidad</h3>
          <p>Reducimos el uso de plásticos, apostamos por proveedores locales y minimizamos el desperdicio alimentario.</p>
        </div>

        <div className="why-item">
          <h3>Experiencia reconocida</h3>
          <p>Más de 40 años de trayectoria y cientos de clientes satisfechos avalan nuestra excelencia artesanal.</p>
        </div>

        <div className="why-item">
          <h3>Diseño y presentación</h3>
          <p>Cuidamos cada detalle estético para que nuestros productos sean tan bellos como deliciosos.</p>
        </div>

        <div className="why-item">
          <h3>Pedidos personalizados</h3>
          <p>Ofrecemos opciones a medida para eventos, intolerancias o preferencias específicas de cada cliente.</p>
        </div>
      </div>
    </section>
  );
};

export default Why;
