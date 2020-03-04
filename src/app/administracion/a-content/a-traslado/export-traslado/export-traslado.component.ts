import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { traslado2 } from 'src/app/Entidades/traslado2';

@Component({
  selector: 'app-export-traslado',
  templateUrl: './export-traslado.component.html',
  styleUrls: ['./export-traslado.component.css']
})
export class ExportTrasladoComponent implements OnInit {

  trasladoParams: traslado2;
  id: number;

  fechaActual = new Date();
  mes = this.fechaActual.getMonth() + 1;
  dia = this.fechaActual.getDate();
  anio = this.fechaActual.getFullYear();
  
  constructor(public service: BackendServiceService,
    public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.trasladoParams = new traslado2();

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.service.getTrasladoXID(this.id).subscribe(fun => {
        this.trasladoParams = fun
        console.log(this.trasladoParams);
        console.log(this.trasladoParams.nombreC_Solicitante);
        console.log(this.trasladoParams.tipoDeCambio);
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
      pdf.save('ComprobanteTraslado _' + this.id + '.pdf'); // generar PDF  
    });
  }

  volver() {
    this.router.navigate(['/administracion-inicio/ADifuntos/']);
  }
}
