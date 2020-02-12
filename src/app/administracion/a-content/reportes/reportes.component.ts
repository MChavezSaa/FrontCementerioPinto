
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
  fechas:IntervaloFecha;
  private chart3: am4charts.XYChart; //reservas
  reservas: any[] = [];


  constructor(private restService: BackendServiceService) { 
    this.model = new Date();
    this.model2 = new Date();
  }

  ngOnInit() {

  }

  
}
/*
generarReporte() {
    this.cargarGraficoReservas();
  }

  cargarGraficoReservas() {
    //inicializar grafico clientes
    this.chart3 = am4core.create("chartdiv3", am4charts.XYChart);
    this.chart3.hiddenState.properties.opacity = 0; // this creates initial fade-in
    this.chart3.paddingRight = 10;
    this.fechas = { fechaInicio: this.model+"", fechaFin: this.model2+"" };
    //Datos
    this.restService.getContratoFechas(this.fechas).subscribe((res: any) => {
      this.reservas = res;
      let agendada = 0;
      let reservada = 0;
      let canceladaCliente = 0;
      let canceladaProfesional = 0;
      let ausente = 0;
      for (let index = 0; index < this.reservas.length; index++) {
        if (this.reservas[index][0].estado_reserva.id_estado_reserva == 1) {
          agendada++;
        } else {
          if (this.reservas[index][0].estado_reserva.id_estado_reserva == 2) {
            reservada++;
          } else {
            if (this.reservas[index][0].estado_reserva.id_estado_reserva == 3) {
              canceladaCliente++;
            } else {
              if (this.reservas[index][0].estado_reserva.id_estado_reserva == 4) {
                canceladaProfesional++;
              } else {
                ausente++;
              }
            }
          }
        }
      }
      this.chart3.data = [{
        "country": "Agendada",
        "visits": agendada
      },
      {
        "country": "Reservada",
        "visits": reservada
      },
      {
        "country": "Cancelada Cliente",
        "visits": canceladaCliente
      },
      {
        "country": "Cancelada Profesional",
        "visits": canceladaProfesional
      },
      {
        "country": "Ausente Cliente",
        "visits": ausente
      }]
    }, err => {
      this.reservas = [];
    })
    // Create axes
    let categoryAxis = this.chart3.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    let valueAxis = this.chart3.yAxes.push(new am4charts.ValueAxis());
    // Create series
    let series = this.chart3.series.push(new am4charts.ColumnSeries());
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
    this.chart3.exporting.title = "Reporte de Servicios";
    this.chart3.exporting.menu.items = [{
      "label": "<i class=\"fas fa-align-justify\"></i>",
      "menu": [
        { "type": "png", "label": " Grafico en PNG" },
        { "type": "pdf", "label": " Grafico en PDF" },
        { "type": "jpg", "label": " Grafico en JPG" }
      ]
    }];
  }

*/