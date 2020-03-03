import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Difunto } from 'src/app/Entidades/Difunto';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-a-fomulario-difunto',
  templateUrl: './a-fomulario-difunto.component.html',
  styleUrls: ['./a-fomulario-difunto.component.css']
})
export class AFomularioDifuntoComponent implements OnInit {

  formDifunto: FormGroup;
  difuntoParams: Difunto = new Difunto();

  difunto: Difunto;
  public fotoSeleccionada: File;
  difunto2: Difunto;
  constructor(public service: BackendServiceService, public formBuilder: FormBuilder,
    public router: Router, public activatedRoute: ActivatedRoute

  ) {
    this.formDifunto = this.formBuilder.group({
      rut_Difunto: ['', [Validators.required, Validators.pattern(/^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/)]],
      nombres_Difunto: ['', [Validators.required, Validators.minLength(3)]],
      apellidoP_Difunto: ['', [Validators.required, Validators.minLength(3)]],
      apellidoM_Difunto: ['', [Validators.required, Validators.minLength(3)]],
      genero_Difunto: ['', [Validators.required]],
      fecha_Nacimiento_Difunto: ['', [Validators.required]],
      fecha_Defuncion: ['', [Validators.required]],
      fecha_Inscripcion_Difunto: ['', [Validators.required]],
      //fecha_Entierro: ['', [Validators.required]],
      nombreC_Padre: ['', [Validators.required, Validators.minLength(3)]],
      nombreC_Madre: ['', [Validators.required, Validators.minLength(3)]],

      sacramento1: [''],
      sacramento2: [''],
      sacramento3: [''],
      sacramento4: [''],

      certificado_Defuncion: [''],
      fotocopia_Carnet: ['']

    });
  }

  ngOnInit() {
    this.cargarDifunto();
  }

  public cargarDifunto(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getDifuntoPorID(id).subscribe((dif) => this.difuntoParams = dif)
        console.log(this.difuntoParams);
      }
    })
  }

  createDifunto() {
    let actual = new Date().getTime();
    if (new Date(this.difuntoParams.fecha_Nacimiento_Difunto).getTime() > actual) {
      swal.fire('Fecha de nacimiento', 'La fecha de nacimiento no puede ser mayor a la fecha actual', 'error');
    } else {
      if (new Date(this.difuntoParams.fecha_Nacimiento_Difunto).getTime() > new Date(this.difuntoParams.fecha_Defuncion).getTime()) {
        swal.fire('Fecha de Defuncion', 'La fecha de defuncion no puede ser menor a la fecha de nacimiento', 'error');
      } else {
        if (new Date(this.difuntoParams.fecha_Inscripcion_Difunto).getTime() > actual) {
          swal.fire('Fecha de Inscripción', 'La fecha de inscripción no puede ser mayor a la fecha actual', 'error');
        } else {
          this.service.saveDifunto(this.formDifunto.value)
            .subscribe(
              cliente => {
                this.difunto = cliente;
                this.router.navigate(['/administracion-inicio/ADifuntos']);
                swal.fire('Difunto creado con exito', 'Registro exitoso!', 'success');
              },
              err => {
                console.log(err)
              }
            );
        }
      }
    }
  }

  public update(): void {
    let actual = new Date().getTime();
    if (new Date(this.difuntoParams.fecha_Nacimiento_Difunto).getTime() > actual) {
      swal.fire('Fecha de nacimiento', 'La fecha de nacimiento no puede ser mayor a la fecha actual', 'error');
    } else {
      if (new Date(this.difuntoParams.fecha_Nacimiento_Difunto).getTime() > new Date(this.difuntoParams.fecha_Defuncion).getTime()) {
        swal.fire('Fecha de Defuncion', 'La fecha de defuncion no puede ser menor a la fecha de nacimiento', 'error');
      } else {
        if (new Date(this.difuntoParams.fecha_Inscripcion_Difunto).getTime() > actual) {
          swal.fire('Fecha de Inscripción', 'La fecha de inscripción no puede ser mayor a la fecha actual', 'error');
        } else {
          this.service.updateDifunto(this.formDifunto.value, this.difuntoParams.id_Difunto)
            .subscribe(
              json => {
                this.router.navigate(['/administracion-inicio/ADifuntos']);
                swal.fire('Difunto Actualizado', `Se ha actualizado el difunto con Exito`, 'success');
                this.difuntoParams = null;
              },
              err => {
                console.log(err);
              });
        }
      }
    }

  }

  public cancelarDifunto() {
    swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Ingreso de Difuntos?',

      confirmButtonText: 'Yes ',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/administracion-inicio/ADifuntos']);
      }
    })
  }
}
