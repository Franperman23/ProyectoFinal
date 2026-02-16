import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { CartContext } from "../context/CartContext";
import type { ListarProductoDTO } from "../types/ListarProductoDTO";

const DescubrirProductos: React.FC = () => {
  const [listaProductos, setListaProductos] = React.useState<ListarProductoDTO[]>([]);
  const { addToCart } = useContext(CartContext);

  async function fetchProductos() {
    try {
      const response = await fetch("http://localhost:8080/api/productos");

      if (!response.ok) {
        throw new Error("Error al cargar los productos");
      }

      const data: ListarProductoDTO[] = await response.json();

      // -----------------------------
      // EJEMPLOS FIJOS — TARTAS PERSONALIZADAS
      // -----------------------------
      const tartasEjemplo: ListarProductoDTO[] = [
        {
          id: 9001,
          nombre: "Tarta Doraemon",
          descripcion: "Diseño divertido inspirado en el famoso gato cósmico.",
          precio: 0,
          stock: 0,
          tipo: "Tartas personalizadas",
          imagen: "img tartas personalizadas/card1.png",
        },
        {
          id: 9002,
          nombre: "Tarta de fútbol",
          descripcion: "Perfecta para los amantes del deporte rey.",
          precio: 0,
          stock: 0,
          tipo: "Tartas personalizadas",
          imagen: "img tartas personalizadas/card2.png",
        },
        {
          id: 9003,
          nombre: "Tarta Harry Potter",
          descripcion: "Magia, varitas y un diseño digno de Hogwarts.",
          precio: 0,
          stock: 0,
          tipo: "Tartas personalizadas",
          imagen: "img tartas personalizadas/card3.png",
        },
        {
          id: 9004,
          nombre: "Tarta de la selva",
          descripcion: "Animales, hojas y un estilo salvaje y colorido.",
          precio: 0,
          stock: 0,
          tipo: "Tartas personalizadas",
          imagen: "img tartas personalizadas/card4.png",
        },
        {
          id: 9005,
          nombre: "Tarta de princesas",
          descripcion: "Ideal para las pequeñas reinas de la casa.",
          precio: 0,
          stock: 0,
          tipo: "Tartas personalizadas",
          imagen: "img tartas personalizadas/card5.png",
        },
        {
          id: 9006,
          nombre: "Tarta Pocoyó",
          descripcion: "Un diseño tierno y alegre para los más peques.",
          precio: 0,
          stock: 0,
          tipo: "Tartas personalizadas",
          imagen: "img tartas personalizadas/card6.png",
        },
        {
          id: 9007,
          nombre: "Tarta Spiderman",
          descripcion: "Acción, telarañas y el héroe favorito de muchos.",
          precio: 0,
          stock: 0,
          tipo: "Tartas personalizadas",
          imagen: "img tartas personalizadas/card7.png",
        },
        {
          id: 9008,
          nombre: "Tarta Peppa Pig",
          descripcion: "Colorida, adorable y perfecta para cumpleaños infantiles.",
          precio: 0,
          stock: 0,
          tipo: "Tartas personalizadas",
          imagen: "img tartas personalizadas/card8.png",
        },
      ];

      // -----------------------------
      // EJEMPLOS FIJOS — PASTELERÍA PARA EVENTOS
      // -----------------------------
      const eventosEjemplo: ListarProductoDTO[] = [
        {
          id: 9101,
          nombre: "Boda elegante",
          descripcion: "Tarta de varios pisos con decoración floral.",
          precio: 0,
          stock: 0,
          tipo: "Pasteleria para eventos",
          imagen: "img pasteleria eventos/card1.png",
        },
        {
          id: 9102,
          nombre: "Comunión clásica",
          descripcion: "Diseños suaves y elegantes para un día especial.",
          precio: 0,
          stock: 0,
          tipo: "Pasteleria para eventos",
          imagen: "img pasteleria eventos/card2.png",
        },
        {
          id: 9103,
          nombre: "Baby shower",
          descripcion: "Colores pastel y detalles tiernos.",
          precio: 0,
          stock: 0,
          tipo: "Pasteleria para eventos",
          imagen: "img pasteleria eventos/card3.png",
        },
        {
          id: 9104,
          nombre: "Fiesta temática",
          descripcion: "Diseños personalizados según la temática del evento.",
          precio: 0,
          stock: 0,
          tipo: "Pasteleria para eventos",
          imagen: "img pasteleria eventos/card4.png",
        },
        {
          id: 9105,
          nombre: "Mesas dulces",
          descripcion: "Decoración completa con dulces variados.",
          precio: 0,
          stock: 0,
          tipo: "Pasteleria para eventos",
          imagen: "img pasteleria eventos/card5.png",
        },
        {
          id: 9106,
          nombre: "Eventos corporativos",
          descripcion: "Diseños sobrios y elegantes para empresas.",
          precio: 0,
          stock: 0,
          tipo: "Pasteleria para eventos",
          imagen: "img pasteleria eventos/card6.png",
        },
        {
          id: 9107,
          nombre: "Cumpleaños adultos",
          descripcion: "Diseños modernos y personalizados.",
          precio: 0,
          stock: 0,
          tipo: "Pasteleria para eventos",
          imagen: "img pasteleria eventos/card7.png",
        },
        {
          id: 9108,
          nombre: "Cumpleaños infantiles",
          descripcion: "Colores vivos y personajes favoritos.",
          precio: 0,
          stock: 0,
          tipo: "Pasteleria para eventos",
          imagen: "img pasteleria eventos/card8.png",
        },
      ];

      // -----------------------------
      // UNIR EJEMPLOS + PRODUCTOS DEL BACKEND
      // -----------------------------
      const todo = [...tartasEjemplo, ...eventosEjemplo, ...data];

      setListaProductos(todo);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    }
  }

  React.useEffect(() => {
    fetchProductos();
  }, []);

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
            {listaProductos.map((producto) => (
              <article className="card" key={producto.id}>
                <div className="card-image">
                  <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
                </div>

                <div className="card-body">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>

                  {producto.precio > 0 && (
                    <p className="price">{producto.precio.toFixed(2)} €</p>
                  )}

                  <button
                    className="btn add-cart"
                    onClick={() => addToCart(producto)}
                  >
                    Añadir al carrito
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DescubrirProductos;
