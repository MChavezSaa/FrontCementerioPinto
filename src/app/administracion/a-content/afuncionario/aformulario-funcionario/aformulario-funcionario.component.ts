import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-aformulario-funcionario',
  templateUrl: './aformulario-funcionario.component.html',
  styleUrls: ['./aformulario-funcionario.component.css']
})
export class AFormularioFuncionarioComponent implements OnInit {
  formFuncionario: FormGroup;

  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router:Router,

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
  }


  public createFuncionario():void{
    this.service.saveFuncionario(this.formFuncionario.value)
      .subscribe(
      funcionario => {   
        //ver como tomar valor de nombre para funcion swal
        Swal.fire('Nuevo Funcionario', `Funcionario ${funcionario} creado con Exito`, 'success');    
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
