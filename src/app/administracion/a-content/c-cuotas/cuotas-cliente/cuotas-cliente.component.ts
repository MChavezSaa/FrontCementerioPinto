import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { pagosMantencion } from 'src/app/Entidades/PagosMantencion';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { pagoDerecho } from 'src/app/Entidades/pagoDerecho';

@Component({
  selector: 'app-cuotas-cliente',
  templateUrl: './cuotas-cliente.component.html',
  styleUrls: ['./cuotas-cliente.component.css']
})
export class CuotasClienteComponent implements OnInit {

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
  volver() {
    this.router.navigate(['/administracion-inicio/CCuotas/']);
  }


}
