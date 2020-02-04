import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormGroup } from '@angular/forms';
import { TumbaDifunto } from 'src/app/Entidades/TumbaDifunto';

@Component({
  selector: 'app-aformulario-sepultura',
  templateUrl: './aformulario-sepultura.component.html',
  styleUrls: ['./aformulario-sepultura.component.css']
})
export class AFormularioSepulturaComponent implements OnInit {

  formSepultura: FormGroup;
  sepulturaParams: TumbaDifunto = new TumbaDifunto();

  constructor(private service: BackendServiceService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }


  public cancelarSepultura() {
    swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Ingreso de Sepulturas?',

      confirmButtonText: 'Yes ',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/administracion-inicio/ASepultura']);
      }
    })
  }

}
