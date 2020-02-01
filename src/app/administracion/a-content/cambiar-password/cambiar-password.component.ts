import { Component, OnInit } from '@angular/core';
import { cambioPass } from 'src/app/Entidades/cambioPass';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  constructor(private service : BackendServiceService, private route: Router) { }
  cambiopass : cambioPass = new cambioPass();
  ngOnInit() {
  }


  cambiarPass(){    
    console.log(this.cambiopass);
    console.log(this.service.usuario.id_Usuario);
    this.service.cambioPass(this.cambiopass, this.service.usuario.id_Usuario);
    this.service.logout();
    this.route.navigate(['']);
  }
}
/**
 * //
    //swal.fire('Contraseña Actualizada', `Se ha actualizado la contraseña con Exito`, 'success');
    //limpiar storage 
    //
    //redirect
    //
 */