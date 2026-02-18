import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";

interface ItemCarrito {
  productoId: number;
  nombre: string;
  imagen: string;
  precio: number;
  cantidad: number;
}

const Carrito: React.FC = () => {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    const data = localStorage.getItem("carrito");
    if (data) {
      const parsed = JSON.parse(data);

      const saneado: ItemCarrito[] = parsed.map((item: any) => ({
        productoId: Number(item.id),
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

  const aumentar = (productoId: number) => {
    const actualizado = carrito.map((item) =>
      item.productoId === productoId
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    );
    guardarCarrito(actualizado);
  };

  const disminuir = (productoId: number) => {
    const actualizado = carrito
      .map((item) =>
        item.productoId === productoId
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      .filter((item) => item.cantidad > 0);

    guardarCarrito(actualizado);
  };

  const eliminar = (productoId: number) => {
    const actualizado = carrito.filter(
      (item) => item.productoId !== productoId
    );
    guardarCarrito(actualizado);
  };

  const vaciar = () => {
    guardarCarrito([]);
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.cantidad * item.precio,
    0
  );

  const finalizarPedido = async () => {
    if (!usuario) {
      alert("Debes iniciar sesión para realizar un pedido.");
      window.location.href = "/login";
      return;
    }

    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    const hoy = new Date();
    const manana = new Date(hoy.getTime() + 24 * 60 * 60 * 1000);

    const pedido = {
      fecha: hoy.toLocaleDateString(),
      recoger: manana.toLocaleDateString(),
      total,
      usuario: { id: usuario.id },
      productos: carrito.map((p) => ({
        productoId: p.productoId,
        nombre: p.nombre,
        imagen: p.imagen,
        precio: p.precio,
        cantidad: p.cantidad,
      })),
    };

    // LLAMADA AL BACKEND QUE DEVUELVE EL PDF
    const res = await fetch("/api/pedidos/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pedido),
    });

    if (!res.ok) {
      alert("Error al generar el PDF del pedido");
      return;
    }

    // DESCARGA AUTOMÁTICA DEL PDF
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "pedido.pdf";
    a.click();

    window.URL.revokeObjectURL(url);

    alert("¡Pedido realizado y PDF descargado!");
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
                <article className="carrito-item" key={item.productoId}>
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
                      <button onClick={() => disminuir(item.productoId)}>
                        -
                      </button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => aumentar(item.productoId)}>
                        +
                      </button>
                    </div>

                    <button
                      className="btn eliminar"
                      onClick={() => eliminar(item.productoId)}
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

              <button
                className="btn finalizar"
                onClick={() => {
                  if (!usuario) {
                    window.location.href = "/login";
                    return;
                  }
                  finalizarPedido();
                }}
              >
                {usuario ? "Finalizar pedido" : "Inicia sesión para comprar"}
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
