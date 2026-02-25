import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  // Obtengo la función login del contexto.
  const { login } = useContext(AuthContext);

  // Estados para los campos del formulario.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Estado para mostrar errores de inicio de sesión.
  const [error, setError] = useState<string | null>(null);

  // Función que se ejecuta al enviar el formulario.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita recargar la página.
    setError(null); // Limpio errores previos.

    try {
      // Intento iniciar sesión con email y contraseña.
      await login(email, password);

      // La redirección se hace automáticamente dentro de login según el rol.
    } catch (err: any) {
      // Si falla, muestro el mensaje de error.
      setError(err.message || "Error al iniciar sesión");
    }
  };

  return (
    <main className="login-wrapper">
      <div className="login-box">
        <h2>Iniciar sesión</h2>

        {/* Formulario de login */}
        <form className="login-form" onSubmit={handleSubmit}>
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
            minLength={8}
          />

          {/* Mensaje de error si existe */}
          {error && <p className="error">{error}</p>}

          {/* Botón de enviar */}
          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>

        {/* Enlace a la página de registro */}
        <p style={{ marginTop: "18px", fontSize: "0.95rem" }}>
          ¿No tienes cuenta?{" "}
          <Link
            to="/registro"
            style={{
              color: "var(--color-principal)",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </main>
  );
}
