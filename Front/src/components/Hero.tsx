import React, { useEffect, useState } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  text?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Tradición hecha arte",
  subtitle = "Pastelería artesanal desde 1980",
  text = "Repostería artesanal con ingredientes selectos y un toque de elegancia en cada creación."
}) => {
  const slides = [
    "/img index/hero1.png",
    "/img index/hero2.png",
    "/img index/hero3.png",
    "/img index/hero4.png",
    "/img index/hero5.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      <div className="slider-container">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url('${src}')` }}
          ></div>
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-tag">{subtitle}</p>
        <h2>{title}</h2>
        <p className="hero-text">{text}</p>

        {/* BOTÓN FIJO PARA TODAS LAS PÁGINAS */}
        <a href="/productos" className="btn">Descubrir productos</a>
      </div>
    </section>
  );
};

export default Hero;
