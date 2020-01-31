import { Component, OnInit } from '@angular/core';
import { cambioPass } from 'src/app/Entidades/cambioPass';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  constructor() { }
  cambiopass : cambioPass;
  ngOnInit() {
  }


  cambiarPass(){
    console.log(cambioPass);
  }
}
