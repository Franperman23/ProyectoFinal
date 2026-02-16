export type ListarProductoDTO = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  receta?: string;
  tipo: string;
  imagen: string;
};
