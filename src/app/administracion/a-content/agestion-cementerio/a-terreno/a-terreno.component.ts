import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Terreno } from 'src/app/Entidades/Terreno';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-a-terreno',
  templateUrl: './a-terreno.component.html',
  styleUrls: ['./a-terreno.component.css']
})
export class ATerrenoComponent implements OnInit {

  terrenoList2: Terreno[] = [];

  constructor(private service: BackendServiceService) { }

  ngOnInit() {
    this.service.getTerreno().subscribe(terrenoList1 => this.terrenoList2 = terrenoList1);
  }

  public cambiaEstadoTerreno(ter: Terreno): void {
    this.service.cambiarEstadoTerreno(ter, ter.id_terreno)
      .subscribe(
        json => {
          this.terrenoList2 = this.terrenoList2.filter(terr => terr !== ter)
          this.ngOnInit();
          Swal.fire('Cambio de Estado', ' Cambio de estado con Exito', 'success');
        },
        err => {
          console.log(err);
        });
  }

  delete(terreno: Terreno): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea eliminar el ${terreno.nombre_Terreno}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.service.deleteTerreno2(terreno.id_terreno).subscribe(
          response => {
            this.terrenoList2 = this.terrenoList2.filter(ter => ter !== terreno)
            this.ngOnInit();
            Swal.fire('Eliminado Satisfactoriamente',
              `Se elimino el ${terreno.nombre_Terreno}`,
              'success');
          }
        );
      }
    })
  }
}
