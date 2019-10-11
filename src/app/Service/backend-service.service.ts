import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Cliente } from '../empleado/empleado-content/e-clientes/cliente';
import { Cementerio } from '../Entidades/Cementerio';
import { map, catchError } from 'rxjs/operators';

import { Funcionario } from '../Entidades/Funcionario';
import { Terreno } from '../Entidades/Terreno';
import { Patio } from '../Entidades/Patio';
import { TipoTumba } from '../Entidades/TipoTumba';
import { Tumba } from '../Entidades/Tumba';
import Swal from 'sweetalert2';




@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  private urlEndPoint: string = 'http://localhost:8080/';
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})


  constructor(private http: HttpClient) { }

  /*CLIENTES*//*FALTA FUNCION UPDATE EN CLIENTE*/
  

  getClientes():Observable<Cliente[]>{
    return this.http.get(this.urlEndPoint + "listClientes").pipe(
      map((response)=>response as Cliente[])
    )
  }

  saveCliente(cliente:Cliente):Observable<Cliente>{  
      return this.http.post(this.urlEndPoint+"saveCliente",cliente,{headers:this.httpHeaders}).pipe(
        map((response:any) => response.cliente as Cliente),
        catchError(e=>{
          console.error(e.error.mensaje);
          Swal.fire('Error al crear el cliente', e.error.mensaje,'error');
          return throwError(e);
        })
      );
    }
  

  deleteCliente(id: number) {
    return this.http.delete(this.urlEndPoint + 'deleteCliente/' + id);
  }


  /* FUNCIONARIO  */
 
  getFuncionarios():Observable<Funcionario[]>{
    return this.http.get(this.urlEndPoint + "listFuncionarios").pipe(
      map((response)=>response as Funcionario[])
    )
  }

  saveFuncionario(funcionario:Funcionario):Observable<Funcionario>{  
    return this.http.post(this.urlEndPoint+"saveFuncionario",funcionario,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.funcionario as Funcionario),
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el funcionario', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }


  deleteFuncionario(id: number) {
    return this.http.delete(this.urlEndPoint + 'deleteFuncionario/' + id);
  }

  updateFuncionario(id: number, funcionario: Funcionario) {
    return this.http.put(this.urlEndPoint + 'updateFuncionario/' + id, funcionario);
  }

  /*TERRENO*/  /**no existe update en terreno */
  getTerreno():Observable<Terreno[]>{
    return this.http.get(this.urlEndPoint + "listTerrenos").pipe(
      map((response)=>response as Terreno[])
    )
  }

  saveTerreno(terreno:Terreno):Observable<Terreno>{  
    return this.http.post(this.urlEndPoint+"saveTerreno",terreno,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.terreno as Terreno),
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el terreno', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  deleteTerreno(id: number) {
    return this.http.delete(this.urlEndPoint + 'deleteTerreno/' + id);
  }


  /*PATIO*/  /**no existe update en patio */

  getPatio():Observable<Patio[]>{
    return this.http.get(this.urlEndPoint + "listPatios").pipe(
      map((response)=>response as Patio[])
    )
  }

  savePatio(patio:Patio):Observable<Patio>{  
    return this.http.post(this.urlEndPoint+"savePatio",patio,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.patio as Patio),
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el patio', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }
  

  deletePatio(id: number) {
    return this.http.delete(this.urlEndPoint + 'deletePatio/' + id);
  }

  /*tipoTumba*/  /*tipo tumba no tiene delete */

  getTipoTumba():Observable<TipoTumba[]>{
    return this.http.get(this.urlEndPoint + "listTipoTumbas").pipe(
      map((response)=>response as TipoTumba[])
    )
  }

  saveTipoTumba(tipoTumba:TipoTumba):Observable<TipoTumba>{  
    return this.http.post(this.urlEndPoint+"saveTipoTumba",tipoTumba,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.tipoTumba as TipoTumba),
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el tipo de tumba', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  updateTipoTumba(id: number, tipoTumba: TipoTumba) {
    return this.http.put(this.urlEndPoint + 'updateTipoTumba/' + id, tipoTumba);
  }


  /*TUMBA*/ /*NO TIENE DELETE*/

  getTumba():Observable<Tumba[]>{
    return this.http.get(this.urlEndPoint + "listTumbas").pipe(
      map((response)=>response as Tumba[])
    )
  }


  saveTumba(tumba:Tumba):Observable<Tumba>{  
    return this.http.post(this.urlEndPoint+"saveTipoTumba",tumba,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.tumba as Tumba),
      catchError(e=>{
        console.error(e.error.mensaje);
        Swal.fire('Error al crear la tumba', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  updateTumba(id: number, tumba: Tumba) {
    return this.http.put(this.urlEndPoint + 'updateTumba/' + id, tumba);
  }
}
