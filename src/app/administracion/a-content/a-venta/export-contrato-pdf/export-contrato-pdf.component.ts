import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Contrato } from 'src/app/Entidades/Contrato';


@Component({
  selector: 'app-export-contrato-pdf',
  templateUrl: './export-contrato-pdf.component.html',
  styleUrls: ['./export-contrato-pdf.component.css']
})
export class ExportContratoPDFComponent implements OnInit {
  contratoParams: Contrato;
  constructor(private service: BackendServiceService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  id: number;
  @ViewChild('content', {static: false}) content: ElementRef;
  exportar(){

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function(ElementRef, renderer){
        return true; 
      }
    };
    let content  = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15 , 15, {
      'width':190,
      'elementHandlers': specialElementHandlers
    });
    console.log(this.id);
    doc.save('Contrato_'+this.id+'.pdf');

  }
  public cargarDifunto(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.service.getContratoXID(this.id).subscribe((dif) => this.contratoParams = dif)
        console.log(this.contratoParams);
      }
    })
  }

}
