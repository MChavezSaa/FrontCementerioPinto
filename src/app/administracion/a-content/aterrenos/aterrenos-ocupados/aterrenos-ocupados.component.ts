import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Tumba } from 'src/app/Entidades/Tumba';
import { BackendServiceService } from 'src/app/Service/backend-service.service';

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
  nombre2: any;
  Fd: any;
  id_tumba: any;


  constructor(private router: Router, private service: BackendServiceService) { }

  ngOnInit() {
    this.service.getfreeTumbs().subscribe(tumbaList1 => {
      this.TumbasOcupadasList = tumbaList1
      this.llenarListas()
    });
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


  /*

  guardarDatos(iD: number, letter: string, nombre1: string, fd2: string, idTumba: number) {
    //vaciar var
    this.id="";
    this.Letter="";
    this.nombre2="";
    this.Fd ="";
    this.id_tumba="";


    //LLENAR VAR
    this.id = iD;
    this.Letter = letter;
    this.nombre2 = nombre1;
    this.Fd = fd2;
    this.id_tumba=idTumba;

    localStorage.setItem("ID",this.id);
    localStorage.setItem("letter", this.Letter)
    localStorage.setItem("Nombre",this.nombre2);
    localStorage.setItem("FD",this.Fd);
    localStorage.setItem("idTumba", this.id_tumba);

    this.router.navigateByUrl('/administracion-inicio/AMarkerEnfasis');

  }

    nombre() {
    let nombre3: string;
    nombre3 = this.nNombreAux(this.Letter);
    return nombre3;
  }
  fd() {
    let fd2: string;
    fd2 = this.nFDAux(this.Letter);
    return fd2;
  }
  nTerreno(){
    let idter: number;
    idter = this.nTerrenoAux(this.Letter);
    return idter;
  }
  nTumba() {
    let idTumba: number;
    idTumba = this.nTUMBAAux(this.Letter);
    return idTumba;
  }

  nTerrenoAux(letter: string): number {
    switch (letter) {
      case "a": {
        //statements; 
        return this.peopleA[this.id].id_Terreno;     
      }
      case "b": {
        //statements; 
        return this.peopleB[this.id].id_Terreno;
      }
      case "c": {
        //statements; 
        return this.peopleC[this.id].id_Terreno;
      }
      case "d": {
        return this.peopleD[this.id].id_Terreno
      }
      case "e": {
        //statements; 
        return this.peopleE[this.id].id_Terreno;
      }
      case "f": {
        //statements; 
        return this.peopleF[this.id].id_Terreno;
      }
      case "g": {
        //statements; 
        return this.peopleG[this.id].id_Terreno;
      }

    }
  }

  nNombreAux(letter: string): string {
    switch (letter) {
      case "a": {
        //statements; 
        return this.peopleA[this.id].name;     
      }
      case "b": {
        //statements; 
        return this.peopleB[this.id].name;
      }
      case "c": {
        //statements; 
        return this.peopleC[this.id].name;
      }
      case "d": {
        return this.peopleD[this.id].name
      }
      case "e": {
        //statements; 
        return this.peopleE[this.id].name;
      }
      case "f": {
        //statements; 
        return this.peopleF[this.id].name;
      }
      case "g": {
        //statements; 
        return this.peopleG[this.id].name;
      }

      default: {
        //statements; 
       return "";
      }
    }
  }
  nFDAux(letter: string): string {
    switch (letter) {
      case "a": {
        //statements;         
        return this.peopleA[this.id].FD;     
      }
      case "b": {
        //statements;        
        return this.peopleB[this.id].FD;
      }
      case "c": {
        //statements;         
        return this.peopleC[this.id].FD;
      }
      case "d": {        
        return this.peopleD[this.id].FD
      }
      case "e": {
        //statements; 
        

        return this.peopleE[this.id].FD;
      }
      case "f": {
        //statements;         
        return this.peopleF[this.id].FD;
      }
      case "g": {
        //statements;       
        return this.peopleG[this.id].FD;
      }

      default: {
        //statements; 
       return "";
      }
    }
  }
  nTUMBAAux(letter: string): number {
    switch (letter) {
      case "a": {
        //statements; 
        return this.peopleA[this.id].id_tumba;     
      }
      case "b": {
        //statements; 
        return this.peopleB[this.id].id_tumba;
      }
      case "c": {
        //statements; 
        return this.peopleC[this.id].id_tumba;
      }
      case "d": {
        return this.peopleD[this.id].id_tumba
      }
      case "e": {
        //statements; 
        return this.peopleE[this.id].id_tumba;
      }
      case "f": {
        //statements; 
        return this.peopleF[this.id].id_tumba;
      }
      case "g": {
        //statements; 
        return this.peopleG[this.id].id_tumba;
      }

    }
  }*/

}
