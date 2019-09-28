import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'  //necesario para implementar rutas 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteContentComponent } from './cliente/cliente-content/cliente-content.component';
import { CConsideracionesComponent } from './cliente/cliente-content/c-consideraciones/c-consideraciones.component';
import { CMostrarCuotasComponent } from './cliente/cliente-content/c-mostrar-cuotas/c-mostrar-cuotas.component';
import { ELoginComponent } from './empleado/empleado-content/e-login/e-login.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoContentComponent } from './empleado/empleado-content/empleado-content.component';
import { EClientesComponent } from './empleado/empleado-content/e-clientes/e-clientes.component';
import { ETerrenosComponent } from './empleado/empleado-content/e-terrenos/e-terrenos.component';
import { EOccisosComponent } from './empleado/empleado-content/e-occisos/e-occisos.component';
import { EVerMapaTerrenoComponent } from './empleado/empleado-content/e-ver-mapa-terreno/e-ver-mapa-terreno.component';
import { ClienteHeaderComponent } from './cliente/cliente-header/cliente-header.component';
import { ClienteFooterComponent } from './cliente/cliente-footer/cliente-footer.component';
import { CMostrarTerrenosComponent } from './cliente/cliente-content/c-mostrar-terrenos/c-mostrar-terrenos.component';
import { EmpleadoHeaderComponent } from './empleado/empleado-header/empleado-header.component';
import { EmpleadoFooterComponent } from './empleado/empleado-footer/empleado-footer.component';
import { EReducccionComponent } from './empleado/empleado-content/e-reducccion/e-reducccion.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { AContentComponent } from './administracion/a-content/a-content.component';
import { AHeaderComponent } from './administracion/a-header/a-header.component';
import { AFooterComponent } from './administracion/a-footer/a-footer.component';
import { CTerrenosLibresComponent } from './cliente/cliente-content/c-terrenos-libres/c-terrenos-libres.component';
import { CReglamentoComponent } from './cliente/cliente-content/c-reglamento/c-reglamento.component';
import { ClienteEnfasisTerrenoComponent } from './cliente/cliente-content/cliente-enfasis-terreno/cliente-enfasis-terreno.component';
import { EFormOccisoComponent } from './empleado/empleado-content/e-occisos/e-form-occiso/e-form-occiso.component';

import { AFuncionarioComponent } from './administracion/a-content/afuncionario/afuncionario.component';
import { AFormularioFuncionarioComponent } from './administracion/a-content/afuncionario/aformulario-funcionario/aformulario-funcionario.component';
import { ATerrenosLibresComponent } from './administracion/a-content/aterrenos/aterrenos-libres/aterrenos-libres.component';
import { ATerrenosOcupadosComponent } from './administracion/a-content/aterrenos/aterrenos-ocupados/aterrenos-ocupados.component';
import { ATerrenosReservadosComponent } from './administracion/a-content/aterrenos/aterrenos-reservados/aterrenos-reservados.component';
import { AMarkerEnfasisComponent } from './administracion/a-content/aterrenos/amarker-enfasis/amarker-enfasis.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },   //como pagina de inicio se debe dejar la vista para los clientes
  {
    path: 'inicio', component: ClienteComponent,
    children: [
      {
        path: '',
        component: ClienteContentComponent
      },
      {
        path: 'preguntasFrecuentes',
        component: CConsideracionesComponent
      },
      {
        path: 'mostrarCuotas',
        component: CMostrarCuotasComponent
      },
      {
        path: 'mostrarTerrenos',
        component: CMostrarTerrenosComponent
      },
      {
        path: 'mostrarTerrenosLibres',
        component: CTerrenosLibresComponent
      },
      {
        path: 'MarkerEnfasis',
        component: ClienteEnfasisTerrenoComponent
      }
    ]
  },
  { path: 'personal', component: ELoginComponent },
  {
    path: 'personal-inicio', component: EmpleadoComponent,
    children: [
      {
        path: "",
        component: EmpleadoContentComponent
      },
      {
        path: "clientes",
        component: EClientesComponent
      },
      {
        path: "terrenos",
        component: ETerrenosComponent
      },
      {
        path: "occisos",
        component: EOccisosComponent
      },
      {
        path: "mapaTerrenos",
        component: EVerMapaTerrenoComponent
      },
      {
        path: "reduccion",
        component: EReducccionComponent
      },
      {
        path: "formularioOccisos",
        component: EFormOccisoComponent
      }
    ]
  },
  { path: 'administracion', component: ELoginComponent },
  { path: 'administracion-inicio', component: AdministracionComponent,
    children: [
      {
        path: "",
        component: AContentComponent
      },
      {
        path:"Afuncionarios",
        component:AFuncionarioComponent
      },
      {
        path:"AFormularioFuncionario",
        component: AFormularioFuncionarioComponent
      },
      {
        path: "Aclientes",
        component: EClientesComponent
      },
      {
        path: "Aterrenos",
        component: ETerrenosComponent
      },
      {
        path: "Aoccisos",
        component: EOccisosComponent
      },
      {
        path: "AmapaTerrenos",
        component: EVerMapaTerrenoComponent
      },
      {
        path: "Areduccion",
        component: EReducccionComponent
      },
      {
        path: "AformularioOccisos",
        component: EFormOccisoComponent
      },
      {
        path: 'ATerrenosLibres',
        component: ATerrenosLibresComponent
      },
      {
        path: 'ATerrenosOcupados',
        component: ATerrenosOcupadosComponent
      },
      {
        path: 'ATerrenosReservados',
        component: ATerrenosReservadosComponent
      },
      {
        path: 'AMarkerEnfasis',
        component: AMarkerEnfasisComponent
      }

    ]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteContentComponent,
    CMostrarCuotasComponent,
    CMostrarTerrenosComponent,
    CConsideracionesComponent,
    ClienteHeaderComponent,
    ClienteFooterComponent,
    EmpleadoComponent,
    EmpleadoContentComponent,
    ELoginComponent,
    ETerrenosComponent,
    EClientesComponent,
    EOccisosComponent,
    EVerMapaTerrenoComponent,
    EmpleadoHeaderComponent,
    EmpleadoFooterComponent,
    EReducccionComponent,
    AdministracionComponent,
    AContentComponent,
    AHeaderComponent,
    AFooterComponent,
    CTerrenosLibresComponent,
    CReglamentoComponent,
    ClienteEnfasisTerrenoComponent,
    EFormOccisoComponent,
    AFuncionarioComponent,
    AFormularioFuncionarioComponent,
    ATerrenosLibresComponent,
    ATerrenosOcupadosComponent,
    ATerrenosReservadosComponent,
    AMarkerEnfasisComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),    //se le entrega nuestro arreglo con las rutas definidas
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
