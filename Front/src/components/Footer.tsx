import React from "react";

// Componente Footer: aparece en todas las páginas públicas de la web.
// Contiene información de contacto, redes sociales, ubicación y horario.
const Footer: React.FC = () => {
  return (
    <footer className="footer">

      {/* Contenedor principal del footer */}
      <div className="footer-inner">

        {/* Columna 1: Marca y redes sociales */}
        <div className="footer-column footer-brand">

          {/* Logo de la pastelería */}
          <img src="img general/logo.png" alt="Pastelería Lama" className="footer-logo" />

          {/* Iconos de redes sociales */}
          <div className="footer-socials">

            {/* Enlace a Instagram con apertura en nueva pestaña */}
            <a href="https://www.instagram.com/pastelerialama/" target="_blank" rel="noopener noreferrer">
              <img src="/img general/instagram.png" alt="Instagram Pastelería Lama" />
            </a>

            {/* Enlace a Facebook */}
            <a href="https://www.facebook.com/Lama-Pasteler%C3%ADa-panader%C3%ADa-y-bolleria-100054487568378/" target="_blank" rel="noopener noreferrer">
              <img src="/img general/facebook.png" alt="Facebook Pastelería Lama" />
            </a>
          </div>
        </div>

        {/* Columna 2: Información de contacto */}
        <div className="footer-column">
          <h4>Contacto</h4>
          <p>📞 926 89 67 74</p>
          <p>📱 660 87 84 19</p>
          <p>📧 info@pastelerialama.es</p>
        </div>

        {/* Columna 3: Dirección física */}
        <div className="footer-column">
          <h4>Dónde estamos</h4>
          <p>📍 Carretera de Urda 1</p>
          <p>📌 Villarrubia de los Ojos</p>
          <p>🏷️ 13670 (Ciudad Real)</p>
        </div>

        {/* Columna 4: Horario de apertura */}
        <div className="footer-column">
          <h4>Horario</h4>
          <p>Lunes a Viernes</p>
          <p>🕒 10:00 a 14:30</p>
          <p>🕒 17:00 a 20:00</p>
          <p>Sábados</p>
          <p>🕒 10:00 a 14:30</p>
        </div>
      </div>

      {/* Zona inferior del footer: enlaces legales y copyright */}
      <div className="footer-legal">
        <p>
          {/* Enlaces legales (sin funcionalidad real en este proyecto) */}
          <a href="#">Aviso Legal</a> | <a href="#">Política de Cookies</a> | <a href="#">Política de Privacidad</a>
        </p>

        {/* Derechos de autor */}
        <p>Copyright © 2026 Pastelería y Panadería Lama</p>
      </div>
    </footer>
  );
};

export default Footer;
