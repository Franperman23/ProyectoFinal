import { createBrowserRouter } from "react-router-dom";

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

import LoginEmpleado from "./pages/empleados/LoginEmpleado";
import EmpleadoDashBoard from "./pages/empleados/EmpleadoDashboard";
import Productos from "./pages/empleados/Productos";
import ProductosCrear from "./pages/empleados/ProductosCrear";
import ProductosEditar from "./pages/empleados/ProductosEditar";
import Ingredientes from "./pages/empleados/Ingredientes";
import IngredientesCrear from "./pages/empleados/IngredientesCrear";
import IngredientesEditar from "./pages/empleados/IngredientesEditar";
import Pedidos from "./pages/empleados/Pedidos";
import RegistroHoras from "./pages/empleados/RegistroHoras";

import LoginAdmin from "./pages/admin/LoginAdmin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Empleados from "./pages/admin/Empleados";
import EmpleadosCrear from "./pages/admin/EmpleadosCrear";
import EmpleadosEditar from "./pages/admin/EmpleadosEditar";
import PedidosAdmin from "./pages/admin/PedidosAdmin";
import Beneficios from "./pages/admin/Beneficios";
import RegistroGlobal from "./pages/admin/RegistroGlobal";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reposteria",
    element: <Reposteria />,
  },
  {
    path: "/panaderia",
    element: <Panaderia />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },

  {
    path: "/sobre-nosotros",
    element: <SobreNosotros />,
  },

  {
    path: "/bolleria",
    element: <Bolleria />,
  },

  {
    path: "/tartas-personalizadas",
    element: <TartasPersonalizadas />,
  },

  {
    path: "/pasteleria-eventos",
    element: <PasteleriaEventos />,
  },

  {
    path: "/descubrir-productos",
    element: <DescubrirProductos />,
  },

  {
    path: "/cesta",
    element: <Carrito />,
  },

  {
    path: "/empleados/login",
    element: <LoginEmpleado />,
  },

  {
    path: "/empleados",
    element: <EmpleadoDashBoard />,
  },

  {
    path: "/empleados/productos",
    element: <Productos />,
  },

  {
    path: "/empleados/productos/crear",
    element: <ProductosCrear />,
  },

  {
    path: "/empleados/productos/editar/:id",
    element: <ProductosEditar />,
  },

  {
    path: "/empleados/ingredientes",
    element: <Ingredientes />,
  },

  {
    path: "/empleados/ingredientes/crear",
    element: <IngredientesCrear />,
  },

  {
    path: "/empleados/ingredientes/editar/:id",
    element: <IngredientesEditar />,
  },

  {
    path: "/empleados/pedidos",
    element: <Pedidos />,
  },

  {
    path: "/empleados/registro-horas",
    element: <RegistroHoras />,
  },

  {
    path: "/admin/login",
    element: <LoginAdmin />,
  },

  {
    path: "/admin",
    element: <AdminDashboard />,
  },

  {
    path: "/admin/empleados",
    element: <Empleados />,
  },

  {
    path: "/admin/empleados/crear",
    element: <EmpleadosCrear />,
  },

  {
    path: "/admin/empleados/editar/:id",
    element: <EmpleadosEditar />,
  },

  {
    path: "/admin/pedidos",
    element: <PedidosAdmin />,
  },

  {
    path: "/admin/beneficios",
    element: <Beneficios />,
  },

  {
    path: "/admin/registro-global",
    element: <RegistroGlobal />,
  }
]);

export default router;
