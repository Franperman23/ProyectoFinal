import AdminLayout from "../../components/admin/AdminLayout.tsx";

const AdminDashboard: React.FC = () => {
  return (
    <AdminLayout>
      <h2>Panel del administrador</h2>

      <div className="dashboard-grid">
        <a href="/admin/empleados" className="admin-btn">Gestión de empleados</a>
        <a href="/empleados/productos" className="admin-btn">Gestión de productos</a>
        <a href="/empleados/ingredientes" className="admin-btn">Gestión de ingredientes</a>
        <a href="/admin/pedidos" className="admin-btn">Pedidos</a>
        <a href="/admin/beneficios" className="admin-btn">Beneficios</a>
        <a href="/admin/registro-global" className="admin-btn">Registro horario global</a>
      </div>

      {/* LOGO */}
      <div className="admin-bottom-logo">
        <img src="/img general/logo.png" alt="Logo empresa" />
      </div>

    </AdminLayout>
  );
};

export default AdminDashboard;
