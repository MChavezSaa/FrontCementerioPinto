import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'  //necesario para implementar rutas 
import {HttpClientModule} from '@angular/common/http'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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


const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},   //como pagina de inicio se debe dejar la vista para los clientes
  {path:'inicio',component:ClienteComponent,
    children: [
      {
        path:'',
        component:ClienteContentComponent
      },
      {
        path:'consideraciones',
        component: CConsideracionesComponent
      },
      {
        path:'mostrarCuotas',
        component:CMostrarCuotasComponent
      },
      {
        path:'mostrarTerrenos',
        component:CMostrarTerrenosComponent
      }
    ]
  },
  {path:'personal',component:ELoginComponent},
  {path:'personal-inicio',component: EmpleadoComponent,
  children:[
    {
      path:"",
      component:EmpleadoContentComponent
    },
    {
      path:"clientes",
      component:EClientesComponent
    },
    {
      path:"terrenos",
      component:ETerrenosComponent
    },
  ]
  }
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
    EVerMapaTerrenoComponent
   
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
