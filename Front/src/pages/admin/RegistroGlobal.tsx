import React from "react";

const RegistroGlobal: React.FC = () => {
  return (
    <main className="panel">
      <h2>Registro horario global</h2>

      <table className="tabla">
        <thead>
          <tr>
            <th>Empleado</th>
            <th>Fecha</th>
            <th>Entrada</th>
            <th>Salida</th>
            <th>Total horas</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Juan Pérez</td>
            <td>2026-02-05</td>
            <td>08:00</td>
            <td>16:00</td>
            <td>8h</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default RegistroGlobal;
