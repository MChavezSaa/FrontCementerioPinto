import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Contrato } from 'src/app/Entidades/Contrato';
import html2canvas from 'html2canvas';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Tumba } from 'src/app/Entidades/Tumba';



@Component({
  selector: 'app-export-contrato-pdf',
  templateUrl: './export-contrato-pdf.component.html',
  styleUrls: ['./export-contrato-pdf.component.css']
})
export class ExportContratoPDFComponent implements OnInit {
  contratoParams: Contrato;
  tumbasList: Tumba[] = [];
  id: number;
  tumba1: Tumba;
  tumba2: Tumba;
  ancho: number = 0;
  largo: number = 0;
  tumbaL: Tumba = new Tumba();
  dias: number;
  constructor(private service: BackendServiceService,
    private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {

    this.contratoParams = new Contrato();

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.service.getContratoXID(this.id).subscribe(fun => {
        this.contratoParams = fun
        this.dias = new Date(this.contratoParams.fecha_Pago).getDate();
        this.service.getTumbasPorID(Number(this.contratoParams.tumba.split("-")[1])).subscribe(lel => {
          this.tumbaL = lel
          this.service.getfreeTumbs().subscribe(tumbaList1 => {
            this.tumbasList = tumbaList1
          });
        });
      })
    })



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
      pdf.save('Contrato_' + this.id + '.pdf'); // generar PDF  
    });
  }
  getNombrePatio() {
    return this.contratoParams.patio.nombre_Patio;
  }
  getAncho() {
    if (this.contratoParams.tipoTumba.nombretipo_tumba == "Doble") {
      return Number(this.tumba1.ancho * 2);
    } else {
      return Number(this.tumba1.ancho);
    }

  }
  getLargo() {
    if (this.contratoParams.tipoTumba.nombretipo_tumba == "Doble") {
      return Number(this.tumba1.largo * 2);
    } else {
      return Number(this.tumba1.largo);
    }
  }

  numeroTumbas() {
    //contratoParams.tumba.numero_Tumba
    if (this.contratoParams.tipoTumba.nombretipo_tumba == "Doble") {
      let str = this.contratoParams.tumba;
      let tumbas = str.split("-");

      for (let i = 0; i < this.tumbasList.length; i++) {
        if (this.tumbasList[i].id_tumba == Number(tumbas[0])) {
          this.tumba1 = this.tumbasList[i];
        }
        if (this.tumbasList[i].id_tumba == Number(tumbas[1])) {
          this.tumba2 = this.tumbasList[i];
        }
      }
      return this.tumba1.numero_Tumba + "-" + this.tumba2.numero_Tumba;
    } else {

      for (let i = 0; i < this.tumbasList.length; i++) {
        if (this.tumbasList[i].id_tumba == Number(this.contratoParams.tumba)) {
          this.tumba1 = this.tumbasList[i];
        }
      }
      return this.tumba1.numero_Tumba
    }

  }




  volver() {
    this.router.navigate(['/administracion-inicio/AVentas/']);
  }



}
