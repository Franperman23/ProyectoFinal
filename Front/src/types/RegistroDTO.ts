export type RegistroDTO = {
  id: number;
  fecha: string;
  horaEntrada: string;
  horaSalida: string | null;
  horasTrabajadas: number | null;
};