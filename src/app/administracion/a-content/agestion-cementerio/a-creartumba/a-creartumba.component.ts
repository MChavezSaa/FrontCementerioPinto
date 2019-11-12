import { Component, OnInit } from '@angular/core';
import { Tumba } from 'src/app/Entidades/Tumba';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Patio } from 'src/app/Entidades/Patio';

@Component({
  selector: 'app-a-creartumba',
  templateUrl: './a-creartumba.component.html',
  styleUrls: ['./a-creartumba.component.css']
})
export class ACreartumbaComponent implements OnInit {

  tumbaList2: Tumba[] = [];

  constructor(private service: BackendServiceService) { }

  ngOnInit() {
    this.service.getfreeTumbs().subscribe(tumbaList => this.tumbaList2 = tumbaList);
  }

}
