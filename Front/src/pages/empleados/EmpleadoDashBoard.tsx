import React from "react";

const EmpleadoDashboard: React.FC = () => {
  return (
    <main className="dashboard">
      <h2>Panel del empleado</h2>

      <div className="dashboard-grid">
        <a href="/empleados/productos" className="card">Gestión de productos</a>
        <a href="/empleados/ingredientes" className="card">Gestión de ingredientes</a>
        <a href="/empleados/pedidos" className="card">Pedidos</a>
        <a href="/empleados/registro-horas" className="card">Registro horario</a>
      </div>
    </main>
  );
};

export default EmpleadoDashboard;
