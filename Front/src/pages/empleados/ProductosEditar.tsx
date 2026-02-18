import React, { useEffect, useState } from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import { useParams } from "react-router-dom";
import type { CrearProductoDTO } from "../../types/CrearProductoDTO";

const ProductosEditar: React.FC = () => {

  // Obtengo el ID del producto desde la URL.
  const { id } = useParams();

  // Estado donde guardo los datos del producto cargado.
  const [producto, setProducto] = useState<CrearProductoDTO | null>(null);

  // 1. Cargar los datos actuales del producto al entrar
  useEffect(() => {
    async function cargar() {
      const res = await fetch(`/api/productos/${id}`);
      const data = await res.json();
      setProducto(data); // Guardo los datos en el estado
    }
    cargar();
  }, [id]);

  // Si aún no se han cargado los datos, muestro un mensaje de carga.
  if (!producto) return <EmpleadoLayout>Cargando...</EmpleadoLayout>;

  // 2. Manejar el envío del formulario (PUT)
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch(`/api/productos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });

    alert("Producto actualizado");
  }

  return (
    <EmpleadoLayout>
      {/* Título principal */}
      <h2>Editar producto</h2>

      {/* FORMULARIO */}
      <form className="form" onSubmit={handleSubmit}>

        {/* Campo NOMBRE */}
        <input
          type="text"
          value={producto.nombre}
          onChange={(e) =>
            setProducto({ ...producto, nombre: e.target.value })
          }
        />

        {/* Campo DESCRIPCIÓN */}
        <textarea
          value={producto.descripcion}
          onChange={(e) =>
            setProducto({ ...producto, descripcion: e.target.value })
          }
        ></textarea>

        {/* Campo RECETA */}
        <textarea
          value={producto.receta}
          onChange={(e) =>
            setProducto({ ...producto, receta: e.target.value })
          }
        ></textarea>

        {/* Campo PRECIO */}
        <input
          type="number"
          value={producto.precio}
          onChange={(e) =>
            setProducto({
              ...producto,
              precio: parseFloat(e.target.value),
            })
          }
        />

        {/* Campo STOCK */}
        <input
          type="number"
          value={producto.stock}
          onChange={(e) =>
            setProducto({
              ...producto,
              stock: parseInt(e.target.value),
            })
          }
        />

        {/* Campo IMAGEN */}
        <input
          type="text"
          value={producto.imagen}
          onChange={(e) =>
            setProducto({ ...producto, imagen: e.target.value })
          }
        />

        {/* Campo TIPO */}
        <select
          value={producto.tipo}
          onChange={(e) =>
            setProducto({
              ...producto,
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

        {/* Botón de actualizar */}
        <button className="btn">Actualizar</button>
      </form>
    </EmpleadoLayout>
  );
};

export default ProductosEditar;
