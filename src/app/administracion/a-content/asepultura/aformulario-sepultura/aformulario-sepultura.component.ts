import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormGroup } from '@angular/forms';
import { TumbaDifunto } from 'src/app/Entidades/TumbaDifunto';
import { Difunto } from 'src/app/Entidades/Difunto';
import { Contrato } from 'src/app/Entidades/Contrato';

@Component({
  selector: 'app-aformulario-sepultura',
  templateUrl: './aformulario-sepultura.component.html',
  styleUrls: ['./aformulario-sepultura.component.css']
})
export class AFormularioSepulturaComponent implements OnInit {

  formSepultura: FormGroup;
  sepulturaParams: TumbaDifunto = new TumbaDifunto();

  mostrarDifunto: Boolean = false;
  difuntoList: Difunto[] = [];
  contratoList: Contrato[] = [];

  sepultura2: any = new TumbaDifunto();

  constructor(private service: BackendServiceService,
    private router: Router, private activatedRoute: ActivatedRoute) { 
     this.sepultura2.difunto = 0;
    }

  ngOnInit() {
    this.service.getDifuntos().subscribe(difuntoList1 => this.difuntoList = difuntoList1);
    this.service.getContrato().subscribe(contratoList1 => this.contratoList = contratoList1);
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

  mostrarDifuntos(){
    if(this.sepultura2.difunto!= null){
      this.mostrarDifunto = true;
    }else{
      this.mostrarDifunto = false;
    }
  }

}
