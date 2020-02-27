import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/Entidades/Contrato';
import { ContratoDos } from 'src/app/Entidades/ContratoDos';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import Swal from 'sweetalert2';
import { Tumba } from 'src/app/Entidades/Tumba';
import { Cliente } from 'src/app/Entidades/Cliente';
import { Cementerio } from 'src/app/Entidades/Cementerio';
import { Terreno } from 'src/app/Entidades/Terreno';
import { Patio } from 'src/app/Entidades/Patio';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { TipoTumba } from 'src/app/Entidades/TipoTumba';
import { Funcionario } from 'src/app/Entidades/Funcionario';
import { Derecho } from 'src/app/Entidades/Derecho';

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
  numero_Tumba: any;
  diaPago: any;


  constructor(private service: BackendServiceService) {
    this.contratoModal = new ContratoDos();
    this.contratoModal.cliente = new Cliente();
    this.contratoModal.cementerio = new Cementerio();
    this.contratoModal.terreno = new Terreno();
    this.contratoModal.patio = new Patio();
    this.contratoModal.tipoTumba = new TipoTumba();
    this.contratoModal.funcionario = new Funcionario();
    this.contratoModal.derecho = new Derecho();
  }

  ngOnInit() {
    this.service.getTumba().subscribe(tumbasList1 => {
      this.tumbasList = tumbasList1
      this.service.getContrato().subscribe(contratoList1 => {
        this.contratoList2 = contratoList1
        this.contratoList2.forEach(element => {
          //console.log(this.numerosTumba(element));
          element.tumba = this.numerosTumba(element);
         // element.fecha_Pago = this.fechaPago(element.fecha_Pago);

        });
      });
    });

    this.service.getContrato2().subscribe(contratoList1 => {
      this.contratoList3 = contratoList1

    });


  }
  fechaPago(date: Date) {    
    let f1 = new Date(date);    
    return f1.getUTCDate();
    
  }
  cargarContrato(id: number) {
    this.contratoModal = null;
    let ContratoAux;
    // this.service.getContrato2ID(id).subscribe(contrato2 => this.contratoModal = contrato2);
    for (let i = 0; i < this.contratoList3.length; i++) {
      if (id == this.contratoList3[i].id_contrato2) {
        this.contratoModal = this.contratoList3[i];
        ContratoAux = this.contratoList3[i];
      }
    }
    this.numerosTumba(ContratoAux);


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

  deleteContrato(contrato: Contrato): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea deshabilitar el contrato de ${contrato.cliente.nombres_Cliente} ${contrato.cliente.apellidoP_Cliente}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, deshabilitar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.deleteContrato(contrato.id_contrato).subscribe(
          response => {
            this.contratoList2 = this.contratoList2.filter(con => con !== contrato)
            this.ngOnInit();
            Swal.fire('Deshabilitado con exito',
              `Se deshabilito el contrato del cliente ${contrato.cliente.nombres_Cliente} ${contrato.cliente.apellidoP_Cliente} `,
              'success');
          }
        );
      }
    })
  }

  public cambiaEstadoContrato(con: Contrato): void {
    this.service.cambiarEstadoContrato(con, con.id_contrato)
      .subscribe(
        json => {
          this.contratoList2 = this.contratoList2.filter(cont => cont !== con)
          this.ngOnInit();
          Swal.fire('Cambio de estado Contrato', ' Cambio de estado realizado con Exito', 'success');
        },
        err => {
          console.log(err);
        });
  }

  numerosTumba(contrato: Contrato) {
    this.numero_Tumba = null;
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
      this.numero_Tumba = tumba1.numero_Tumba + " - " + tumba2.numero_Tumba;
      return this.numero_Tumba;
    } else {
      let tumba1;
      for (let i = 0; i < this.tumbasList.length; i++) {
        if (this.tumbasList[i].id_tumba == Number(contrato.tumba)) {
          tumba1 = this.tumbasList[i];
        }
      }
      this.numero_Tumba = tumba1.numero_Tumba
      return this.numero_Tumba
    }
  }

}
