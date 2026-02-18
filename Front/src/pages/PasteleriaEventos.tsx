import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import type { ListarProductoDTO } from "../types/ListarProductoDTO";

const PasteleriaEventos: React.FC = () => {
  // Estado donde guardo los productos creados por empleados.
  const [productos, setProductos] = useState<ListarProductoDTO[]>([]);

  // Función que obtiene todos los productos del backend.
  async function fetchProductos() {
    try {
      const response = await fetch("/api/productos");
      if (!response.ok) throw new Error("Error al cargar productos");

      const data: ListarProductoDTO[] = await response.json();

      // Filtrar solo los productos cuyo tipo sea "Pasteleria para eventos".
      const filtrados = data.filter(
        (p) => p.tipo === "Pasteleria para eventos"
      );

      // Guardar los productos filtrados en el estado.
      setProductos(filtrados);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // Cargar productos al montar el componente.
  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <>
      {/* Barra de navegación */}
      <Navbar />

      <main>
        {/* Sección principal con imagen y texto */}
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

            {/* EJEMPLOS FIJOS */}

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

            {/* PRODUCTOS CREADOS POR EMPLEADOS */}

            {productos.map((producto) => (
              <article className="card" key={producto.id}>
                <div className="card-image">
                  <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
                </div>
                <div className="card-body">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>
                  <p className="price">{producto.precio.toFixed(2)} €</p>

                  <button
                    className="btn add-cart"
                    onClick={() => (window.location.href = "/contacto")}
                  >
                    Personalizar
                  </button>
                </div>
              </article>
            ))}

          </div>
        </section>
      </main>

      {/* Pie de página */}
      <Footer />
    </>
  );
};

export default PasteleriaEventos;
