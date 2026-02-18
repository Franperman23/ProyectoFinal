import React, { useEffect, useState } from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";

// Interfaz que define cómo es un mensaje dentro de la aplicación.
interface Mensaje {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  fecha: string;
  leido: boolean;
}

const Mensajes: React.FC = () => {

  // Estado donde guardo la lista de mensajes.
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);

  // FUNCIÓN PARA CARGAR LOS MENSAJES DESDE EL BACKEND
  const cargarMensajes = async () => {
    const res = await fetch("/api/mensajes");
    const data = await res.json();
    setMensajes(data);
  };

  // useEffect que carga los mensajes al montar el componente.
  useEffect(() => {
    cargarMensajes();
  }, []);

  // FUNCIÓN PARA MARCAR UN MENSAJE COMO LEÍDO
  const marcarLeido = async (id: number) => {
    await fetch(`/api/mensajes/${id}/leido`, {
      method: "PUT",
    });
    cargarMensajes(); // Recargo la lista
  };

  // FUNCIÓN PARA ELIMINAR UN MENSAJE
  const eliminar = async (id: number) => {
    await fetch(`/api/mensajes/${id}`, {
      method: "DELETE",
    });
    cargarMensajes(); // Recargo la lista
  };

  return (
    <EmpleadoLayout>
      {/* Título principal */}
      <h2>Mensajes de contacto</h2>

      <div className="mensajes-lista">

        {/* Si no hay mensajes, muestro un mensaje informativo */}
        {mensajes.length === 0 && <p>No hay mensajes todavía.</p>}

        {/* Recorro todos los mensajes y los muestro en tarjetas */}
        {mensajes.map((m) => (
          <div
            key={m.id}
            className="mensaje-card"
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              marginBottom: "15px",

              // Fondo distinto según si está leído o no
              background: m.leido ? "#f5f5f5" : "#fff8f0",
            }}
          >
            {/* Nombre y email */}
            <p>
              <strong>{m.nombre}</strong> — {m.email}
            </p>

            {/* Teléfono opcional */}
            {m.telefono && <p>📞 {m.telefono}</p>}

            {/* Mensaje enviado por el usuario */}
            <p>{m.mensaje}</p>

            {/* Fecha del mensaje */}
            <p style={{ fontSize: "12px", color: "#666" }}>📅 {m.fecha}</p>

            {/* Botones de acción */}
            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>

              {/* Botón para marcar como leído (solo si aún no lo está) */}
              {!m.leido && (
                <button
                  onClick={() => marcarLeido(m.id)}
                  className="btn"
                  style={{ background: "#4caf50" }}
                >
                  Marcar como leído
                </button>
              )}

              {/* Botón para eliminar */}
              <button
                onClick={() => eliminar(m.id)}
                className="btn"
                style={{ background: "#d9534f" }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </EmpleadoLayout>
  );
};

export default Mensajes;
