import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/Entidades/Funcionario';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afuncionario',
  templateUrl: './afuncionario.component.html',
  styleUrls: ['./afuncionario.component.css']
})
export class AFuncionarioComponent implements OnInit {

  funcionarioList2: Funcionario[] = [];
  funcionarioDetail: Funcionario;
  funcionarioDetail2: Funcionario[];
  searchText: string;


  constructor(public service: BackendServiceService, private router: Router, ) {
    this.funcionarioDetail = new Funcionario;
    
   }

  ngOnInit() {
    this.service.getFuncionarios().subscribe(funcionarioList1 => this.funcionarioList2 = funcionarioList1);
  }


  public darAlta(fun: Funcionario): void {
    this.service.darAlta(fun, fun.id_funcionario)
      .subscribe(
        json => {
          this.funcionarioList2 = this.funcionarioList2.filter(func => func!== fun)
          this.ngOnInit();
          Swal.fire('Cambio de estado',' Cambio de estado realizado con éxito', 'success');          
        },
        err => {
          console.log(err);
        });
  }

  delete(funcionario: Funcionario): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea eliminar al funcionario ${funcionario.nombres_Funcionario} ${funcionario.apellidoP_Funcionario}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.deleteFuncionario(funcionario.id_funcionario).subscribe(
          response => {
            this.funcionarioList2 = this.funcionarioList2.filter(fun => fun!== funcionario)
            this.ngOnInit();
            Swal.fire('Eliminado Satisfactorio', 
              `Se elimino al funcionario ${funcionario.nombres_Funcionario} ${funcionario.apellidoP_Funcionario}`,
            'success');
          }
        );
      }
    })
  }

  cargarDatosModal(id: number) {
    this.service.getFuncionariosPorID(id).subscribe(funcionarioBuscado => this.funcionarioDetail = funcionarioBuscado);   
  }
  cargarRut(): string {
    return this.funcionarioDetail.rut_Funcionario;
  }
  cargarNombre(): string {
    return this.funcionarioDetail.nombres_Funcionario;
  }
  cargarApellidos(): string {
    return this.funcionarioDetail.apellidoP_Funcionario + " " + this.funcionarioDetail.apellidoM_Funcionario;
  }
  cargarCargo(): string {
    return this.funcionarioDetail.cargo_Funcionario;
  }
  cargarGenero(): string {
    return this.funcionarioDetail.genero_Funcionario;
  }

}




