import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { TumbaDifunto } from 'src/app/Entidades/TumbaDifunto';
import { Tumba } from 'src/app/Entidades/Tumba';
import { Contrato } from 'src/app/Entidades/Contrato';

@Component({
  selector: 'app-asepultura',
  templateUrl: './asepultura.component.html',
  styleUrls: ['./asepultura.component.css']
})
export class ASepulturaComponent implements OnInit {

  tumbaDifuntoList: TumbaDifunto[] =[];
  searchText: string;

  numero_Tumba: string;
  tumbasList: Tumba[] = [];
  constructor(public service: BackendServiceService) { }

  ngOnInit() {
    this.service.getTumba().subscribe(datos =>{      
      this.tumbasList = datos;
      this.service.getTumbaDifunto().subscribe(fun =>{
        this.tumbaDifuntoList = fun;          
      });
    });        
  }

  numerosTumba(contrato: TumbaDifunto) {
    let contrato2  = contrato.contrato;
    this.numero_Tumba = null;
    if (contrato2.tipoTumba.nombretipo_tumba == "Doble") {
      let str = contrato2.tumba;
      let tumbas = str.split("-");
      let tumba1;
      let tumba2;
      for (let i = 0; i < this.tumbasList.length; i++) {
        if (this.tumbasList[i].id_tumba == Number(tumbas[0])) {
          tumba1 = this.tumbasList[i];
        }
        if (this.tumbasList[i].id_tumba == Number(tumbas[1])) {
          tumba2 = this.tumbasList[i];
        }
      }
      this.numero_Tumba = tumba1.numero_Tumba + " - " + tumba2.numero_Tumba;
      return this.numero_Tumba;
    } else {
      let tumba1;
      for (let i = 0; i < this.tumbasList.length; i++) {
        if (this.tumbasList[i].id_tumba == Number(contrato2.tumba)) {
          tumba1 = this.tumbasList[i];
        }
      }
      this.numero_Tumba = tumba1.numero_Tumba
      return this.numero_Tumba
    }
  }

}
