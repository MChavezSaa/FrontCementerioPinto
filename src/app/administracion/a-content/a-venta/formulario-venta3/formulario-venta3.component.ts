import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Entidades/Cliente';
import { Tumba } from 'src/app/Entidades/Tumba';
import { Derecho } from 'src/app/Entidades/Derecho';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-venta3',
  templateUrl: './formulario-venta3.component.html',
  styleUrls: ['./formulario-venta3.component.css']
})
export class FormularioVenta3Component implements OnInit {

  clienteList:Cliente[] = [];
  formClientes: FormGroup;
  tumba: Tumba;
  tumbaArmada: Tumba;
  derecho: Derecho;

  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router:Router) { 

      this.formClientes = this.formBuilder.group({
        cliente: ['', [Validators.required]]
    }); 

    }

  ngOnInit() {
    this.service.getClientes().subscribe(clientes => this.clienteList = clientes);

  }

  armarVenta(){
    /*recogemos del localstorage la tumba */    
     this.tumba = JSON.parse(localStorage.getItem("tumba"));
     /*agregamos el cliente a la tumba */
     this.tumba.cliente = this.formClientes.value;

   
    console.log(this.tumba);
    /*fin armado*/

    /* this.derecho = JSON.parse(localStorage.getItem("derecho"));
     this.derecho.cliente = this.formClientes.value;*/


    //this.service.saveTumba(this.tumbaArmada).subscribe(value => console.log("insertadoTumba "+value));
     //this.service.saveDerecho(this.derecho);

     this.service.saveTumba(this.formClientes.value)
      .subscribe(
      cliente => {   
        //ver como tomar valor de nombre para funcion swal
        swal.fire('Nuevo lal', `lal ${cliente} creado con Exito`, 'success');    
        //this.router.navigate(['/administracion-inicio/Aclientes']);  
      },
      err=>{
        console.log(err)
      }
    );

  }

}
