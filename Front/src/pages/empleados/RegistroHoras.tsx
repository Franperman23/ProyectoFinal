import React, { useEffect, useState } from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";
import type { RegistroDTO } from "../../types/RegistroDTO";

const RegistroHoras: React.FC = () => {

  // Estado donde guardo todos los registros del empleado.
  const [registros, setRegistros] = useState<RegistroDTO[]>([]);

  // Estado donde guardo el ID del registro activo (entrada sin salida).
  const [registroActivoId, setRegistroActivoId] = useState<number | null>(null);

  // Recupero el ID del usuario desde localStorage (lo guarda AuthContext al iniciar sesión).
  const usuarioId = localStorage.getItem("usuarioId");

  // Función que obtiene los registros del backend.
  const cargarRegistros = async () => {
    // Si no hay usuarioId, no puedo cargar nada.
    if (!usuarioId) {
      console.warn("No se encontró usuarioId en localStorage");
      return;
    }

    try {
      // Petición GET al backend para obtener los registros del empleado.
      const res = await fetch(`http://localhost:8080/api/registros/empleado/${usuarioId}`);

      if (res.ok) {
        const data = await res.json();
        setRegistros(data);

        // Busco si hay un registro sin hora de salida → turno activo.
        const pendiente = data.find((r: RegistroDTO) => r.horaSalida === null);

        // Si existe, guardo su ID; si no, lo dejo en null.
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

  // useEffect para cargar los registros al montar el componente.
  useEffect(() => {
    cargarRegistros();
  }, [usuarioId]);

  // Función para registrar la entrada del empleado.
  const handleEntrada = async () => {
    if (!usuarioId) return alert("Sesión no válida");

    try {
      const res = await fetch(`http://localhost:8080/api/registros/entrada/${usuarioId}`, {
        method: "POST"
      });

      if (res.ok) {
        alert("Entrada registrada con éxito");
        cargarRegistros(); // Actualizo la tabla y el estado del botón.
      } else {
        alert("Error al registrar entrada");
      }
    } catch (error) {
      alert("Error de conexión con el servidor");
    }
  };

  // Función para registrar la salida del empleado.
  const handleSalida = async () => {
    // Si no hay registro activo, no se puede registrar salida.
    if (!registroActivoId) return alert("No hay una entrada activa");

    try {
      const res = await fetch(`http://localhost:8080/api/registros/salida/${registroActivoId}`, {
        method: "PUT"
      });

      if (res.ok) {
        alert("Salida registrada con éxito");
        setRegistroActivoId(null); // Ya no hay turno activo.
        cargarRegistros(); // Actualizo la tabla.
      } else {
        alert("Error al registrar salida");
      }
    } catch (error) {
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <EmpleadoLayout>
      {/* Título principal */}
      <h2>Registro horario</h2>

      {/* Botones de entrada y salida */}
      <div className="registro-botones" style={{ marginBottom: "20px" }}>
        <button 
          className="btn"
          onClick={handleEntrada}
          disabled={registroActivoId !== null} // Deshabilitado si ya hay entrada activa.
          style={{ marginRight: "10px", opacity: registroActivoId !== null ? 0.5 : 1 }}
        >
          Registrar entrada
        </button>

        <button 
          className="btn"
          onClick={handleSalida}
          disabled={registroActivoId === null} // Deshabilitado si NO hay entrada activa.
          style={{ opacity: registroActivoId === null ? 0.5 : 1 }}
        >
          Registrar salida
        </button>
      </div>

      {/* Tabla con todos los registros */}
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
          {/* Si hay registros, los muestro */}
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
            // Si no hay registros, muestro mensaje.
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
