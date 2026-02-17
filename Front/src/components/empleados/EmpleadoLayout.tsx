import React, { useContext } from "react";
import "../../styles/empleados.css";
// Importamos el contexto para acceder a la función logout
import { AuthContext } from "../../context/AuthContext";

export default function EmpleadoLayout({ children }: { children: React.ReactNode }) {
  // Extraemos la función logout del contexto
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
        </nav>
      </aside>

      <div className="admin-main">
        <header className="admin-navbar">
          <span>Panel del empleado</span>
          {/* Añadimos el evento onClick para cerrar sesión */}
          <button className="btn small" onClick={logout}>
            Cerrar sesión
          </button>
        </header>

        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}