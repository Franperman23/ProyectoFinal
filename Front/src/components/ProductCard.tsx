import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Componente ProductCard (llamado aquí "Producto").
// Representa visualmente un producto individual dentro del catálogo.
// Recibe como props: id, nombre, precio e imagen.
export default function Producto({ id, nombre, precio, imagen }: any) {

  // Obtengo la función addToCart desde el contexto del carrito.
  // Esto permite añadir productos al carrito desde cualquier parte de la aplicación.
  const { addToCart } = useContext(CartContext);

  return (
    // Contenedor visual del producto.
    <div className="producto">

      {/* Imagen del producto */}
      <img src={imagen} alt={nombre} />

      {/* Nombre del producto */}
      <h3>{nombre}</h3>

      {/* Precio formateado a dos decimales */}
      <p className="precio">{precio.toFixed(2)} €</p>

      {/* Botón para añadir el producto al carrito.
          Llama a addToCart pasando un objeto con los datos del producto. */}
      <button
        className="btn"
        onClick={() => addToCart({ id, nombre, precio, imagen })}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
