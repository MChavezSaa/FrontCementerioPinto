import { Cementerio } from './Cementerio';
import { Terreno } from './Terreno';
import { Patio } from './Patio';
import { Tumba } from './Tumba';
import { TipoTumba } from './TipoTumba';
import { Derecho } from './Derecho';
import { Cliente } from './Cliente';
import { Funcionario } from './Funcionario';
import { pagoDerecho } from './pagoDerecho';

export class Contrato{
    id_contrato: number;
    fecha_Ingreso_Venta: Date;
    medio_Pago:string;
    valor_Terreno: number;
    pagoInicial:number;
    n_Cuotas: number;
    VCuotas: number;
    perpetuidad: number;
    fecha_Pago: Date;
    cementerio: Cementerio;
    terreno: Terreno;
    patio: Patio;
    tumba: string;
    tipoTumba: TipoTumba;
    cliente: Cliente;
    funcionario:Funcionario;
    estado_contrato: boolean;
}
