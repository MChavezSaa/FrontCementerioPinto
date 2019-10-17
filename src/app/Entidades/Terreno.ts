import { Cementerio } from './Cementerio';

export interface Terreno {
    id_terreno: number;
    nombre_Terreno:String;
    capacidad_Terreno: number;
    estado_Terreno: boolean;
    cementerio: Cementerio;
}