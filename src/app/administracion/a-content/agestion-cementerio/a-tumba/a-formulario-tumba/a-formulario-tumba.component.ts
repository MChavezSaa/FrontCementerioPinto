import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { TipoTumba } from 'src/app/Entidades/TipoTumba';

@Component({
  selector: 'app-a-formulario-tumba',
  templateUrl: './a-formulario-tumba.component.html',
  styleUrls: ['./a-formulario-tumba.component.css']
})
export class AFormularioTumbaComponent implements OnInit {

  formTipoTumba: FormGroup;
  tipotumbaParams : TipoTumba = new TipoTumba();


  constructor(private service: BackendServiceService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.formTipoTumba = this.formBuilder.group({
      nombretipo_tumba: ['', [Validators.required]],
      capacidad_tipo_tumba: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.cargarTipoTumba();
  }

  public cargarTipoTumba(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getTipoTumbaPorID(id).subscribe((tipoTumba) => this.tipotumbaParams = tipoTumba)
        console.log(this.tipotumbaParams);
      }
    })
  }
  public update(): void {
    this.service.updateTipoTumba(this.formTipoTumba.value, this.tipotumbaParams.id_TipoTumba)
      .subscribe(
        json => {
          this.router.navigate(['/administracion-inicio/ATumba']);
          Swal.fire('Tipo de Tumba Actualizado', `Tipo de Tumba actualizado con exito`, 'success');
          this.tipotumbaParams = null;
        },
        err => {
          console.log(err);
        });
  }
  public createTipoTumba(): void {
    console.log(this.formTipoTumba);
    this.service.saveTipoTumba(this.formTipoTumba.value)
      .subscribe(
        tipoTumba => {
          //ver como tomar valor de nombre para funcion swal
          Swal.fire('Nuevo Tipo Tumba', `Tipo Tumba ${tipoTumba} creado con Exito`, 'success');
          this.router.navigate(['/administracion-inicio/ATumba']);
        },
        err => {
          console.log(err)
        }
      );
  }

  public cancelarTipoTumba() {
    Swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Ingreso de Tipos de tumbas?',

      confirmButtonText: 'Yes ',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/administracion-inicio/ATumba']);
      }
    })
  }

}
