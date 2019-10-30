import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';
import Swal from 'sweetalert2';
import {BackendServiceService} from 'src/app/Service/backend-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-e-login',
  templateUrl: './e-login.component.html',
  styleUrls: ['./e-login.component.css']
})
export class ELoginComponent implements OnInit {

  usuario: Usuario;
  

  constructor(private service: BackendServiceService, private router:Router) { 
    this.usuario= new Usuario();  
  }

  ngOnInit() {
  }

  login(): void{
    console.log(this.usuario);
    if(this.usuario.username == null || this.usuario.password == null){      
      Swal.fire('Error al ingresar', 'Verifica usuario y contraseña.', 'error');
      return;
    }
    this.service.login(this.usuario).subscribe(response => {
      console.log(response);      
      let payload = JSON.parse(atob(response.access_token.split(".")[1]));

      this.service.guardarUsuario(response.access_token);
      this.service.guardarToken(response.access_token);

        this.router.navigate(['/administracion-inicio']);
        Swal.fire('Inicio de sesión correctamente', `Bienvenido ${payload.user_name}`, 'success');
    });
  }

}
