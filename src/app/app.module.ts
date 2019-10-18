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
import { ADifuntoComponent } from './administracion/a-content/a-difunto/a-difunto.component';
import { AFomularioDifuntoComponent } from './administracion/a-content/a-difunto/a-fomulario-difunto/a-fomulario-difunto.component';
import { EFormularioClientesComponent } from './empleado/empleado-content/e-clientes/e-formulario-clientes/e-formulario-clientes.component';
import { CReglamentoClientesComponent } from './cliente/cliente-content/creglamento-clientes/creglamento-clientes.component';
import { EVentaDerechoComponent } from './empleado/empleado-content/e-venta-derecho/e-venta-derecho.component';
import { EFormularioVentaComponent } from './empleado/empleado-content/e-venta-derecho/e-formulario-venta/e-formulario-venta.component';
import { AGestionCementerioComponent } from './administracion/a-content/agestion-cementerio/agestion-cementerio.component';
import { ACementerioComponent } from './administracion/a-content/agestion-cementerio/a-cementerio/a-cementerio.component';
import { ATerrenoComponent } from './administracion/a-content/agestion-cementerio/a-terreno/a-terreno.component';
import { APatioComponent } from './administracion/a-content/agestion-cementerio/a-patio/a-patio.component';
import { ATumbaComponent } from './administracion/a-content/agestion-cementerio/a-tumba/a-tumba.component';
import { AFormularioCementerioComponent } from './administracion/a-content/agestion-cementerio/a-cementerio/a-formulario-cementerio/a-formulario-cementerio.component';
import { AFormularioPatioComponent } from './administracion/a-content/agestion-cementerio/a-patio/a-formulario-patio/a-formulario-patio.component';
import { AFormularioTerrenoComponent } from './administracion/a-content/agestion-cementerio/a-terreno/a-formulario-terreno/a-formulario-terreno.component';
import { AFormularioTumbaComponent } from './administracion/a-content/agestion-cementerio/a-tumba/a-formulario-tumba/a-formulario-tumba.component';
import { AVentaComponent } from './administracion/a-content/a-venta/a-venta.component';
import { FormularioVentaComponent } from './administracion/a-content/a-venta/formulario-venta/formulario-venta.component';
import { AClienteComponent } from './administracion/a-content/a-cliente/a-cliente.component';
import { AformClienteComponent } from './administracion/a-content/a-cliente/aform-cliente/aform-cliente.component';
import { FormularioVenta2Component } from './administracion/a-content/a-venta/formulario-venta2/formulario-venta2.component';
import { FormularioVenta3Component } from './administracion/a-content/a-venta/formulario-venta3/formulario-venta3.component';

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
      },
      {
        path:'Reglamento',
        component:CReglamentoClientesComponent
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
        path: "difuntos",
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
        path: "formularioDifuntos",
        component: EFormOccisoComponent
      },
      {
        path: "formularioClientes",
        component: EFormularioClientesComponent
      },
      {
        path: "VentaDerecho",
        component: EVentaDerechoComponent
      },
      {
        path: "formularioVenta",
        component: EFormularioVentaComponent
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
        component: AClienteComponent
      },
      {
        path: "AFormCliente",
        component: AformClienteComponent
      },
      {
        path: "Aterrenos",
        component: ETerrenosComponent
      },
      {
        path: "ADifuntos",
        component: ADifuntoComponent
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
        path: "AformularioDifuntos",
        component: AFomularioDifuntoComponent
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
      },
      {
        path: 'ACementerio',
        component: ACementerioComponent
      },
      {
        path: 'AFormularioCementerio',
        component: AFormularioCementerioComponent
      },
      {
        path: 'APatio',
        component: APatioComponent
      },
      {
        path: 'AFormularioPatio',
        component: AFormularioPatioComponent
      },
      {
        path: 'AGTerreno',
        component: ATerrenoComponent
      },
      {
        path: 'AGFormularioTerreno',
        component: AFormularioTerrenoComponent
      },
      {
        path: 'ATumba',
        component: ATumbaComponent
      },
      {
        path: 'AFormularioTumba',
        component: AFormularioTumbaComponent
      },
      {
        path:'AVentas',
        component: AVentaComponent
      },
      {
        path:'formularioVenta',
        component:FormularioVentaComponent
      },
      {
        path: 'formularioVenta2',
        component: FormularioVenta2Component
      },
      {
        path: 'formularioVenta3',
        component: FormularioVenta3Component
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
    AMarkerEnfasisComponent,
    ADifuntoComponent,
    AFomularioDifuntoComponent,
    EFormularioClientesComponent,
    CReglamentoClientesComponent,
    EVentaDerechoComponent,
    EFormularioVentaComponent,
    AGestionCementerioComponent,
    ACementerioComponent,
    ATerrenoComponent,
    APatioComponent,
    ATumbaComponent,
    AFormularioCementerioComponent,
    AFormularioPatioComponent,
    AFormularioTerrenoComponent,
    AFormularioTumbaComponent,
    AVentaComponent,
    FormularioVentaComponent,
    AClienteComponent,
    AformClienteComponent,
    FormularioVenta2Component,
    FormularioVenta3Component
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
