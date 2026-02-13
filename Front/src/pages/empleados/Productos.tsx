import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";

const Productos: React.FC = () => {
  return (
    <EmpleadoLayout>
      <h2>Productos</h2>

      <a href="/empleados/productos/crear" className="btn crear">Crear producto</a>

      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>tipo</th>
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
    </EmpleadoLayout>
  );
};

export default Productos;
