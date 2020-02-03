import { Cementerio } from './Cementerio';
import { Terreno } from './Terreno';
import { Patio } from './Patio';
import { Tumba } from './Tumba';
import { TipoTumba } from './TipoTumba';
import { Derecho } from './Derecho';
import { Cliente } from './Cliente';
import { Funcionario } from './Funcionario';

export class ContratoDos{
    id_contrato2: number;
    fecha_Ingreso_Venta: Date;
    fecha_Pago: Date;
    medio_Pago:string;
    valor_Terreno: number;
    pagoInicial:number;
    n_Cuotas: number;
    VCuotas: number;
    
    cementerio: Cementerio;
    terreno: Terreno;
    patio: Patio;
    tumba: string;
    tipoTumba: TipoTumba;
    cliente: Cliente;
    funcionario:Funcionario;
    derecho: Derecho;
}
