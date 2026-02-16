import React, { useEffect, useState, useContext } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { AuthContext } from "../../context/AuthContext";

interface Empleado {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

const Empleados: React.FC = () => {
  const { token } = useContext(AuthContext);
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/admin/usuarios", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          console.error("Error del backend:", text);
          setError("No se pudieron cargar los empleados");
          return [];
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setEmpleados(data);
        } else {
          console.error("El backend NO devolvió un array:", data);
          setError("Respuesta inesperada del servidor");
        }
      })
      .catch((err) => {
        console.error("Error de red:", err);
        setError("Error de conexión con el servidor");
      });
  }, [token]);

  const eliminarEmpleado = async (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar este empleado?")) return;

    await fetch(`http://localhost:8080/api/admin/usuarios/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setEmpleados(empleados.filter((e) => e.id !== id));
  };

  return (
    <AdminLayout>
      <h2>Empleados</h2>

      <a href="/admin/empleados/crear" className="btn crear">
        Crear empleado
      </a>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {empleados.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.nombre}</td>
              <td>{emp.email}</td>
              <td>{emp.rol}</td>
              <td>
                <a
                  href={`/admin/empleados/editar/${emp.id}`}
                  className="btn small"
                >
                  Editar
                </a>
                <button
                  className="btn small danger"
                  onClick={() => eliminarEmpleado(emp.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Empleados;
