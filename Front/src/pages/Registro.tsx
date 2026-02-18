import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Registro() {
  // Obtengo la función register del contexto.
  const { register } = useContext(AuthContext);

  // Estados para los campos del formulario.
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // Estados para mensajes de éxito o error.
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Función que se ejecuta al enviar el formulario.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita recargar la página.
    setError(null);
    setMsg(null);

    // Validación básica: comprobar que las contraseñas coinciden.
    if (password !== password2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      // Intento registrar al usuario con los datos introducidos.
      await register(nombre, email, password);

      // Si todo va bien, muestro mensaje de éxito.
      setMsg("Cuenta creada correctamente. Ahora puedes iniciar sesión.");
    } catch (err: any) {
      // Si falla, muestro el mensaje de error.
      setError(err.message);
    }
  };

  return (
    <main className="login-wrapper">
      <div className="login-box">
        <h2>Crear cuenta</h2>

        {/* Formulario de registro */}
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Campo nombre */}
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          {/* Campo email */}
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Campo contraseña */}
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Campo repetir contraseña */}
          <input
            type="password"
            placeholder="Repetir contraseña"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />

          {/* Mensajes de error o éxito */}
          {error && <p className="error">{error}</p>}
          {msg && <p className="ok">{msg}</p>}

          {/* Botón de enviar */}
          <button type="submit" className="btn-login">
            Registrarme
          </button>
        </form>

        {/* Enlace a la página de login */}
        <p style={{ marginTop: "18px", fontSize: "0.95rem" }}>
          ¿Ya tienes cuenta?{" "}
          <a
            href="/login"
            style={{
              color: "var(--color-principal)",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Inicia sesión
          </a>
        </p>
      </div>
    </main>
  );
}
