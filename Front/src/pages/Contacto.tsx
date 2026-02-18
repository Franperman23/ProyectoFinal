import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Contacto: React.FC = () => {
  // Estado del formulario con los campos básicos.
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  // Maneja los cambios en los inputs y actualiza el estado del formulario.
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Copio el estado actual y actualizo solo el campo modificado.
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Función que envía el formulario al backend.
  const enviarFormulario = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita recargar la página.

    // Envío de datos al backend mediante POST.
    const res = await fetch("http://localhost:8080/api/mensajes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    // Si todo va bien, muestro mensaje y limpio el formulario.
    if (res.ok) {
      alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
      setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
    } else {
      alert("Hubo un error al enviar el mensaje.");
    }
  };

  return (
    <>
      {/* Barra de navegación */}
      <Navbar />

      <main>
        {/* Sección principal con título e imagen */}
        <Hero
          title="Contacto"
          subtitle="Estamos aquí para ayudarte"
          text="Envíanos un mensaje y te responderemos lo antes posible."
        />

        <section className="contacto-wrapper" id="form-contacto">
          <div className="section-header">
            <h2>Envíanos un mensaje</h2>
            <p>
              Cuéntanos qué necesitas y nos pondremos en contacto contigo lo
              antes posible.
            </p>
          </div>

          <div className="section-line"></div>

          {/* Contenedor principal del formulario y la información */}
          <div
            className="grid"
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              alignItems: "flex-start",
            }}
          >
            {/* FORMULARIO DE CONTACTO */}
            <div className="why-item" style={{ minHeight: "auto" }}>
              <h3>Formulario de contacto</h3>

              <form onSubmit={enviarFormulario}>
                {/* Campo nombre */}
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />

                {/* Campo email */}
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                {/* Campo teléfono opcional */}
                <label htmlFor="telefono">Teléfono (opcional)</label>
                <input
                  id="telefono"
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                />

                {/* Campo mensaje */}
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>

                {/* Botón de envío */}
                <button type="submit" className="btn">
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* BLOQUE DE INFORMACIÓN DE CONTACTO */}
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

      {/* Pie de página */}
      <Footer />
    </>
  );
};

export default Contacto;
