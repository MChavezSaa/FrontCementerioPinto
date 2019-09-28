import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-aterrenos-ocupados',
  templateUrl: './aterrenos-ocupados.component.html',
  styleUrls: ['./aterrenos-ocupados.component.css']
})
export class ATerrenosOcupadosComponent implements OnInit {

  
  id: any;
  Letter: any;
  nombre2: any;
  Fd: any;
  id_tumba: any;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  peopleA: any[] = [
    {
      "id_Terreno": "1",
      "id_tumba": "1",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "1",
      "id_tumba": "2",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "1",
      "id_tumba": "3",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "1",
      "id_tumba": "4",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "1",
      "id_tumba": "5",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "1",
      "id_tumba": "6",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "1",
      "id_tumba": "7",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "1",
      "id_tumba": "8",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "1",
      "id_tumba": "9",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "1",
      "id_tumba": "10",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "1",
      "id_tumba": "11",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "1",
      "id_tumba": "12",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "1",
      "id_tumba": "13",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "1",
      "id_tumba": "14",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "1",
      "id_tumba": "15",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "1",
      "id_tumba": "16",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    }

  ];

  peopleB: any[] = [
    {
      "id_Terreno": "2",
      "id_tumba": "1",
      "name": "pequeño  Pace",
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
      "id_Terreno": "5",
      "id_tumba": "1",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "5",
      "id_tumba": "2",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "5",
      "id_tumba": "3",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "5",
      "id_tumba": "4",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "5",
      "id_tumba": "5",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "5",
      "id_tumba": "6",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "5",
      "id_tumba": "7",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "5",
      "id_tumba": "8",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "5",
      "id_tumba": "9",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "5",
      "id_tumba": "10",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "5",
      "id_tumba": "11",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "5",
      "id_tumba": "12",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "5",
      "id_tumba": "13",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "5",
      "id_tumba": "14",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    }

  ];

  peopleF: any[] = [
    {
      "id_Terreno": "6",
      "id_tumba": "1",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "6",
      "id_tumba": "2",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "6",
      "id_tumba": "3",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "6",
      "id_tumba": "4",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "6",
      "id_tumba": "5",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    }
  ];

  peopleG: any[] = [
    {
      "id_Terreno": "7",
      "id_tumba": "1",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "2",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "3",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "7",
      "id_tumba": "4",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "5",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "6",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "7",
      "id_tumba": "7",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "8",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "9",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "7",
      "id_tumba": "10",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "11",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "12",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "7",
      "id_tumba": "13",
      "name": "Douglas  Pace",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "14",
      "name": "Mcleod  Mueller",
      "FD": "26/7/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "15",
      "name": "lalal  Mueller",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "16",
      "name": "maty",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "17",
      "name": "maty",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "18",
      "name": "maty",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "19",
      "name": "maty",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "20",
      "name": "maty",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "21",
      "name": "maty",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "22",
      "name": "maty",
      "FD": "26/6/2019"
    },
    {

      "id_Terreno": "7",
      "id_tumba": "23",
      "name": "maty",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "7",
      "id_tumba": "24",
      "name": "maty",
      "FD": "26/6/2019"
    },
    {
      "id_Terreno": "7",
      "id_tumba": "25",
      "name": "maty",
      "FD": "26/6/2019"
    }

  ];

  guardarDatos(iD: number, letter: string, nombre1: string, fd2: string, idTumba: number) {
    //vaciar var
    this.id="";
    this.Letter="";
    this.nombre2="";
    this.Fd ="";
    this.id_tumba="";


    //LLENAR VAR
    this.id = iD;
    this.Letter = letter;
    this.nombre2 = nombre1;
    this.Fd = fd2;
    this.id_tumba=idTumba;

    localStorage.setItem("ID",this.id);
    localStorage.setItem("letter", this.Letter)
    localStorage.setItem("Nombre",this.nombre2);
    localStorage.setItem("FD",this.Fd);
    localStorage.setItem("idTumba", this.id_tumba);

    this.router.navigateByUrl('/administracion-inicio/AMarkerEnfasis');
    
  }
  nombre() {
    let nombre3: string;
    nombre3 = this.nNombreAux(this.Letter);
    return nombre3;
  }
  fd() {
    let fd2: string;
    fd2 = this.nFDAux(this.Letter);
    return fd2;
  }
  nTerreno(){
    let idter: number;
    idter = this.nTerrenoAux(this.Letter);
    return idter;
  }
  nTumba() {
    let idTumba: number;
    idTumba = this.nTUMBAAux(this.Letter);
    return idTumba;
  }

  nTerrenoAux(letter: string): number {
    switch (letter) {
      case "a": {
        //statements; 
        return this.peopleA[this.id].id_Terreno;     
      }
      case "b": {
        //statements; 
        return this.peopleB[this.id].id_Terreno;
      }
      case "c": {
        //statements; 
        return this.peopleC[this.id].id_Terreno;
      }
      case "d": {
        return this.peopleD[this.id].id_Terreno
      }
      case "e": {
        //statements; 
        return this.peopleE[this.id].id_Terreno;
      }
      case "f": {
        //statements; 
        return this.peopleF[this.id].id_Terreno;
      }
      case "g": {
        //statements; 
        return this.peopleG[this.id].id_Terreno;
      }

    }
  }

  nNombreAux(letter: string): string {
    switch (letter) {
      case "a": {
        //statements; 
        return this.peopleA[this.id].name;     
      }
      case "b": {
        //statements; 
        return this.peopleB[this.id].name;
      }
      case "c": {
        //statements; 
        return this.peopleC[this.id].name;
      }
      case "d": {
        return this.peopleD[this.id].name
      }
      case "e": {
        //statements; 
        return this.peopleE[this.id].name;
      }
      case "f": {
        //statements; 
        return this.peopleF[this.id].name;
      }
      case "g": {
        //statements; 
        return this.peopleG[this.id].name;
      }

      default: {
        //statements; 
       return "";
      }
    }
  }
  nFDAux(letter: string): string {
    switch (letter) {
      case "a": {
        //statements;         
        return this.peopleA[this.id].FD;     
      }
      case "b": {
        //statements;        
        return this.peopleB[this.id].FD;
      }
      case "c": {
        //statements;         
        return this.peopleC[this.id].FD;
      }
      case "d": {        
        return this.peopleD[this.id].FD
      }
      case "e": {
        //statements; 
        

        return this.peopleE[this.id].FD;
      }
      case "f": {
        //statements;         
        return this.peopleF[this.id].FD;
      }
      case "g": {
        //statements;       
        return this.peopleG[this.id].FD;
      }

      default: {
        //statements; 
       return "";
      }
    }
  }
  nTUMBAAux(letter: string): number {
    switch (letter) {
      case "a": {
        //statements; 
        return this.peopleA[this.id].id_tumba;     
      }
      case "b": {
        //statements; 
        return this.peopleB[this.id].id_tumba;
      }
      case "c": {
        //statements; 
        return this.peopleC[this.id].id_tumba;
      }
      case "d": {
        return this.peopleD[this.id].id_tumba
      }
      case "e": {
        //statements; 
        return this.peopleE[this.id].id_tumba;
      }
      case "f": {
        //statements; 
        return this.peopleF[this.id].id_tumba;
      }
      case "g": {
        //statements; 
        return this.peopleG[this.id].id_tumba;
      }

    }
  }

}
