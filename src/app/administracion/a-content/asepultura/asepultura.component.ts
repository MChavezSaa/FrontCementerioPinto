import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { TumbaDifunto } from 'src/app/Entidades/TumbaDifunto';

@Component({
  selector: 'app-asepultura',
  templateUrl: './asepultura.component.html',
  styleUrls: ['./asepultura.component.css']
})
export class ASepulturaComponent implements OnInit {

  tumbaDifuntoList: TumbaDifunto[] =[]

  constructor(public service: BackendServiceService) { }

  ngOnInit() {
    this.service.getTumbaDifunto().subscribe(fun =>{
      this.tumbaDifuntoList = fun;
      console.log(this.tumbaDifuntoList)
    });
  }

}
