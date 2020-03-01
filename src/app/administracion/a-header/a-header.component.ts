import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-a-header',
  templateUrl: './a-header.component.html',
  styleUrls: ['./a-header.component.css']
})
export class AHeaderComponent implements OnInit {
  mostrarSidebar:boolean=true;
  usuario : Usuario;
  constructor(public service:  BackendServiceService,public router: Router) { }

  ngOnInit() {
    this.usuario = this.service.usuario;
  }
  ocultarSidebar(){
    if(this.mostrarSidebar==true){
      this.mostrarSidebar=false;
    }else{
      this.mostrarSidebar=true;
    }
  }
  logout(): void {
    let username = this.service.usuario.nombre;
    this.service.logout();
    this.router.navigateByUrl('/');
    Swal.fire('Cerrado de sesión satisfactorio', `Hasta pronto ${username}!`, 'success');

  }
  getNombre():  string{
    return this.service.usuario.nombre;
  }

}
