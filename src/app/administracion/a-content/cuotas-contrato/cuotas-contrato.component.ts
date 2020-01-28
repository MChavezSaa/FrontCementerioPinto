import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { pagosMantencion } from 'src/app/Entidades/PagosMantencion';
import { pagoDerecho } from 'src/app/Entidades/pagoDerecho';

@Component({
  selector: 'app-cuotas-contrato',
  templateUrl: './cuotas-contrato.component.html',
  styleUrls: ['./cuotas-contrato.component.css']
})
export class CuotasContratoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private service: BackendServiceService) { }
    contratoParams: pagosMantencion[] =  [];
    contratoParams2 : pagoDerecho[] = [];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getCuotasMantencion(id).subscribe((fun) => {this.contratoParams = fun
        console.log(this.contratoParams);
        })        
        this.service.getCuotasDerecho(id).subscribe((fun2) => {this.contratoParams2 = fun2
          console.log(this.contratoParams2);
          })        
        
      }      
    })    
        
  }
  public cargarFuncionario(): void {
  
  }
}
