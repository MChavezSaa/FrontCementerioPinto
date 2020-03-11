import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/Entidades/Contrato';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Tumba } from 'src/app/Entidades/Tumba';

@Component({
  selector: 'app-c-cuotas',
  templateUrl: './c-cuotas.component.html',
  styleUrls: ['./c-cuotas.component.css']
})
export class CCuotasComponent implements OnInit {
  contratoList: Contrato[] = [];;
  tumbasList: Tumba[] = [];
  numero_Tumba: any;
  constructor(public service: BackendServiceService) { }

  ngOnInit() {
    this.service.getTumba().subscribe(tumbasList1 => {
      this.tumbasList = tumbasList1
      this.service.ContratosPorUsuario(this.service.usuario.username).subscribe(contratoList1 => {
        this.contratoList = contratoList1;
        this.contratoList.forEach(element => {          
          element.tumba = this.numerosTumba(element);
          
        });
      });
    });
  }
  fechaPago(date: Date) {
    let f1 = new Date(date);
    return f1.getUTCDate();

  }
  numerosTumba(contrato: Contrato) {
    this.numero_Tumba = null;
    if (contrato.tipoTumba.nombretipo_tumba == "Doble") {
      let str = contrato.tumba;
      let tumbas = str.split("-");
      let tumba1;
      let tumba2;
      for (let i = 0; i < this.tumbasList.length; i++) {
        if (this.tumbasList[i].id_tumba == Number(tumbas[0])) {
          tumba1 = this.tumbasList[i];
        }
        if (this.tumbasList[i].id_tumba == Number(tumbas[1])) {
          tumba2 = this.tumbasList[i];
        }
      }
      this.numero_Tumba = tumba1.numero_Tumba + " - " + tumba2.numero_Tumba;
      return this.numero_Tumba;
    } else {
      let tumba1;
      for (let i = 0; i < this.tumbasList.length; i++) {
        if (this.tumbasList[i].id_tumba == Number(contrato.tumba)) {
          tumba1 = this.tumbasList[i];
        }
      }
      this.numero_Tumba = tumba1.numero_Tumba
      return this.numero_Tumba
    }
  }
}
