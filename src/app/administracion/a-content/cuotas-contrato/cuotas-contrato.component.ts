import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { pagosMantencion } from 'src/app/Entidades/PagosMantencion';

@Component({
  selector: 'app-cuotas-contrato',
  templateUrl: './cuotas-contrato.component.html',
  styleUrls: ['./cuotas-contrato.component.css']
})
export class CuotasContratoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private service: BackendServiceService) { }
    contratoParams: pagosMantencion[] =  [];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getCuotasMantencion(id).subscribe((fun) => this.contratoParams = fun)        
        console.log('dentro')
      }      
    })
    console.log('fuera');
        console.log(this.contratoParams);
  }
  public cargarFuncionario(): void {
  
  }
}
