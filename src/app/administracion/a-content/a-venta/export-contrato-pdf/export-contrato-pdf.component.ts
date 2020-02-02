import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Contrato } from 'src/app/Entidades/Contrato';
import html2canvas from 'html2canvas';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



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
    this.cargarContrato();
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
    doc.fromHTML(content.innerHTML, 15 ,20, {
      'width':250,
      'elementHandlers': specialElementHandlers
    });
    console.log(this.id);
    doc.save('Contrato_'+this.id+'.pdf');

  }

  public generatePDF() { 
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })
    var data = document.getElementById('content'); 
    html2canvas(data).then(canvas => { 
      // configuraciones de la pagina
      var imgWidth = 208; 
      var pageHeight = 295; 
      var imgHeight = canvas.height * imgWidth / canvas.width; 
      var heightLeft = imgHeight; 
      
      const contentDataURL = canvas.toDataURL('image/png') 
      let pdf = new jsPDF('p', 'mm', 'a4'); // tamaaño A4 para pdf
      var position = 0; 
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight) 
      pdf.save('Contrato_'+this.id+'.pdf'); // generar PDF  
    }); 
  } 

  public cargarContrato(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.service.getContratoXID(this.id).subscribe((dif) => {
          this.contratoParams = dif;
          console.log(this.contratoParams);
        })
        
      }
    })
  }

  dias(){
    var dia: Date = new Date(this.contratoParams.fecha_Pago);
    console.log(dia.getDate());
    return dia.getDate();
  }
  volver(){        
    this.router.navigate(['/administracion-inicio/AVentas/']);
  }
  
  

}
