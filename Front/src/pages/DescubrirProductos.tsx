import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const DescubrirProductos: React.FC = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="Descubrir productos"
          subtitle="Explora todo lo que ofrecemos"
          text="Encuentra panes, dulces, tartas, bollería y creaciones especiales."
        />

        <section className="fullwidth">
          <div className="section-header">
            <h2>Nuestros productos</h2>
            <p>Descubre una selección completa de nuestros mejores productos.</p>
          </div>

          <div className="section-line"></div>

          <div className="grid fade-up">

            {/* ---------------- PANADERÍA (8) ---------------- */}

            {/* 1 */}
            <article className="card">
              <div className="card-image">
                <img src="img panaderia/card1.png" alt="Pan rústico" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan rústico</h3>
                <p>Crujiente y horneado a diario.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 2 */}
            <article className="card">
              <div className="card-image">
                <img src="img panaderia/card2.png" alt="Pan integral" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan integral</h3>
                <p>100% harina integral.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 3 */}
            <article className="card">
              <div className="card-image">
                <img src="img panaderia/card3.png" alt="Pan de semillas" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan de semillas</h3>
                <p>Rico en fibra y sabor.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 4 */}
            <article className="card">
              <div className="card-image">
                <img src="img panaderia/card4.png" alt="Pan de centeno" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan de centeno</h3>
                <p>Sabor intenso y saludable.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 5 */}
            <article className="card">
              <div className="card-image">
                <img src="img panaderia/card5.png" alt="Pan de pueblo" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan de pueblo</h3>
                <p>Tradición y calidad.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 6 */}
            <article className="card">
              <div className="card-image">
                <img src="img panaderia/card6.png" alt="Pan de molde" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Pan de molde</h3>
                <p>Suave y perfecto para tostadas.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 7 */}
            <article className="card">
              <div className="card-image">
                <img src="img panaderia/card7.png" alt="Baguette" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Baguette</h3>
                <p>Clásica y crujiente.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 8 */}
            <article className="card">
              <div className="card-image">
                <img src="img panaderia/card8.png" alt="Chapata" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Chapata</h3>
                <p>Textura aireada y ligera.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* ---------------- REPOSTERÍA (8) ---------------- */}

            {/* 9 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card1.png" alt="Brownie" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Brownie</h3>
                <p>Chocolate intenso.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 10 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card2.png" alt="Tarta de queso" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta de queso</h3>
                <p>Cremosa y suave.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 11 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card3.png" alt="Tarta de limón" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta de limón</h3>
                <p>Fresca y ligera.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 12 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card4.png" alt="Tarta de zanahoria" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta de zanahoria</h3>
                <p>Esponjosa y especiada.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 13 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card5.png" alt="Bizcocho casero" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Bizcocho casero</h3>
                <p>Tradición en cada bocado.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 14 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card6.png" alt="Magdalenas" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Magdalenas</h3>
                <p>Tiernas y esponjosas.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 15 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card7.png" alt="Cookies" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Cookies</h3>
                <p>Crujientes y deliciosas.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 16 */}
            <article className="card">
              <div className="card-image">
                <img src="img reposteria/card8.png" alt="Tarta de chocolate" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta de chocolate</h3>
                <p>Para amantes del cacao.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* ---------------- BOLLERÍA (8) ---------------- */}

            {/* 17 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card1.png" alt="Croissant" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Croissant</h3>
                <p>Mantequilla y sabor francés.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 18 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card2.png" alt="Napolitana de chocolate" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Napolitana de chocolate</h3>
                <p>Rellena y deliciosa.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 19 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card3.png" alt="Ensaimada" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Ensaimada</h3>
                <p>Suave y esponjosa.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 20 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card4.png" alt="Caracola" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Caracola</h3>
                <p>Con pasas y crema.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 21 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card5.png" alt="Caña de crema" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Caña de crema</h3>
                <p>Clásico irresistible.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 22 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card6.png" alt="Donut glaseado" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Donut glaseado</h3>
                <p>Dulce y esponjoso.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 23 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card7.png" alt="Donut chocolate" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Donut chocolate</h3>
                <p>Cobertura intensa.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* 24 */}
            <article className="card">
              <div className="card-image">
                <img src="img bolleria/card8.png" alt="Palmera" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Palmera</h3>
                <p>Crujiente y dulce.</p>
                <button className="btn add-cart">Añadir al carrito</button>
              </div>
            </article>

            {/* ---------------- TARTAS PERSONALIZADAS (8) ---------------- */}

            {/* 25 */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card1.png" alt="Tarta Doraemon" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta Doraemon</h3>
                <p>Diseño divertido y colorido.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 26 */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card2.png" alt="Tarta fútbol" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta fútbol</h3>
                <p>Perfecta para aficionados.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 27 */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card3.png" alt="Tarta Harry Potter" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta Harry Potter</h3>
                <p>Magia en cada detalle.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 28 */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card4.png" alt="Tarta selva" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta selva</h3>
                <p>Animales y naturaleza.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 29 */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card5.png" alt="Tarta princesas" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta princesas</h3>
                <p>Ideal para cumpleaños.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 30 */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card6.png" alt="Tarta Pocoyó" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta Pocoyó</h3>
                <p>Perfecta para peques.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 31 */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card7.png" alt="Tarta Spiderman" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta Spiderman</h3>
                <p>Acción y telarañas.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 32 */}
            <article className="card">
              <div className="card-image">
                <img src="img tartas personalizadas/card8.png" alt="Tarta Peppa Pig" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Tarta Peppa Pig</h3>
                <p>Colorida y adorable.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* ---------------- PASTELERÍA PARA EVENTOS (8) ---------------- */}

            {/* 33 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card1.png" alt="Boda elegante" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Boda elegante</h3>
                <p>Tarta de varios pisos con decoración floral.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 34 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card2.png" alt="Comunión clásica" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Comunión clásica</h3>
                <p>Diseños suaves y elegantes para un día especial.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 35 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card3.png" alt="Baby shower" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Baby shower</h3>
                <p>Colores pastel y detalles tiernos.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 36 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card4.png" alt="Fiesta temática" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Fiesta temática</h3>
                <p>Diseños personalizados según la temática del evento.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 37 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card5.png" alt="Mesas dulces" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Mesas dulces</h3>
                <p>Decoración completa con dulces variados.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 38 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card6.png" alt="Eventos corporativos" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Eventos corporativos</h3>
                <p>Diseños sobrios y elegantes para empresas.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 39 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card7.png" alt="Cumpleaños adultos" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Cumpleaños adultos</h3>
                <p>Diseños modernos y personalizados.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

            {/* 40 */}
            <article className="card">
              <div className="card-image">
                <img src="img pasteleria eventos/card8.png" alt="Cumpleaños infantiles" loading="lazy" />
              </div>
              <div className="card-body">
                <h3>Cumpleaños infantiles</h3>
                <p>Colores vivos y personajes favoritos.</p>
                <button
                  className="btn add-cart"
                  onClick={() => (window.location.href = "/contacto")}
                >
                  Personalizar
                </button>
              </div>
            </article>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DescubrirProductos;
