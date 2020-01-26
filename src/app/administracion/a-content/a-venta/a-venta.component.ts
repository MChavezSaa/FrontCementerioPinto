import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/Entidades/Contrato';
import { ContratoDos } from 'src/app/Entidades/ContratoDos';
import { BackendServiceService } from 'src/app/Service/backend-service.service';

@Component({
  selector: 'app-a-venta',
  templateUrl: './a-venta.component.html',
  styleUrls: ['./a-venta.component.css']
})
export class AVentaComponent implements OnInit {

  contratoList2: Contrato[] = [];
  contratoList3: ContratoDos[] = [];
  contratoModal : ContratoDos;
  searchText2: string;
  constructor(private service: BackendServiceService) { }

  ngOnInit() {
    this.service.getContrato().subscribe(contratoList1 => this.contratoList2 = contratoList1);
    this.service.getContrato2().subscribe(contratoList1 => this.contratoList3 = contratoList1);
  }

  cargarContrato(id: number){
    this.contratoModal=null;
    this.service.getContrato2ID(id).subscribe(contrato2 => this.contratoModal = contrato2);    
  }
  getNombreCLiente(){
    return this.contratoModal.cliente.nombres_Cliente;
  }
  getApellidos(): string {
    return this.contratoModal.cliente.apellidoP_Cliente+" "+this.contratoModal.cliente.apellidoM_Cliente;
  }
  getTelefono(): string {
    return this.contratoModal.cliente.telefono_Cliente+"";
  }
  getDireccion(): string {
    return this.contratoModal.cliente.direccion_Cliente;
  }

  /*
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
    tumba: Tumba;
    tipoTumba: TipoTumba;
    cliente: Cliente;
    funcionario:Funcionario;
    derecho: Derecho;
  */

}
