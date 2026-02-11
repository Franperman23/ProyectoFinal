import React, { useEffect, useState } from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";

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
  estado: "Pendiente" | "Entregado";
}

const Pedidos: React.FC = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  // Cargar pedidos al iniciar
  useEffect(() => {
    const data = localStorage.getItem("pedidos");
    if (data) {
      const parsed = JSON.parse(data);

      // Normalizamos el estado para evitar errores de TypeScript
      const saneado: Pedido[] = parsed.map((p: any) => ({
        ...p,
        estado:
          p.estado === "Pendiente" || p.estado === "Entregado"
            ? p.estado
            : "Pendiente",
      }));

      setPedidos(saneado);
    }
  }, []);

  // Guardar pedidos en localStorage
  const guardarPedidos = (lista: Pedido[]) => {
    setPedidos(lista);
    localStorage.setItem("pedidos", JSON.stringify(lista));
  };

  // Marcar pedido como entregado
  const marcarEntregado = (id: number) => {
    const actualizado: Pedido[] = pedidos.map((p) =>
      p.id === id ? { ...p, estado: "Entregado" } : p
    );

    guardarPedidos(actualizado);
  };

  // Eliminar pedido
  const eliminarPedido = (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar este pedido?")) return;

    const actualizado = pedidos.filter((p) => p.id !== id);
    guardarPedidos(actualizado);
  };

  return (
    <EmpleadoLayout>
      <h2>Pedidos</h2>

      {pedidos.length === 0 ? (
        <p>No hay pedidos registrados.</p>
      ) : (
        <table className="tabla">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha pedido</th>
              <th>Fecha recogida</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {pedidos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.fecha}</td>
                <td>{p.recoger}</td>
                <td>{p.total.toFixed(2)} €</td>
                <td>{p.estado}</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  {p.estado === "Pendiente" ? (
                    <button
                      className="btn small"
                      onClick={() => marcarEntregado(p.id)}
                    >
                      Marcar como entregado
                    </button>
                  ) : (
                    <span style={{ color: "green", fontWeight: 600 }}>
                      ✔ Entregado
                    </span>
                  )}

                  <button
                    className="btn small"
                    style={{ background: "#b91c1c" }}
                    onClick={() => eliminarPedido(p.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </EmpleadoLayout>
  );
};

export default Pedidos;
