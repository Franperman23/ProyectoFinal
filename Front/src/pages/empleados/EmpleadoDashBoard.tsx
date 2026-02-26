import React from "react";
import EmpleadoLayout from "../../components/empleados/EmpleadoLayout";

const EmpleadoDashboard: React.FC = () => {
  return (
    <EmpleadoLayout>
      <h2>Panel del empleado</h2>

      <div className="dashboard-grid">
        <a href="/empleados/productos" className="empleado-btn">
          Gestión de productos
        </a>

        <a href="/empleados/ingredientes" className="empleado-btn">
          Gestión de ingredientes
        </a>

        <a href="/empleados/pedidos" className="empleado-btn">
          Pedidos
        </a>

        <a href="/empleados/registro-horas" className="empleado-btn">
          Registro horario
        </a>

        <a href="/empleados/mensajes" className="empleado-btn">
          Mensajes de contacto
        </a>
      </div>

      {/* LOGO */}
      <div className="empleado-bottom-logo">
        <img src="/img general/logo.png" alt="Logo empresa" />
      </div>
    </EmpleadoLayout>
  );
};

export default EmpleadoDashboard;
