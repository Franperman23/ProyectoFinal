import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";

const EmpleadoDashboard: React.FC = () => {
  return (
    <EmpleadoLayout>
      <h2>Panel del empleado</h2>

      <div className="dashboard-grid">
        <a href="/empleados/productos" className="card">
          Gestión de productos
        </a>

        <a href="/empleados/ingredientes" className="card">
          Gestión de ingredientes
        </a>

        <a href="/empleados/pedidos" className="card">
          Pedidos
        </a>

        <a href="/empleados/registro-horas" className="card">
          Registro horario
        </a>

        <a href="/empleados/mensajes" className="card">
          Mensajes de contacto
        </a>
      </div>
    </EmpleadoLayout>
  );
};

export default EmpleadoDashboard;
