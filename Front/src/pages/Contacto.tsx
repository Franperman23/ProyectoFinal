import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Contacto: React.FC = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="Contacto"
          subtitle="Estamos aquí para ayudarte"
          text="Envíanos un mensaje y te responderemos lo antes posible."
        />

        <section className="contacto-wrapper" id="form-contacto">
          <div className="section-header">
            <h2>Envíanos un mensaje</h2>
            <p>Cuéntanos qué necesitas y nos pondremos en contacto contigo lo antes posible.</p>
          </div>

          <div className="section-line"></div>

          <div
            className="grid"
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              alignItems: "flex-start",
            }}
          >
            {/* FORMULARIO */}
            <div className="why-item" style={{ minHeight: "auto" }}>
              <h3>Formulario de contacto</h3>

              <form action="#" method="POST">
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />

                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />

                <label htmlFor="telefono">Teléfono (opcional)</label>
                <input
                  id="telefono"
                  type="tel"
                  name="telefono"
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />

                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "16px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                ></textarea>

                <button type="submit" className="btn">
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* BLOQUE INFO */}
            <div className="why-item" style={{ minHeight: "auto" }}>
              <h3>También puedes contactarnos en</h3>
              <p>
                <strong>Teléfono fijo:</strong> 926 89 67 74
              </p>
              <p>
                <strong>Móvil:</strong> 660 87 84 19
              </p>
              <p>
                <strong>Email:</strong> info@pastelerialama.es
              </p>

              <br />

              <h3>Visítanos</h3>
              <p>📍 Carretera de Urda 1</p>
              <p>📌 Villarrubia de los Ojos</p>
              <p>🏷️ 13670 (Ciudad Real)</p>

              <br />

              <h3>Horario</h3>
              <p>Lunes a Viernes</p>
              <p>🕒 10:00 a 14:30</p>
              <p>🕒 17:00 a 20:00</p>
              <p>Sábados</p>
              <p>🕒 10:00 a 14:30</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contacto;
