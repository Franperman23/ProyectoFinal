import React from "react";

const IngredientesCrear: React.FC = () => {
  return (
    <main className="panel">
      <h2>Crear ingrediente</h2>

      <form className="form">
        <input type="text" placeholder="Nombre" />
        <input type="number" placeholder="Stock" />
        <input type="text" placeholder="Proveedor" />
        <button className="btn">Guardar</button>
      </form>
    </main>
  );
};

export default IngredientesCrear;
