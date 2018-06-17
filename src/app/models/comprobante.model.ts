import { Producto } from "./producto.model";

export interface Comprobante {
    id?: number;
    tipo?: string;
    serie?: string;
    numero?: number;
    cliente?: string;
    importe?: number;
    productos?:Producto;
  }
  