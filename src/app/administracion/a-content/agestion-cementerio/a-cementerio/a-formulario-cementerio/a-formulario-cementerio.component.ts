import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2' ;
import { Router } from '@angular/router';
import { Cementerio } from 'src/app/Entidades/Cementerio';



@Component({
  selector: 'app-a-formulario-cementerio',
  templateUrl: './a-formulario-cementerio.component.html',
  styleUrls: ['./a-formulario-cementerio.component.css']
})
export class AFormularioCementerioComponent implements OnInit {

  formCementerio: FormGroup;

  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router:Router,

    ) {

    this.formCementerio = this.formBuilder.group({
      nombre_Cementerio: ['', [Validators.required]] ,
      direccion_Cementerio: ['', [Validators.required]],
      telefono_Cementerio:['', [Validators.required]],
      capacidad_Terrenos: ['', [Validators.required]]
  });    
   }

  ngOnInit() {
  }


  public create():void{
    this.service.saveCementerio(this.formCementerio.value)
      .subscribe(
      cementerio => {   
        //ver como tomar valor de nombre para funcion swal
        Swal.fire('Nuevo cementerio', `Cementerio ${document.getElementById("nombre_Cementerio")} creado con Exito`, 'success');    
        this.router.navigate(['/administracion-inicio/ACementerio']);  
      },
      err=>{
        console.log(err)
      }
    );
  }

}
