import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { usuario, logout } = useContext(AuthContext);

  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${hidden ? "navbar-hidden" : ""}`}>
      <div className="navbar-inner">

        {/* LOGO */}
        <div className="navbar-left">
          <Link to="/">
            <img
              src="/img general/logo.png"
              alt="Logo Pastelería Lama"
              className="logo-img"
            />
          </Link>
        </div>

        {/* NOMBRE */}
        <h1 className="brand-name">
          Pastelería <span>Lama</span>
        </h1>

        <Link to="/sobre-nosotros" className="sobre-link-center">
          Sobre nosotros
        </Link>

        {/* MENÚ */}
        <nav className="navbar-right">
          <ul className="nav-menu">

            <li className="dropdown">
              <span>Pastelería</span>
              <ul className="dropdown-menu">
                <li><Link to="/reposteria">Repostería</Link></li>
                <li><Link to="/bolleria">Bollería</Link></li>
                <li><Link to="/tartas-personalizadas">Tartas personalizadas</Link></li>
                <li><Link to="/pasteleria-eventos">Pastelería para eventos</Link></li>
              </ul>
            </li>

            <li><Link to="/panaderia">Panadería</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>

            <li>
              <Link to="/cesta">
                <img
                  src="/img general/carrito.png"
                  alt="Cesta de pedidos"
                  className="cesta-icon"
                />
              </Link>
            </li>

            {/* LOGIN / LOGOUT */}
            {!usuario ? (
              <li>
                <Link to="/login" className="login-btn">
                  Iniciar sesión
                </Link>
              </li>
            ) : (
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
