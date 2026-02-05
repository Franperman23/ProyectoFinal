import React from "react";

const RegistroHoras: React.FC = () => {
  return (
    <main className="panel">
      <h2>Registro horario</h2>

      <div className="registro-botones">
        <button className="btn">Registrar entrada</button>
        <button className="btn">Registrar salida</button>
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Entrada</th>
            <th>Salida</th>
            <th>Total horas</th>
          </tr>
        </thead>

        <tbody>
          <tr>
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

export default RegistroHoras;
