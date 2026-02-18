import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Defino las props opcionales del componente Hero.
// Esto permite reutilizar el componente con distintos textos.
interface HeroProps {
  title?: string;
  subtitle?: string;
  text?: string;
}

// Componente Hero: es el slider principal de la página de inicio.
// Tiene valores por defecto para title, subtitle y text.
const Hero: React.FC<HeroProps> = ({
  title = "Tradición hecha arte",
  subtitle = "Pastelería artesanal desde 1980",
  text = "Repostería artesanal con ingredientes selectos y un toque de elegancia en cada creación."
}) => {

  // Array con las imágenes del slider.
  // Se recorren automáticamente cada 3.5 segundos.
  const slides = [
    "img index/hero1.png",
    "img index/hero2.png",
    "img index/hero3.png",
    "img index/hero4.png",
    "img index/hero5.png",
  ];

  // Estado que guarda el índice de la imagen actual.
  const [current, setCurrent] = useState(0);

  // useEffect que crea un intervalo para cambiar de imagen automáticamente.
  useEffect(() => {
    const interval = setInterval(() => {
      // Avanza al siguiente slide y vuelve al primero al llegar al final.
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    // Limpieza del intervalo cuando el componente se desmonta.
    return () => clearInterval(interval);
  }, []); // Solo se ejecuta una vez al montar el componente.

  return (
    // Contenedor principal del slider.
    <section className="hero-slider">

      {/* Contenedor de las imágenes del slider */}
      <div className="slider-container">
        {slides.map((src, index) => (
          <div
            key={index}
            // Clase "active" solo para la imagen visible.
            className={`slide ${index === current ? "active" : ""}`}
            // Fondo dinámico según la imagen actual.
            style={{ backgroundImage: `url('${src}')` }}
          ></div>
        ))}
      </div>

      {/* Capa oscura encima de las imágenes para mejorar la legibilidad del texto */}
      <div className="hero-overlay"></div>

      {/* Contenido textual del hero */}
      <div className="hero-content">
        <p className="hero-tag">{subtitle}</p>
        <h2>{title}</h2>
        <p className="hero-text">{text}</p>

        {/* Botón fijo que lleva a la sección de productos */}
        <Link to="/descubrir-productos" className="btn">
          Descubrir productos
        </Link>
      </div>
    </section>
  );
};

export default Hero;
