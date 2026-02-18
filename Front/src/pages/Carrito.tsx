import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";

// Interfaz que define cómo se guarda cada producto dentro del carrito.
interface ItemCarrito {
  productoId: number;
  nombre: string;
  imagen: string;
  precio: number;
  cantidad: number;
}

const Carrito: React.FC = () => {
  // Estado donde guardo los productos del carrito.
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

  // Obtengo el usuario desde el contexto (si está logueado).
  const { usuario } = useContext(AuthContext);

  // Al cargar el componente, recupero el carrito desde localStorage.
  useEffect(() => {
    const data = localStorage.getItem("carrito");

    if (data) {
      const parsed = JSON.parse(data);

      // Saneo los datos para asegurar que tienen el formato correcto.
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

  // Guarda el carrito tanto en el estado como en localStorage.
  const guardarCarrito = (items: ItemCarrito[]) => {
    setCarrito(items);
    localStorage.setItem("carrito", JSON.stringify(items));
  };

  // Aumenta la cantidad de un producto.
  const aumentar = (productoId: number) => {
    const actualizado = carrito.map((item) =>
      item.productoId === productoId
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    );
    guardarCarrito(actualizado);
  };

  // Disminuye la cantidad de un producto (si llega a 0, se elimina).
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

  // Elimina un producto del carrito.
  const eliminar = (productoId: number) => {
    const actualizado = carrito.filter(
      (item) => item.productoId !== productoId
    );
    guardarCarrito(actualizado);
  };

  // Vacía completamente el carrito.
  const vaciar = () => {
    guardarCarrito([]);
  };

  // Calcula el total del carrito sumando precio * cantidad.
  const total = carrito.reduce(
    (acc, item) => acc + item.cantidad * item.precio,
    0
  );

  // Función para finalizar el pedido y generar el PDF.
  const finalizarPedido = async () => {
    // Si no está logueado, lo envío al login.
    if (!usuario) {
      alert("Debes iniciar sesión para realizar un pedido.");
      window.location.href = "/login";
      return;
    }

    // Si el carrito está vacío, no se puede finalizar.
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    // Fechas de hoy y mañana para el pedido.
    const hoy = new Date();
    const manana = new Date(hoy.getTime() + 24 * 60 * 60 * 1000);

    // Construyo el objeto pedido que espera el backend.
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

    // Llamada al backend que devuelve un PDF.
    const res = await fetch("http://localhost:8080/api/pedidos/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pedido),
    });

    if (!res.ok) {
      alert("Error al generar el PDF del pedido");
      return;
    }

    // Descargo el PDF automáticamente.
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "pedido.pdf";
    a.click();

    window.URL.revokeObjectURL(url);

    alert("¡Pedido realizado y PDF descargado!");
    vaciar(); // Vacío el carrito tras completar el pedido.
  };

  return (
    <>
      {/* Barra de navegación */}
      <Navbar />

      <main className="fullwidth carrito-container">
        <div className="section-header">
          <h2>Carrito de la compra</h2>
          <p>Revisa tus productos antes de finalizar el pedido.</p>
        </div>

        <div className="section-line"></div>

        {/* Si el carrito está vacío, muestro mensaje */}
        {carrito.length === 0 ? (
          <p className="empty">Tu carrito está vacío.</p>
        ) : (
          <div className="carrito-layout">
            {/* Lista de productos del carrito */}
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

                    {/* Controles de cantidad */}
                    <div className="cantidad">
                      <button onClick={() => disminuir(item.productoId)}>
                        -
                      </button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => aumentar(item.productoId)}>
                        +
                      </button>
                    </div>

                    {/* Botón para eliminar producto */}
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

            {/* Resumen del pedido */}
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

              {/* Botón para finalizar pedido */}
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

      {/* Pie de página */}
      <Footer />
    </>
  );
};

export default Carrito;
