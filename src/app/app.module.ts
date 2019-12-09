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
import { CCuotasComponent } from './administracion/a-content/c-cuotas/c-cuotas.component';
import { ASepulturaComponent } from './administracion/a-content/asepultura/asepultura.component';
import { AFormularioSepulturaComponent } from './administracion/a-content/asepultura/aformulario-sepultura/aformulario-sepultura.component';
import { ACreartumbaComponent } from './administracion/a-content/agestion-cementerio/a-creartumba/a-creartumba.component';
import { AFormularioCreartumbaComponent } from './administracion/a-content/agestion-cementerio/a-creartumba/a-formulario-creartumba/a-formulario-creartumba.component';
import { SearchNamePipe } from './pipes/search-name.pipe';
import { SearchVentaPipe } from './pipes/search-venta.pipe';
import { SearchClientePipe } from './pipes/search-cliente.pipe';
import { SearchDifuntoPipe } from './pipes/search-difunto.pipe';
import {AuthGuard} from './guards/auth.guard';


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
        component: AContentComponent,
        canActivate:[AuthGuard]

      },
      {
        path:"Afuncionarios",
        component:AFuncionarioComponent,
        canActivate:[AuthGuard]
      },
      {
        path:"AFormularioFuncionario",
        component: AFormularioFuncionarioComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'AFormularioFuncionario/:id',
        component: AFormularioFuncionarioComponent,
        canActivate:[AuthGuard]
      },
      {
        path: "Aclientes",
        component: AClienteComponent,
        canActivate:[AuthGuard]
      },
      {
        path: "AFormCliente",
        component: AformClienteComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'AFormCliente/:id',
        component: AformClienteComponent,
        canActivate:[AuthGuard]
      },
      {
        path: "Aterrenos",
        component: ETerrenosComponent,
        canActivate:[AuthGuard]
      },
      {
        path: "ADifuntos",
        component: ADifuntoComponent,
        canActivate:[AuthGuard]
      },
      {
        path: "AmapaTerrenos",
        component: EVerMapaTerrenoComponent,
        canActivate:[AuthGuard]
      },
      {
        path: "Areduccion",
        component: EReducccionComponent,
        canActivate:[AuthGuard]
      },
      {
        path: "AformularioDifuntos",
        component: AFomularioDifuntoComponent,
        canActivate:[AuthGuard]
      },
      {
        path: "AformularioDifuntos/:id",
        component: AFomularioDifuntoComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'ATerrenosLibres',
        component: ATerrenosLibresComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'ATerrenosOcupados',
        component: ATerrenosOcupadosComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'ATerrenosReservados',
        component: ATerrenosReservadosComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'AMarkerEnfasis',
        component: AMarkerEnfasisComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'ACementerio',
        component: ACementerioComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'AFormularioCementerio',
        component: AFormularioCementerioComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'AFormularioCementerio/:id',
        component: AFormularioCementerioComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'APatio',
        component: APatioComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'AFormularioPatio',
        component: AFormularioPatioComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'AFormularioPatio/:id',
        component: AFormularioPatioComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'AGTerreno',
        component: ATerrenoComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'AGFormularioTerreno',
        component: AFormularioTerrenoComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'AGFormularioTerreno/:id',
        component: AFormularioTerrenoComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'ATumba',
        component: ATumbaComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'AFormularioTumba',
        component: AFormularioTumbaComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'AFormularioTumba/:id',
        component: AFormularioTumbaComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'ACreaTumba',
        component: ACreartumbaComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'AFormularioCreaTumba',
        component: AFormularioCreartumbaComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'AFormularioCreaTumba/:id',
        component: AFormularioCreartumbaComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'AVentas',
        component: AVentaComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'formularioVenta',
        component:FormularioVentaComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'CCuotas',
        component: CCuotasComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'ASepultura',
        component: ASepulturaComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'AFormularioSepultura',
        component: AFormularioSepulturaComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'AFormularioSepultura/:id',
        component: AFormularioSepulturaComponent,
        canActivate:[AuthGuard]
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
    CCuotasComponent,
    ACreartumbaComponent,
    AFormularioCreartumbaComponent,
    ASepulturaComponent,
    AFormularioSepulturaComponent, 
    SearchNamePipe, 
    SearchVentaPipe, 
    SearchClientePipe, 
    SearchDifuntoPipe    
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
