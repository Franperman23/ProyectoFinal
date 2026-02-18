import React, { useEffect, useState, useContext } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { AuthContext } from "../../context/AuthContext";

// Interfaz que define cómo es un empleado dentro de la aplicación.
interface Empleado {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

const Empleados: React.FC = () => {

  // Obtengo el token del contexto para acceder a rutas protegidas.
  const { token } = useContext(AuthContext);

  // Estado donde guardo la lista de empleados.
  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  // Estado para mostrar errores si el backend falla.
  const [error, setError] = useState<string | null>(null);

  // useEffect que carga los empleados al montar el componente.
  useEffect(() => {
    fetch("/api/admin/usuarios", {
      headers: {
        Authorization: `Bearer ${token}`, // Token JWT
      },
    })
      .then(async (res) => {
        // Si la respuesta no es OK, muestro error.
        if (!res.ok) {
          const text = await res.text();
          console.error("Error del backend:", text);
          setError("No se pudieron cargar los empleados");
          return [];
        }
        return res.json();
      })
      .then((data) => {
        // Verifico que el backend devolvió un array.
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

  // FUNCIÓN PARA ELIMINAR UN EMPLEADO
  const eliminarEmpleado = async (id: number) => {
    if (!confirm("¿Seguro que quieres eliminar este empleado?")) return;

    await fetch(`/api/admin/usuarios/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Actualizo la lista quitando el empleado eliminado.
    setEmpleados(empleados.filter((e) => e.id !== id));
  };

  return (
    <AdminLayout>
      {/* Título principal */}
      <h2>Empleados</h2>

      {/* Botón para crear un nuevo empleado */}
      <a href="/admin/empleados/crear" className="btn crear">
        Crear empleado
      </a>

      {/* Mensaje de error si algo falla */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* TABLA DE EMPLEADOS */}
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
                {/* Botón para editar */}
                <a
                  href={`/admin/empleados/editar/${emp.id}`}
                  className="btn small"
                >
                  Editar
                </a>

                {/* Botón para eliminar */}
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
