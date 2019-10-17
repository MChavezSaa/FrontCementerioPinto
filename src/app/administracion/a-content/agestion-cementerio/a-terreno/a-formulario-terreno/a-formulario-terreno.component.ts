import { Component, OnInit } from '@angular/core';
import { Cementerio } from 'src/app/Entidades/Cementerio';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2' ;


@Component({
  selector: 'app-a-formulario-terreno',
  templateUrl: './a-formulario-terreno.component.html',
  styleUrls: ['./a-formulario-terreno.component.css']
})
export class AFormularioTerrenoComponent implements OnInit {
  
  cementerioList:Cementerio[] = [];
  formTerreno: FormGroup;


  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router:Router) {
      this.formTerreno = this.formBuilder.group({
        nombre_Terreno: ['', [Validators.required]] ,
        capacidad_Terreno: ['', [Validators.required]] ,
        estado_Terreno: ['', [Validators.required]],
        cementerio:['', [Validators.required]]
    });     
    }

  ngOnInit() {
    this.service.getCementerio().subscribe(cementerioList1 => this.cementerioList = cementerioList1);
  }

  public create():void{
    this.service.saveTerreno(this.formTerreno.value)
      .subscribe(
      terreno => {   
        //ver como tomar valor de nombre para funcion swal
        Swal.fire('Nuevo Terreno', `Terreno ${terreno} creado con Exito`, 'success');    
        this.router.navigate(['/administracion-inicio/ACementerio']);  
      },
      err => {
        console.log(err)
      }
    );
  }

}
