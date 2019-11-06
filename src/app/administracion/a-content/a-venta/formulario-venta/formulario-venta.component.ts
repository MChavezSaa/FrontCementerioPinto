import { Component, OnInit, ɵConsole } from '@angular/core';
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
import { Terreno } from 'src/app/Entidades/Terreno';
import { Contrato } from '../../../../Entidades/Contrato';


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
  terrenoList: Terreno[]=[];


  pagoDerecho :pagoDerecho;

 // formContrato: FormGroup;
  private contrato2 :Contrato = new Contrato();
  

  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router:Router) { 
    /*  this.formContrato = this.formBuilder.group({
        funcionario: ['', [Validators.required]],
        fecha_Ingreso_Venta:['', [Validators.required]] ,
        cementerio:['', [Validators.required]],
        terreno: ['', [Validators.required]],
        patio:['', [Validators.required]],
        tipo_Tumba:['', [Validators.required]],
        tumba:['', [Validators.required]],
       
        cliente:['', [Validators.required]],
        medioPago:['', [Validators.required]],
        valorTerreno:['', [Validators.required]],
        pagoInicial:['', [Validators.required]],
        nCuotas:['', [Validators.required]],
        vCuotas:['', [Validators.required]],
        diaPago:['', [Validators.required]]
        
    }); */
    }

  ngOnInit() {
    this.service.getCementerio().subscribe(cementerioList1 => this.cementerioList = cementerioList1);
    this.service.getTipoTumba().subscribe(tipoTumbaList1 => this.tipoTumbaList = tipoTumbaList1);
    this.service.getTumba().subscribe(tumbaList1 => this.tumbaList = tumbaList1);
    this.service.getPatio().subscribe(patioList1 => this.patioList = patioList1);
    this.service.getClientes().subscribe(clienteList1 => this.clienteList = clienteList1);
    this.service.getTerreno().subscribe(terrenoList1 => this.terrenoList = terrenoList1);
    this.service.getFuncionarios().subscribe(funcionarioList1 => this.funcionarioList = funcionarioList1);
    
  }

  
  
   saveContrato2(){
    this.service.saveContrato(this.contrato2).subscribe(
      contrato => {   
        //ver como tomar valor de nombre para funcion swal
        console.log(this.contrato2)
        Swal.fire('Nuevo Contrato', `Contrato creado con Exito`, 'success');    
        //this.router.navigate(['/administracion-inicio/Aclientes']);  
      },
      err=>{
        console.log(err)
      } 
    );

  }

  public cancelarVenta() {
    Swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Ingreso de Venta?',

      confirmButtonText: 'Yes ',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/administracion-inicio/Afuncionarios']);
      }
    })
  }


}

