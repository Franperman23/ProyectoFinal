import React from "react";

const IngredientesEditar: React.FC = () => {
  return (
    <main className="panel">
      <h2>Editar ingrediente</h2>

      <form className="form">
        <input type="text" defaultValue="Harina" />
        <input type="number" defaultValue={50} />
        <input type="text" defaultValue="Proveedor X" />
        <button className="btn">Actualizar</button>
      </form>
    </main>
  );
};

export default IngredientesEditar;
