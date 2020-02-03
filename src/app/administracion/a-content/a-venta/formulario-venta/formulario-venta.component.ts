import { Component, OnInit, ɵConsole, OnChanges } from '@angular/core';
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

  cementerioList: Cementerio[] = [];
  tipoTumbaList: TipoTumba[] = [];
  tumbaList: Tumba[] = [];
  tumbaListAux: Tumba[] = [];
  patioList: Patio[] = [];
  clienteList: Cliente[] = [];
  funcionarioList: Funcionario[] = [];
  terrenoList: Terreno[] = [];

  Show: Boolean = true;
  doble: Boolean = false;
  mostrarCliete : Boolean= false;
  mostrarCuota : Boolean = false;

  valorCuota: number = 0;
  pagoDerecho: pagoDerecho;
  tumba1: Tumba;
  tumba2: Tumba;


  // formContrato: FormGroup;
  private contrato2: any = new Contrato();


  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router: Router) {
      this.contrato2.tipoTumba= 0;
      this.contrato2.funcionario =0;
      this.contrato2.cliente =0;
      this.contrato2.cementerio=0;
      this.contrato2.terreno=0;
      this.contrato2.patio=0;
      this.contrato2.tumba=0;
      this.contrato2.medio_Pago=0;
     
  }

  ngOnInit() {
    this.service.getCementerio().subscribe(cementerioList1 => this.cementerioList = cementerioList1);
    this.service.getTipoTumba().subscribe(tipoTumbaList1 => this.tipoTumbaList = tipoTumbaList1);
    this.service.getfreeTumbs().subscribe(tumbaList1 => this.tumbaList = tumbaList1);
    this.service.getPatio().subscribe(patioList1 => this.patioList = patioList1);
    this.service.getClientes().subscribe(clienteList1 => this.clienteList = clienteList1);
    this.service.getTerreno().subscribe(terrenoList1 => this.terrenoList = terrenoList1);
    this.service.getFuncionarios().subscribe(funcionarioList1 => this.funcionarioList = funcionarioList1);
  }

  doble1(tipoTumba: TipoTumba){
    if(tipoTumba.nombretipo_tumba=="Doble"){
      this.doble=true;
    }else{
      this.doble=false;
    }
  }

  calcularValorCuota() {
    var nroCuotas = this.contrato2.n_Cuotas
    var valTerr = this.contrato2.valor_Terreno
    var pie = this.contrato2.pagoInicial
    var resto = valTerr - pie;
    var valCuotas = resto / nroCuotas;
    this.contrato2.VCuotas = valCuotas;
    this.valorCuota = valCuotas;
  }

  returnCuota() {
    return this.valorCuota;
  }
  saveContrato2() {
    if(this.doble==true){
  
    let tumbasString  = this.tumba1.id_tumba+"-"+this.tumba2.id_tumba;
     this.contrato2.tumba= tumbasString;
    }else{
     this.contrato2.tumba= this.tumba1.id_tumba;
    }
   
    this.service.saveContrato(this.contrato2).subscribe(
      contrato => {
        //ver como tomar valor de nombre para funcion swal
        console.log(this.contrato2)
        Swal.fire('Nuevo Contrato', `Contrato creado con Exito`, 'success');
        this.router.navigate(['/administracion-inicio/AVentas']);
      },
      err => {
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
        this.router.navigate(['/administracion-inicio/AVentas']);
      }
    })
  }

  mostrarClientes(){
    if(this.contrato2.cliente!= null){
        this.mostrarCliete = true;
    }else{
      this.mostrarCliete=false;
    }
  }
  mostrarCuotas(){
    if(this.contrato2.n_Cuotas>0){
      this.mostrarCuota= true;
    }else{
      this.mostrarCuota=false;
    }
  }

  fun(id: number) {
    this.tumbaListAux = [];
    for (let i = 0; i < this.tumbaList.length; i++) {
      if (this.tumbaList[i].patio.id_Patio == id && this.tumbaList[i].estado_Tumba == "Disponible") {
        this.tumbaListAux.push(this.tumbaList[i]);
      }
    }
  }
}

