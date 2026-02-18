import React, { useEffect, useState } from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";

interface Pedido {
  id: number;
  fecha: string;
  recoger: string;
  total: number;
  usuario: { nombre: string };
  estado: string;
}

const Pedidos: React.FC = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const cargarPedidos = () => {
    fetch("/api/pedidos")
      .then((res) => res.json())
      .then((data) => setPedidos(data));
  };

  useEffect(() => {
    cargarPedidos();
  }, []);

  const marcarEntregado = (id: number) => {
    fetch(`/api/pedidos/${id}/entregado`, {
      method: "PUT",
    }).then(() => cargarPedidos());
  };

  const eliminarPedido = (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar este pedido?")) return;

    fetch(`/api/pedidos/${id}`, {
      method: "DELETE",
    }).then(() => cargarPedidos());
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
              <th>Cliente</th>
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
                <td>{p.usuario?.nombre}</td>
                <td>{p.recoger}</td>
                <td>{p.total} €</td>
                <td>{p.estado}</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  {p.estado === "Pendiente" ? (
                    <button className="btn small" onClick={() => marcarEntregado(p.id)}>
                      Entregado
                    </button>
                  ) : (
                    <span style={{ color: "green", fontWeight: 600 }}>✔ Entregado</span>
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
