import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";

// Interfaz que define cómo es un pedido dentro de la aplicación.
interface Pedido {
  id: number;
  fecha: string;
  recoger: string;
  total: number;
  usuario: { nombre: string };
  estado: string;
}

const PedidosAdmin: React.FC = () => {

  // Estado donde guardo la lista de pedidos.
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  // FUNCIÓN PARA CARGAR LOS PEDIDOS DESDE EL BACKEND
  const cargarPedidos = () => {
    fetch("http://localhost:8080/api/pedidos")
      .then((res) => res.json())
      .then((data) => setPedidos(data));
  };

  // useEffect que carga los pedidos al montar el componente.
  useEffect(() => {
    cargarPedidos();
  }, []);

  // FUNCIÓN PARA MARCAR UN PEDIDO COMO ENTREGADO
  const marcarEntregado = (id: number) => {
    fetch(`http://localhost:8080/api/pedidos/${id}/entregado`, {
      method: "PUT",
    }).then(() => cargarPedidos()); // Recargo la lista
  };

  // FUNCIÓN PARA ELIMINAR UN PEDIDO
  const eliminarPedido = (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar este pedido?")) return;

    fetch(`http://localhost:8080/api/pedidos/${id}`, {
      method: "DELETE",
    }).then(() => cargarPedidos());
  };

  return (
    <AdminLayout>
      {/* Título principal */}
      <h2>Pedidos</h2>

      {/* Si no hay pedidos, muestro un mensaje */}
      {pedidos.length === 0 ? (
        <p>No hay pedidos registrados.</p>
      ) : (
        // TABLA DE PEDIDOS
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

                {/* Acciones: entregar o eliminar */}
                <td style={{ display: "flex", gap: "10px" }}>

                  {/* Si el pedido está pendiente, muestro botón para marcar como entregado */}
                  {p.estado === "Pendiente" ? (
                    <button
                      className="btn small"
                      onClick={() => marcarEntregado(p.id)}
                    >
                      Entregado
                    </button>
                  ) : (
                    // Si ya está entregado, muestro un check verde
                    <span style={{ color: "green", fontWeight: 600 }}>
                      ✔ Entregado
                    </span>
                  )}

                  {/* Botón para eliminar pedido */}
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
    </AdminLayout>
  );
};

export default PedidosAdmin;
