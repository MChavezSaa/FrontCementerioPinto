import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Entidades/Cliente';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-a-cliente',
  templateUrl: './a-cliente.component.html',
  styleUrls: ['./a-cliente.component.css']
})
export class AClienteComponent implements OnInit {
  clienteList2: Cliente[] = [];
  clienteDetalle: Cliente;
  searchText3: string;

  constructor(public service: BackendServiceService) { 
    this.clienteDetalle = new Cliente();
  }

  ngOnInit() {
    
    this.service.getClientes().subscribe(clienteList1 => this.clienteList2 = clienteList1);
  }


  
  public darAltaCliente(cli: Cliente): void {
    this.service.darAltaCliente(cli, cli.id_Cliente)
      .subscribe(
        json => {
          this.clienteList2 = this.clienteList2.filter(clie => clie!== cli)
          this.ngOnInit();
          Swal.fire('Cliente dado de alta',' Dado de alta con Exito', 'success');          
        },
        err => {
          console.log(err);
        });
  }


  delete(cliente: Cliente): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea eliminar a ${cliente.nombres_Cliente} ${cliente.apellidoP_Cliente} ${cliente.apellidoM_Cliente} como cliente?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.deleteCliente(cliente.id_Cliente).subscribe(
          response => {
            this.clienteList2 = this.clienteList2.filter(fun => fun!== cliente)
            this.ngOnInit();
            Swal.fire('Eliminado Satisfactorio', 
            `Se elimino al cliente ${cliente.nombres_Cliente} ${cliente.apellidoP_Cliente} ${cliente.apellidoM_Cliente}`,
            'success');
          }
        );
      }
    })
  }

  cargarDatosModalCliente(id: number) {
    this.service.getClientePorID(id).subscribe(clienteBuscado => this.clienteDetalle = clienteBuscado);
   
  }
  cargarRutCliente(): string {
    return this.clienteDetalle.rut_Cliente;
  }
  cargarNombres(): string {
    return this.clienteDetalle.nombres_Cliente;
  }
  cargarApellidos(): string {
    return this.clienteDetalle.apellidoP_Cliente + " " + this.clienteDetalle.apellidoM_Cliente;
  }
  cargarGenero(): string {
    return this.clienteDetalle.genero_Cliente;
  }
  cargarTelefono(): number {
    return this.clienteDetalle.telefono_Cliente;
  }
  cargarDireccion(): string {
    return this.clienteDetalle.direccion_Cliente;
  }

  //Familiar

  cargarRutFam(): string {
    return this.clienteDetalle.rut_Familiar;
  }
  cargarNombreFam(): string {
    return this.clienteDetalle.nombres_Familiar;
  }
  cargarApellidosFam(): string {
    return this.clienteDetalle.apellidoP_Familiar + " " + this.clienteDetalle.apellidoM_Familiar;
  }
  cargarTelefonoFam(): number {
    return this.clienteDetalle.telefono_Familiar;
  }
  
}
