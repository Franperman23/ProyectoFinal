import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { CartContext } from "../context/CartContext";
import type { ListarProductoDTO } from "../types/ListarProductoDTO";

const Reposteria: React.FC = () => {
  const { addToCart } = useContext(CartContext);
  const [productos, setProductos] = useState<ListarProductoDTO[]>([]);

  async function fetchProductos() {
    try {
      const response = await fetch("/api/productos");
      if (!response.ok) throw new Error("Error al cargar productos");

      const data: ListarProductoDTO[] = await response.json();

      // Filtrar solo repostería
      const filtrados = data.filter((p) => p.tipo === "Reposteria");

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

          <div className="grid fade-up">
            {productos.length === 0 && (
              <p style={{ textAlign: "center", width: "100%" }}>
                No hay productos de repostería disponibles.
              </p>
            )}

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

      <Footer />
    </>
  );
};

export default Reposteria;
