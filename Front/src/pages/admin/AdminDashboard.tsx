import React from "react";

const AdminDashboard: React.FC = () => {
  return (
    <main className="dashboard">
      <h2>Panel del administrador</h2>

      <div className="dashboard-grid">
        <a href="/admin/empleados" className="card">Gestión de empleados</a>
        <a href="/empleados/productos" className="card">Gestión de productos</a>
        <a href="/empleados/ingredientes" className="card">Gestión de ingredientes</a>
        <a href="/admin/pedidos" className="card">Pedidos</a>
        <a href="/admin/beneficios" className="card">Beneficios</a>
        <a href="/admin/registro-global" className="card">Registro horario global</a>
      </div>
    </main>
  );
};

export default AdminDashboard;
