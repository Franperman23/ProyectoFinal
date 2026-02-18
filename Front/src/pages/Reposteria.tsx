import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { CartContext } from "../context/CartContext";
import type { ListarProductoDTO } from "../types/ListarProductoDTO";

const Reposteria: React.FC = () => {
  // Obtengo la función para añadir productos al carrito.
  const { addToCart } = useContext(CartContext);

  // Estado donde guardo los productos filtrados.
  const [productos, setProductos] = useState<ListarProductoDTO[]>([]);

  // Función que obtiene todos los productos del backend.
  async function fetchProductos() {
    try {
      const response = await fetch("/api/productos");
      if (!response.ok) throw new Error("Error al cargar productos");

      const data: ListarProductoDTO[] = await response.json();

      // Filtrar solo los productos cuyo tipo sea "Reposteria".
      const filtrados = data.filter((p) => p.tipo === "Reposteria");

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
          title="Repostería artesanal"
          subtitle="Dulces hechos con cariño"
          text="Magdalenas, brownies, tartas, galletas y mucho más."
        />

        <section className="fullwidth">
          <div className="section-header">
            <h2>Nuestra repostería</h2>
            <p>Elige tus dulces favoritos y añádelos al carrito.</p>
          </div>

          <div className="section-line"></div>

          {/* Grid de productos */}
          <div className="grid fade-up">
            {/* Si no hay productos, muestro mensaje */}
            {productos.length === 0 && (
              <p style={{ textAlign: "center", width: "100%" }}>
                No hay productos de repostería disponibles.
              </p>
            )}

            {/* Listado de productos */}
            {productos.map((producto) => (
              <article className="card" key={producto.id}>
                <div className="card-image">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    loading="lazy"
                  />
                </div>

                <div className="card-body">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>
                  <p className="price">{producto.precio.toFixed(2)} €</p>

                  {/* Botón para añadir al carrito */}
                  <button
                    className="btn add-cart"
                    onClick={() => addToCart(producto)}
                  >
                    Añadir al carrito
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

export default Reposteria;
