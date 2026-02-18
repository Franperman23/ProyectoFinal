import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Especialidades from "../components/Especialidades";
import Why from "../components/Why";
import Pedidos from "../components/Pedidos";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    // Contenedor principal de la página de inicio.
    <div className="home-page">
      {/* Barra de navegación superior */}
      <Navbar />

      {/* Sección principal con imagen destacada y texto */}
      <Hero />

      {/* Sección de especialidades destacadas */}
      <Especialidades />

      {/* Sección explicando por qué elegir la pastelería */}
      <Why />

      {/* Sección de pedidos destacados o CTA */}
      <Pedidos />

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Home;
