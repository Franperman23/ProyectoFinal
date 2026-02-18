import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import type { CrearProductoDTO } from "../../types/CrearProductoDTO";

const ProductosCrear: React.FC = () => {

  // Estado inicial del formulario basado en el DTO.
  const [nuevoProducto, setNuevoProducto] = React.useState<CrearProductoDTO>({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    receta: "",
    tipo: "Reposteria", // Valor por defecto
    imagen: ""
  });

  // FUNCIÓN PRINCIPAL DEL FORMULARIO
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Evita recargar la página

    try {
      // Envío la petición POST al backend
      const result = await fetch("http://localhost:8080/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      });

      // Si hay error, lo muestro
      if (!result.ok) {
        alert("Error al crear el producto");
        return;
      }

      alert("Producto creado correctamente");

      // Reseteo el formulario
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
      {/* Título principal */}
      <h2>Crear producto</h2>

      {/* FORMULARIO */}
      <form className="form" onSubmit={handleSubmit}>

        {/* Campo NOMBRE */}
        <label>Nombre</label>
        <input
          type="text"
          value={nuevoProducto.nombre}
          onChange={(e) =>
            setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
          }
          required
        />

        {/* Campo DESCRIPCIÓN */}
        <label>Descripción</label>
        <textarea
          value={nuevoProducto.descripcion}
          onChange={(e) =>
            setNuevoProducto({ ...nuevoProducto, descripcion: e.target.value })
          }
          required
        ></textarea>

        {/* Campo RECETA */}
        <label>Receta</label>
        <textarea
          value={nuevoProducto.receta}
          onChange={(e) =>
            setNuevoProducto({ ...nuevoProducto, receta: e.target.value })
          }
          required
        ></textarea>

        {/* Campo PRECIO */}
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

        {/* Campo STOCK */}
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

        {/* Campo IMAGEN */}
        <label>URL de imagen</label>
        <input
          type="text"
          value={nuevoProducto.imagen}
          onChange={(e) =>
            setNuevoProducto({ ...nuevoProducto, imagen: e.target.value })
          }
        />

        {/* Campo TIPO */}
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

        {/* Botón de guardar */}
        <button className="btn">Guardar</button>
      </form>
    </EmpleadoLayout>
  );
};

export default ProductosCrear;
