import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Entidades/Cliente';
import { BackendServiceService } from 'src/app/Service/backend-service.service';

@Component({
  selector: 'app-a-cliente',
  templateUrl: './a-cliente.component.html',
  styleUrls: ['./a-cliente.component.css']
})
export class AClienteComponent implements OnInit {
  clienteList2: Cliente[] = [];
  clienteDetalle: Cliente;

  constructor(private service: BackendServiceService) { 

  }

  ngOnInit() {
    this.service.getClientes().subscribe(clienteList1 => this.clienteList2 = clienteList1);
  }


  cargarDatosModalCliente(id: number) {
    this.service.getClientePorID(id).subscribe(clienteBuscado => this.clienteDetalle = clienteBuscado);
   // console.log(this.clienteDetalle);
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
