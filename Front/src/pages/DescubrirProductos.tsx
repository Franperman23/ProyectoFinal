import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { CartContext } from "../context/CartContext";
import type { ListarProductoDTO } from "../types/ListarProductoDTO";

const DescubrirProductos: React.FC = () => {
  const [listaProductos, setListaProductos] = React.useState<ListarProductoDTO[]>([]);
  const { addToCart } = useContext(CartContext);

  async function fetchProductos() {
    try {
      const response = await fetch("http://localhost:8080/api/productos");

      if (!response.ok) {
        throw new Error("Error al cargar los productos");
      }

      const data: ListarProductoDTO[] = await response.json();
      setListaProductos(data);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  }

  React.useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="Descubrir productos"
          subtitle="Explora todo lo que ofrecemos"
          text="Encuentra panes, dulces, tartas, bollería y creaciones especiales."
        />

        <section className="fullwidth">
          <div className="section-header">
            <h2>Nuestros productos</h2>
            <p>Descubre una selección completa de nuestros mejores productos.</p>
          </div>

          <div className="section-line"></div>

          <div className="grid fade-up">
            {listaProductos.map((producto) => (
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

export default DescubrirProductos;
