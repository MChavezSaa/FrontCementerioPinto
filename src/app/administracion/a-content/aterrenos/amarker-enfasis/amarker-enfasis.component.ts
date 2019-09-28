import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amarker-enfasis',
  templateUrl: './amarker-enfasis.component.html',
  styleUrls: ['./amarker-enfasis.component.css']
})
export class AMarkerEnfasisComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  LimpiarStorage(){
    localStorage.clear();
    this.router.navigateByUrl('/administracion-inicio/ATerrenosOcupados');
  }

  id(){
    let id2= localStorage.getItem("ID");
    let letter2 = localStorage.getItem("letter");
    let concat = ""+letter2+""+id2;
    console.log(concat);
    return concat;
  
  }
  idTumba(){
    let id2= localStorage.getItem("idTumba");
    let letter2 = localStorage.getItem("letter");
    let concat = ""+letter2+""+id2;
    return concat;
  }
  nombre(){
    return localStorage.getItem("Nombre");
  }
  fd(){
    return localStorage.getItem("FD");

  }

  nTerreno(){
    return localStorage.getItem("ID");

  }
  nTumba(){
    return localStorage.getItem("idTumba");
  }

}
