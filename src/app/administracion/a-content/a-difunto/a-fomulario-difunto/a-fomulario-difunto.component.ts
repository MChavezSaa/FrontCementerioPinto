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
  difunto: Difunto;
  private fotoSeleccionada: File;
  difunto2 : Difunto;
  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router: Router, private activeRoute: ActivatedRoute

  ) {
    this.formDifunto = this.formBuilder.group({
      rut_Difunto: ['', [Validators.required]],
      nombres_Difunto: ['', [Validators.required]],
      apellidoP_Difunto: ['', [Validators.required]],
      apellidoM_Difunto: ['', [Validators.required]],
      genero_Difunto: ['', [Validators.required]],
      fecha_Nacimiento_Difunto: ['', [Validators.required]],
      fecha_Defuncion: ['', [Validators.required]],
      fecha_Inscripcion_Difunto: ['', [Validators.required]],
      fecha_Entierro: ['', [Validators.required]],
      nombreC_Padre: ['', [Validators.required]],
      nombreC_Madre: ['', [Validators.required]],

      sacramento1: ['', [Validators.required]],
      sacramento2: ['', [Validators.required]],
      sacramento3: ['', [Validators.required]],
      sacramento4: ['', [Validators.required]],

      certificado_Defuncion: ['', [Validators.required]],
      fotocopia_Carnet: ['', [Validators.required]]

    });
  }

  ngOnInit() {    
  }
  createDifunto(){
    this.service.saveDifunto(this.formDifunto.value)
      .subscribe(
      cliente => {          
        this.difunto = cliente;
        this.router.navigate(['/administracion-inicio/ADifuntos']);
        swal.fire('Difunto creado con exito', 'Registro exitoso!','success');
      },
      err=>{
        console.log(err)
      }
    );
  }
}
