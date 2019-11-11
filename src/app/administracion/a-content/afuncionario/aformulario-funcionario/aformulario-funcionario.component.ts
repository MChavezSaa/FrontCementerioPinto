import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Router, ActivatedRoute} from '@angular/router';
import Swal from 'sweetalert2';
import { Funcionario } from 'src/app/Entidades/Funcionario';


@Component({
  selector: 'app-aformulario-funcionario',
  templateUrl: './aformulario-funcionario.component.html',
  styleUrls: ['./aformulario-funcionario.component.css']
})
export class AFormularioFuncionarioComponent implements OnInit {
  formFuncionario: FormGroup;
  funcionarioParams: Funcionario;

  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router: Router, private activatedRoute: ActivatedRoute,

    ) {

    this.formFuncionario = this.formBuilder.group({
      rut_Funcionario: ['', [Validators.required]] ,
      nombres_Funcionario: ['', [Validators.required]],
      apellidoP_Funcionario:['', [Validators.required]],
      apellidoM_Funcionario: ['', [Validators.required]],
      cargo_Funcionario: ['', [Validators.required]],
      genero_Funcionario: ['', [Validators.required]],
      estado_funcionario: ['']

  });    
   }

  ngOnInit() {
    this.cargarFuncionario();
  }

  public cargarFuncionario(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getFuncionariosPorID(id).subscribe((fun) => this.funcionarioParams = fun)
        console.log(this.funcionarioParams);
      }
    })
  }

  public update(): void {
    this.service.updateFuncionario(this.formFuncionario.value, this.funcionarioParams.id_funcionario)
      .subscribe(
        json => {
          this.router.navigate(['/administracion-inicio/Afuncionarios']);
          Swal.fire('Funcionario Actualizado',' Actualizado con Exito', 'success');
        },
        err => {
          console.log(err);
        });
  }


  public createFuncionario():void{
    this.service.saveFuncionario(this.formFuncionario.value)
      .subscribe(
      funcionario => {   
        //ver como tomar valor de nombre para funcion swal
          Swal.fire('Nuevo Funcionario', `Funcionario ${funcionario.nombres_Funcionario} ${funcionario.apellidoP_Funcionario} ${funcionario.apellidoM_Funcionario} creado con Exito`, 'success');   
          this.router.navigate(['/administracion-inicio/Afuncionarios']);  
      },
      err=>{
        console.log(err)
      }
    );
  }

  public cancelarFuncionario() {
    Swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Ingreso de Funcionarios?',

      confirmButtonText: 'Yes ',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/administracion-inicio/Afuncionarios']);
      }
    })
  }
}
