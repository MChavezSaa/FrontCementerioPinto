import { Component, OnInit } from '@angular/core';
import { TipoTumba } from 'src/app/Entidades/TipoTumba';
import { Tumba } from 'src/app/Entidades/Tumba';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-a-formulario-creartumba',
  templateUrl: './a-formulario-creartumba.component.html',
  styleUrls: ['./a-formulario-creartumba.component.css']
})
export class AFormularioCreartumbaComponent implements OnInit {

  tipoTumbaList: TipoTumba[] = [];
  tumbaList: Tumba[] = [];
  formCreaTumba: FormGroup;
  creaTumbaParams: Tumba = new Tumba();

  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router: Router, private activatedRoute: ActivatedRoute) 
    { 
    this.formCreaTumba = this.formBuilder.group({
      numero_Tumba: ['', [Validators.required]],
      tipo_Tumba: ['', [Validators.required]],
      estado_Tumba: ['', [Validators.required]],
      orientacion_Tumba: ['', [Validators.required]],
      largo: ['', [Validators.required]],
      ancho: ['', [Validators.required]]
    });

    }

  ngOnInit() {
    this.cargarCreaTumba();
    this.service.getTipoTumba().subscribe(tipoTumbaList1 => this.tipoTumbaList = tipoTumbaList1);
    this.service.getTumba().subscribe(tumbaList1 => this.tumbaList = tumbaList1);
  }

  public cargarCreaTumba(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getTumbasPorID(id).subscribe((creaT) => this.creaTumbaParams = creaT)
        console.log(this.creaTumbaParams);
      }
    })
  }

  public createCreaTumba(): void {
    this.service.saveTumba(this.formCreaTumba.value)
      .subscribe(
        creaTumba => {
          //ver como tomar valor de nombre para funcion swal ${document.getElementById("nombre_Cementerio")}
          Swal.fire('Nueva Tumba', `Tumba creada con Exito`, 'success');
          this.router.navigate(['/administracion-inicio/ACreaTumba']);
          this.creaTumbaParams = null;
        },
        err => {
          console.log(err)
        }
      );
  }

  public updateCreaTumba(): void {
    this.service.updateTumba(this.formCreaTumba.value, this.creaTumbaParams.id_Tumba)
      .subscribe(
        json => {
          this.router.navigate(['/administracion-inicio/ACreaTumba']);
          Swal.fire('Tumba Actualizada', `Tumba actualizada con exito`, 'success');
          this.creaTumbaParams = null;
        },
        err => {
          console.log(err);
        });
  }

  public cancelarCreaTumba() {
    Swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Tumbas?',

      confirmButtonText: 'Si ',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/administracion-inicio/ACreaTumba']);
      }
    })
  }


}
