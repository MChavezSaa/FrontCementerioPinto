import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aform-cliente',
  templateUrl: './aform-cliente.component.html',
  styleUrls: ['./aform-cliente.component.css']
})
export class AformClienteComponent implements OnInit {
  formCliente: FormGroup;

  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router:Router,

    ) {

    this.formCliente = this.formBuilder.group({
      rut_Cliente: ['', [Validators.required]] ,
      nombres_Cliente: ['', [Validators.required]] ,
      apellidoP_Cliente: ['', [Validators.required]] ,
      apellidoM_Cliente: ['', [Validators.required]] ,
      genero_Cliente: ['', [Validators.required]] ,
      telefono_Cliente: ['', [Validators.required]] ,
      direccion_Cliente: ['', [Validators.required]] ,
      rut_Familiar: ['', [Validators.required]] ,
      nombres_Familiar: ['', [Validators.required]] ,
      apellidoP_Familiar: ['', [Validators.required]] ,
      apellidoM_Familiar: ['', [Validators.required]] ,
      telefono_Familiar: ['', [Validators.required]] 

  });    
   }
  ngOnInit() {
  }

  public create():void{
    this.service.saveCliente(this.formCliente.value)
      .subscribe(
      cliente => {   
        //ver como tomar valor de nombre para funcion swal
        Swal.fire('Nuevo Funcionario', `Funcionario ${cliente} creado con Exito`, 'success');    
        this.router.navigate(['/administracion-inicio/clientes']);  
      },
      err=>{
        console.log(err)
      }
    );
  }
}
