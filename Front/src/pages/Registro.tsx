import React, { useState } from "react";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="login-wrapper">
      <div className="login-box">
        <h2>Crear cuenta</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

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

          <input
            type="password"
            placeholder="Repetir contraseña"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />

          <button type="submit" className="btn-login">
            Registrarme
          </button>
        </form>

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
