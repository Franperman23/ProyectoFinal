import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";

const EmpleadosEditar: React.FC = () => {
  return (
    <AdminLayout>
      <h2>Editar empleado</h2>

      <form className="form">
        <input type="text" defaultValue="Juan Pérez" />
        <input type="text" defaultValue="juanp" />
        <select defaultValue="empleado">
          <option value="empleado">Empleado</option>
          <option value="admin">Administrador</option>
        </select>
        <button className="btn">Actualizar</button>
      </form>
    </AdminLayout>
  );
};

export default EmpleadosEditar;
