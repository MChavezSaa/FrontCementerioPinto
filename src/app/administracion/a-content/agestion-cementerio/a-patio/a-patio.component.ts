import { Component, OnInit } from '@angular/core';
import { Patio } from 'src/app/Entidades/Patio';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-a-patio',
  templateUrl: './a-patio.component.html',
  styleUrls: ['./a-patio.component.css']
})
export class APatioComponent implements OnInit {

  patioList2: Patio[] = [];
  searchText7: string;

  constructor(public service: BackendServiceService) { }

  ngOnInit() {
    this.service.getPatio().subscribe(patioList1 => this.patioList2 = patioList1);
  }

  public cambiaEstadoPatio(pat: Patio): void {
    this.service.cambiarEstadoPatio(pat, pat.id_Patio)
      .subscribe(
        json => {
          this.patioList2 = this.patioList2.filter(pati => pati !== pat)
          this.ngOnInit();
          Swal.fire('Cambio de Estado', ' Cambio de estado con Exito', 'success');
        },
        err => {
          console.log(err);
        });
  }

  delete(patio: Patio): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea eliminar el ${patio.nombre_Patio}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.deletePatio2(patio.id_Patio).subscribe(
          response => {
            this.patioList2 = this.patioList2.filter(pat => pat !== patio)
            this.ngOnInit();
            Swal.fire('Eliminado Satisfactoriamente',
              `Se elimino el ${patio.nombre_Patio}`,
              'success');
          }
        );
      }
    })
  }
}
