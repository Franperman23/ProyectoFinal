import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
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

        {/* IZQUIERDA: LOGO */}
        <div className="navbar-left">
          <Link to="/">
            <img
              src="/img general/logo.png"
              alt="Logo Pastelería Lama"
              className="logo-img"
            />
          </Link>
        </div>

        {/* CENTRO: NOMBRE */}
        <h1 className="brand-name">
          Pastelería <span>Lama</span>
        </h1>

        {/* SOBRE NOSOTROS */}
        <Link to="/sobre-nosotros" className="sobre-link-center">
          Sobre nosotros
        </Link>

        {/* DERECHA: MENÚ */}
        <nav className="navbar-right">
          <ul className="nav-menu">

            {/* DROPDOWN PASTELERÍA */}
            <li className="dropdown">
              <span>Pastelería</span>
              <ul className="dropdown-menu">
                <li><Link to="/reposteria">Repostería</Link></li>
                <li><Link to="/bolleria">Bollería</Link></li>
                <li><Link to="/tartas-personalizadas">Tartas personalizadas</Link></li>
                <li><Link to="/eventos">Pastelería para eventos</Link></li>
              </ul>
            </li>

            {/* PANADERÍA */}
            <li>
              <Link to="/panaderia">Panadería</Link>
            </li>

            {/* CONTACTO */}
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>

            {/* CESTA */}
            <li>
              <Link to="/cesta">
                <img
                  src="/img general/carrito.png"
                  alt="Cesta de pedidos"
                  className="cesta-icon"
                />
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
