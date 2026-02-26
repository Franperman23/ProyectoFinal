import React, { useContext } from "react";
import "../../styles/empleados.css";
import { AuthContext } from "../../context/AuthContext";

export default function EmpleadoLayout({ children }: { children: React.ReactNode }) {
  const { logout } = useContext(AuthContext);

  return (
    <div className="admin-layout">
      
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Empleado</h2>

        <nav>
          <a href="/empleados">Dashboard</a>
          <a href="/empleados/productos">Productos</a>
          <a href="/empleados/ingredientes">Ingredientes</a>
          <a href="/empleados/pedidos">Pedidos</a>
          <a href="/empleados/registro-horas">Registro horas</a>
          <a href="/empleados/mensajes">Mensajes</a>
        </nav>
      </aside>

      <div className="admin-main">

        <header className="admin-navbar">
          <span>Panel del empleado</span>

          <button className="btn small" onClick={logout}>
            Cerrar sesión
          </button>
        </header>

        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}
