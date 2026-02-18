import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import type { ListarProductoDTO } from "../../types/ListarProductoDTO";

const Productos: React.FC = () => {

  // Estado donde guardo la lista de productos.
  const [productos, setProductos] = React.useState<ListarProductoDTO[]>([]);

  // FUNCIÓN PARA CARGAR LOS PRODUCTOS DESDE EL BACKEND
  async function fetchProductos() {
    try {
      const response = await fetch("/api/productos");
      if (!response.ok) throw new Error("Error al cargar productos");

      const data: ListarProductoDTO[] = await response.json();
      setProductos(data); // Guardo los productos en el estado

    } catch (error) {
      console.error("Error:", error);
    }
  }

  // FUNCIÓN PARA ELIMINAR UN PRODUCTO
  async function eliminarProducto(id: number) {
    if (!confirm("¿Seguro que quieres eliminar este producto?")) return;

    await fetch(`/api/productos/${id}`, {
      method: "DELETE",
    });

    // Actualizo la lista quitando el producto eliminado
    setProductos(productos.filter((p) => p.id !== id));
  }

  // useEffect que carga los productos al montar el componente.
  React.useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <EmpleadoLayout>
      {/* Título principal */}
      <h2>Productos</h2>

      {/* Botón para crear un nuevo producto */}
      <a href="/empleados/productos/crear" className="btn crear">
        Crear producto
      </a>

      {/* GRID DE PRODUCTOS */}
      <div className="grid fade-up">
        {productos.map((producto) => (
          <article className="card" key={producto.id}>

            {/* Imagen del producto */}
            <div className="card-image">
              <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
            </div>

            {/* Información del producto */}
            <div className="card-body">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>

              <p>
                <strong>Precio:</strong> {producto.precio.toFixed(2)} €
              </p>

              <p>
                <strong>Stock:</strong> {producto.stock}
              </p>

              <p>
                <strong>Tipo:</strong> {producto.tipo}
              </p>

              {/* Botones de acción */}
              <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
                
                {/* Botón para editar */}
                <a
                  href={`/empleados/productos/editar/${producto.id}`}
                  className="btn small"
                >
                  Editar
                </a>

                {/* Botón para eliminar */}
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
