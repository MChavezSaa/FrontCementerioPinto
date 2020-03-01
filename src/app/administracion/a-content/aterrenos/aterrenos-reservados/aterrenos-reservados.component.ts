import { Component, OnInit } from '@angular/core';
import { Tumba } from 'src/app/Entidades/Tumba';
import { BackendServiceService } from 'src/app/Service/backend-service.service';

@Component({
  selector: 'app-aterrenos-reservados',
  templateUrl: './aterrenos-reservados.component.html',
  styleUrls: ['./aterrenos-reservados.component.css']
})
export class ATerrenosReservadosComponent implements OnInit {

  constructor(public service: BackendServiceService) { }
  
  TumbasLibresList: Tumba[] = [];
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

  ngOnInit() {
    this.service.getReservedTumbs().subscribe(tumbaList1 => {
      this.TumbasLibresList = tumbaList1
      this.llenarListas()
    });
  }
  llenarListas() {
    for (let i = 0; i < this.TumbasLibresList.length; i++) {
      if (this.TumbasLibresList[i].patio.id_Patio == 1) {
        this.peopleA.push(this.TumbasLibresList[i]);
      } else {
        if (this.TumbasLibresList[i].patio.id_Patio == 2) {
          this.peopleB.push(this.TumbasLibresList[i]);
        } else {
          if (this.TumbasLibresList[i].patio.id_Patio == 3) {
            this.peopleC.push(this.TumbasLibresList[i]);
          } else {
            if (this.TumbasLibresList[i].patio.id_Patio == 4) {
              this.peopleD.push(this.TumbasLibresList[i]);
            } else {
              if (this.TumbasLibresList[i].patio.id_Patio == 5) {
                this.peopleE.push(this.TumbasLibresList[i]);
              } else {
                if (this.TumbasLibresList[i].patio.id_Patio == 6) {
                  this.peopleF.push(this.TumbasLibresList[i]);
                } else {
                  if (this.TumbasLibresList[i].patio.id_Patio == 7) {
                    this.peopleG.push(this.TumbasLibresList[i]);
                  } else {
                    if (this.TumbasLibresList[i].patio.id_Patio == 8) {
                      this.peopleH.push(this.TumbasLibresList[i]);
                    } else {
                      if (this.TumbasLibresList[i].patio.id_Patio == 9) {
                        this.peopleI.push(this.TumbasLibresList[i]);
                      } else {
                        if (this.TumbasLibresList[i].patio.id_Patio == 10) {
                          this.peopleJ.push(this.TumbasLibresList[i]);
                        } else {
                          if (this.TumbasLibresList[i].patio.id_Patio == 11) {
                            this.peopleK.push(this.TumbasLibresList[i]);
                          } else {
                            if (this.TumbasLibresList[i].patio.id_Patio == 12) {
                              this.peopleL.push(this.TumbasLibresList[i]);
                            } else {
                              if (this.TumbasLibresList[i].patio.id_Patio == 13) {
                                this.MausoleoA.push(this.TumbasLibresList[i]);
                              } else {
                                if (this.TumbasLibresList[i].patio.id_Patio == 14) {
                                  this.MausoleoB.push(this.TumbasLibresList[i]);
                                } else {
                                  if (this.TumbasLibresList[i].patio.id_Patio == 15) {
                                    this.MausoleoC.push(this.TumbasLibresList[i]);
                                  } else {
                                    if (this.TumbasLibresList[i].patio.id_Patio == 16) {
                                      this.MausoleoD.push(this.TumbasLibresList[i]);
                                    } else {
                                      if (this.TumbasLibresList[i].patio.id_Patio == 17) {
                                        this.NichoA.push(this.TumbasLibresList[i]);
                                      } else {
                                        if (this.TumbasLibresList[i].patio.id_Patio == 18) {
                                          this.NichoB.push(this.TumbasLibresList[i]);
                                        } else {
                                          if (this.TumbasLibresList[i].patio.id_Patio == 19) {
                                            this.NichoC.push(this.TumbasLibresList[i]);
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
