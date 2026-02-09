import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";

const ProductosEditar: React.FC = () => {
  return (
    <EmpleadoLayout>
      <h2>Editar producto</h2>

      <form className="form">
        <input type="text" defaultValue="Nombre producto" />
        <input type="number" defaultValue={10} />
        <textarea defaultValue="Receta del producto"></textarea>
        <button className="btn">Actualizar</button>
      </form>
    </EmpleadoLayout>
  );
};

export default ProductosEditar;
