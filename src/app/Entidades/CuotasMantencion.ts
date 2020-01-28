import { Cliente } from './Cliente';

export class CuotasMantencion {


    id_Cuotas_Mantencion: number;
    fecha_Pago_CM: Date;
    fecha_Vencimiento_CM: Date;
    numero_Cuotas_CM: number;
    valor_Cuota_CM: number;
    cliente: Cliente;
}