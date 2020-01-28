import { Derecho } from './Derecho';

export class pagoDerecho {
      id_PagosDerecho: number;
      fechaPago_Derecho: Date;
      fechaVencimiento_Derecho: Date;
      valorCuota_Derecho: number;
      estadoCuota_Derecho: boolean;
      derecho: Derecho;
}