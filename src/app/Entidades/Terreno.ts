import { Cementerio } from './Cementerio';

export interface Terreno {
    id_terreno: number;
    capacidad_Terreno: number;
    cementerio: Cementerio;
    estado_Terreno: boolean;
    nombre_Terreno:string;
    
    
}