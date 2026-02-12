import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Registro() {
  const { register } = useContext(AuthContext);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMsg(null);

    if (password !== password2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await register(nombre, email, password);
      setMsg("Cuenta creada correctamente. Ahora puedes iniciar sesión.");
    } catch (err: any) {
      setError(err.message);
    }
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

          {error && <p className="error">{error}</p>}
          {msg && <p className="ok">{msg}</p>}

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
