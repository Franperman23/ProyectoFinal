import React, { useState, useContext } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { AuthContext } from "../../context/AuthContext";
import "../../styles/admin.css";

const EmpleadosCrear: React.FC = () => {

  const { token } = useContext(AuthContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("EMPLEADO");

  const crearEmpleado = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/admin/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ nombre, email, password, rol }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Error al crear empleado:", text);
      alert("Error al crear empleado");
      return;
    }

    alert("Empleado creado correctamente");
    window.location.href = "/admin/empleados";
  };

  return (
    <AdminLayout>
      <h2>Crear empleado</h2>

      <form onSubmit={crearEmpleado} className="admin-form">

        <label>Nombre</label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Rol</label>
        <select value={rol} onChange={(e) => setRol(e.target.value)}>
          <option value="EMPLEADO">Empleado</option>
          <option value="ADMIN">Administrador</option>
        </select>

        <button className="btn">Guardar</button>
      </form>
    </AdminLayout>
  );
};

export default EmpleadosCrear;
