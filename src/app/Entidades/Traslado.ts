import { Funcionario } from './Funcionario';
import { Difunto } from './Difunto';

export class Traslado {

    id_Traslado: number;
    nombreC_Solicitante:string;
    rut_Solicitante:string;
    direccion_Solicitante:string;
    fecha_Traslado:Date;
    tipoDeCambio:string;//interno-externo
    lugarviejo:string;
    lugarnuevo:string;
    observaciones:string;
    
    difunto: Difunto;    
}