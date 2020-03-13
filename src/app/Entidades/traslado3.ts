import { Difunto } from './Difunto';
import { Contrato } from './Contrato';

export class traslado3 {
    id_Traslado2: number;
    nombreC_Solicitante: string;
    rut_Solicitante: string;
    direccion_Solicitante: string;
    fecha_Traslado: Date;
    tipoDeCambio : string;//interno-externo
    lugarviejo: string;
    lugarnuevo: Contrato;
    observaciones: string;
    difunto: Difunto;
  
}