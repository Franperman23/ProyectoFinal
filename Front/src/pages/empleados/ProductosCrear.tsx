import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";

const ProductosCrear: React.FC = () => {
  return (
    <EmpleadoLayout>
      <h2>Crear producto</h2>

      <form className="form">
        <input type="text" placeholder="Nombre" />
        <input type="number" placeholder="Stock" />
        <textarea placeholder="Receta"></textarea>
        <button className="btn">Guardar</button>
      </form>
    </EmpleadoLayout>
  );
};

export default ProductosCrear;
