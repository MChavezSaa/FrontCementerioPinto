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

  @ViewChild('content', {static: false}) content: ElementRef;
  exportar(){
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
    doc.save('exportado.pdf');

  }
  public cargarDifunto(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.service.getContratoXID(id).subscribe((dif) => this.contratoParams = dif)
        console.log(this.contratoParams);
      }
    })
  }

}
