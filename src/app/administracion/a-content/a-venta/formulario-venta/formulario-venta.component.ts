import { Component, OnInit } from '@angular/core';
import { Cementerio } from 'src/app/Entidades/Cementerio';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoTumba } from 'src/app/Entidades/TipoTumba';
import { Tumba } from 'src/app/Entidades/Tumba';
import { Patio } from 'src/app/Entidades/Patio';
import Swal from 'sweetalert2';
import { Cliente } from 'src/app/Entidades/Cliente';
import { pagoDerecho } from 'src/app/Entidades/pagoDerecho';
import { Funcionario } from 'src/app/Entidades/Funcionario';


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
  clienteList: Cliente[] =[];
  funcionarioList: Funcionario[]= [];


  pagoDerecho :pagoDerecho;

  formContrato: FormGroup;
  formDerecho: FormGroup;

  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router:Router) { 
      this.formContrato = this.formBuilder.group({
        funcionario: ['', [Validators.required]],
        fecha_Inscripcion_Derecho:['', [Validators.required]] ,
        cementerio:['', [Validators.required]],
        tipo_Tumba:['', [Validators.required]],
        ancho:['', [Validators.required]],
        largo:['', [Validators.required]],
        patio:['', [Validators.required]],
        tumba:['', [Validators.required]],
        cliente:['', [Validators.required]],
        medioPago:['', [Validators.required]],
        valorTerreno:['', [Validators.required]],
        pagoInicial:['', [Validators.required]],
        nCuotas:['', [Validators.required]],
        vCuotas:['', [Validators.required]]
        
  //lala
    }); 
    }

  ngOnInit() {
    this.service.getCementerio().subscribe(cementerioList1 => this.cementerioList = cementerioList1);
    this.service.getTipoTumba().subscribe(tipoTumbaList1 => this.tipoTumbaList = tipoTumbaList1);
    this.service.getTumba().subscribe(tumbaList1 => this.tumbaList = tumbaList1);
    this.service.getPatio().subscribe(patioList1 => this.patioList = patioList1);
    this.service.getClientes().subscribe(clienteList1 => this.clienteList = clienteList1);
    this.service.getFuncionarios().subscribe(funcionarioList1 => this.funcionarioList = funcionarioList1);

  }

  public createVenta():void{
    
    this.pagoDerecho.fechaPago_Derecho
    this.pagoDerecho.valorCuota_Derecho
    this.pagoDerecho.Derecho
    this.service.saveContrato(this.formContrato.value).subscribe(
      contrato => {   
       //ver como tomar valor de nombre para funcion swal
       Swal.fire('Nuevo', `Contrato ${contrato} creado con Exito`, 'success');    
       //this.router.navigate(['/administracion-inicio/']);  
     },
     err=>{
       console.log(err)
     }
   );
  }
}


/*
 this.service.saveTumba(this.formTumba.value)
      .subscribe();
    //guardamos segundo form y mostramos alert de success
    

*/