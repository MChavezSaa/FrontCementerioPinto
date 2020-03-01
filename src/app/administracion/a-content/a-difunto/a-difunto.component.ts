import { Component, OnInit } from '@angular/core';
import { Difunto } from 'src/app/Entidades/Difunto';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-a-difunto',
  templateUrl: './a-difunto.component.html',
  styleUrls: ['./a-difunto.component.css']
})
export class ADifuntoComponent implements OnInit {
  DifuntosList: Difunto[] = [];
  searchText4: string;
  
  constructor(public router : Router,public service: BackendServiceService) { }

  ngOnInit() {
    this.service.getDifuntos().subscribe(response => this.DifuntosList = response);
  }
  guardarID(id: number){
    localStorage.setItem("ID", id+"");
    this.router.navigate(['/administracion-inicio/AFormularioTraslado/']);
  }

  delete(difunto: Difunto){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea reducir al difunto ${difunto.nombres_Difunto} ${difunto.apellidoP_Difunto}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Reducir ',
      cancelButtonText: 'No, Cancelar ',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.reduccionDifunto(difunto.id_Difunto).subscribe(
          response => {
           // this.difuntoList2 = this.difuntoList2.filter(fun => fun!== difunto)
            this.ngOnInit();
            Swal.fire('Reducción Satisfactoria', 
              `Se redujo al difunto ${difunto.nombres_Difunto} ${difunto.apellidoP_Difunto}`,
            'success');
          }
        );
      }
    })
  }


}
