import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import { useNavigate } from "react-router-dom";
import type { IngredienteDTO } from "../../types/IngredienteDTO";

const IngredientesCrear: React.FC = () => {

  // Hook para redirigir al usuario después de guardar.
  const navigate = useNavigate();
  
  // Estado inicial del formulario, basado en el DTO.
  const [nuevoIngrediente, setNuevoIngrediente] = React.useState<IngredienteDTO>({
    nombre: "",
    cantidad: 0,
    proveedor: ""
  });

  // FUNCIÓN PRINCIPAL DEL FORMULARIO
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Evita recargar la página.
     
  // Envío la petición POST al backend.
    try {
      const result = await fetch("/api/ingredientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoIngrediente),
      });

      // Si hay error, lo muestro.
      if (!result.ok) {
        const errorMsg = await result.text();
        alert("Error al crear el ingrediente: " + errorMsg);
        return;
      }

      // Si todo va bien, aviso y redirijo.
      alert("Ingrediente creado correctamente");
      navigate("/empleados/ingredientes");

    } catch (error) {
      alert("Error al conectar con el servidor");
    }
  }

  return (
    <EmpleadoLayout>
      {/* Título principal */}
      <h2>Crear ingrediente</h2>

      {/* FORMULARIO */}
      <form className="form" onSubmit={handleSubmit}>

        {/* Campo NOMBRE */}
        <label>Nombre del ingrediente</label>
        <input
          type="text"
          value={nuevoIngrediente.nombre}
          onChange={(e) =>
            setNuevoIngrediente({ ...nuevoIngrediente, nombre: e.target.value })
          }
          required
        />

        {/* Campo CANTIDAD */}
        <label>Cantidad</label>
        <input
          type="number"
          value={nuevoIngrediente.cantidad}
          onChange={(e) =>
            setNuevoIngrediente({
              ...nuevoIngrediente,
              cantidad: parseInt(e.target.value) || 0,
            })
          }
          required
        />

        {/* Campo PROVEEDOR */}
        <label>Proveedor</label>
        <input
          type="text"
          value={nuevoIngrediente.proveedor}
          onChange={(e) =>
            setNuevoIngrediente({ ...nuevoIngrediente, proveedor: e.target.value })
          }
          required
        />

        {/* Botón de guardar */}
        <button className="btn" type="submit">
          Guardar Ingrediente
        </button>
      </form>
    </EmpleadoLayout>
  );
};

export default IngredientesCrear;
