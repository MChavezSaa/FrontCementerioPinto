import { Component, OnInit } from '@angular/core';
import { Difunto } from 'src/app/Entidades/Difunto';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Contrato } from 'src/app/Entidades/Contrato';
import { Cliente } from 'src/app/Entidades/Cliente';

@Component({
  selector: 'app-a-content',
  templateUrl: './a-content.component.html',
  styleUrls: ['./a-content.component.css']
})
export class AContentComponent implements OnInit {

  constructor(private service : BackendServiceService) { }
  cantDifuntos : Difunto[] = []
  cantContratos: Contrato[] =[];
  cantClientes: Cliente[] = [];
  ngOnInit() {
    this.service.getDifuntos().subscribe(difuntosList => this.cantDifuntos = difuntosList);
    this.service.getContrato().subscribe(contratoList => this.cantContratos = contratoList);
    this.service.getClientes().subscribe(clientesList => this.cantClientes = clientesList);
  }
  getCantidadDifuntos(): number{
    return this.cantDifuntos.length;
  }

  getCantidadContratos(): number{
    return this.cantContratos.length;
  }
  getCantidadClientes(): number{
    return this.cantClientes.length;
  }

}
