import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/Entidades/Contrato';
import { ContratoDos } from 'src/app/Entidades/ContratoDos';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Tumba } from 'src/app/Entidades/Tumba';

@Component({
  selector: 'app-a-venta',
  templateUrl: './a-venta.component.html',
  styleUrls: ['./a-venta.component.css']
})
export class AVentaComponent implements OnInit {

  contratoList2: Contrato[] = [];
  contratoList3: ContratoDos[] = [];
  contratoModal: ContratoDos;
  tumbasList: Tumba[] = [];
  searchText2: string;
  constructor(private service: BackendServiceService) { }

  ngOnInit() {
    this.service.getContrato().subscribe(contratoList1 => {
      this.contratoList2 = contratoList1
      console.log(this.contratoList2);
    });
    this.service.getContrato2().subscribe(contratoList1 => {
      this.contratoList3 = contratoList1
      console.log(this.contratoList3);
    });
    this.service.getfreeTumbs().subscribe(tumbasList1 => { this.tumbasList = tumbasList1 });
  }

  cargarContrato(id: number) {
    this.contratoModal = null;
    this.service.getContrato2ID(id).subscribe(contrato2 => this.contratoModal = contrato2);
  }
  getNombreCLiente() {
    return this.contratoModal.cliente.nombres_Cliente;
  }
  getApellidos(): string {
    return this.contratoModal.cliente.apellidoP_Cliente + " " + this.contratoModal.cliente.apellidoM_Cliente;
  }
  getTelefono(): string {
    return this.contratoModal.cliente.telefono_Cliente + "";
  }
  getDireccion(): string {
    return this.contratoModal.cliente.direccion_Cliente;
  }
  numerosTumba(contrato: Contrato) {
    if (contrato.tipoTumba.nombretipo_tumba == "Doble") {
      let str = contrato.tumba;
      let tumbas = str.split("-");
      let tumba1;
      let tumba2;
      for (let i = 0; i < this.tumbasList.length; i++) {
        if (this.tumbasList[i].id_tumba == Number(tumbas[0])) {
          tumba1 = this.tumbasList[i];
        }
        if (this.tumbasList[i].id_tumba == Number(tumbas[1])) {
          tumba2 = this.tumbasList[i];
        }
      }
      return tumba1.numero_Tumba + " - " + tumba2.numero_Tumba;
    } else {
      let tumba1;
      for (let i = 0; i < this.tumbasList.length; i++) {
        if (this.tumbasList[i].id_tumba == Number(contrato.tumba)) {
          tumba1 = this.tumbasList[i];
        }
      }
      return tumba1.numero_Tumba
    }
  }

}
