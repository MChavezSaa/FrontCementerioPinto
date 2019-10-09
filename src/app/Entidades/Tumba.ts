import { Cliente } from '../empleado/empleado-content/e-clientes/cliente';
import { Funcionario } from './Funcionario';
import { Patio } from './Patio';
import { TipoTumba } from './TipoTumba';

export interface Tumba {
    id_Tumba: number;
    tipo_Tumba: number;
    valor_Tumba: number;
    estado_Disponible: Boolean;
    estado_Tumba: number;
    orientacion_Tumba: number;
    largo: number;
    ancho: number;
    cliente: Cliente;
    funcionario: Funcionario;
    patio: Patio;
    tipotumba: TipoTumba;
}