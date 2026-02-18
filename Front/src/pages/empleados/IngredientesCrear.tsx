import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import { useNavigate } from "react-router-dom";
// Cambiado a 'type' para ser coherente con tu ProductosCrear.tsx
import type { IngredienteDTO } from "../../types/IngredienteDTO";

const IngredientesCrear: React.FC = () => {
  const navigate = useNavigate();
  
  // Usamos el type IngredienteDTO para el estado
  const [nuevoIngrediente, setNuevoIngrediente] = React.useState<IngredienteDTO>({
    nombre: "",
    cantidad: 0,
    proveedor: ""
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const result = await fetch("/api/ingredientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoIngrediente),
      });

      if (!result.ok) {
        const errorMsg = await result.text();
        alert("Error al crear el ingrediente: " + errorMsg);
        return;
      }

      alert("Ingrediente creado correctamente");
      navigate("/empleados/ingredientes");

    } catch (error) {
      alert("Error al conectar con el servidor");
    }
  }

  return (
    <EmpleadoLayout>
      <h2>Crear ingrediente</h2>

      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre del ingrediente</label>
        <input
          type="text"
          value={nuevoIngrediente.nombre}
          onChange={(e) =>
            setNuevoIngrediente({ ...nuevoIngrediente, nombre: e.target.value })
          }
          required
        />

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

        <label>Proveedor</label>
        <input
          type="text"
          value={nuevoIngrediente.proveedor}
          onChange={(e) =>
            setNuevoIngrediente({ ...nuevoIngrediente, proveedor: e.target.value })
          }
          required
        />

        <button className="btn" type="submit">Guardar Ingrediente</button>
      </form>
    </EmpleadoLayout>
  );
};

export default IngredientesCrear;