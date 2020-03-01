import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/Entidades/Cliente';


@Component({
  selector: 'app-aform-cliente',
  templateUrl: './aform-cliente.component.html',
  styleUrls: ['./aform-cliente.component.css']
})
export class AformClienteComponent implements OnInit {
  formCliente: FormGroup;
  clienteParams: Cliente = new Cliente();

  constructor(public service: BackendServiceService, public formBuilder: FormBuilder,
    public router: Router, public activatedRoute: ActivatedRoute,

    ) {

    this.formCliente = this.formBuilder.group({
      rut_Cliente: ['', [Validators.required, Validators.pattern(/^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/)]] ,
      nombres_Cliente: ['', [Validators.required, Validators.minLength(3)]] ,
      apellidoP_Cliente: ['', [Validators.required, Validators.minLength(3)]] ,
      apellidoM_Cliente: ['', [Validators.required, Validators.minLength(3)]] ,
      genero_Cliente: ['', [Validators.required]] ,
      telefono_Cliente: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]] ,
      direccion_Cliente: ['', [Validators.required, Validators.minLength(10)]] ,
      rut_Familiar: ['', [Validators.required, Validators.pattern(/^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/)]] ,
      nombres_Familiar: ['', [Validators.required, Validators.minLength(3)]] ,
      apellidoP_Familiar: ['', [Validators.required, Validators.minLength(3)]] ,
      apellidoM_Familiar: ['', [Validators.required, Validators.minLength(3)]] ,
      telefono_Familiar: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]] 

  });    
   }
  ngOnInit() {
    this.cargarCliente();
  }

  public cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getClientePorID(id).subscribe((cli) => this.clienteParams = cli)
        console.log(this.clienteParams);
      }
    })
  }

  public update(): void {
    this.service.updateCliente(this.formCliente.value, this.clienteParams.id_Cliente)
      .subscribe(
        cliente => {
          this.router.navigate(['/administracion-inicio/Aclientes']);
          Swal.fire('Cliente Actualizado', ` Se ha actualizado al cliente con Exito`, 'success');
          this.clienteParams = null;
        },
        err => {
          console.log(err);
        });
  }

  public createCliente():void{
    this.service.saveCliente(this.formCliente.value)
      .subscribe(
      cliente => {   
        //ver como tomar valor de nombre para funcion swal
          Swal.fire('Nuevo Cliente', `Cliente creado con Exito`, 'success');    
        this.router.navigate(['/administracion-inicio/Aclientes']);  
      },
      err=>{
        console.log(err)
      }
    );
  }
  
  public cancelarCliente() {
    Swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Ingreso de Clientes?',

      confirmButtonText: 'Yes ',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/administracion-inicio/Aclientes']);
      }
    })
  }
  
}
