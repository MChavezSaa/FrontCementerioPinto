import { Component, OnInit } from '@angular/core';
import { Difunto } from 'src/app/Entidades/Difunto';
import { BackendServiceService } from 'src/app/Service/backend-service.service';

@Component({
  selector: 'app-a-difunto',
  templateUrl: './a-difunto.component.html',
  styleUrls: ['./a-difunto.component.css']
})
export class ADifuntoComponent implements OnInit {
  DifuntosList: Difunto[] = [];
  searchText4: string;
  
  constructor(private service: BackendServiceService) { }

  ngOnInit() {
    this.service.getDifuntos().subscribe(response => this.DifuntosList = response);
  }

}
