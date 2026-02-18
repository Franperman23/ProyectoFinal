import React from "react";

// Componente Pedidos: sección informativa donde explico cómo realizar un pedido.
const Pedidos: React.FC = () => {
  return (
    // Sección principal con clases globales de estilo.
    <section className="fullwidth">

      {/* Cabecera de la sección con título y descripción */}
      <div className="section-header">
        <h2>Haz tu pedido</h2>
        <p>Encarga tus dulces favoritos de forma rápida y sencilla.</p>
      </div>

      {/* Línea decorativa que separa el título del contenido */}
      <div className="section-line"></div>

      {/* Contenedor en grid para mostrar los beneficios o características del servicio */}
      <div className="grid" style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Bloque 1: Encargos personalizados */}
        <div className="why-item">
          <h3>Encargos personalizados</h3>
          <p>¿Necesitas una tarta especial o bandejas para un evento? Lo hacemos a tu gusto.</p>
        </div>

        {/* Bloque 2: Pedidos rápidos */}
        <div className="why-item">
          <h3>Pedidos rápidos</h3>
          <p>
            Puedes hacer tu pedido por aquí, por teléfono, email o WhatsApp.
            Te confirmamos disponibilidad y hora de recogida.
          </p>
        </div>

        {/* Bloque 3: Recogida en tienda */}
        <div className="why-item">
          <h3>Recogida en tienda</h3>
          <p>Pasa a recoger tu pedido sin esperas. Todo listo cuando llegues.</p>
        </div>
      </div>

      {/* Botón centrado que lleva al formulario de contacto */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a href="/contacto" className="btn">
          Hacer pedido personalizado
        </a>
      </div>
    </section>
  );
};

export default Pedidos;
