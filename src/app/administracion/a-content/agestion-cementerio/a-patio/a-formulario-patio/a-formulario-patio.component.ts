import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Terreno } from 'src/app/Entidades/Terreno';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-a-formulario-patio',
  templateUrl: './a-formulario-patio.component.html',
  styleUrls: ['./a-formulario-patio.component.css']
})
export class AFormularioPatioComponent implements OnInit {

  terrenoList:Terreno[] = [];
  formPatio:FormGroup;


  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router: Router) {
    this.formPatio = this.formBuilder.group({
      capacidad_Patio: ['', [Validators.required]],
      nombre_Patio: ['', [Validators.required]],
      terreno: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.service.getTerreno().subscribe(terrenoList1 => this.terrenoList = terrenoList1);
  }


  public createPatio(): void {
    this.service.savePatio(this.formPatio.value)
      .subscribe(
        patio => {
          //ver como tomar valor de nombre para funcion swal
          Swal.fire('Nuevo Patio', `Patio ${patio} creado con Exito`, 'success');
          this.router.navigate(['/administracion-inicio/APatio']);
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

      confirmButtonText: 'Yes ',
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
