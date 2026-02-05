import React from "react";

const LoginAdmin: React.FC = () => {
  return (
    <main className="login-empleado">
      <h2>Acceso administrador</h2>

      <form className="login-form">
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button className="btn">Entrar</button>
      </form>
    </main>
  );
};

export default LoginAdmin;
