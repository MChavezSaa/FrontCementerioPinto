import { Cementerio } from './Cementerio';

export interface Terreno {
    id_terreno: number;
    nombre_Terreno:string;
    capacidad_Terreno: number;
    estado_Terreno: boolean;
    cementerio: Cementerio;
}