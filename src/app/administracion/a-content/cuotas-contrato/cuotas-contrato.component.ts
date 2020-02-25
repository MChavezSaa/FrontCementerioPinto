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

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private service: BackendServiceService) { }

  contratoParams: pagosMantencion[] = [];
  pagosMantencion1: pagosMantencion[] = [];
  contratoParams2: pagoDerecho[] = [];
  

  ngOnInit() {
    this.pagosMantencion1=[];
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getCuotasMantencion(id).subscribe((fun) => {
          this.contratoParams = fun
          
          for(let i =0 ; i< this.contratoParams.length; i++){
            if(this.contratoParams[i].estadoCuota_Mantencion== false){
                this.pagosMantencion1.push(this.contratoParams[i]);
            }
        }          
        })

        this.service.getCuotasDerecho(id).subscribe((fun2) => {
          this.contratoParams2 = fun2
          console.log(this.contratoParams2);
          console.log(this.pagosMantencion1);
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
              //this.router.navigate(['/administracion-inicio/CuotasContratoComponent/'+id2]);
             
           
              Swal.fire('Cuota pagada', `Cuota pagada con Exito`, 'success');
             this.ngOnInit(); 
              
            // this.router.navigate(['/administracion-inicio/CuotasContratoComponent/'+ id2]);

              //this.funcionarioParams = null;
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
              //this.router.navigate(['/administracion-inicio/CuotasContratoComponent/'+id2]);
              Swal.fire('Cuota pagada', `Cuota pagada con Exito`, 'success');              
              //this.funcionarioParams = null;
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
      this.service.renovarCuotaMantencion(id2).subscribe(fun =>{
        console.log('renovadas las cuotas');
        this.ngOnInit();
      });

    }
    )
   
  }


}
