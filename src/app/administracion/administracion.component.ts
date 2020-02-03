import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../Service/backend-service.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  constructor(private service : BackendServiceService) { }

  ngOnInit() {
    this.service.getContrato().subscribe(cont => this.service.ContratoList=cont);
  }

}
