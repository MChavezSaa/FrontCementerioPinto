import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-e-clientes',
  templateUrl: './e-clientes.component.html',
  styleUrls: ['./e-clientes.component.css']
})
export class EClientesComponent implements OnInit {


  _listFilter:string;
  clientesFiltered:Cliente[];
  clientes:Cliente[];

  constructor() { }

  ngOnInit() {
  }

}
