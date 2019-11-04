import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Terreno } from 'src/app/Entidades/Terreno';

@Component({
  selector: 'app-a-terreno',
  templateUrl: './a-terreno.component.html',
  styleUrls: ['./a-terreno.component.css']
})
export class ATerrenoComponent implements OnInit {

  terrenoList2: Terreno[] = [];

  constructor(private service: BackendServiceService) { }

  ngOnInit() {
    this.service.getTerreno().subscribe(terrenoList1 => this.terrenoList2 = terrenoList1);
  }

}
