import { Component, OnInit } from '@angular/core';
import { Tumba } from 'src/app/Entidades/Tumba';
import { BackendServiceService } from 'src/app/Service/backend-service.service';

@Component({
  selector: 'app-a-creartumba',
  templateUrl: './a-creartumba.component.html',
  styleUrls: ['./a-creartumba.component.css']
})
export class ACreartumbaComponent implements OnInit {

  tumbasLibresList: Tumba[] = [];
  tumbasOcupadoList: Tumba[] = [];
  tumbasReservadoList: Tumba[] = [];

  constructor(public service: BackendServiceService) { }

  ngOnInit() {
    this.service.getfreeTumbs().subscribe(tumbaList => this.tumbasLibresList = tumbaList);
    this.service.getOcupadoTumbs().subscribe(tumbaList2 => this.tumbasOcupadoList = tumbaList2);
    this.service.getReservadoTumbs().subscribe(tumbaList3 => this.tumbasReservadoList = tumbaList3);
  }
 

}
