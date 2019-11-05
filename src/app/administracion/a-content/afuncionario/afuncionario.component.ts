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
  funcionarioDetail : Funcionario;

  constructor(private service: BackendServiceService) { }

  ngOnInit() {
    this.service.getFuncionarios().subscribe(funcionarioList1 => this.funcionarioList2 = funcionarioList1);
  }


  cargarDatosModal(id: number){
    this.service.getFuncionariosPorID(id).subscribe(funcionarioBuscado => this.funcionarioDetail = funcionarioBuscado);
    console.log(this.funcionarioDetail);  
  }
  cargarRut(): string{
    return this.funcionarioDetail.rut_Funcionario;
  }
  cargarNombre(): string{
    return this.funcionarioDetail.nombres_Funcionario;
  }
  cargarApellidos(): string{
    return this.funcionarioDetail.apellidoP_Funcionario+" "+this.funcionarioDetail.apellidoM_Funcionario;
  }
  cargarCargo(): string{
    return this.funcionarioDetail.cargo_Funcionario;
  }
  cargarGenero(): string{
    return this.funcionarioDetail.genero_Funcionario;
  }

}
