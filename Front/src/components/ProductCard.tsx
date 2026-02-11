import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Producto({ id, nombre, precio, imagen }: any) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="producto">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="precio">{precio.toFixed(2)} €</p>

      <button
        className="btn"
        onClick={() => addToCart({ id, nombre, precio, imagen })}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
