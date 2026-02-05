import React from "react";

const Productos: React.FC = () => {
  return (
    <main className="panel">
      <h2>Productos</h2>

      <a href="/empleados/productos/crear" className="btn crear">Crear producto</a>

      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ejemplo producto</td>
            <td>20</td>
            <td>
              <a href="/empleados/productos/editar/1" className="btn small">Editar</a>
              <button className="btn small danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Productos;
