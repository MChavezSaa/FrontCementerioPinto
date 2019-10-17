import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-a-formulario-tumba',
  templateUrl: './a-formulario-tumba.component.html',
  styleUrls: ['./a-formulario-tumba.component.css']
})
export class AFormularioTumbaComponent implements OnInit {

  formTipoTumba: FormGroup;


  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router: Router) {
    this.formTipoTumba = this.formBuilder.group({
      nombre_tipo_tumba: ['', [Validators.required]],
      capacidad_tipo_tumba: ['', [Validators.required]]
    });
  }

  ngOnInit() {
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

}
