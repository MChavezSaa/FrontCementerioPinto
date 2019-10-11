import { Cliente } from '../empleado/empleado-content/e-clientes/cliente';

export interface Derecho{
    id_Derecho: number;
    fecha_Inscripcion_Derecho: Date;
    fecha_Pago_Derecho: Date;
    fecha_Vencimiento_Derecho: Date;
    valor_Cuota_Derecho: number;
    numero_Cuotas_Derecho: number;
    estadoDerecho: boolean;
    cliente: Cliente;
}