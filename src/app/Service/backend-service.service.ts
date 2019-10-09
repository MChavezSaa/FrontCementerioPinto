import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../empleado/empleado-content/e-clientes/cliente';


@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  private urlEndPoint:string= 'http://localhost:8080/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'}); 

  constructor(private http:HttpClient) { }


  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }
}
