import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { Tumba } from 'src/app/Entidades/Tumba';
import { TumbaDifunto } from 'src/app/Entidades/TumbaDifunto';
import { ActivatedRoute } from '@angular/router';
import { object } from '@amcharts/amcharts4/core';

@Component({
  selector: 'app-aterrenos-libres',
  templateUrl: './aterrenos-libres.component.html',
  styleUrls: ['./aterrenos-libres.component.css']
})
export class ATerrenosLibresComponent implements OnInit {

  TodasLastumbasList: Tumba[] = [];
  TumbasLibresList: Tumba[] = [];
  MismaTumba: TumbaDifunto[] = [];  

  constructor(public service: BackendServiceService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.service.getTumba().subscribe(tumbaList1 => {
      this.TumbasLibresList = tumbaList1
      this.llenarListas()
    });
  }

  public cargarMostrarDifuntos(id: Tumba){
    let idString: string = id.id_tumba+"";
        this.service.getMostrarDifuntos(idString).subscribe((mostrar)=> {          
          for(let i =0; i<mostrar.length ; i++){
            if(mostrar[i].estadoTumbaDifunto == true){
              this.MismaTumba.push(mostrar[i]);             
            }
          }       
        }); 
        
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
    for (let i = 0; i < this.TumbasLibresList.length; i++) {
      if (this.TumbasLibresList[i].patio.id_Patio == 1 ) {
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

 /* porTumba(aux : Tumba){
      for (let i = 0; i < this.MismaTumba.length; i++) { 
        console.log("entro for");
        if( this.MismaTumba[i].tumba.localeCompare(' '+ aux.numero_Tumba)){
            this.MostrarDifunto = this.MismaTumba[i];
            console.log("entro if");          
            console.log(this.MostrarDifunto);          
        }
      }
  }*/

}
