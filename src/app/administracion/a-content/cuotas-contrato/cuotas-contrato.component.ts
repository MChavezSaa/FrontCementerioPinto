import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { pagosMantencion } from 'src/app/Entidades/PagosMantencion';
import { pagoDerecho } from 'src/app/Entidades/pagoDerecho';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cuotas-contrato',
  templateUrl: './cuotas-contrato.component.html',
  styleUrls: ['./cuotas-contrato.component.css']
})
export class CuotasContratoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private router: Router,
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
  
  public pagarPM(cuota: pagosMantencion,id:number): void {
    let id2;
    this.activatedRoute.params.subscribe(params => {
     id2 = params['id'];
      }      
    ) 
    this.service.updatePM(cuota, id)
      .subscribe(
        json => {         
          //this.router.navigate(['/administracion-inicio/CuotasContratoComponent/'+id2]);
          Swal.fire('Cuota pagada', `Cuota pagada con Exito`, 'success');
          this.ngOnInit();
          
          //this.funcionarioParams = null;
        },
        err => {
          console.log(err);
        });
  }

  public pagarPD(cuota: pagoDerecho,id:number): void {
    let id2;
    this.activatedRoute.params.subscribe(params => {
     id2 = params['id'];
      }      
    ) 
    this.service.updatePD(cuota, id)
      .subscribe(
        json => {         
          //this.router.navigate(['/administracion-inicio/CuotasContratoComponent/'+id2]);
          Swal.fire('Cuota pagada', `Cuota pagada con Exito`, 'success');
          this.ngOnInit();
          
          //this.funcionarioParams = null;
        },
        err => {
          console.log(err);
        });
  }

  volver() {
    this.router.navigate(['/administracion-inicio/AVentas/']);
  }
  public cargarFuncionario(): void {
  
  }
}
