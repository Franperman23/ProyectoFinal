export type CrearProductoDTO = {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  stock: number;
  receta: string;
  tipo: "Reposteria" | "Bolleria" | "Panaderia" | "Tartas personalizadas" | "Pasteleria para eventos";
};