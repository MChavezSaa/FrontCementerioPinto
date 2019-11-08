import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Tumba } from 'src/app/Entidades/Tumba';

@Component({
  selector: 'app-aterrenos-libres',
  templateUrl: './aterrenos-libres.component.html',
  styleUrls: ['./aterrenos-libres.component.css']
})
export class ATerrenosLibresComponent implements OnInit {
  TodasLastumbasList : Tumba[] =[];
  TumbasLibresList : Tumba[] =[];

  constructor(private service: BackendServiceService) { }

  ngOnInit() {
    this.service.getfreeTumbs().subscribe(tumbaList1 => this.TumbasLibresList = tumbaList1);
    
  }

  llenarListaLibre(){
    for (let i = 0; i < this.TodasLastumbasList.length ; i++) {
      if(this.TodasLastumbasList[i].estado_Tumba== false)
      this.TumbasLibresList.push(this.TodasLastumbasList[i]);
    }
  }
  calcularValorCuota(){
    console.log('lala')    
    console.log(this.TumbasLibresList)
    
    //return this.TodasLastumbasList;
  }
}
/*

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

  ]; */