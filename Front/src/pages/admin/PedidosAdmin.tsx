import React from "react";

const PedidosAdmin: React.FC = () => {
  return (
    <main className="panel">
      <h2>Pedidos</h2>

      <table className="tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Fecha entrega</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>María López</td>
            <td>2026-02-12</td>
            <td>Pendiente</td>
            <td>
              <button className="btn small">Marcar como entregado</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default PedidosAdmin;
