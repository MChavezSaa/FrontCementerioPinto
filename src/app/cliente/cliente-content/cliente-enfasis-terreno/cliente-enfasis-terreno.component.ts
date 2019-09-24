import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-enfasis-terreno',
  templateUrl: './cliente-enfasis-terreno.component.html',
  styleUrls: ['./cliente-enfasis-terreno.component.css']
})
export class ClienteEnfasisTerrenoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  LimpiarStorage(){
    localStorage.clear();
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
