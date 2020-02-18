
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { IntervaloFecha } from 'src/app/Entidades/IntervaloFecha';
import { BackendServiceService } from 'src/app/Service/backend-service.service';


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
  show: boolean = true;


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
    this.chart3 = am4core.create("chartdiv3", am4charts.XYChart);
    this.chart3.hiddenState.properties.opacity = 0; // this creates initial fade-in
    this.chart3.paddingRight = 10;
    this.fechas = { fechaInicio: this.model + "", fechaFin: this.model2 + "" };
    //Datos
    this.restService.getContratoFechas(this.fechas).subscribe((res: any) => {
      this.contratos = res;
      //console.log(this.contratos);
      let contEnero = 0;
      let contFebrero = 0;
      let contMarzo = 0;
      let contAbril = 0;
      let contMayo = 0;
      let contJunio = 0;
      let contJulio = 0;
      let contAgosto = 0;
      let contSeptiembre = 0;
      let contOctubre = 0;
      let contNoviembre = 0;
      let contDiciembre = 0;


      for (let index = 0; index < this.contratos.length; index++) {
        let fecha1 = this.contratos[index].fecha_Ingreso_Venta+"";
        let fechas = fecha1.split("-");        
        
        if (Number.parseInt(fechas[1]) == 1) {
          contEnero++
        }
        if (Number.parseInt(fechas[1]) == 2) {
          contFebrero++
        }
        if (Number.parseInt(fechas[1]) == 3) {
          contMarzo++
        }
        if (Number.parseInt(fechas[1])== 4) {
          contAbril++
        }
        if (Number.parseInt(fechas[1])== 5) {
          contMayo++
        }
        if (Number.parseInt(fechas[1])== 6) {
          contJunio++
        }
        if (Number.parseInt(fechas[1])== 7) {
          contJulio++
        }
        if (Number.parseInt(fechas[1])== 8) {
          contAgosto++
        }
        if (Number.parseInt(fechas[1])== 9) {
          contSeptiembre++
        }
        if (Number.parseInt(fechas[1])== 10) {
          contOctubre++
        }
        if (Number.parseInt(fechas[1])== 11) {
          contNoviembre++
        }
        if (Number.parseInt(fechas[1])== 12) {
          contDiciembre++
        }
        
      }

      this.chart3.data = [{
        "country": "Ene",
        "visits": contEnero
      },
      {
        "country": "Feb",
        "visits": contFebrero
      },
      {
        "country": "Mar",
        "visits": contMarzo
      },
      {
        "country": "Abr",
        "visits": contAbril
      },
      {
        "country": "May",
        "visits": contMayo
      },
      {
        "country": "Jun",
        "visits": contJunio
      },
      {
        "country": "Jul",
        "visits": contJulio
      },
      {
        "country": "Ago",
        "visits": contAgosto
      },
      {
        "country": "Sept",
        "visits": contSeptiembre
      },
      {
        "country": "Oct",
        "visits": contOctubre
      },
      {
        "country": "Nov",
        "visits": contNoviembre
      },
      {
        "country": "Dic",
        "visits": contDiciembre
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
    valueAxis.title.text = "Ventas Por Rango"
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

}