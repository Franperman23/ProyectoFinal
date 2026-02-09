import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";

const IngredientesEditar: React.FC = () => {
  return (
    <EmpleadoLayout>
      <h2>Editar ingrediente</h2>

      <form className="form">
        <input type="text" defaultValue="Harina" />
        <input type="number" defaultValue={50} />
        <input type="text" defaultValue="Proveedor X" />
        <button className="btn">Actualizar</button>
      </form>
    </EmpleadoLayout>
  );
};

export default IngredientesEditar;
