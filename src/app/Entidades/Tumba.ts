import { Cliente } from './Cliente';
import { Funcionario } from './Funcionario';
import { Patio } from './Patio';
import { TipoTumba } from './TipoTumba';

export class Tumba {    
    id_tumba: number;
    numero_Tumba: number;
    valor_Tumba: number;
    //estado_Disponible: Boolean;
    orientacion_Tumba: number;
    largo: number;
    ancho: number;
    funcionario: Funcionario;
    patio: Patio;
    tipo_Tumba: TipoTumba;
    cliente: Cliente;
    estado_Tumba: string;    
}