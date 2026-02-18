import React from "react";

// Componente Why: sección informativa que explica los valores diferenciales
// de la pastelería. Es un componente estático pero muy importante para la imagen de marca.
const Why: React.FC = () => {
  return (
    // Sección principal con clases globales de estilo.
    <section className="why fullwidth">

      {/* Cabecera de la sección con título y descripción */}
      <div className="section-header">
        <h2>¿Por qué elegirnos?</h2>
        <p>
          Descubre lo que nos hace únicos y por qué nuestros clientes confían
          en nosotros cada día.
        </p>
      </div>

      {/* Línea decorativa que separa el título del contenido */}
      <div className="section-line"></div>

      {/* Grid que contiene todos los bloques informativos */}
      <div className="why-grid">

        {/* Bloque 1 */}
        <div className="why-item">
          <h3>Ingredientes de origen controlado</h3>
          <p>
            Seleccionamos materias primas de calidad superior, con trazabilidad
            garantizada y sabor auténtico.
          </p>
        </div>

        {/* Bloque 2 */}
        <div className="why-item">
          <h3>Recetas exclusivas</h3>
          <p>
            Fusionamos tradición y creatividad para ofrecer elaboraciones únicas
            que no encontrarás en otro lugar.
          </p>
        </div>

        {/* Bloque 3 */}
        <div className="why-item">
          <h3>Productos frescos cada día</h3>
          <p>
            Horneamos a diario para que cada pieza conserve su textura, aroma y
            frescura natural.
          </p>
        </div>

        {/* Bloque 4 */}
        <div className="why-item">
          <h3>Atención personalizada</h3>
          <p>
            Nos adaptamos a tus gustos y necesidades, creando experiencias dulces
            a medida para cada ocasión.
          </p>
        </div>

        {/* Bloque 5 */}
        <div className="why-item">
          <h3>Compromiso con la sostenibilidad</h3>
          <p>
            Reducimos el uso de plásticos, apostamos por proveedores locales y
            minimizamos el desperdicio alimentario.
          </p>
        </div>

        {/* Bloque 6 */}
        <div className="why-item">
          <h3>Experiencia reconocida</h3>
          <p>
            Más de 40 años de trayectoria y cientos de clientes satisfechos avalan
            nuestra excelencia artesanal.
          </p>
        </div>

        {/* Bloque 7 */}
        <div className="why-item">
          <h3>Diseño y presentación</h3>
          <p>
            Cuidamos cada detalle estético para que nuestros productos sean tan
            bellos como deliciosos.
          </p>
        </div>

        {/* Bloque 8 */}
        <div className="why-item">
          <h3>Pedidos personalizados</h3>
          <p>
            Ofrecemos opciones a medida para eventos, intolerancias o preferencias
            específicas de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;
