import { Component, OnInit } from '@angular/core';
import { Cementerio } from 'src/app/Entidades/Cementerio';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoTumba } from 'src/app/Entidades/TipoTumba';
import { Tumba } from 'src/app/Entidades/Tumba';
import { Patio } from 'src/app/Entidades/Patio';
import Swal from 'sweetalert2';
import { Cliente } from 'src/app/Entidades/Cliente';
import { pagoDerecho } from 'src/app/Entidades/pagoDerecho';
import { Funcionario } from 'src/app/Entidades/Funcionario';
import { Terreno } from 'src/app/Entidades/Terreno';
import { Contrato } from '../../../../Entidades/Contrato';
import swal from 'sweetalert2';
import { element } from 'protractor';

@Component({
  selector: 'app-formulario-editarventa',
  templateUrl: './formulario-editarventa.component.html',
  styleUrls: ['./formulario-editarventa.component.css']
})
export class FormularioEditarventaComponent implements OnInit {
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
  mostrarCliente: Boolean = false;
  mostrarCuota: Boolean = false;
  tumba1: any = new Tumba();
  tumba2: any = new Tumba();
  valorCuota: number =0;
  pagoDerecho: pagoDerecho;

  public contrato2: any = new Contrato();

  constructor(public service: BackendServiceService, public formBuilder: FormBuilder,
    public router: Router, public activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.valorCuota = this.contrato2.VCuotas;
    this.Show = true
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getClientes().subscribe(clienteList1 => {
          this.clienteList = clienteList1

          this.service.getContratoPorID(id).subscribe(con => {
            this.contrato2 = con;
            this.service.getTumba().subscribe(tumbaList1 => {
              this.tumbaList = tumbaList1
              if (this.contrato2.tipoTumba.nombretipo_tumba == "Doble") {
                this.doble = true;
                let str = this.contrato2.tumba;
                let tumbas = str.split("-");
                
                for (let i = 0; i < this.tumbaList.length; i++) {
                  if (tumbas[0] == this.tumbaList[i].id_tumba) {
                    this.tumba1 = this.tumbaList[i];
                    
                  }
                  if (Number(tumbas[1]) == this.tumbaList[i].id_tumba) {
                    this.tumba2 = this.tumbaList[i];
                    
                  }
                }
  
              } else {
                this.doble = false;
                this.tumba1 = this.tumbaList[Number(this.contrato2.tumba)];
              }  
            });        

            this.clienteList.forEach(element => {
              if (element.id_Cliente == con.cliente.id_Cliente) {
                this.contrato2.cliente = element;
              }
            });
            this.service.getCementerio().subscribe(cementerioList1 => this.cementerioList = cementerioList1);
            this.service.getTipoTumba().subscribe(tipoTumbaList1 => this.tipoTumbaList = tipoTumbaList1);

            this.service.getPatio().subscribe(patioList1 => this.patioList = patioList1);
            this.service.getTerreno().subscribe(terrenoList1 => this.terrenoList = terrenoList1);
            this.service.getFuncionarios().subscribe(funcionarioList1 => this.funcionarioList = funcionarioList1);
          })
        });


      }
    });

  }


  doble1(tipoTumba: TipoTumba) {
    if (tipoTumba.nombretipo_tumba == "Doble") {
      this.doble = true;
    } else {
      this.doble = false;
    }
  }

  public updateContrato(): void {
    

    this.service.updateContrato(this.contrato2, this.contrato2.id_contrato)
      .subscribe(
        json => {
          this.router.navigate(['/administracion-inicio/AVentas']);
          swal.fire('Contrato Actualizado', `Se ha actualizado el contrato con Exito`, 'success');
          this.contrato2 = null;
        },
        err => {
          console.log(err);
        });
  }


  public updateContrato2(): void {
    let id;

    this.activatedRoute.params.subscribe(params => {
      id = params['id'];
    });

    this.service.updateContrato(this.contrato2,
      id)
      .subscribe(
        json => {
          this.router.navigate(['/administracion-inicio/AVentas']);
          Swal.fire('Contrato Actualizada', `Contrato actualizado con exito`, 'success');
          this.contrato2 = null;
        },
        err => {
          console.log(err);
        });
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
    this.service.saveContrato(this.contrato2).subscribe(
      contrato => {        
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


}
