import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import type { CrearProductoDTO } from "../../types/CrearProductoDTO";

const ProductosCrear: React.FC = () => {
  const [nuevoProducto, setNuevoProducto] = React.useState<CrearProductoDTO>({
    nombre: "",
    descripcion: "",
    precio: 0,
    imagen: "",
    stock: 0,
    receta: "",
    tipo: "Reposteria"
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
    const result = await fetch("/api/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoProducto)
    });

    if (result.ok) {
      alert("Producto creado correctamente");
    } else {
      alert("Error al crear el producto");
    }

    const data = await result.json();
    console.log(data);
    } catch (error) {
      alert("Error al conectar con el servidor");
    }

  };

  return (
    <EmpleadoLayout>
      <h2>Crear producto</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" value={nuevoProducto.nombre} onChange={(e) => setNuevoProducto({...nuevoProducto, nombre: e.target.value})} />
        <input type="number" placeholder="Stock" value={nuevoProducto.stock} onChange={(e) => setNuevoProducto({...nuevoProducto, stock: parseInt(e.target.value) || 0})} />
        <textarea placeholder="Receta" value={nuevoProducto.descripcion} onChange={(e) => setNuevoProducto({...nuevoProducto, descripcion: e.target.value})}></textarea>
        <input type="number" placeholder="Precio" value={nuevoProducto.precio} onChange={(e) => setNuevoProducto({...nuevoProducto, precio: parseFloat(e.target.value) || 0})} />
        <input type="text" placeholder="URL de imagen" value={nuevoProducto.imagen} onChange={(e) => setNuevoProducto({...nuevoProducto, imagen: e.target.value})} />
        <button className="btn">Guardar</button>
      </form>
    </EmpleadoLayout>
  );
};

export default ProductosCrear;
