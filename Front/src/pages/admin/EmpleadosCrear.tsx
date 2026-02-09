import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";

const EmpleadosCrear: React.FC = () => {
  return (
    <AdminLayout>
      <h2>Crear empleado</h2>

      <form className="form">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <select>
          <option value="empleado">Empleado</option>
          <option value="admin">Administrador</option>
        </select>
        <button className="btn">Guardar</button>
      </form>
    </AdminLayout>
  );
};

export default EmpleadosCrear;
