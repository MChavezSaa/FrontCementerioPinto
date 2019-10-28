import { Derecho } from './Derecho';

export interface pagoDerecho {
      id_PagosDerecho: number;
      fechaPago_Derecho:Date;      
      valorCuota_Derecho:number;      
      Derecho:Derecho;
}