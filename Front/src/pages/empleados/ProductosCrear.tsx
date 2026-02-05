import React from "react";

const ProductosCrear: React.FC = () => {
  return (
    <main className="panel">
      <h2>Crear producto</h2>

      <form className="form">
        <input type="text" placeholder="Nombre" />
        <input type="number" placeholder="Stock" />
        <textarea placeholder="Receta"></textarea>
        <button className="btn">Guardar</button>
      </form>
    </main>
  );
};

export default ProductosCrear;
