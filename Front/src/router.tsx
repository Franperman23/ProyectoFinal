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
  }
]);

export default router;
