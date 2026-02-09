import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";

const Ingredientes: React.FC = () => {
  return (
    <EmpleadoLayout>
      <h2>Ingredientes</h2>

      <a href="/empleados/ingredientes/crear" className="btn crear">Crear ingrediente</a>

      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Proveedor</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Harina</td>
            <td>50 kg</td>
            <td>Proveedor X</td>
            <td>
              <a href="/empleados/ingredientes/editar/1" className="btn small">Editar</a>
              <button className="btn small danger">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </EmpleadoLayout>
  );
};

export default Ingredientes;
