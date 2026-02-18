import React, { useEffect, useState } from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import type { IngredienteDTO } from "../../types/IngredienteDTO";

// Extiendo el DTO para incluir el ID que viene desde la base de datos.
type Ingrediente = IngredienteDTO & { idIngrediente: number };

const Ingredientes: React.FC = () => {

  // Estado donde guardo la lista de ingredientes.
  const [ingredientes, setIngredientes] = useState<Ingrediente[]>([]);

  // Estado para mostrar un mensaje de carga.
  const [cargando, setCargando] = useState(true);

  // FUNCIÓN PARA CARGAR LOS INGREDIENTES DESDE EL BACKEND
  const cargarIngredientes = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/ingredientes");

      if (response.ok) {
        const datos = await response.json();
        setIngredientes(datos);
      } else {
        console.error("Error al obtener ingredientes");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    } finally {
      setCargando(false);
    }
  };

  // useEffect que carga los ingredientes al montar el componente.
  useEffect(() => {
    cargarIngredientes();
  }, []);

  // FUNCIÓN PARA ELIMINAR UN INGREDIENTE
  const eliminarIngrediente = async (id: number) => {
    if (!confirm("¿Seguro que quieres eliminarlo?")) return;

    try {
      const response = await fetch(`http://localhost:8080/api/ingredientes/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Actualizo la lista quitando el ingrediente eliminado.
        setIngredientes(ingredientes.filter(ing => ing.idIngrediente !== id));
      }
    } catch (error) {
      alert("No se pudo eliminar");
    }
  };

  return (
    <EmpleadoLayout>
      {/* Título principal */}
      <h2>Ingredientes</h2>

      {/* Botón para crear un nuevo ingrediente */}
      <a href="/empleados/ingredientes/crear" className="btn crear">
        Crear ingrediente
      </a>

      {/* TABLA DE INGREDIENTES */}
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Proveedor</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {/* Si está cargando, muestro mensaje */}
          {cargando ? (
            <tr>
              <td colSpan={4}>Cargando ingredientes...</td>
            </tr>

          // Si no hay ingredientes, muestro mensaje
          ) : ingredientes.length === 0 ? (
            <tr>
              <td colSpan={4}>No hay ingredientes registrados.</td>
            </tr>

          // Si hay ingredientes, los muestro en la tabla
          ) : (
            ingredientes.map((ing) => (
              <tr key={ing.idIngrediente}>
                <td>{ing.nombre}</td>
                <td>{ing.cantidad}</td>
                <td>{ing.proveedor}</td>
                <td>
                  {/* Botón para editar */}
                  <a
                    href={`/empleados/ingredientes/editar/${ing.idIngrediente}`}
                    className="btn small"
                  >
                    Editar
                  </a>

                  {/* Botón para eliminar */}
                  <button
                    onClick={() => eliminarIngrediente(ing.idIngrediente)}
                    className="btn small danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </EmpleadoLayout>
  );
};

export default Ingredientes;
