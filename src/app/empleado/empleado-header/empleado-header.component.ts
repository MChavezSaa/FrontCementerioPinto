import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-header',
  templateUrl: './empleado-header.component.html',
  styleUrls: ['./empleado-header.component.css']
})
export class EmpleadoHeaderComponent implements OnInit {


  mostrarSidebar:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  ocultarSidebar(){
    if(this.mostrarSidebar==true){
      this.mostrarSidebar=false;
    }else{
      this.mostrarSidebar=true;
    }
  }


}
