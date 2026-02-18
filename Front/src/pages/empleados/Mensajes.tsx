import React, { useEffect, useState } from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";

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
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);

  const cargarMensajes = async () => {
    const res = await fetch("/api/mensajes");
    const data = await res.json();
    setMensajes(data);
  };

  useEffect(() => {
    cargarMensajes();
  }, []);

  const marcarLeido = async (id: number) => {
    await fetch(`/api/mensajes/${id}/leido`, {
      method: "PUT",
    });
    cargarMensajes();
  };

  const eliminar = async (id: number) => {
    await fetch(`/api/mensajes/${id}`, {
      method: "DELETE",
    });
    cargarMensajes();
  };

  return (
    <EmpleadoLayout>
      <h2>Mensajes de contacto</h2>

      <div className="mensajes-lista">
        {mensajes.length === 0 && <p>No hay mensajes todavía.</p>}

        {mensajes.map((m) => (
          <div
            key={m.id}
            className="mensaje-card"
            style={{
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              marginBottom: "15px",
              background: m.leido ? "#f5f5f5" : "#fff8f0",
            }}
          >
            <p>
              <strong>{m.nombre}</strong> — {m.email}
            </p>

            {m.telefono && <p>📞 {m.telefono}</p>}

            <p>{m.mensaje}</p>

            <p style={{ fontSize: "12px", color: "#666" }}>📅 {m.fecha}</p>

            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
              {!m.leido && (
                <button
                  onClick={() => marcarLeido(m.id)}
                  className="btn"
                  style={{ background: "#4caf50" }}
                >
                  Marcar como leído
                </button>
              )}

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
