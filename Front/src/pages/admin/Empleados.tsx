import React from "react";

const Empleados: React.FC = () => {
  return (
    <main className="panel">
      <h2>Empleados</h2>

      <a href="/admin/empleados/crear" className="btn crear">Crear empleado</a>

      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Juan Pérez</td>
            <td>juanp</td>
            <td>Empleado</td>
            <td>
              <a href="/admin/empleados/editar/1" className="btn small">Editar</a>
              <button className="btn small danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Empleados;
