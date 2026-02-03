import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Especialidades from "../components/Especialidades";
import Why from "../components/Why";
import Pedidos from "../components/Pedidos";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Especialidades />
      <Why />
      <Pedidos />
      <Footer />
    </>
  );
};

export default Home;
