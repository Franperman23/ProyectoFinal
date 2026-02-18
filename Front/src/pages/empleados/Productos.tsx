import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import type { ListarProductoDTO } from "../../types/ListarProductoDTO";

const Productos: React.FC = () => {
  const [productos, setProductos] = React.useState<ListarProductoDTO[]>([]);

  async function fetchProductos() {
    try {
      const response = await fetch("/api/productos");
      if (!response.ok) throw new Error("Error al cargar productos");
      const data: ListarProductoDTO[] = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function eliminarProducto(id: number) {
    if (!confirm("¿Seguro que quieres eliminar este producto?")) return;

    await fetch(`/api/productos/${id}`, {
      method: "DELETE",
    });

    setProductos(productos.filter((p) => p.id !== id));
  }

  React.useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <EmpleadoLayout>
      <h2>Productos</h2>

      <a href="/empleados/productos/crear" className="btn crear">
        Crear producto
      </a>

      <div className="grid fade-up">
        {productos.map((producto) => (
          <article className="card" key={producto.id}>
            <div className="card-image">
              <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
            </div>

            <div className="card-body">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p><strong>Precio:</strong> {producto.precio.toFixed(2)} €</p>
              <p><strong>Stock:</strong> {producto.stock}</p>
              <p><strong>Tipo:</strong> {producto.tipo}</p>

              <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
                <a
                  href={`/empleados/productos/editar/${producto.id}`}
                  className="btn small"
                >
                  Editar
                </a>

                <button
                  className="btn small danger"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </EmpleadoLayout>
  );
};

export default Productos;
