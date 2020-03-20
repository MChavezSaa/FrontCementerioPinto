import { Funcionario } from './Funcionario';
import { Difunto } from './Difunto';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';

export class Traslado {

    id_Traslado: number;
    nombreC_Solicitante:string;
    rut_Solicitante:string;
    direccion_Solicitante:string;
    fecha_Traslado:Date;
    tipoDeCambio:string;
    lugarviejo:string;
    lugarnuevo:string;
    observaciones:string;    
    difunto: Difunto;   
    
    constructor(id: number, NCS: string, RC: string, DS: string, 
        Ftraslado: Date, TC: string, LV: string, LN: string, Obs: string, dif: Difunto){
        this.id_Traslado = id;
        this.nombreC_Solicitante = NCS;
        this.rut_Solicitante = RC;
        this.direccion_Solicitante = DS;
        this.fecha_Traslado=  Ftraslado;
        this.tipoDeCambio = TC;
        this.lugarviejo = LV;
        this.lugarnuevo =LN;
        this.observaciones = Obs;
        this.difunto = dif;

    }
}

