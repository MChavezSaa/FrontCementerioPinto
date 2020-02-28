import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TumbaDifunto } from 'src/app/Entidades/TumbaDifunto';
import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { Difunto } from 'src/app/Entidades/Difunto';


@Component({
  selector: 'app-export-pase',
  templateUrl: './export-pase.component.html',
  styleUrls: ['./export-pase.component.css']
})
export class ExportPaseComponent implements OnInit {

  id: number;
  paseParams: TumbaDifunto;
  mostrarEdad: any; 
  edad: any;
  resta: number;
  difunto: Difunto;

   fechaActual = new Date();
   mes = this.fechaActual.getMonth()+1;
   dia = this.fechaActual.getDate();
   anio = this.fechaActual.getFullYear();


  constructor(private service: BackendServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.paseParams = new TumbaDifunto();
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.service.getSepulturaXID(this.id).subscribe(fun => {
        this.paseParams = fun
        console.log(this.paseParams.difunto.nombres_Difunto);
        let fecha1 = new Date(this.paseParams.difunto.fecha_Nacimiento_Difunto);
        let fecha2 = new Date(this.paseParams.fecha_Entierro_TD);
        this.resta = fecha2.getTime() - fecha1.getTime();
        this.resta = Math.floor((this.resta / (1000 * 60 * 60 * 24)) / 365);
      });
    });

  }

  @ViewChild('content', { static: false }) content: ElementRef;

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
      pdf.save('PaseSepultacion_' + this.id + '.pdf'); // generar PDF  
    });
  }

  volver() {
    this.router.navigate(['/administracion-inicio/ASepultura/']);
  }

}
