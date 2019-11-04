import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/Entidades/Funcionario';
import { BackendServiceService } from 'src/app/Service/backend-service.service';

@Component({
  selector: 'app-afuncionario',
  templateUrl: './afuncionario.component.html',
  styleUrls: ['./afuncionario.component.css']
})
export class AFuncionarioComponent implements OnInit {

  funcionarioList2: Funcionario[] = [];

  constructor(private service: BackendServiceService) { }

  ngOnInit() {
    this.service.getFuncionarios().subscribe(funcionarioList1 => this.funcionarioList2 = funcionarioList1);
  }

}
