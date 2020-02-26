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
  tipoTumbaListAux: TipoTumba[] = [];
  tumbaList: Tumba[] = [];
  tumbaListAux: Tumba[] = [];
  patioList: Patio[] = [];
  clienteList: Cliente[] = [];
  funcionarioList: Funcionario[] = [];
  terrenoList: Terreno[] = [];
  nichoList: Tumba[] = [];
  NivelList : any[] = [1,2,3];
  Show: Boolean = true;
  doble: Boolean = false;
  paraNicho: Boolean = false;
  mostrarCliente: Boolean = false;
  mostrarCuota: Boolean = false;
  mostrarNicho: Boolean = false;

  valorCuota: number = 0;
  pagoDerecho: pagoDerecho;
  tumba1: Tumba;
  tumba2: Tumba;
  nivelNicho: any;

  formContrato: FormGroup;

  private contrato2: any = new Contrato();

  constructor(private service: BackendServiceService,
    private formBuilder: FormBuilder,
    private router: Router) {

    this.contrato2.tipoTumba = 0;
    this.contrato2.funcionario = 0;
    this.contrato2.cliente = 0;
    this.contrato2.cementerio = 0;
    this.contrato2.terreno = 0;
    this.contrato2.patio = 0;
    this.contrato2.tumba = 0;
    this.contrato2.medio_Pago = 0;
    

    this.formContrato = this.formBuilder.group({
      funcionario: ['', [Validators.required]],
      fecha_Ingreso_Venta: ['', [Validators.required]],
      cementerio: ['', [Validators.required]],
      terreno: ['', [Validators.required]],
      patio: ['', [Validators.required]],
      tipoTumba: ['', [Validators.required]],
      tumba: ['', [Validators.required]],
      tumba1: ['', [Validators.required]],
      tumba2: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
      medio_Pago: ['', [Validators.required]],
      valor_Terreno: ['', [Validators.required]],
      pagoInicial: ['', [Validators.required]],
      n_Cuotas: ['', [Validators.required]],
      fecha_Pago: ['', [Validators.required]],
      nivelNicho: ['', [Validators.required]],
      numeroNicho: ['', [Validators.required]],
    })

    /*
  VCuotas: number
   */
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

  doble1(contrato: Contrato) {
    if (contrato.tipoTumba.nombretipo_tumba == "Doble") {
      this.doble = true;
      this.paraNicho = false;
    } else {
      if (contrato.tipoTumba.nombretipo_tumba == "Nicho") {
        this.paraNicho = true;
        this.doble = false;
      } else {
        this.paraNicho = false;
        this.doble = false;
      }
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
    if (this.doble == true) {

      let tumbasString = this.tumba1.id_tumba + "-" + this.tumba2.id_tumba;
      this.contrato2.tumba = tumbasString;
    } else {
      this.contrato2.tumba = this.tumba1.id_tumba;
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



  mostrarClientes() {
    if (this.contrato2.cliente != null) {
      this.mostrarCliente = true;
    } else {
      this.mostrarCliente = false;
    }
  }
  mostrarCuotas() {
    if (this.contrato2.n_Cuotas > 0) {
      this.mostrarCuota = true;
    } else {
      this.mostrarCuota = false;
    }
  }

  /*
  if (this.tumbaList[i].patio.id_Patio == patio.id_Patio
        && this.tumbaList[i].estado_Tumba == "Disponible") {
        this.tumbaListAux.push(this.tumbaList[i]);
      } */

  fun() {
    console.log(this.contrato2.patio.nombre_Patio)
    
    this.tumbaListAux = [];
    this.tipoTumbaListAux=[];    
    if (this.contrato2.patio.nombre_Patio == "Nichos Lote A") {            
      this.tipoTumbaListAux.push(this.tipoTumbaList[0]);
    } else {
      if (this.contrato2.patio.nombre_Patio == "Nichos Lote B") {                
        this.tipoTumbaListAux.push(this.tipoTumbaList[0]);
      } else {
        if (this.contrato2.patio.nombre_Patio == "Nichos Lote C") {          
          this.tipoTumbaListAux.push(this.tipoTumbaList[0]);
        } else {
          if (this.contrato2.patio.nombre_Patio == "Mausoleo A") {
            this.paraNicho= false;
            this.tipoTumbaListAux.push(this.tipoTumbaList[3]);
          } else {
            if (this.contrato2.patio.nombre_Patio == "Mausoleo B") {
              this.paraNicho= false;
              this.tipoTumbaListAux.push(this.tipoTumbaList[3]);
            } else {
              if (this.contrato2.patio.nombre_Patio == "Mausoleo C") {
                this.paraNicho= false;
                this.tipoTumbaListAux.push(this.tipoTumbaList[3]);
              } else {
                if (this.contrato2.patio.nombre_Patio == "Mausoleo D") {
                  this.paraNicho= false;
                  this.tipoTumbaListAux.push(this.tipoTumbaList[3]);
                }else{                  
                  this.paraNicho= false;
                  this.tipoTumbaListAux.push(this.tipoTumbaList[1]);
                  this.tipoTumbaListAux.push(this.tipoTumbaList[2]);
                }
              }
            }
          }
        }
      }
    }
    for (let i = 0; i < this.tumbaList.length; i++) {
      if (this.tumbaList[i].patio.nombre_Patio == this.contrato2.patio.nombre_Patio) {
        if (this.tumbaList[i].estado_Tumba == "Disponible") {
          this.tumbaListAux.push(this.tumbaList[i]);
        }
      }
    }
    console.log(this.tumbaListAux)
  }

  imprime(){
    console.log(this.nivelNicho);
    console.log(this.nichoList);
  }

  mostrarNichos() {
    this.nichoList = [];
    let cont = 1;
    if (cont <= 3) {
      for (let i = 0; i < this.tumbaList.length; i++) {
        if (this.tumbaListAux[i].nivel === this.nivelNicho) {          
          this.nichoList.push(this.tumbaListAux[i]);          
        }
      }
      cont++;
    }
    cont = 1;
  }


}
/**
 *
 *   if (patio.nombre_Patio == "Nichos Lote A") {
        if (this.tipoTumbaList[i].nombretipo_tumba == "Nicho") {
          this.tipoTumbaListAux = [];
          this.tipoTumbaListAux.push(this.tipoTumbaList[i]);
        }
      } else {
        else {
          if (patio.nombre_Patio == "Nichos Lote C") {
            if (this.tipoTumbaList[i].nombretipo_tumba == "Nicho") {
              this.tipoTumbaListAux = [];
              this.tipoTumbaListAux.push(this.tipoTumbaList[i]);
            }
          } else {
            if (patio.nombre_Patio == "Mausoleo A") {
              if (this.tipoTumbaList[i].nombretipo_tumba == "Mausoleos") {
                this.tipoTumbaListAux = [];
                this.tipoTumbaListAux.push(this.tipoTumbaList[i]);
              }
            } else {
              if (patio.nombre_Patio == "Mausoleo B") {
                if (this.tipoTumbaList[i].nombretipo_tumba == "Mausoleos") {
                  this.tipoTumbaListAux = [];
                  this.tipoTumbaListAux.push(this.tipoTumbaList[i]);
                }
              } else {
                if (patio.nombre_Patio == "Mausoleo C") {
                  if (this.tipoTumbaList[i].nombretipo_tumba == "Mausoleos") {
                    this.tipoTumbaListAux = [];
                    this.tipoTumbaListAux.push(this.tipoTumbaList[i]);
                  }
                } else {
                  if (patio.nombre_Patio == "Mausoleo D") {
                    if (this.tipoTumbaList[i].nombretipo_tumba == "Mausoleos") {
                      this.tipoTumbaListAux = [];
                      this.tipoTumbaListAux.push(this.tipoTumbaList[i]);
                    }
                  } else {
                    this.tipoTumbaListAux = [];
                    this.tipoTumbaListAux.push(this.tipoTumbaList[1]);
                    this.tipoTumbaListAux.push(this.tipoTumbaList[2]);
                  }
                }
              }
            }
          }
        }
      }
 */
