import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import { AuthContext } from "../../context/AuthContext";

const EmpleadosEditar: React.FC = () => {

  // Obtengo el ID del empleado desde la URL.
  const { id } = useParams();

  // Obtengo el token del contexto para acceder a rutas protegidas.
  const { token } = useContext(AuthContext);

  // Estados del formulario.
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Opcional
  const [rol, setRol] = useState("EMPLEADO");

  // Estado para mostrar errores si algo falla.
  const [error, setError] = useState<string | null>(null);

  // CARGO LOS DATOS DEL EMPLEADO AL MONTAR EL COMPONENTE
  useEffect(() => {
    fetch(`/api/admin/usuarios/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Token JWT
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          setError("No se pudo cargar el empleado");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) return;

        // Relleno el formulario con los datos del empleado.
        setNombre(data.nombre);
        setEmail(data.email);
        setRol(data.rol);
      })
      .catch(() => setError("Error de conexión con el servidor"));
  }, [id, token]);

  // FUNCIÓN PARA ACTUALIZAR EL EMPLEADO
  const actualizarEmpleado = async (e: React.FormEvent) => {
    e.preventDefault();

    // Construyo el cuerpo de la petición.
    const body: any = {
      nombre,
      email,
      rol,
    };

    // Solo envío la contraseña si el usuario ha escrito algo.
    if (password.trim() !== "") {
      body.password = password;
    }

    // Petición PUT al backend.
    const res = await fetch(`/api/admin/usuarios/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      alert("Error al actualizar empleado");
      return;
    }

    alert("Empleado actualizado correctamente");
    window.location.href = "/admin/empleados";
  };

  return (
    <AdminLayout>
      {/* Título principal */}
      <h2>Editar empleado</h2>

      {/* Mensaje de error si algo falla */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* FORMULARIO */}
      <form className="form" onSubmit={actualizarEmpleado}>

        {/* Campo NOMBRE */}
        <label>Nombre</label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        {/* Campo EMAIL */}
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Campo CONTRASEÑA (opcional) */}
        <label>Nueva contraseña (opcional)</label>
        <input
          type="password"
          placeholder="Dejar vacío para no cambiar"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Campo ROL */}
        <label>Rol</label>
        <select value={rol} onChange={(e) => setRol(e.target.value)}>
          <option value="EMPLEADO">Empleado</option>
          <option value="ADMIN">Administrador</option>
        </select>

        {/* Botón de actualizar */}
        <button className="btn">Actualizar</button>
      </form>
    </AdminLayout>
  );
};

export default EmpleadosEditar;
