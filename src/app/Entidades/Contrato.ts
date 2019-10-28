import { Cementerio } from './Cementerio';
import { Terreno } from './Terreno';
import { Patio } from './Patio';
import { Tumba } from './Tumba';
import { TipoTumba } from './TipoTumba';
import { Derecho } from './Derecho';
import { Cliente } from './Cliente';

export interface Contrato{
    id_contrato: number;
    cementerio: Cementerio;
    terreno: Terreno;
    patio: Patio;
    tumba: Tumba;
    tipoTumba: TipoTumba;
    derecho: Derecho;
    cliente: Cliente;
    //pagoDerecho
}