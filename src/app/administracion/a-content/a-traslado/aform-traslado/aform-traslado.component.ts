import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aform-traslado',
  templateUrl: './aform-traslado.component.html',
  styleUrls: ['./aform-traslado.component.css']
})
export class AformTrasladoComponent implements OnInit {

  formTraslado: FormGroup;

  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router: Router, private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
  }

  public cancelarTraslado() {
    Swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Traslados?',

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
