import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import type { ListarProductoDTO } from "../types/ListarProductoDTO";

const TartasPersonalizadas: React.FC = () => {
  const [productos, setProductos] = useState<ListarProductoDTO[]>([]);

  async function fetchProductos() {
    try {
      const response = await fetch("/api/productos");
      if (!response.ok) throw new Error("Error al cargar productos");

      const data: ListarProductoDTO[] = await response.json();

      // Filtrar solo tartas personalizadas creadas por empleados
      const filtrados = data.filter(
        (p) => p.tipo === "Tartas personalizadas"
      );

      setProductos(filtrados);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="Tartas personalizadas"
          subtitle="Diseñadas a tu gusto"
          text="Elige sabores, tamaños, decoraciones y crea tu tarta perfecta."
        />

        <section className="fullwidth">
          <div className="section-header">
            <h2>Ejemplos de tartas personalizadas</h2>
            <p>
              Inspírate con algunos de nuestros diseños más populares y mándanos
              un mensaje con tu idea para crear tu tarta perfecta.
            </p>
          </div>

          <div className="section-line"></div>

          <div className="grid fade-up">

            {/* EJEMPLOS FIJOS — con tus rutas originales */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card1.png" alt="Tarta Doraemon" />
              </div>
              <div className="card-body">
                <h3>Tarta Doraemon</h3>
                <p>Diseño divertido inspirado en el famoso gato cósmico.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card2.png" alt="Tarta de fútbol" />
              </div>
              <div className="card-body">
                <h3>Tarta de fútbol</h3>
                <p>Perfecta para los amantes del deporte rey.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card3.png" alt="Tarta Harry Potter" />
              </div>
              <div className="card-body">
                <h3>Tarta Harry Potter</h3>
                <p>Magia, varitas y un diseño digno de Hogwarts.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card4.png" alt="Tarta de la selva" />
              </div>
              <div className="card-body">
                <h3>Tarta de la selva</h3>
                <p>Animales, hojas y un estilo salvaje y colorido.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card5.png" alt="Tarta de princesas" />
              </div>
              <div className="card-body">
                <h3>Tarta de princesas</h3>
                <p>Ideal para las pequeñas reinas de la casa.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card6.png" alt="Tarta Pocoyó" />
              </div>
              <div className="card-body">
                <h3>Tarta Pocoyó</h3>
                <p>Un diseño tierno y alegre para los más peques.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card7.png" alt="Tarta Spiderman" />
              </div>
              <div className="card-body">
                <h3>Tarta Spiderman</h3>
                <p>Acción, telarañas y el héroe favorito de muchos.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card8.png" alt="Tarta Peppa Pig" />
              </div>
              <div className="card-body">
                <h3>Tarta Peppa Pig</h3>
                <p>Colorida, adorable y perfecta para cumpleaños infantiles.</p>
                <button className="btn add-cart" onClick={() => (window.location.href = "/contacto")}>
                  Personalizar
                </button>
              </div>
            </article>

            {/* PRODUCTOS CREADOS POR EMPLEADOS */}
            {productos.map((producto) => (
              <article className="card" key={producto.id}>
                <div className="card-image">
                  <img src={producto.imagen} alt={producto.nombre} />
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

      <Footer />
    </>
  );
};

export default TartasPersonalizadas;
