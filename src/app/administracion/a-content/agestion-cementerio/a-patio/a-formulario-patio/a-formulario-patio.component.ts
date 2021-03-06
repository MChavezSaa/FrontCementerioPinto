import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Terreno } from 'src/app/Entidades/Terreno';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Patio } from 'src/app/Entidades/Patio';

@Component({
  selector: 'app-a-formulario-patio',
  templateUrl: './a-formulario-patio.component.html',
  styleUrls: ['./a-formulario-patio.component.css']
})
export class AFormularioPatioComponent implements OnInit {

  terrenoList:Terreno[] = [];
  formPatio:FormGroup;
  patioParams : Patio;

  constructor(public service: BackendServiceService, 
    private formBuilder: FormBuilder,
    private router: Router, 
    private activatedRoute:ActivatedRoute) {
      this.patioParams = new Patio();
      this.patioParams.terreno = new Terreno();

    this.formPatio = this.formBuilder.group({
      capacidad_Patio: {value: ''},
      nombre_Patio: ['', [Validators.required, Validators.minLength(3)]],
      terreno: ['', [Validators.required]],
      nombreTT: ['', [Validators.required]], 
    });
  }

  ngOnInit() {
    this.cargarPatio();
    this.service.getTerreno().subscribe(terrenoList1 => this.terrenoList = terrenoList1);
  }
  public cargarPatio():void{  
    this.activatedRoute.params.subscribe(params=>{ 
      let id = params['id'];
      if(id){
        this.service.getPatioxID(id).subscribe((patio)=>this.patioParams=patio)
      }
    })
  }

  public update():void{
    this.service.updatePatio(this.formPatio.value,this.patioParams.id_Patio)
    .subscribe(
      json=>{   
        this.router.navigate(['/administracion-inicio/APatio']);
        Swal.fire('Cementerio Actualizado', `Cementerio actualizado con exito`, 'success');  
        this.patioParams = null;
      },
      err=>{
        console.log(err);
      });
  }

  public createPatio(): void {
    this.service.savePatio(this.formPatio.value)
      .subscribe(
        patio => {         
          Swal.fire('Nuevo Patio', `Patio creado con Exito`, 'success');
          this.router.navigate(['/administracion-inicio/APatio']);
          this.patioParams = null;
        },
        err => {
          console.log(err)
        }
      );
  }
  
  
  public cancelarPatio() {
    Swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Ingreso de Patios?',

      confirmButtonText: 'Si ',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/administracion-inicio/APatio']);
      }
    })
  }


}
