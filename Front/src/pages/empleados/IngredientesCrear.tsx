import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";

const IngredientesCrear: React.FC = () => {
  return (
    <EmpleadoLayout>
      <h2>Crear ingrediente</h2>

      <form className="form">
        <input type="text" placeholder="Nombre" />
        <input type="number" placeholder="Stock" />
        <input type="text" placeholder="Proveedor" />
        <button className="btn">Guardar</button>
      </form>
    </EmpleadoLayout>
  );
};

export default IngredientesCrear;
