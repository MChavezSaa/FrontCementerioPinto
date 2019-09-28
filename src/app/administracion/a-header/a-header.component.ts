import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-header',
  templateUrl: './a-header.component.html',
  styleUrls: ['./a-header.component.css']
})
export class AHeaderComponent implements OnInit {
  mostrarSidebar:boolean=true;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ocultarSidebar(){
    if(this.mostrarSidebar==true){
      this.mostrarSidebar=false;
    }else{
      this.mostrarSidebar=true;
    }
  }
  login(): void {
    this.router.navigateByUrl('/personal');
  }

}
