import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: "ADMIN" | "EMPLEADO" | "CLIENTE";
}) {
  const { usuario, loading } = useContext(AuthContext);

  // Mientras carga el usuario → no redirigir
  if (loading) return null;

  // Si no está logueado → fuera
  if (!usuario) return <Navigate to="/login" />;

  // ADMIN → acceso total
  if (usuario.rol === "ADMIN") return children;

  // EMPLEADO → empleados + clientes
  if (usuario.rol === "EMPLEADO") {
    if (role === "ADMIN") return <Navigate to="/" />;
    return children;
  }

  // CLIENTE → solo clientes
  if (usuario.rol === "CLIENTE") {
    if (role && role !== "CLIENTE") return <Navigate to="/" />;
    return children;
  }

  return <Navigate to="/" />;
}
