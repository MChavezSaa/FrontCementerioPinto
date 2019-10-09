import { Terreno } from './Terreno';

export interface Patio {
    id_Patio: number;
    capacidad_Patio: number;
    nombre_Patio: string;
    estado_Patio: boolean;
    terreno: Terreno;
}