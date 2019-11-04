import { Component, OnInit } from '@angular/core';
import { TipoTumba } from 'src/app/Entidades/TipoTumba';
import { BackendServiceService } from 'src/app/Service/backend-service.service';

@Component({
  selector: 'app-a-tumba',
  templateUrl: './a-tumba.component.html',
  styleUrls: ['./a-tumba.component.css']
})
export class ATumbaComponent implements OnInit {

  tipotumbaList2: TipoTumba[] = [];
  
  constructor(private service: BackendServiceService) { }

  ngOnInit() {
    this.service.getTipoTumba().subscribe(tipotumbaList1 => this.tipotumbaList2 = tipotumbaList1);
  }

}
