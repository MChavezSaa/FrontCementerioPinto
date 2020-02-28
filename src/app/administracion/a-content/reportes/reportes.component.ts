
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as jsPDF from 'jspdf';
import { IntervaloFecha } from 'src/app/Entidades/IntervaloFecha';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  model: Date; //fecha inicio
  model2: Date; //fecha fin
  fechas: IntervaloFecha;
  private chart3: am4charts.XYChart; //contratos
  contratos: any[] = [];
  show: boolean = false;
  cargarTabla: boolean= false;


      contEnero = 0;
      contFebrero = 0;
      contMarzo = 0;
      contAbril = 0;
      contMayo = 0;
      contJunio = 0;
      contJulio = 0;
      contAgosto = 0;
      contSeptiembre = 0;
      contOctubre = 0;
      contNoviembre = 0;
      contDiciembre = 0;

  constructor(private restService: BackendServiceService) {
    this.model = new Date();
    this.model2 = new Date();
  }

  ngOnInit() {

  }
  generarReporte() {    
    this.cargarGraficocontratos();
  }



  imprimirMeses() {
    console.log(new Date().getMonth())
  }

  cargarGraficocontratos() {
    //inicializar grafico clientes
    this.cargarTabla = true;
    this.chart3 = am4core.create("chartdiv3", am4charts.XYChart);
    this.chart3.hiddenState.properties.opacity = 0; // this creates initial fade-in
    this.chart3.paddingRight = 10;
    this.fechas = { fechaInicio: this.model + "", fechaFin: this.model2 + "" };
    //Datos
    this.restService.getContratoFechas(this.fechas).subscribe((res: any) => {
      this.contratos = res;
      //console.log(this.contratos);
       this.contEnero = 0;
      this.contFebrero = 0;
      this.contMarzo = 0;
      this.contAbril = 0;
      this.contMayo = 0;
      this.contJunio = 0;
      this.contJulio = 0;
      this.contAgosto = 0;
      this.contSeptiembre = 0;
      this.contOctubre = 0;
      this.contNoviembre = 0;
      this.contDiciembre = 0;


      for (let index = 0; index < this.contratos.length; index++) {
        let fecha1 = this.contratos[index].fecha_Ingreso_Venta+"";
        let fechas = fecha1.split("-");        
        
        if (Number.parseInt(fechas[1]) == 1) {
          this.contEnero++
        }
        if (Number.parseInt(fechas[1]) == 2) {
          this.contFebrero++
        }
        if (Number.parseInt(fechas[1]) == 3) {
          this.contMarzo++
        }
        if (Number.parseInt(fechas[1])== 4) {
          this.contAbril++
        }
        if (Number.parseInt(fechas[1])== 5) {
          this.contMayo++
        }
        if (Number.parseInt(fechas[1])== 6) {
          this.contJunio++
        }
        if (Number.parseInt(fechas[1])== 7) {
          this.contJulio++
        }
        if (Number.parseInt(fechas[1])== 8) {
          this.contAgosto++
        }
        if (Number.parseInt(fechas[1])== 9) {
          this.contSeptiembre++
        }
        if (Number.parseInt(fechas[1])== 10) {
          this.contOctubre++
        }
        if (Number.parseInt(fechas[1])== 11) {
          this.contNoviembre++
        }
        if (Number.parseInt(fechas[1])== 12) {
          this.contDiciembre++
        }
        
      }

      this.chart3.data = [{
        "country": "Ene",
        "visits": this.contEnero
      },
      {
        "country": "Feb",
        "visits": this.contFebrero
      },
      {
        "country": "Mar",
        "visits": this.contMarzo
      },
      {
        "country": "Abr",
        "visits": this.contAbril
      },
      {
        "country": "May",
        "visits": this.contMayo
      },
      {
        "country": "Jun",
        "visits": this.contJunio
      },
      {
        "country": "Jul",
        "visits": this.contJulio
      },
      {
        "country": "Ago",
        "visits": this.contAgosto
      },
      {
        "country": "Sept",
        "visits": this.contSeptiembre
      },
      {
        "country": "Oct",
        "visits": this.contOctubre
      },
      {
        "country": "Nov",
        "visits": this.contNoviembre
      },
      {
        "country": "Dic",
        "visits": this.contDiciembre
      }
      ]
      this.show = true;
    }, err => {
      this.contratos = [];
    })
    // Create axes
    let categoryAxis = this.chart3.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    let valueAxis = this.chart3.yAxes.push(new am4charts.ValueAxis());
    // Create series
    let series = this.chart3.series.push(new am4charts.ColumnSeries());
    valueAxis.title.text = "Ventas"
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    //exportacion 
    this.chart3.exporting.menu = new am4core.ExportMenu();
    this.chart3.exporting.filePrefix = "Reporte: " + this.model + "-" + this.model2;
    this.chart3.exporting.title = "Reporte de venta";
    this.chart3.exporting.menu.items = [{
      "label": "<i class=\"fas fa-align-justify\"></i>",
      "menu": [
        { "type": "png", "label": " Grafico en PNG" },
        { "type": "pdf", "label": " Grafico en PDF" },
        { "type": "jpg", "label": " Grafico en JPG" }
      ]
    }];

  }


  @ViewChild('contenido', { static: false }) content: ElementRef;


  public generatePDF() {
    
    var data = document.getElementById('contenido');
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
      pdf.save("Reporte: " + this.model + "-" + this.model2+".pdf"); // generar PDF  
    });
  }

  generarPDF() {
    html2canvas(this.content.nativeElement, {
      // Opciones
      allowTaint: true,
      useCORS: false,
      // Calidad del PDF
      scale: 2

    }).then(canvas => {
      var img = canvas.toDataURL("image/jpeg", 1.0);
      var doc = new jsPDF('landscape');
      doc.setFontSize(20);
      doc.addImage(img, 'JPEG', 10, 10, 280, 150);

      doc.save('reporte.pdf');
    });
  }

}