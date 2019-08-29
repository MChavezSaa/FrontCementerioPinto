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

  peopleA: any[] = [
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
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "3" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_terreno ": "1" ,
      "id_tumba" : "4" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "5" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "6" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_terreno ": "1" ,
      "id_tumba" : "7" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "8" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "9" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_terreno ": "1" ,
      "id_tumba" : "10" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "11" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "12" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_terreno ": "1" ,
      "id_tumba" : "13" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "14" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "15" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "16" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {

      "id_terreno ": "1" ,
      "id_tumba" : "16" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    }
    
  ];

  peopleB: any[] = [
    {
      "id_terreno ": "2",
      "id_tumba": "1",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "2",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "3",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "4",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "5",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "6",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "7",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "8",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "9",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "10",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "11",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "12",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "13",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "14",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "2",
      "id_tumba": "15",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    }

  ];
  peopleC: any[] = [
    {
      "id_terreno ": "3",
      "id_tumba": "1",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_terreno ": "3",
      "id_tumba": "2",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "3",
      "id_tumba": "3",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {

      "id_terreno ": "3",
      "id_tumba": "4",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "3",
      "id_tumba": "5",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "3",
      "id_tumba": "6",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "3",
      "id_tumba": "7",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "3",
      "id_tumba": "8",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "3",
      "id_tumba": "9",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_terreno ": "3",
      "id_tumba": "10",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    } 

  ];

  guardarID(iD: number){
    //para poder cargar el nombre y fecha defuncion necesito id de la tumba buscada aqui se guarda ese id
    //console.log("id: "+ iD);    
    this.id = iD;
   // console.log("this.id: "+ this.id);
  }
  nombre(){
    return this.peopleA[this.id].name
  }
  fd(){
    return this.peopleA[this.id].FD
  }
}
