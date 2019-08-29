import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-mostrar-terrenos',
  templateUrl: './c-mostrar-terrenos.component.html',
  styleUrls: ['./c-mostrar-terrenos.component.css']
})
export class CMostrarTerrenosComponent implements OnInit {

  showImage: boolean = false;
  id: any;

  constructor() { }

  ngOnInit() {
  }

  people: any[] = [
    {      
      "id_terreno ": "1" ,
      "id_tumba" : "1" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "2" ,
      "name": "Mcleod  Mueller",
      "FD": "26/6/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "4" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    }
    
  ];
  guardarID(iD: number){
    //para poder cargar el nombre y fecha defuncion necesito id de la tumba buscada aqui se guarda ese id
    console.log("id: "+ iD);    
    this.id = iD;
    console.log("this.id: "+ this.id);
  }
  nombre(){
    return this.people[this.id].name
  }
  fd(){
    return this.people[this.id].FD
  }
}
