import React, { useEffect, useState } from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import { useParams, useNavigate } from "react-router-dom";
import type { IngredienteDTO } from "../../types/IngredienteDTO";

const IngredientesEditar: React.FC = () => {

  // Obtengo el ID del ingrediente desde la URL.
  const { id } = useParams();

  // Hook para redirigir al usuario después de actualizar.
  const navigate = useNavigate();

  // Estado donde guardo los datos del ingrediente cargado.
  const [ingrediente, setIngrediente] = useState<IngredienteDTO | null>(null);

  // 1. Cargar los datos actuales del ingrediente al entrar
  useEffect(() => {
    async function cargarIngrediente() {
      try {
        const res = await fetch(`http://localhost:8080/api/ingredientes/${id}`);

        if (res.ok) {
          const data = await res.json();
          setIngrediente(data); // Guardo los datos en el estado
        } else {
          alert("No se pudo cargar el ingrediente");
        }
      } catch (error) {
        console.error("Error al conectar:", error);
      }
    }

    cargarIngrediente();
  }, [id]);

  // Si aún no se han cargado los datos, muestro un mensaje de carga.
  if (!ingrediente)
    return <EmpleadoLayout>Cargando datos del ingrediente...</EmpleadoLayout>;

  // 2. Manejar el envío del formulario (PUT)
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/ingredientes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ingrediente),
      });

      if (response.ok) {
        alert("Ingrediente actualizado correctamente");
        navigate("/empleados/ingredientes");
      } else {
        alert("Error al actualizar el ingrediente");
      }
    } catch (error) {
      alert("Error de conexión con el servidor");
    }
  }

  return (
    <EmpleadoLayout>
      {/* Título principal */}
      <h2>Editar ingrediente</h2>

      {/* FORMULARIO */}
      <form className="form" onSubmit={handleSubmit}>

        {/* Campo NOMBRE */}
        <label>Nombre</label>
        <input
          type="text"
          value={ingrediente.nombre}
          onChange={(e) =>
            setIngrediente({ ...ingrediente, nombre: e.target.value })
          }
          required
        />

        {/* Campo CANTIDAD */}
        <label>Cantidad / Stock</label>
        <input
          type="number"
          value={ingrediente.cantidad}
          onChange={(e) =>
            setIngrediente({
              ...ingrediente,
              cantidad: parseInt(e.target.value) || 0,
            })
          }
          required
        />

        {/* Campo PROVEEDOR */}
        <label>Proveedor</label>
        <input
          type="text"
          value={ingrediente.proveedor}
          onChange={(e) =>
            setIngrediente({ ...ingrediente, proveedor: e.target.value })
          }
          required
        />

        {/* Botón de actualizar */}
        <button type="submit" className="btn">
          Actualizar Ingrediente
        </button>
      </form>
    </EmpleadoLayout>
  );
};

export default IngredientesEditar;
