import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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

  mostrarDifunto: Boolean = false;//validacion change
  mostrarContrato2: Boolean = false;//validacion change
  mostrarContrato3: Boolean = false;//validacion change

  /*Arrays*/
  DifuntosList: Difunto[] = [];
  DifuntosListAux: Difunto[] = [];
  contratosList: Contrato[] = [];
  contratosListAux: Contrato[] = []
  contratosListAux2: Contrato[] = []
  clientesList: Cliente[] = [];
  tumbaDifuntos: TumbaDifunto[] = [];
  tumbaDifuntoParaCont: TumbaDifunto[] = [];
  /*Fin Arrays*/

  sepultura2: any = new TumbaDifunto();//objeto caja de bananas
  clienteAux: any;//cliente validacion
  cont: number = 0;//contador de uso de tumba 


  constructor(public service: BackendServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute, ) {

    this.sepultura2.difunto = 0;
    this.sepultura2.tumba = 0;
    this.sepultura2.contrato = 0;
    this.sepultura2.fecha_Entierro_TD = 0;
    this.clienteAux = 0;

    this.formSepultura = this.formBuilder.group({
      difunto: ['', [Validators.required]],
      contrato: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
      fecha_Entierro_TD: ['', [Validators.required]],
    });
  }


  ngOnInit() {
    this.service.getContratoDistinct().subscribe(r2 => {
      this.clientesList = r2;
      
      this.service.getContrato().subscribe(fun => {
        this.contratosList = fun;
       
        this.service.getDifuntos().subscribe(response => {
          this.DifuntosList = response;
         
          this.service.getTumbaDifunto().subscribe(response => {
            this.tumbaDifuntoParaCont = response;
            this.service.getDistinctDifuntos().subscribe(fun  =>{
              this.DifuntosListAux = fun;              
            });
          });
        });
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
    this.contratosListAux = [];
    if (this.clienteAux != null) {
      this.mostrarContrato2 = true;
      for (let i = 0; i < this.contratosList.length; i++) {
        if (this.clienteAux.id_Cliente == this.contratosList[i].cliente.id_Cliente) {
          this.contratosListAux.push(this.contratosList[i]);
        }
      }
      console.log(this.contratosListAux)
    } else {
      this.mostrarContrato2 = false;
    }
    this.cont = this.llenarCont();
  }

  llenarCont() {
    let array1: TumbaDifunto[] = [];
    let cont1 = 0;

    for (let i = 0; i < this.tumbaDifuntoParaCont.length; i++) {
      if (this.tumbaDifuntoParaCont[i].contrato.id_contrato == this.sepultura2.contrato.id_contrato) {
        array1.push(this.tumbaDifuntoParaCont[i]);
      }
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i].difunto.estadoDifunto == "Activo") {
        cont1 = cont1 + 1;
      }

    }
    let primero = this.sepultura2.contrato.tipoTumba.capacidad_tipo_tumba;
    return primero - cont1;
  }

  mostrarDatosContrato() {
    if (this.sepultura2.contrato != null) {
      this.mostrarContrato3 = true;
      for (let i = 0; i < this.tumbaDifuntos.length; i++) {
        if (this.tumbaDifuntos[i].contrato.tumba == this.sepultura2.contrato.tumba) {
          this.cont = this.cont + 1;
         
        }
      }
    } else {
      this.mostrarContrato3 = false;
    }
  }
  saveTumbaDifunto() {
    this.sepultura2.tumba = this.sepultura2.contrato.tumba;
    this.sepultura2.fecha_Entierro_TD = new Date();
    

  }
  create(): void {
    let fechaDef = new Date(this.sepultura2.difunto.fecha_Defuncion).getTime();
    
    let fechaEnt = new Date(this.sepultura2.fecha_Entierro_TD).getTime();
    
    if (fechaEnt > fechaDef) {
      this.sepultura2.tumba = this.sepultura2.contrato.tumba;
      
      this.service.saveTumbaDifunto(this.sepultura2)
        .subscribe(
          cementerio => {
            Swal.fire('Sepultura Realizada', `Sepultura realizada con Exito`, 'success');
            this.router.navigate(['/administracion-inicio/ASepultura']);
          },
          err => {
            console.log(err)
          }
        );
    } else {
      Swal.fire('Fecha de Entierro Incorrecta', `Fecha de entierro no puede ser menor a fecha de defunción del difunto`, 'error');
    }
  }


}
