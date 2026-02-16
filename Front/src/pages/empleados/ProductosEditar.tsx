import React, { useEffect, useState } from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import { useParams } from "react-router-dom";
import type { CrearProductoDTO } from "../../types/CrearProductoDTO";

const ProductosEditar: React.FC = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState<CrearProductoDTO | null>(null);

  useEffect(() => {
    async function cargar() {
      const res = await fetch(`http://localhost:8080/api/productos/${id}`);
      const data = await res.json();
      setProducto(data);
    }
    cargar();
  }, [id]);

  if (!producto) return <EmpleadoLayout>Cargando...</EmpleadoLayout>;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch(`http://localhost:8080/api/productos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });

    alert("Producto actualizado");
  }

  return (
    <EmpleadoLayout>
      <h2>Editar producto</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={producto.nombre}
          onChange={(e) =>
            setProducto({ ...producto, nombre: e.target.value })
          }
        />

        <textarea
          value={producto.descripcion}
          onChange={(e) =>
            setProducto({ ...producto, descripcion: e.target.value })
          }
        ></textarea>

        <textarea
          value={producto.receta}
          onChange={(e) =>
            setProducto({ ...producto, receta: e.target.value })
          }
        ></textarea>

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

        <input
          type="text"
          value={producto.imagen}
          onChange={(e) =>
            setProducto({ ...producto, imagen: e.target.value })
          }
        />

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

        <button className="btn">Actualizar</button>
      </form>
    </EmpleadoLayout>
  );
};

export default ProductosEditar;
