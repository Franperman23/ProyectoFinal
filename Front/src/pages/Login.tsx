import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="login-wrapper">
      <div className="login-box">
        <h2>Iniciar sesión</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>

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
