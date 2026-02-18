import React, { useEffect, useState } from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import type { IngredienteDTO } from "../../types/IngredienteDTO";

// Definimos una interfaz para el objeto que viene con ID de la base de datos
type Ingrediente = IngredienteDTO & { idIngrediente: number };

const Ingredientes: React.FC = () => {
  const [ingredientes, setIngredientes] = useState<Ingrediente[]>([]);
  const [cargando, setCargando] = useState(true);

  // Función para obtener los datos del servidor
  const cargarIngredientes = async () => {
    try {
      const response = await fetch("/api/ingredientes");
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

  // Se ejecuta al cargar el componente
  useEffect(() => {
    cargarIngredientes();
  }, []);

  // Función para eliminar (opcional, pero recomendada)
  const eliminarIngrediente = async (id: number) => {
    if (!confirm("¿Seguro que quieres eliminarlo?")) return;
    
    try {
      const response = await fetch(`/api/ingredientes/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setIngredientes(ingredientes.filter(ing => ing.idIngrediente !== id));
      }
    } catch (error) {
      alert("No se pudo eliminar");
    }
  };

  return (
    <EmpleadoLayout>
      <h2>Ingredientes</h2>

      <a href="/empleados/ingredientes/crear" className="btn crear">Crear ingrediente</a>

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
          {cargando ? (
            <tr><td colSpan={4}>Cargando ingredientes...</td></tr>
          ) : ingredientes.length === 0 ? (
            <tr><td colSpan={4}>No hay ingredientes registrados.</td></tr>
          ) : (
            ingredientes.map((ing) => (
              <tr key={ing.idIngrediente}>
                <td>{ing.nombre}</td>
                <td>{ing.cantidad}</td>
                <td>{ing.proveedor}</td>
                <td>
                  <a href={`/empleados/ingredientes/editar/${ing.idIngrediente}`} className="btn small">Editar</a>
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