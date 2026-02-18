import React, { useEffect, useState } from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import type { RegistroDTO } from "../../types/RegistroDTO";

const RegistroHoras: React.FC = () => {
  const [registros, setRegistros] = useState<RegistroDTO[]>([]);
  const [registroActivoId, setRegistroActivoId] = useState<number | null>(null);

  // Recuperamos el ID que el AuthContext ahora guarda por separado
  const usuarioId = localStorage.getItem("usuarioId");

  const cargarRegistros = async () => {
    if (!usuarioId) {
      console.warn("No se encontró usuarioId en localStorage");
      return;
    }

    try {
      const res = await fetch(`/api/registros/empleado/${usuarioId}`);
      if (res.ok) {
        const data = await res.json();
        setRegistros(data);
        
        // Buscamos si hay algún registro que no tenga hora de salida (turno activo)
        const pendiente = data.find((r: RegistroDTO) => r.horaSalida === null);
        if (pendiente) {
          setRegistroActivoId(pendiente.id);
        } else {
          setRegistroActivoId(null);
        }
      }
    } catch (error) {
      console.error("Error al cargar registros:", error);
    }
  };

  useEffect(() => {
    cargarRegistros();
  }, [usuarioId]);

  const handleEntrada = async () => {
    if (!usuarioId) return alert("Sesión no válida");

    try {
      const res = await fetch(`/api/registros/entrada/${usuarioId}`, {
        method: "POST"
      });

      if (res.ok) {
        alert("Entrada registrada con éxito");
        cargarRegistros(); // Refrescamos la lista y el estado del botón
      } else {
        alert("Error al registrar entrada");
      }
    } catch (error) {
      alert("Error de conexión con el servidor");
    }
  };

  const handleSalida = async () => {
    if (!registroActivoId) return alert("No hay una entrada activa");

    try {
      const res = await fetch(`/api/registros/salida/${registroActivoId}`, {
        method: "PUT"
      });

      if (res.ok) {
        alert("Salida registrada con éxito");
        setRegistroActivoId(null);
        cargarRegistros(); // Refrescamos la tabla para ver las horas calculadas
      } else {
        alert("Error al registrar salida");
      }
    } catch (error) {
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <EmpleadoLayout>
      <h2>Registro horario</h2>

      <div className="registro-botones" style={{ marginBottom: "20px" }}>
        <button 
          className="btn" 
          onClick={handleEntrada} 
          disabled={registroActivoId !== null}
          style={{ marginRight: "10px", opacity: registroActivoId !== null ? 0.5 : 1 }}
        >
          Registrar entrada
        </button>
        <button 
          className="btn" 
          onClick={handleSalida} 
          disabled={registroActivoId === null}
          style={{ opacity: registroActivoId === null ? 0.5 : 1 }}
        >
          Registrar salida
        </button>
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Entrada</th>
            <th>Salida</th>
            <th>Total horas</th>
          </tr>
        </thead>
        <tbody>
          {registros.length > 0 ? (
            registros.map((reg) => (
              <tr key={reg.id}>
                <td>{reg.fecha}</td>
                <td>{reg.horaEntrada}</td>
                <td>{reg.horaSalida || "--:--"}</td>
                <td>
                  {reg.horasTrabajadas !== null 
                    ? `${reg.horasTrabajadas}h` 
                    : "En curso..."}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                No tienes registros de jornada todavía.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </EmpleadoLayout>
  );
};

export default RegistroHoras;