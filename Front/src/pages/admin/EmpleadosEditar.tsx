import React from "react";

const EmpleadosEditar: React.FC = () => {
  return (
    <main className="panel">
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
    </main>
  );
};

export default EmpleadosEditar;
