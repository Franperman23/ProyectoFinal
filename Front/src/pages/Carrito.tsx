import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface ItemCarrito {
  id: string;
  nombre: string;
  imagen: string;
  cantidad: number;
}

const Carrito: React.FC = () => {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("carrito");
    if (data) setCarrito(JSON.parse(data));
  }, []);

  const guardarCarrito = (items: ItemCarrito[]) => {
    setCarrito(items);
    localStorage.setItem("carrito", JSON.stringify(items));
  };

  const aumentar = (id: string) => {
    const actualizado = carrito.map(item =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    guardarCarrito(actualizado);
  };

  const disminuir = (id: string) => {
    const actualizado = carrito
      .map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      )
      .filter(item => item.cantidad > 0);

    guardarCarrito(actualizado);
  };

  const eliminar = (id: string) => {
    const actualizado = carrito.filter(item => item.id !== id);
    guardarCarrito(actualizado);
  };

  const vaciar = () => {
    guardarCarrito([]);
  };

  const total = carrito.reduce((acc, item) => acc + item.cantidad * 1, 0); // precio ficticio

  return (
    <>
      <Navbar />

      <main className="fullwidth">
        <div className="section-header">
          <h2>Carrito de la compra</h2>
          <p>Revisa tus productos antes de finalizar el pedido.</p>
        </div>

        <div className="section-line"></div>

        {carrito.length === 0 ? (
          <p className="empty">Tu carrito está vacío.</p>
        ) : (
          <div className="carrito-lista">

            {carrito.map(item => (
              <article className="carrito-item" key={item.id}>
                <img src={item.imagen} alt={item.nombre} />

                <div className="info">
                  <h3>{item.nombre}</h3>

                  <div className="cantidad">
                    <button onClick={() => disminuir(item.id)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => aumentar(item.id)}>+</button>
                  </div>

                  <button className="btn eliminar" onClick={() => eliminar(item.id)}>
                    Eliminar
                  </button>
                </div>
              </article>
            ))}

            <div className="carrito-total">
              <h3>Total: {total} €</h3>
              <button className="btn vaciar" onClick={vaciar}>Vaciar carrito</button>
              <button className="btn finalizar">Finalizar pedido</button>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Carrito;
