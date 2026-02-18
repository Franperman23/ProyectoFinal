import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Componente que protege rutas según el rol del usuario.
// Recibe:
// - children: el contenido que se mostrará si tiene permiso.
// - role: rol requerido opcional ("ADMIN", "EMPLEADO" o "CLIENTE").
export default function ProtectedRoute({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: "ADMIN" | "EMPLEADO" | "CLIENTE";
}) {
  // Obtengo el usuario y el estado de carga desde el contexto.
  const { usuario, loading } = useContext(AuthContext);

  // Mientras se está comprobando el usuario → no mostrar nada.
  if (loading) return null;

  // Si no hay usuario logueado → redirigir al login.
  if (!usuario) return <Navigate to="/login" />;

  // Si el usuario es ADMIN → acceso total a cualquier ruta.
  if (usuario.rol === "ADMIN") return children;

  // Si es EMPLEADO:
  // - Puede acceder a rutas de empleados y clientes.
  // - No puede acceder a rutas exclusivas de ADMIN.
  if (usuario.rol === "EMPLEADO") {
    if (role === "ADMIN") return <Navigate to="/" />;
    return children;
  }

  // Si es CLIENTE:
  // - Solo puede acceder a rutas de clientes.
  // - Si la ruta requiere otro rol → redirigir.
  if (usuario.rol === "CLIENTE") {
    if (role && role !== "CLIENTE") return <Navigate to="/" />;
    return children;
  }

  // Si por alguna razón el rol no coincide con nada → redirigir al inicio.
  return <Navigate to="/" />;
}
