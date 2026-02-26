import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import { AuthContext } from "../../context/AuthContext";

const EmpleadosEditar: React.FC = () => {

  const { id } = useParams();
  const { token } = useContext(AuthContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("EMPLEADO");

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/admin/usuarios/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
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

        setNombre(data.nombre);
        setEmail(data.email);
        setRol(data.rol);
      })
      .catch(() => setError("Error de conexión con el servidor"));
  }, [id, token]);

  const actualizarEmpleado = async (e: React.FormEvent) => {
    e.preventDefault();

    const body: any = {
      nombre,
      email,
      rol,
    };

    if (password.trim() !== "") {
      body.password = password;
    }

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
      <h2>Editar empleado</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form className="form" onSubmit={actualizarEmpleado}>

        <label>Nombre</label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Nueva contraseña</label>
        <input
          type="password"
          placeholder="Introduzca la nueva contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
        />

        <label>Rol</label>
        <select value={rol} onChange={(e) => setRol(e.target.value)}>
          <option value="EMPLEADO">Empleado</option>
          <option value="ADMIN">Administrador</option>
        </select>

        <button className="btn">Actualizar</button>
      </form>
    </AdminLayout>
  );
};

export default EmpleadosEditar;