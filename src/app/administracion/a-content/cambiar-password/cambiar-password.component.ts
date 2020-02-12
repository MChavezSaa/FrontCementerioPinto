import { Component, OnInit } from '@angular/core';
import { cambioPass } from 'src/app/Entidades/cambioPass';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  constructor(private service: BackendServiceService, private route: Router) { }
  cambiopass: cambioPass = new cambioPass();
  ngOnInit() {
  }


  cambiarPass() {
    let user: Usuario = new Usuario();
    user.username = this.service.usuario.username;
    user.password = this.cambiopass.nueva;
    //user.roles=null;
    console.log(user);
    this.service.cambioPass(user).subscribe(res => {
      console.log(res);
      swal.fire('Contraseña cambiada correctamente', 'Ingrese nuevamente', 'success');
      this.service.logout();
      this.route.navigate(['']);
    });


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