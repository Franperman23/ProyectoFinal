export type CrearProductoDTO = {
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  receta: string;
  tipo: "Reposteria" | "Bolleria" | "Panaderia" | "Tartas personalizadas" | "Pasteleria para eventos";
  imagen: string;
};
