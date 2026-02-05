import React from "react";

const ProductosEditar: React.FC = () => {
  return (
    <main className="panel">
      <h2>Editar producto</h2>

      <form className="form">
        <input type="text" defaultValue="Nombre producto" />
        <input type="number" defaultValue={10} />
        <textarea defaultValue="Receta del producto"></textarea>
        <button className="btn">Actualizar</button>
      </form>
    </main>
  );
};

export default ProductosEditar;
