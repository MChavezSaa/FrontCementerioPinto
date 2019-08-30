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
      "id_Terreno": "1" ,
      "id_tumba" : "1" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "1" ,
      "id_tumba" : "2" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "1" ,
      "id_tumba" : "3" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "1" ,
      "id_tumba" : "4" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "1" ,
      "id_tumba" : "5" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "1" ,
      "id_tumba" : "6" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "1" ,
      "id_tumba" : "7" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "1" ,
      "id_tumba" : "8" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "1" ,
      "id_tumba" : "9" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "1" ,
      "id_tumba" : "10" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "1" ,
      "id_tumba" : "11" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "1" ,
      "id_tumba" : "12" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "1" ,
      "id_tumba" : "13" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "1" ,
      "id_tumba" : "14" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "1" ,
      "id_tumba" : "15" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "1" ,
      "id_tumba" : "16" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    }
    
  ];

  peopleB: any[] = [
    {
      "id_Terreno": "2",
      "id_tumba": "1",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "2",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "3",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "4",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "5",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "6",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "7",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "8",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "9",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "10",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "11",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "12",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "13",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "14",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "2",
      "id_tumba": "15",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    }

  ];

  peopleC: any[] = [
    {
      "id_Terreno": "3",
      "id_tumba": "1",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "3",
      "id_tumba": "2",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "3",
      "id_tumba": "3",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "3",
      "id_tumba": "4",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "3",
      "id_tumba": "5",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "3",
      "id_tumba": "6",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "3",
      "id_tumba": "7",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "3",
      "id_tumba": "8",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "3",
      "id_tumba": "9",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "3",
      "id_tumba": "10",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    } 

  ];

  peopleD: any[] = [
    {
      "id_Terreno": "4",
      "id_tumba": "1",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "2",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "3",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "4",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "5",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "6",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "7",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "8",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "9",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "10",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "11",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "12",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "13",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "14",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "15",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "16",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "17",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "18",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "19",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "20",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "21",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "22",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "4",
      "id_tumba": "23",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    }
     
  ];


  peopleE: any[] = [
    {      
      "id_Terreno": "5" ,
      "id_tumba" : "1" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "5" ,
      "id_tumba" : "2" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "5" ,
      "id_tumba" : "3" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "5" ,
      "id_tumba" : "4" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "5" ,
      "id_tumba" : "5" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "5" ,
      "id_tumba" : "6" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "5" ,
      "id_tumba" : "7" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "5" ,
      "id_tumba" : "8" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "5" ,
      "id_tumba" : "9" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "5" ,
      "id_tumba" : "10" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "5" ,
      "id_tumba" : "11" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "5" ,
      "id_tumba" : "12" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "5" ,
      "id_tumba" : "13" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "5" ,
      "id_tumba" : "14" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    }
    
  ];

  peopleF: any[] = [
    {      
      "id_Terreno": "6" ,
      "id_tumba" : "1" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "6" ,
      "id_tumba" : "2" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "6" ,
      "id_tumba" : "3" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "6" ,
      "id_tumba" : "4" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "6" ,
      "id_tumba" : "5" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    }
  ];
    
  peopleG: any[] = [
    {      
      "id_Terreno": "7" ,
      "id_tumba" : "1" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7" ,
      "id_tumba" : "2" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "7" ,
      "id_tumba" : "3" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "7" ,
      "id_tumba" : "4" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7" ,
      "id_tumba" : "5" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "7" ,
      "id_tumba" : "6" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "7" ,
      "id_tumba" : "7" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7" ,
      "id_tumba" : "8" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "7" ,
      "id_tumba" : "9" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "7" ,
      "id_tumba" : "10" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7" ,
      "id_tumba" : "11" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "7" ,
      "id_tumba" : "12" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {      
      "id_Terreno": "7" ,
      "id_tumba" : "13" ,
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7" ,
      "id_tumba" : "14" ,
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "7" ,
      "id_tumba" : "15" ,
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7" ,
      "id_tumba" : "16" ,
      "name": "maty",
      "FD": "26/6/2019"
    }, 
    {

      "id_Terreno": "7" ,
      "id_tumba" : "17" ,
      "name": "maty",
      "FD": "26/6/2019"
    },     
    {

      "id_Terreno": "7" ,
      "id_tumba" : "18" ,
      "name": "maty",
      "FD": "26/6/2019"
    }, 
    {

      "id_Terreno": "7" ,
      "id_tumba" : "19" ,
      "name": "maty",
      "FD": "26/6/2019"
    }, 
    {

      "id_Terreno": "7" ,
      "id_tumba" : "20" ,
      "name": "maty",
      "FD": "26/6/2019"
    }, 
    {

      "id_Terreno": "7" ,
      "id_tumba" : "21" ,
      "name": "maty",
      "FD": "26/6/2019"
    }, 
    {

      "id_Terreno": "7" ,
      "id_tumba" : "22" ,
      "name": "maty",
      "FD": "26/6/2019"
    }, 
    {

      "id_Terreno": "7" ,
      "id_tumba" : "23" ,
      "name": "maty",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "7" ,
      "id_tumba" : "24" ,
      "name": "maty",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "7" ,
      "id_tumba" : "25" ,
      "name": "maty",
      "FD": "26/6/2019"
    }
    
  ];

  guardarID(iD: number){
    //para poder cargar el nombre y fecha defuncion necesito id de la tumba buscada aqui se guarda ese id
    console.log("id: "+ iD);    
    this.id = iD;
   // console.log("this.id: "+ this.id);
  }
  nombre(){
    return this.peopleA[this.id].name
  }
  fd(){
    return this.peopleA[this.id].FD
  }
  nTerreno(){
    console.log("terr"+this.peopleA[this.id].id_Terreno);

    return this.peopleA[this.id].id_Terreno  }
  nTumba(){
    console.log("tumba"+this.peopleA[this.id].id_tumba);
    return this.peopleA[this.id].id_tumba
  }
}
