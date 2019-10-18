import { Component, OnInit } from '@angular/core';
import { Cementerio } from 'src/app/Entidades/Cementerio';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoTumba } from 'src/app/Entidades/TipoTumba';
import { Tumba } from 'src/app/Entidades/Tumba';
import { Patio } from 'src/app/Entidades/Patio';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-formulario-venta',
  templateUrl: './formulario-venta.component.html',
  styleUrls: ['./formulario-venta.component.css']
})
export class FormularioVentaComponent implements OnInit {
  cementerioList:Cementerio[] = [];
  tipoTumbaList:TipoTumba[] = [];
  tumbaList: Tumba[] = [];
  patioList: Patio[] =[];


  formTumba: FormGroup;
  formDerecho: FormGroup;

  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router:Router) { 
      this.formTumba = this.formBuilder.group({
        rut_Funcionario: ['', [Validators.required]] ,        
        numero_Tumba: ['', [Validators.required]] ,        
        valor_Tumba: ['', [Validators.required]] ,        
        orientacion_Tumba: ['', [Validators.required]] ,        
        largo: ['', [Validators.required]] ,        
        ancho: ['', [Validators.required]] ,
        funcionario:['', [Validators.required]] 
        //cliente....  
  
    }); 
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
    this.service.getCementerio().subscribe(cementerioList1 => this.cementerioList = cementerioList1);
    this.service.getTipoTumba().subscribe(tipoTumbaList1 => this.tipoTumbaList = tipoTumbaList1);
    this.service.getTumba().subscribe(tumbaList1 => this.tumbaList = tumbaList1);
    this.service.getPatio().subscribe(patioList1 => this.patioList = patioList1);


  }

  public createVenta():void{
    //guardamos primer form 
    this.service.saveFuncionario(this.formTumba.value)
      .subscribe();
    //guardamos segundo form y mostramos alert de success
    this.service.saveDerecho(this.formDerecho.value).subscribe(
       derecho => {   
        //ver como tomar valor de nombre para funcion swal
        Swal.fire('Nueva', `Venta ${derecho} creada con Exito`, 'success');    
        this.router.navigate(['/administracion-inicio/']);  
      },
      err=>{
        console.log(err)
      }
    );
  }
}