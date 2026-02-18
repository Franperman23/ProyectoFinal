import { createContext, useEffect, useState } from "react";

export const CartContext = createContext<any>(null);

// Proveedor del carrito: envuelve toda la aplicación y permite acceder al carrito desde cualquier parte.
export function CartProvider({ children }: { children: React.ReactNode }) {

  // Estado del carrito. Se inicializa leyendo localStorage.
  // Si existe "carrito", lo parseo; si no, empiezo con un array vacío.
  const [cart, setCart] = useState<any[]>(() => {
    const saved = localStorage.getItem("carrito");
    return saved ? JSON.parse(saved) : [];
  });

  // Cada vez que cambia el carrito, lo guardo en localStorage.
  // Esto permite que el carrito persista aunque el usuario recargue la página.
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  // FUNCIÓN PARA AÑADIR PRODUCTOS AL CARRITO
  const addToCart = (product: any) => {
    setCart((prev) => {
      // Compruebo si el producto ya existe en el carrito.
      const existe = prev.find((item) => item.id === product.id);

      // Si existe, aumento la cantidad.
      if (existe) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      // Si no existe, lo añado con cantidad = 1.
      return [...prev, { ...product, cantidad: 1 }];
    });
  };

  // FUNCIÓN PARA ELIMINAR UN PRODUCTO DEL CARRITO
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // FUNCIÓN PARA VACIAR EL CARRITO COMPLETO
  const clearCart = () => setCart([]);

  // CÁLCULO DEL TOTAL DEL CARRITO
  // Recorro todos los productos y sumo precio * cantidad.
  const total = cart.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    // Proveedor del contexto: expone el carrito y todas las funciones necesarias.
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
