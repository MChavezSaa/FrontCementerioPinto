import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { pagosMantencion } from 'src/app/Entidades/PagosMantencion';
import { pagoDerecho } from 'src/app/Entidades/pagoDerecho';
import Swal from 'sweetalert2';
import { CuotasMantencion } from 'src/app/Entidades/CuotasMantencion';
@Component({
  selector: 'app-cuotas-contrato',
  templateUrl: './cuotas-contrato.component.html',
  styleUrls: ['./cuotas-contrato.component.css']
})
export class CuotasContratoComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, public router: Router,
    public service: BackendServiceService) { }

  contratoParams: pagosMantencion[] = [];
  pagosMantencion1: pagosMantencion[] = [];
  contratoParams2: pagoDerecho[] = [];
  pagosDerecho1: pagoDerecho[] = [];


  ngOnInit() {
    this.pagosMantencion1 = [];
    this.pagosDerecho1 = [];

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getCuotasMantencion(id).subscribe((fun) => {
          this.contratoParams = fun

          for (let i = 0; i < this.contratoParams.length; i++) {
            if (this.contratoParams[i].estadoCuota_Mantencion == false) {
              this.pagosMantencion1.push(this.contratoParams[i]);
            }
          }
        })

        this.service.getCuotasDerecho(id).subscribe((fun2) => {
          this.contratoParams2 = fun2
          for (let j =0; j<this.contratoParams2.length; j++) {
            if(this.contratoParams2[j].estadoCuota_Derecho==false){
              this.pagosDerecho1.push(this.contratoParams2[j]);
            }
          }
        })

      }
    })

  }

  public confirmarM(cuotasMantencion: pagosMantencion, id: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea pagar la cuota ${cuotasMantencion.id_PagosMantencion} ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Pagar',
      cancelButtonText: 'No, Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        let id2;

        this.activatedRoute.params.subscribe(params => {
          id2 = params['id'];

        }
        )
        this.service.updatePM(cuotasMantencion, id)
          .subscribe(
            json => {
              Swal.fire('Cuota pagada', `Cuota pagada con Exito`, 'success');
              this.ngOnInit();
            },
            err => {
              console.log(err);
            });

      }
    })

  }

  public confirmarD(cuotasDerecho: pagoDerecho, id: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Está seguro que desea pagar la cuota ${cuotasDerecho.id_PagosDerecho} del Derecho ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Pagar',
      cancelButtonText: 'No, Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        let id2;
        this.activatedRoute.params.subscribe(params => {
          id2 = params['id'];
        }
        )
        this.service.updatePD(cuotasDerecho, id)
          .subscribe(
            json => {            
              Swal.fire('Cuota pagada', `Cuota pagada con Exito`, 'success');              
              this.ngOnInit()
            },
            err => {
              console.log(err);
            });
      }
    })
  }

  volver() {
    this.router.navigate(['/administracion-inicio/AVentas/']);
  }
  public renovarMantencion(): void {
    let id2;

    this.activatedRoute.params.subscribe(params => {
      id2 = params['id'];
      this.service.renovarCuotaMantencion(id2).subscribe(fun => {
        console.log('renovadas las cuotas');
        this.ngOnInit();
      });

    }
    )

  }


  public renovarDerecho10(): void {
    let id2;

    this.activatedRoute.params.subscribe(params => {
      id2 = params['id'];
      this.service.renovarcuotasDerecho10(id2).subscribe(fun => {
        console.log('renovadas las cuotas derecho por 10');
        this.ngOnInit();
      });

    }
    )

  }

  public renovarDerecho20(): void {
    let id2;

    this.activatedRoute.params.subscribe(params => {
      id2 = params['id'];
      this.service.renovarcuotasDerecho20(id2).subscribe(fun => {
        console.log('renovadas las cuotas derecho por 20');
        this.ngOnInit();
      });

    }
    )

  }

}
