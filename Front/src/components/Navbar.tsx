import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Componente Navbar: barra de navegación principal del sitio.
const Navbar: React.FC = () => {

  // Estado que controla si la navbar debe ocultarse al hacer scroll.
  const [hidden, setHidden] = useState(false);

  // Obtengo el usuario actual y la función logout desde el contexto global.
  const { usuario, logout } = useContext(AuthContext);

  // Variable para guardar la última posición del scroll.
  // Se usa para detectar si el usuario está subiendo o bajando.
  let lastScroll = 0;

  // useEffect que añade un listener al scroll para ocultar o mostrar la navbar.
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      // Si el usuario baja y ha pasado 100px, oculto la navbar.
      if (currentScroll > lastScroll && currentScroll > 100) {
        setHidden(true);
      } else {
        // Si sube, la muestro.
        setHidden(false);
      }

      // Actualizo la última posición del scroll.
      lastScroll = currentScroll;
    };

    // Activo el listener.
    window.addEventListener("scroll", handleScroll);

    // Limpio el listener al desmontar el componente.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // La clase "navbar-hidden" se aplica cuando hidden = true.
    <header className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
      <div className="navbar-inner">

        {/* LOGO A LA IZQUIERDA */}
        <div className="navbar-left">
          <Link to="/">
            <img
              src="/img general/logo.png"
              alt="Logo Pastelería Lama"
              className="logo-img"
            />
          </Link>
        </div>

        {/* NOMBRE DE LA MARCA */}
        <h1 className="brand-name">
          Pastelería <span>Lama</span>
        </h1>

        {/* ENLACE CENTRAL */}
        <Link to="/sobre-nosotros" className="sobre-link-center">
          Sobre nosotros
        </Link>

        {/* MENÚ DE NAVEGACIÓN */}
        <nav className="navbar-right">
          <ul className="nav-menu">

            {/* MENÚ DESPLEGABLE DE PASTELERÍA */}
            <li className="dropdown">
              <span>Pastelería</span>
              <ul className="dropdown-menu">
                <li><Link to="/reposteria">Repostería</Link></li>
                <li><Link to="/bolleria">Bollería</Link></li>
                <li><Link to="/tartas-personalizadas">Tartas personalizadas</Link></li>
                <li><Link to="/pasteleria-eventos">Pastelería para eventos</Link></li>
              </ul>
            </li>

            {/* ENLACES NORMALES */}
            <li><Link to="/panaderia">Panadería</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>

            {/* ICONO DE LA CESTA */}
            <li>
              <Link to="/cesta">
                <img
                  src="/img general/carrito.png"
                  alt="Cesta de pedidos"
                  className="cesta-icon"
                />
              </Link>
            </li>

            {/* LOGIN / LOGOUT SEGÚN SI HAY USUARIO */}
            {!usuario ? (
              // Si NO hay usuario: mostrar botón de iniciar sesión
              <li>
                <Link to="/login" className="login-btn">
                  Iniciar sesión
                </Link>
              </li>
            ) : (
              // Si hay usuario: mostrar botón de cerrar sesión
              <>
                <li>
                  <button className="btn small" onClick={logout}>
                    Cerrar sesión
                  </button>
                </li>
              </>
            )}

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
