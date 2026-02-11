import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface ItemCarrito {
  id: number;
  nombre: string;
  imagen: string;
  precio: number;
  cantidad: number;
}

interface Pedido {
  id: number;
  fecha: string;
  recoger: string;
  productos: ItemCarrito[];
  total: number;
}

const Carrito: React.FC = () => {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("carrito");
    if (data) {
      const parsed = JSON.parse(data);

      const saneado: ItemCarrito[] = parsed.map((item: any) => ({
        id: Number(item.id),
        nombre: item.nombre,
        imagen: item.imagen,
        precio: Number(item.precio) || 0,
        cantidad: Number(item.cantidad) || 1,
      }));

      setCarrito(saneado);
    }
  }, []);

  const guardarCarrito = (items: ItemCarrito[]) => {
    setCarrito(items);
    localStorage.setItem("carrito", JSON.stringify(items));
  };

  const aumentar = (id: number) => {
    const actualizado = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    guardarCarrito(actualizado);
  };

  const disminuir = (id: number) => {
    const actualizado = carrito
      .map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      )
      .filter((item) => item.cantidad > 0);

    guardarCarrito(actualizado);
  };

  const eliminar = (id: number) => {
    const actualizado = carrito.filter((item) => item.id !== id);
    guardarCarrito(actualizado);
  };

  const vaciar = () => {
    guardarCarrito([]);
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.cantidad * item.precio,
    0
  );

  const finalizarPedido = () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    const pedidosGuardados: Pedido[] = JSON.parse(
      localStorage.getItem("pedidos") || "[]"
    );

    const hoy = new Date();
    const manana = new Date(hoy.getTime() + 24 * 60 * 60 * 1000);

    const nuevoPedido: Pedido = {
      id: Date.now(),
      fecha: hoy.toLocaleDateString(),
      recoger: manana.toLocaleDateString(),
      productos: carrito,
      total,
    };

    pedidosGuardados.push(nuevoPedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidosGuardados));

    alert("¡Pedido realizado! Podrás recogerlo mañana de forma física en la Pastelería.");

    vaciar();
  };

  return (
    <>
      <Navbar />

      <main className="fullwidth carrito-container">
        <div className="section-header">
          <h2>Carrito de la compra</h2>
          <p>Revisa tus productos antes de finalizar el pedido.</p>
        </div>

        <div className="section-line"></div>

        {carrito.length === 0 ? (
          <p className="empty">Tu carrito está vacío.</p>
        ) : (
          <div className="carrito-layout">
            <div className="carrito-lista">
              {carrito.map((item) => (
                <article className="carrito-item" key={item.id}>
                  <img src={item.imagen} alt={item.nombre} />

                  <div className="info">
                    <h3>{item.nombre}</h3>

                    <p className="precio-unit">
                      Precio unidad: {item.precio.toFixed(2)} €
                    </p>
                    <p className="precio-subtotal">
                      Subtotal: {(item.precio * item.cantidad).toFixed(2)} €
                    </p>

                    <div className="cantidad">
                      <button onClick={() => disminuir(item.id)}>-</button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => aumentar(item.id)}>+</button>
                    </div>

                    <button
                      className="btn eliminar"
                      onClick={() => eliminar(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="carrito-resumen">
              <h3>Resumen</h3>
              <p>
                Total productos:{" "}
                {carrito.reduce((a, i) => a + i.cantidad, 0)}
              </p>
              <p className="total">Total: {total.toFixed(2)} €</p>

              <button className="btn vaciar" onClick={vaciar}>
                Vaciar carrito
              </button>
              <button className="btn finalizar" onClick={finalizarPedido}>
                Finalizar pedido
              </button>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Carrito;
