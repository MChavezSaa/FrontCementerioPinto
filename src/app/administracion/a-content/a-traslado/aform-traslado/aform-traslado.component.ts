import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Difunto } from 'src/app/Entidades/Difunto';
import { Funcionario } from 'src/app/Entidades/Funcionario';
import { Traslado } from 'src/app/Entidades/Traslado';
import { Contrato } from 'src/app/Entidades/Contrato';
import { TumbaDifunto } from 'src/app/Entidades/TumbaDifunto';

@Component({
  selector: 'app-aform-traslado',
  templateUrl: './aform-traslado.component.html',
  styleUrls: ['./aform-traslado.component.css']
})
export class AformTrasladoComponent implements OnInit {

  formTraslado: FormGroup;
  difuntoTraslado: Difunto;


  difuntoAux: Difunto;
  traslado: Traslado;
  contratoBuscado: TumbaDifunto = new TumbaDifunto();

  //id_Traslado: number;
  nombreC_Solicitante: string;
  rut_Solicitante: string;
  direccion_Solicitante: string;
  fecha_Traslado: Date;
  tipoDeCambio2: string;//interno-externo
  lugarviejo: string;
  lugarnuevo: string;
  observaciones: string;
  nombreClienteAutorizado: string;
  nombreFamiliarAutorizado: string;

  cambiodesde: boolean = false;
  cambiohacia: boolean = false;
  contratoList: Contrato[] = [];
  contratoListAux: Contrato[] = [];
  funcionario1: Funcionario;
  nuevoContratoTumba: Contrato;
  lugarNuevo3: Contrato;
  constructor(public service: BackendServiceService, public formBuilder: FormBuilder,
    public router: Router, public activatedRoute: ActivatedRoute, ) {
    this.difuntoTraslado = new Difunto();

    this.formTraslado = this.formBuilder.group({

      //rut_Solicitante: ['', [Validators.required, Validators.pattern(/^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/)]],
      //nombreC_Solicitante: ['', [Validators.required, Validators.minLength(3)]],
      //direccion_Solicitante: ['', [Validators.required, Validators.minLength(3)]],
      fecha_Traslado: ['', [Validators.required]],
      tipoDeCambio: ['', [Validators.required]],
      lugarviejo: [''],
      lugarnuevo: [''],      
      observaciones: ['', [Validators.required]],
    });

  }



  ngOnInit() {
    this.cargarDifunto();
  }


  public cargarDifunto(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getDifuntoPorID(id).subscribe((fun) => this.difuntoTraslado = fun);
        this.service.getDifuntoPorID(id).subscribe((fun1) => this.difuntoAux = fun1);
        this.service.findContratoPorDifunto1(id).subscribe(fun => {
          this.contratoBuscado = fun
          this.nombreClienteAutorizado = this.contratoBuscado.contrato.cliente.nombres_Cliente + " " + this.contratoBuscado.contrato.cliente.apellidoP_Cliente + " " + this.contratoBuscado.contrato.cliente.apellidoM_Cliente;
          this.nombreFamiliarAutorizado = this.contratoBuscado.contrato.cliente.nombres_Familiar + " " + this.contratoBuscado.contrato.cliente.apellidoP_Familiar + " " + this.contratoBuscado.contrato.cliente.apellidoM_Familiar;

        });
        this.service.getContrato().subscribe(fun => {
          let contratoLista = fun;
          for (let i = 0; i < contratoLista.length; i++) {
            if (this.contratoBuscado.contrato.cliente.id_Cliente == contratoLista[i].cliente.id_Cliente) {
              this.contratoList.push(contratoLista[i]);
            }
          }
        });
      }
    })
  }
  public cancelarTraslado() {
    Swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Traslados?',

      confirmButtonText: 'Yes ',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/administracion-inicio/ADifuntos']);
      }
    })
  }

  createDifunto() {
    //this.cargarDifunto();
    let t2 = this.formTraslado.value;
    t2.difunto = this.difuntoAux;
    if (this.tipoDeCambio2 == "Interno") {
      let FD = new Date(this.difuntoAux.fecha_Defuncion).getTime();
      let FT = new Date(t2.fecha_Traslado).getTime();     
      if (FT > FD) {
        this.service.saveTraslado(t2)          
          .subscribe(
            cliente => {
              this.router.navigate(['/administracion-inicio/ADifuntos']);
              Swal.fire('Traslado creado con exito', 'Registro exitoso!', 'success');
              
            },
            err => {
              console.log(err)
            }
          );
      } else {
        Swal.fire('Fecha Traslado Erronea', 'Fecha de traslado no puede ser menor a fecha de defuncion del difunto', 'error');
      }

    } else {
      this.difuntoAux.estadoDifunto = "Traslado";
      let FD = new Date(this.difuntoAux.fecha_Defuncion).getTime();
      let FT = new Date(t2.fecha_Traslado).getTime();
      if (FT > FD) {
        this.service.saveTraslado2(new Traslado(null, t2.nombreC_Solicitante, t2.rut_Solicitante, t2.direccion_Solicitante,
          t2.fecha_Traslado, t2.tipoDeCambio, t2.lugarviejo, t2.lugarnuevo, t2.observaciones, this.difuntoAux))
          .subscribe(
            cliente => {
              this.router.navigate(['/administracion-inicio/ADifuntos']);
              Swal.fire('Traslado creado con exito', 'Registro exitoso!', 'success');
            },
            err => {
              console.log(err)
            }
          );
      } else {
        Swal.fire('Fecha Traslado Erronea', 'Fecha de traslado no puede ser menor a fecha de defuncion del difunto', 'error');
      }
    }
  }

  internovar: boolean = false;
  tipoCambio(cambio: string) {
    if (cambio == "Interno") {
      this.internovar = true;
      this.cambiodesde = false;
      this.cambiohacia = false;
    } else {
      if (cambio == "Externo") {
        this.internovar = false;
        this.cambiodesde = true;
        this.cambiohacia = true;
      } else {
        this.internovar = false;
        this.cambiodesde = false;
        this.cambiohacia = false;
      }
    }
  }


}
