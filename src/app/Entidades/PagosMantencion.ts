import { CuotasMantencion } from './CuotasMantencion';


export class pagosMantencion {

    id_PagosMantencion: number;
    fechaPago_Mantencion: Date;
    fechaVencimiento_Mantencion: Date;
    valorCuota_Mantencion: number;
    estadoCuota_Mantencion: Boolean;
    id_cuotas_mantencion: CuotasMantencion;
}