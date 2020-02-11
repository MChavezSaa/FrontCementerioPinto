import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormGroup } from '@angular/forms';
import { TumbaDifunto } from 'src/app/Entidades/TumbaDifunto';
import { Difunto } from 'src/app/Entidades/Difunto';
import { Contrato } from 'src/app/Entidades/Contrato';
import { Cliente } from 'src/app/Entidades/Cliente';
import { Tumba } from 'src/app/Entidades/Tumba';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-aformulario-sepultura',
  templateUrl: './aformulario-sepultura.component.html',
  styleUrls: ['./aformulario-sepultura.component.css']
})
export class AFormularioSepulturaComponent implements OnInit {

  formSepultura: FormGroup;
  //sepulturaParams: TumbaDifunto = new TumbaDifunto();

  mostrarDifunto: Boolean = false;
  mostrarContrato2: Boolean = false;
  mostrarContrato3: Boolean = false;
  DifuntosList: Difunto[] = [];
  contratosList: Contrato[] = [];
  contratosListAux: Contrato[] = []
  contratosListAux2: Contrato[] = []
  clientesList: Cliente[] = [];
  tumbaDifuntos : TumbaDifunto[] =[];

  sepultura2: any = new TumbaDifunto();
  clienteAux: any;
  cont : number=0;

  constructor(private service: BackendServiceService,
    private router: Router, private activatedRoute: ActivatedRoute) {
    this.sepultura2.difunto = 0;
    this.sepultura2.tumba = 0;
    this.sepultura2.contrato = 0;
    this.sepultura2.fecha_Entierro_TD = 0;
    //this.clienteAux=0;
  }

  ngOnInit() {
    this.service.getClientes().subscribe(r2 => {
      this.clientesList = r2;
     // this.service.getTumbaDifunto().subscribe(fun => this.tumbaDifuntos = fun);
    });
    this.service.getContrato().subscribe(fun => {
      this.contratosList = fun;
   //   console.log(this.contratosList)
      this.service.getDifuntos().subscribe(response => {
        this.DifuntosList = response;

      });
    });


  }


  public cancelarSepultura() {
    swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Ingreso de Sepulturas?',

      confirmButtonText: 'Yes ',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/administracion-inicio/ASepultura']);
      }
    })
  }



  mostrarDifuntos() {

    if (this.sepultura2.difunto != null) {
      this.mostrarDifunto = true;
      
    } else {
      this.mostrarDifunto = false;
    }
  }
  mostrarContratos() {
 //   console.log(this.clienteAux);

    if (this.clienteAux != null) {
      this.mostrarContrato2 = true;     
    } else {
      this.mostrarContrato2 = false;
    }
  }



  mostrarDatosContrato() {
    if (this.sepultura2.contrato != null) {
      this.mostrarContrato3 = true;
      for(let i =0; i<this.tumbaDifuntos.length; i++){
        if(this.tumbaDifuntos[i].contrato.tumba == this.sepultura2.contrato.tumba){
          this.cont= this.cont+1;
         // console.log(this.cont);
        }
      }
    } else {
      this.mostrarContrato3 = false;
    }
  }
  saveTumbaDifunto(){
    this.sepultura2.tumba=  this.sepultura2.contrato.tumba;
    this.sepultura2.fecha_Entierro_TD = new Date();

    console.log(this.sepultura2);
    
  }
  public create():void{
    
    this.sepultura2.tumba=  this.sepultura2.contrato.tumba;
    this.sepultura2.fecha_Entierro_TD = new Date();
    console.log(this.sepultura2);
    this.service.saveTumbaDifunto(this.sepultura2)
      .subscribe(
      cementerio => {
        
        //ver como tomar valor de nombre para funcion swal ${document.getElementById("nombre_Cementerio")}
          Swal.fire('Cambio Realizado', `Contraseña cambiada con Exito`, 'success');    
        this.router.navigate(['/administracion-inicio/ASepultura']); 
        
      },
      err=>{
        console.log(err)
      }
    );
  }



}
