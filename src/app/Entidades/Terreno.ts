import { Cementerio } from './Cementerio';

export interface Terreno {
    id_terreno: number;
    capacidad_Terreno: number;
    estado_Terreno: boolean;
    cementerio: Cementerio;
}