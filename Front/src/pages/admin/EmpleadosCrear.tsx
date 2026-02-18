import React, { useState, useContext } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { AuthContext } from "../../context/AuthContext";

const EmpleadosCrear: React.FC = () => {

  // Obtengo el token del contexto para acceder a rutas protegidas.
  const { token } = useContext(AuthContext);

  // Estados del formulario: nombre, email, contraseña y rol.
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("EMPLEADO"); // Valor por defecto

  // FUNCIÓN PARA CREAR UN EMPLEADO
  const crearEmpleado = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita recargar la página

    // Envío la petición al backend
    const res = await fetch("http://localhost:8080/api/admin/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Token JWT
      },
      body: JSON.stringify({ nombre, email, password, rol }),
    });

    // Si la respuesta no es OK, muestro error
    if (!res.ok) {
      const text = await res.text();
      console.error("Error al crear empleado:", text);
      alert("Error al crear empleado");
      return;
    }

    // Si todo va bien, aviso y redirijo
    alert("Empleado creado correctamente");
    window.location.href = "/admin/empleados";
  };

  return (
    <AdminLayout>
      {/* Título principal */}
      <h2>Crear empleado</h2>

      {/* FORMULARIO */}
      <form onSubmit={crearEmpleado} className="formulario">

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

        {/* Campo CONTRASEÑA */}
        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Campo ROL */}
        <label>Rol</label>
        <select value={rol} onChange={(e) => setRol(e.target.value)}>
          <option value="EMPLEADO">Empleado</option>
          <option value="ADMIN">Administrador</option>
        </select>

        {/* Botón de guardar */}
        <button className="btn crear">Guardar</button>
      </form>
    </AdminLayout>
  );
};

export default EmpleadosCrear;
