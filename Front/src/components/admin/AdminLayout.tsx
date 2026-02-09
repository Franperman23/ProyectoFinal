import React from "react";
import "../../styles/admin.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin</h2>

        <nav>
          <a href="/admin">Dashboard</a>
          <a href="/admin/empleados">Empleados</a>
          <a href="/empleados/productos">Productos</a>
          <a href="/empleados/ingredientes">Ingredientes</a>
          <a href="/admin/pedidos">Pedidos</a>
          <a href="/admin/beneficios">Beneficios</a>
          <a href="/admin/registro-global">Registro horario</a>
        </nav>
      </aside>

      <div className="admin-main">
        <header className="admin-navbar">
          <span>Panel de administración</span>
          <button className="btn small">Cerrar sesión</button>
        </header>

        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}
