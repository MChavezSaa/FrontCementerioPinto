import { Component, OnInit } from '@angular/core';
import { Cementerio } from 'src/app/Entidades/Cementerio';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Terreno } from 'src/app/Entidades/Terreno';


@Component({
  selector: 'app-a-formulario-terreno',
  templateUrl: './a-formulario-terreno.component.html',
  styleUrls: ['./a-formulario-terreno.component.css']
})
export class AFormularioTerrenoComponent implements OnInit {

  cementerioList: Cementerio[] = [];
  formTerreno: FormGroup;
  terrenoParams: Terreno = new Terreno();

  constructor(private service: BackendServiceService, 
    private formBuilder: FormBuilder,
    private router: Router, 
    private activatedRoute: ActivatedRoute) {

    this.formTerreno = this.formBuilder.group({
      nombre_Terreno: ['', [Validators.required, Validators.minLength(3)]],
      capacidad_Terreno: ['', [Validators.required]],
      estado_Terreno: ['', [Validators.required]],
      cementerio: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.cargarTerreno();

    this.service.getCementerio().subscribe(cementerioList1 => this.cementerioList = cementerioList1);
  }

  public cargarTerreno(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getTerrenoxID(id).subscribe((patio) => this.terrenoParams = patio)
        console.log(this.terrenoParams);
        this.terrenoParams = null;
      }
    })
  }

  public update(): void {
    this.service.updateTerreno(this.formTerreno.value, this.terrenoParams.id_terreno)
      .subscribe(
        json => {
          this.router.navigate(['/administracion-inicio/AGTerreno']);
          Swal.fire('Terreno Actualizado', `Terreno ${json.nombre_Terreno} actualizado con exito`, 'success');
          this.terrenoParams = null;
        },
        err => {
          console.log(err);
        });
  }

  public createTerreno(): void {
    console.log(this.formTerreno.value);
    this.service.saveTerreno(this.formTerreno.value)
      .subscribe(
        terreno => {
          //ver como tomar valor de nombre para funcion swal
          Swal.fire('Nuevo Terreno', `Terreno creado con Exito`, 'success');
          this.router.navigate(['/administracion-inicio/AGTerreno']);
          this.terrenoParams = null;
        },
        err => {
          console.log(err)
        }
      );
  }

  public cancelarTerreno() {
    Swal.fire({
      title: 'Salir del formulario',
      type: 'warning',
      text: '¿Está seguro que desea salir del formulario de Ingreso de Terrenos?',

      confirmButtonText: 'Si ',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/administracion-inicio/AGTerreno']);
      }
    })
  }

}
