import { Component, OnInit } from '@angular/core';
import { Patio } from 'src/app/Entidades/Patio';
import { BackendServiceService } from 'src/app/Service/backend-service.service';

@Component({
  selector: 'app-a-patio',
  templateUrl: './a-patio.component.html',
  styleUrls: ['./a-patio.component.css']
})
export class APatioComponent implements OnInit {

  patioList2: Patio[] = [];

  constructor(private service: BackendServiceService) { }

  ngOnInit() {
    this.service.getPatio().subscribe(patioList1 => this.patioList2 = patioList1);
  }

}
