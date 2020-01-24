import { Component, OnInit } from '@angular/core';
//import { Contrato } from 'src/app/Entidades/Contrato';
import { ContratoDos } from 'src/app/Entidades/ContratoDos';
import { BackendServiceService } from 'src/app/Service/backend-service.service';

@Component({
  selector: 'app-a-venta',
  templateUrl: './a-venta.component.html',
  styleUrls: ['./a-venta.component.css']
})
export class AVentaComponent implements OnInit {

  //contratoList2: Contrato[] = [];
  contratoList2: ContratoDos[] = [];
  searchText2: string;
  constructor(private service: BackendServiceService) { }

  ngOnInit() {
   // this.service.getContrato().subscribe(contratoList1 => this.contratoList2 = contratoList1);
    this.service.getContrato2().subscribe(contratoList1 => this.contratoList2 = contratoList1);
  }

}
