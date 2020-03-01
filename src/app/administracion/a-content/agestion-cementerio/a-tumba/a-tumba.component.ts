import { Component, OnInit } from '@angular/core';
import { TipoTumba } from 'src/app/Entidades/TipoTumba';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-a-tumba',
  templateUrl: './a-tumba.component.html',
  styleUrls: ['./a-tumba.component.css']
})
export class ATumbaComponent implements OnInit {

  tipotumbaList2: TipoTumba[] = [];
  searchText8: string;

  constructor(public service: BackendServiceService) { }

  ngOnInit() {
    this.service.getTipoTumba().subscribe(tipotumbaList1 => this.tipotumbaList2 = tipotumbaList1);
  }

  public cambiaEstadoTipoTumba(tipoT: TipoTumba): void {
    this.service.cambiarEstadoTipoTumba(tipoT, tipoT.id_TipoTumba)
      .subscribe(
        json => {
          this.tipotumbaList2 = this.tipotumbaList2.filter(tipo => tipo !== tipoT)
          this.ngOnInit();
          Swal.fire('Cambio de Estado', ' Cambio de estado con Exito', 'success');
        },
        err => {
          console.log(err);
        });
  }

  delete(tipoT: TipoTumba) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea deshabilitar 
      el tipo de tumba  ${tipoT.nombretipo_tumba} ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Deshabilitar ',
      cancelButtonText: 'No, Cancelar ',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.deleteTipoTumba(tipoT.id_TipoTumba).subscribe(
          response => {
            this.tipotumbaList2 = this.tipotumbaList2.filter(ter => ter !== tipoT)
            this.ngOnInit();
            Swal.fire('Deshabilitado Satisfactoriamente',
              `Se cambio de estado el tipo de tumba ${tipoT.nombretipo_tumba}`,
              'success');
          }
        );
      }
    })
  }
}
