import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Tumba } from 'src/app/Entidades/Tumba';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { TumbaDifunto } from 'src/app/Entidades/TumbaDifunto';

@Component({
  selector: 'app-aterrenos-ocupados',
  templateUrl: './aterrenos-ocupados.component.html',
  styleUrls: ['./aterrenos-ocupados.component.css']
})
export class ATerrenosOcupadosComponent implements OnInit {

  TodasLastumbasList: Tumba[] = [];
  TumbasOcupadasList: Tumba[] = [];
  id: any;
  Letter: any;
  Mdifunto: TumbaDifunto;
  Fd: any;
  id_tumba: any;

  ocupado: any;
  mostrarTabla2: Boolean = false;
  tumbaDifuntos: TumbaDifunto[] = [];

  ocupadosListAux: TumbaDifunto[] = []

  constructor(private router: Router, public service: BackendServiceService) { }

  ngOnInit() {
    this.service.getOcupadoTumbs().subscribe(tumbaList1 => {
      this.TumbasOcupadasList = tumbaList1
      this.llenarListas()
    });
    this.service.getTumbaDifunto().subscribe(tumbaDifuntoList1 => this.tumbaDifuntos = tumbaDifuntoList1);
  }

  llenarListaLibre() {
    for (let i = 0; i < this.TodasLastumbasList.length; i++) {
      if (this.TodasLastumbasList[i].estado_Tumba == "Ocupado")
        this.TumbasOcupadasList.push(this.TodasLastumbasList[i]);
    }
  } 

  peopleA: Tumba[] = [];
  peopleB: Tumba[] = [];
  peopleC: Tumba[] = [];
  peopleD: Tumba[] = [];
  peopleE: Tumba[] = [];
  peopleF: Tumba[] = [];
  peopleG: Tumba[] = [];
  peopleH: Tumba[] = [];
  peopleI: Tumba[] = [];
  peopleJ: Tumba[] = [];
  peopleK: Tumba[] = [];
  peopleL: Tumba[] = [];

  MausoleoA: Tumba[] = [];
  MausoleoB: Tumba[] = [];
  MausoleoC: Tumba[] = [];
  MausoleoD: Tumba[] = [];

  NichoA: Tumba[] = [];
  NichoB: Tumba[] = [];
  NichoC: Tumba[] = [];


  llenarListas() {
    for (let i = 0; i < this.TumbasOcupadasList.length; i++) {
      if (this.TumbasOcupadasList[i].patio.id_Patio == 1) {
        this.peopleA.push(this.TumbasOcupadasList[i]);
      } else {
        if (this.TumbasOcupadasList[i].patio.id_Patio == 2) {
          this.peopleB.push(this.TumbasOcupadasList[i]);
        } else {
          if (this.TumbasOcupadasList[i].patio.id_Patio == 3) {
            this.peopleC.push(this.TumbasOcupadasList[i]);
          } else {
            if (this.TumbasOcupadasList[i].patio.id_Patio == 4) {
              this.peopleD.push(this.TumbasOcupadasList[i]);
            } else {
              if (this.TumbasOcupadasList[i].patio.id_Patio == 5) {
                this.peopleE.push(this.TumbasOcupadasList[i]);
              } else {
                if (this.TumbasOcupadasList[i].patio.id_Patio == 6) {
                  this.peopleF.push(this.TumbasOcupadasList[i]);
                } else {
                  if (this.TumbasOcupadasList[i].patio.id_Patio == 7) {
                    this.peopleG.push(this.TumbasOcupadasList[i]);
                  } else {
                    if (this.TumbasOcupadasList[i].patio.id_Patio == 8) {
                      this.peopleH.push(this.TumbasOcupadasList[i]);
                    } else {
                      if (this.TumbasOcupadasList[i].patio.id_Patio == 9) {
                        this.peopleI.push(this.TumbasOcupadasList[i]);
                      } else {
                        if (this.TumbasOcupadasList[i].patio.id_Patio == 10) {
                          this.peopleJ.push(this.TumbasOcupadasList[i]);
                        } else {
                          if (this.TumbasOcupadasList[i].patio.id_Patio == 11) {
                            this.peopleK.push(this.TumbasOcupadasList[i]);
                          } else {
                            if (this.TumbasOcupadasList[i].patio.id_Patio == 12) {
                              this.peopleL.push(this.TumbasOcupadasList[i]);
                            } else {
                              if (this.TumbasOcupadasList[i].patio.id_Patio == 13) {
                                this.MausoleoA.push(this.TumbasOcupadasList[i]);
                              } else {
                                if (this.TumbasOcupadasList[i].patio.id_Patio == 14) {
                                  this.MausoleoB.push(this.TumbasOcupadasList[i]);
                                } else {
                                  if (this.TumbasOcupadasList[i].patio.id_Patio == 15) {
                                    this.MausoleoC.push(this.TumbasOcupadasList[i]);
                                  } else {
                                    if (this.TumbasOcupadasList[i].patio.id_Patio == 16) {
                                      this.MausoleoD.push(this.TumbasOcupadasList[i]);
                                    } else {
                                      if (this.TumbasOcupadasList[i].patio.id_Patio == 16) {
                                        this.MausoleoD.push(this.TumbasOcupadasList[i]);
                                      } else {
                                        if (this.TumbasOcupadasList[i].patio.id_Patio == 17) {
                                          this.NichoA.push(this.TumbasOcupadasList[i]);
                                        } else {
                                          if (this.TumbasOcupadasList[i].patio.id_Patio == 18) {
                                            this.NichoB.push(this.TumbasOcupadasList[i]);
                                          } else {
                                            if (this.TumbasOcupadasList[i].patio.id_Patio == 19) {
                                              this.NichoC.push(this.TumbasOcupadasList[i]);
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  mostrarDatosTabla(aux : Tumba) { 

    this.mostrarTabla2 = true;
    for (let i = 0; i < this.tumbaDifuntos.length; i++) { 
      if(this.tumbaDifuntos[i].id_Tumba_Difunto == aux.id_tumba){
        this.Mdifunto = this.tumbaDifuntos[i];
        // this.Mdifunto.push(this.tumbaDifuntos[i]);
        console.log(this.tumbaDifuntos[i]);
      }
    }
  }

  /*

  aux.id_tumba
    this.ocupadosListAux = [];
    if (this.ocupado != null) {
        this.mostrarTabla2 = true;
      for (let i = 0; i < this.tumbaDifuntos.length; i++) {
        if (this.== this.tumbaDifuntos[i].difunto.id_Difunto) {
        this.ocupadosListAux.push(this.tumbaDifuntos[i]);
        }
     }
    } else {
      this.mostrarTabla2 = false;
    }



}
