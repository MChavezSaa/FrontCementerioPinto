import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2' ;
import { Router, ActivatedRoute } from '@angular/router';
import { Cementerio } from 'src/app/Entidades/Cementerio';



@Component({
  selector: 'app-a-formulario-cementerio',
  templateUrl: './a-formulario-cementerio.component.html',
  styleUrls: ['./a-formulario-cementerio.component.css']
})
export class AFormularioCementerioComponent implements OnInit {

  formCementerio: FormGroup;
  cementerioParams : Cementerio = new Cementerio();


  constructor(private service: BackendServiceService, 
    private formBuilder: FormBuilder,
    private router:Router,
    private activatedRoute:ActivatedRoute) {

    this.formCementerio = this.formBuilder.group({
      nombre_Cementerio: ['', [Validators.required]] ,
      direccion_Cementerio: ['', [Validators.required]],
      telefono_Cementerio:['', [Validators.required]],
      capacidad_Terrenos: ['', [Validators.required]]
  });    
   }

  ngOnInit() {
    this.cargarCementerio();
  }


  public cargarCementerio():void{  
    this.activatedRoute.params.subscribe(params=>{ 
      let id = params['id'];
      if(id){
        this.service.getCementerioID(id).subscribe((vehiculo)=>this.cementerioParams=vehiculo) 
        console.log(this.cementerioParams);
      }
    })
  }
 
  public create():void{
    this.service.saveCementerio(this.formCementerio.value)
      .subscribe(
      cementerio => {   
        //ver como tomar valor de nombre para funcion swal ${document.getElementById("nombre_Cementerio")}
          Swal.fire('Nuevo cementerio', `Cementerio creado con Exito`, 'success');    
        this.router.navigate(['/administracion-inicio/ACementerio']); 
        this.cementerioParams = null;
      },
      err=>{
        console.log(err)
      }
    );
  }

  public update():void{
    this.service.updateCementerio(this.formCementerio.value,this.cementerioParams.id_Cementerio)
    .subscribe(
      json=>{   
        this.router.navigate(['/administracion-inicio/ACementerio']);
        Swal.fire('Cementerio Actualizado', `Cementerio actualizado con exito`, 'success');          
        this.cementerioParams = null;
      },
      err=>{
        console.log(err);
      });
  }

  public cancelarCementerio(){
    Swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Ingreso de Cementerio?',
      
      confirmButtonText: 'Si ',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/administracion-inicio/ACementerio']); 
      }
    })
  }
  
}


