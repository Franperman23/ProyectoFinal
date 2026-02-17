import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./router/ProtectedRoute";

// PÁGINAS
import Home from "./pages/Home";
import Reposteria from "./pages/Reposteria";
import Panaderia from "./pages/Panaderia";
import Contacto from "./pages/Contacto";
import SobreNosotros from "./pages/SobreNosotros";
import Bolleria from "./pages/Bolleria";
import TartasPersonalizadas from "./pages/TartasPersonalizadas";
import PasteleriaEventos from "./pages/PasteleriaEventos";
import DescubrirProductos from "./pages/DescubrirProductos";
import Carrito from "./pages/Carrito";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

// EMPLEADOS
import EmpleadoDashboard from "./pages/empleados/EmpleadoDashBoard";
import Productos from "./pages/empleados/Productos";
import ProductosCrear from "./pages/empleados/ProductosCrear";
import ProductosEditar from "./pages/empleados/ProductosEditar";
import Ingredientes from "./pages/empleados/Ingredientes";
import IngredientesCrear from "./pages/empleados/IngredientesCrear";
import IngredientesEditar from "./pages/empleados/IngredientesEditar";
import Pedidos from "./pages/empleados/Pedidos";
import RegistroHoras from "./pages/empleados/RegistroHoras";
import Mensajes from "./pages/empleados/Mensajes"; 

// ADMIN
import AdminDashboard from "./pages/admin/AdminDashboard";
import Empleados from "./pages/admin/Empleados";
import EmpleadosCrear from "./pages/admin/EmpleadosCrear";
import EmpleadosEditar from "./pages/admin/EmpleadosEditar";
import PedidosAdmin from "./pages/admin/PedidosAdmin";
import Beneficios from "./pages/admin/Beneficios";
import RegistroGlobal from "./pages/admin/RegistroGlobal";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/reposteria", element: <Reposteria /> },
  { path: "/panaderia", element: <Panaderia /> },
  { path: "/contacto", element: <Contacto /> },
  { path: "/sobre-nosotros", element: <SobreNosotros /> },
  { path: "/bolleria", element: <Bolleria /> },
  { path: "/tartas-personalizadas", element: <TartasPersonalizadas /> },
  { path: "/pasteleria-eventos", element: <PasteleriaEventos /> },
  { path: "/descubrir-productos", element: <DescubrirProductos /> },
  { path: "/cesta", element: <Carrito /> },
  { path: "/login", element: <Login /> },
  { path: "/registro", element: <Registro /> },

  // EMPLEADOS
  {
    path: "/empleados",
    element: (
      <ProtectedRoute role="EMPLEADO">
        <EmpleadoDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/empleados/productos",
    element: (
      <ProtectedRoute role="EMPLEADO">
        <Productos />
      </ProtectedRoute>
    ),
  },
  {
    path: "/empleados/productos/crear",
    element: (
      <ProtectedRoute role="EMPLEADO">
        <ProductosCrear />
      </ProtectedRoute>
    ),
  },
  {
    path: "/empleados/productos/editar/:id",
    element: (
      <ProtectedRoute role="EMPLEADO">
        <ProductosEditar />
      </ProtectedRoute>
    ),
  },
  {
    path: "/empleados/ingredientes",
    element: (
      <ProtectedRoute role="EMPLEADO">
        <Ingredientes />
      </ProtectedRoute>
    ),
  },
  {
    path: "/empleados/ingredientes/crear",
    element: (
      <ProtectedRoute role="EMPLEADO">
        <IngredientesCrear />
      </ProtectedRoute>
    ),
  },
  {
    path: "/empleados/ingredientes/editar/:id",
    element: (
      <ProtectedRoute role="EMPLEADO">
        <IngredientesEditar />
      </ProtectedRoute>
    ),
  },
  {
    path: "/empleados/pedidos",
    element: (
      <ProtectedRoute role="EMPLEADO">
        <Pedidos />
      </ProtectedRoute>
    ),
  },
  {
    path: "/empleados/registro-horas",
    element: (
      <ProtectedRoute role="EMPLEADO">
        <RegistroHoras />
      </ProtectedRoute>
    ),
  },

  {
    path: "/empleados/mensajes",
    element: (
      <ProtectedRoute role="EMPLEADO">
        <Mensajes />
      </ProtectedRoute>
    ),
  },

  // ADMIN
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="ADMIN">
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/empleados",
    element: (
      <ProtectedRoute role="ADMIN">
        <Empleados />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/empleados/crear",
    element: (
      <ProtectedRoute role="ADMIN">
        <EmpleadosCrear />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/empleados/editar/:id",
    element: (
      <ProtectedRoute role="ADMIN">
        <EmpleadosEditar />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/pedidos",
    element: (
      <ProtectedRoute role="ADMIN">
        <PedidosAdmin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/beneficios",
    element: (
      <ProtectedRoute role="ADMIN">
        <Beneficios />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/registro-global",
    element: (
      <ProtectedRoute role="ADMIN">
        <RegistroGlobal />
      </ProtectedRoute>
    ),
  },
]);

export default router;
