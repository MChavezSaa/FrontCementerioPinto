import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Cliente } from '../Entidades/Cliente';
import { map, catchError } from 'rxjs/operators';
import { Funcionario } from '../Entidades/Funcionario';
import { Terreno } from '../Entidades/Terreno';
import { Patio } from '../Entidades/Patio';
import { TipoTumba } from '../Entidades/TipoTumba';
import { Tumba } from '../Entidades/Tumba';
import Swal from 'sweetalert2';
import { Cementerio } from '../Entidades/Cementerio';
import { Derecho } from '../Entidades/Derecho';
import { Contrato } from '../Entidades/Contrato';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  private urlEndPoint: string = 'http://localhost:8080/';
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})


  constructor(private http: HttpClient, private router: Router) { }

  /*CLIENTES*//*FALTA FUNCION UPDATE EN CLIENTE*/
  
  private isNoAutorizado(e): boolean{
    if(e.status==401 || e.status==402){
      this.router.navigate(['/personal'])
      return true; 
    }
    return false;
  }


  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint + "listClientes").pipe(   
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e); 
      })
    );
  }

  saveCliente(cliente:Cliente):Observable<Cliente >{  
      return this.http.post(this.urlEndPoint+"saveCliente",cliente,{headers:this.httpHeaders}).pipe(
        map((response:any) => response.cliente as Cliente),
        catchError(e=>{

          if(this.isNoAutorizado(e)){
            return throwError(e);
          }
          console.error(e.error.mensaje);
          Swal.fire('Error al crear el cliente', e.error.mensaje,'error');
          return throwError(e);
        })
      );
    }
  
  deleteCliente(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}"deleteCliente/"${id}`,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el cliente', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }
/*CONTRATO*/
saveContrato(contrato:Contrato):Observable<Contrato>{  
  return this.http.post(this.urlEndPoint+"saveContrato",contrato,{headers:this.httpHeaders}).pipe(
    map((response:any) => response.contrato as Contrato),
    catchError(e=>{
      if (this.isNoAutorizado(e)) {
        return throwError(e);
      }
      console.error(e.error.mensaje);
      Swal.fire('Error al crear el Contrato', e.error.mensaje,'error');
      return throwError(e);
    })
  );
}


  /* FUNCIONARIO  */
 
  getFuncionarios():Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.urlEndPoint + "listFuncionarios").pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  saveFuncionario(funcionario:Funcionario):Observable<Funcionario>{  
    return this.http.post(this.urlEndPoint+"saveFuncionario",funcionario,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.funcionario as Funcionario),
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el funcionario', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  deleteFuncionario(id:number):Observable<Funcionario>{
    return this.http.delete<Funcionario>(`${this.urlEndPoint}"deleteFuncionario/"${id}`,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el Funcionario', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  updateFuncionario(funcionario:Funcionario, id:number):Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}updateFuncionario/${id}`,funcionario,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al editar el funcionario', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  /*TERRENO*/  /**no existe update en terreno */
  getTerreno():Observable<Terreno[]>{
    return this.http.get<Terreno[]>(this.urlEndPoint + "listTerrenos").pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  saveTerreno(terreno:Terreno):Observable<Terreno>{  
    terreno.estado_Terreno = true;
    return this.http.post(this.urlEndPoint+"saveTerrenos",terreno,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.terreno as Terreno),
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el terreno', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  deleteTerreno(id:number):Observable<Terreno>{
    return this.http.delete<Terreno>(`${this.urlEndPoint}+"deleteTerreno/"${id}`,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el Terreno', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  /*PATIO*/  /**no existe update en patio */

  getPatio():Observable<Patio[]>{
    return this.http.get<Patio[]>(this.urlEndPoint + "listPatios").pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  savePatio(patio:Patio):Observable<Patio>{  
    return this.http.post(this.urlEndPoint+"savePatio",patio,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.patio as Patio),
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el patio', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }
  

  deletePatio(id:number):Observable<Patio>{
    return this.http.delete<Patio>(`${this.urlEndPoint}+"deletePatio/"${id}`,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el Patio', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }


  /*tipoTumba*/  /*tipo tumba no tiene delete */

  getTipoTumba():Observable<TipoTumba[]>{
    return this.http.get<TipoTumba[]>(this.urlEndPoint + "listTipotumbas").pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  saveTipoTumba(tipoTumba:TipoTumba):Observable<TipoTumba>{  
    return this.http.post(this.urlEndPoint+"saveTipoTumba",tipoTumba,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.tipoTumba as TipoTumba),
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el tipo de tumba', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  updateTipoTumba(tipoTumba:TipoTumba, id:number):Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}updateTipoTumba/${id}`,tipoTumba,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al editar el tipo de tumba', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }



  /*TUMBA*/ /*NO TIENE DELETE*/

  getTumba():Observable<Tumba[]>{
    return this.http.get<Tumba[]>(this.urlEndPoint + "listTumbas").pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }


  saveTumba(tumba:Tumba):Observable<Tumba>{  
    return this.http.post(this.urlEndPoint+"saveTipoTumba",tumba,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.tumba as Tumba),
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear la tumba', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  updateTumba(tumba:Tumba, id:number):Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}updateTumba/${id}`,tumba,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al editarla tumba', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  /*CEMENTERIO */

  getCementerio():Observable<Cementerio[]>{
    return this.http.get<Cementerio[]>(this.urlEndPoint + "listCementerios").pipe(
       catchError(e => {
         this.isNoAutorizado(e);
         return throwError(e);
       })
    );
  }


  saveCementerio(cementerio:Cementerio):Observable<Cementerio>{  
    return this.http.post(this.urlEndPoint+"saveCementerio",cementerio,{headers:this.httpHeaders}).pipe(
      map((response:any) => response.cementerio as Cementerio),
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el cementerio', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

  updateCementerio(cementerio:Cementerio, id:number):Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}updateCementerio/${id}`,cementerio,{headers:this.httpHeaders}).pipe(
      catchError(e=>{
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al editar el cementerio', e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }

/*Derecho */

getDerecho():Observable<Derecho[]>{
  return this.http.get<Derecho[]>(this.urlEndPoint + "listDerechos").pipe(
     catchError(e => {
       this.isNoAutorizado(e);
       return throwError(e);
     })
  );
}


saveDerecho(derecho:Derecho):Observable<Derecho>{  
  return this.http.post(this.urlEndPoint+"saveCementerio",derecho,{headers:this.httpHeaders}).pipe(
    map((response:any) => response.derecho as Derecho),
    catchError(e=>{
      if (this.isNoAutorizado(e)) {
        return throwError(e);
      }
      console.error(e.error.mensaje);
      Swal.fire('Error al crear el cementerio', e.error.mensaje,'error');
      return throwError(e);
    })
  );
}
/*
updateDerecho(cementerio:Cementerio, id:number):Observable<any>{
  return this.http.put<any>(`${this.urlEndPoint}updateCementerio/${id}`,cementerio,{headers:this.httpHeaders}).pipe(
    catchError(e=>{

      console.error(e.error.mensaje);
      Swal.fire('Error al editar el cementerio', e.error.mensaje,'error');
      return throwError(e);
    })
  );
}*/


}
