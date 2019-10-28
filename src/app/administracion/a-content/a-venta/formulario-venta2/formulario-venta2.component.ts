import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Router } from '@angular/router';
import { Derecho } from 'src/app/Entidades/Derecho';

@Component({
  selector: 'app-formulario-venta2',
  templateUrl: './formulario-venta2.component.html',
  styleUrls: ['./formulario-venta2.component.css']
})
export class FormularioVenta2Component implements OnInit {
  formDerecho: FormGroup;

  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router:Router) { 
    this.formDerecho = this.formBuilder.group({
      fecha_Inscripcion_Derecho:['', [Validators.required]] ,
       fecha_Pago_Derecho:['', [Validators.required]] ,
       valor_Cuota_Derecho:['', [Validators.required]] ,
       numero_Cuotas_Derecho:['', [Validators.required]] ,
       medio_Pago:['', [Validators.required]] ,
       pago_Inicial:['', [Validators.required]] 
       //cliente....
    });
   }

  ngOnInit() {
  }
  derechoStorage :Derecho[];
  guardarStorage(){
    this.derechoStorage = this.formDerecho.value;
    console.log(this.derechoStorage);
    localStorage.setItem("derecho",JSON.stringify(this.derechoStorage));
  }

  public createDerecho():void{
    //guardamos primer form 
    this.service.saveDerecho(this.formDerecho.value)
      .subscribe();
    //guardamos segundo form y mostramos alert de success
   // this.service.saveDerecho(this.formDerecho.value).subscribe(
     //  derecho => {   
        //ver como tomar valor de nombre para funcion swal
       // Swal.fire('Nueva', `Venta ${derecho} creada con Exito`, 'success');    
       // this.router.navigate(['/administracion-inicio/']);  
     // },
     // err=>{
       // console.log(err)
     // }
    //);
  }
}
