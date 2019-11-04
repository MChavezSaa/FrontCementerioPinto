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

  constructor(private service: BackendServiceService) { 

  }

  ngOnInit() {
    this.service.getClientes().subscribe(clienteList1 => this.clienteList2 = clienteList1);
  }

}
