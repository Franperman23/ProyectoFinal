import React from "react";

const Pedidos: React.FC = () => {
  return (
    <section className="fullwidth">
      <div className="section-header">
        <h2>Haz tu pedido</h2>
        <p>Encarga tus dulces favoritos de forma rápida y sencilla.</p>
      </div>

      <div className="section-line"></div>

      <div className="grid" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div className="why-item">
          <h3>Encargos personalizados</h3>
          <p>¿Necesitas una tarta especial o bandejas para un evento? Lo hacemos a tu gusto.</p>
        </div>

        <div className="why-item">
          <h3>Pedidos rápidos</h3>
          <p>Puedes hacer tu pedido por aquí, por teléfono, email o WhatsApp. Te confirmamos disponibilidad y hora de recogida.</p>
        </div>

        <div className="why-item">
          <h3>Recogida en tienda</h3>
          <p>Pasa a recoger tu pedido sin esperas. Todo listo cuando llegues.</p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a href="/contacto" className="btn">Hacer pedido</a>
      </div>
    </section>
  );
};

export default Pedidos;
