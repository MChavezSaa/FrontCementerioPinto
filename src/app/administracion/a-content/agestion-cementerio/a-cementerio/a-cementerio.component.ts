import { Component, OnInit } from '@angular/core';
import { Cementerio } from 'src/app/Entidades/Cementerio';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-a-cementerio',
  templateUrl: './a-cementerio.component.html',
  styleUrls: ['./a-cementerio.component.css']
})
export class ACementerioComponent implements OnInit {

  cementerioList2:Cementerio[] = [];
    
  constructor(private service: BackendServiceService) { }

  ngOnInit() {
        this.service.getCementerio().subscribe(cementerioList1 => this.cementerioList2 = cementerioList1);
  }

}
