import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import type { CrearProductoDTO } from "../../types/CrearProductoDTO";

const ProductosCrear: React.FC = () => {
  const [nuevoProducto, setNuevoProducto] = React.useState<CrearProductoDTO>({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    receta: "",
    tipo: "Reposteria",
    imagen: ""
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const result = await fetch("/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      });

      if (!result.ok) {
        alert("Error al crear el producto");
        return;
      }

      alert("Producto creado correctamente");

      setNuevoProducto({
        nombre: "",
        descripcion: "",
        precio: 0,
        stock: 0,
        receta: "",
        tipo: "Reposteria",
        imagen: ""
      });
    } catch (error) {
      alert("Error al conectar con el servidor");
    }
  }

  return (
    <EmpleadoLayout>
      <h2>Crear producto</h2>

      <form className="form" onSubmit={handleSubmit}>

        <label>Nombre</label>
        <input
          type="text"
          value={nuevoProducto.nombre}
          onChange={(e) =>
            setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
          }
          required
        />

        <label>Descripción</label>
        <textarea
          value={nuevoProducto.descripcion}
          onChange={(e) =>
            setNuevoProducto({ ...nuevoProducto, descripcion: e.target.value })
          }
          required
        ></textarea>

        <label>Receta</label>
        <textarea
          value={nuevoProducto.receta}
          onChange={(e) =>
            setNuevoProducto({ ...nuevoProducto, receta: e.target.value })
          }
          required
        ></textarea>

        <label>Precio (€)</label>
        <input
          type="number"
          value={nuevoProducto.precio}
          onChange={(e) =>
            setNuevoProducto({
              ...nuevoProducto,
              precio: parseFloat(e.target.value),
            })
          }
          required
        />

        <label>Stock</label>
        <input
          type="number"
          value={nuevoProducto.stock}
          onChange={(e) =>
            setNuevoProducto({
              ...nuevoProducto,
              stock: parseInt(e.target.value),
            })
          }
          required
        />

        <label>URL de imagen</label>
        <input
          type="text"
          value={nuevoProducto.imagen}
          onChange={(e) =>
            setNuevoProducto({ ...nuevoProducto, imagen: e.target.value })
          }
        />

        <label>Tipo de producto</label>
        <select
          value={nuevoProducto.tipo}
          onChange={(e) =>
            setNuevoProducto({
              ...nuevoProducto,
              tipo: e.target.value as CrearProductoDTO["tipo"],
            })
          }
        >
          <option value="Reposteria">Repostería</option>
          <option value="Bolleria">Bollería</option>
          <option value="Panaderia">Panadería</option>
          <option value="Tartas personalizadas">Tartas personalizadas</option>
          <option value="Pasteleria para eventos">Pastelería para eventos</option>
        </select>

        <button className="btn">Guardar</button>
      </form>
    </EmpleadoLayout>
  );
};

export default ProductosCrear;
