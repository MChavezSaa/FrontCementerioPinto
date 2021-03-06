import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Cliente } from '../Entidades/Cliente';
import { map, catchError, tap } from 'rxjs/operators';
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
import { Usuario } from '../Entidades/usuario';
import { identifierModuleUrl } from '@angular/compiler';
import { Difunto } from '../Entidades/Difunto';
import { Traslado } from '../Entidades/Traslado';
import { ContratoDos } from '../Entidades/ContratoDos';
import { CuotasMantencion } from '../Entidades/CuotasMantencion';
import { pagosMantencion } from '../Entidades/PagosMantencion';
import { pagoDerecho } from '../Entidades/pagoDerecho';
import { cambioPass } from '../Entidades/cambioPass';
import { TumbaDifunto } from '../Entidades/TumbaDifunto';
import { IntervaloFecha } from '../Entidades/IntervaloFecha';
import { traslado2 } from '../Entidades/traslado2';
import { traslado3 } from '../Entidades/traslado3';


@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {


  private _usuario: Usuario;
  private _token: string;

  /*
  
  private urlEndPoint: string = 'http://localhost:8080/';
   */
  
  private urlEndPoint = 'http://parra.chillan.ubiobio.cl:8080/matias.chavez1501/'; 
  private urlEndPoint2: string = this.urlEndPoint + 'DeleteFuncionario/';
  private urlEndPoint3: string = this.urlEndPoint + 'DeleteTerreno/';
  private urlEndPoint4: string = this.urlEndPoint + 'DeleteCliente/';
  private urlEndPoint5: string = this.urlEndPoint + 'DeletePatio/';
  private urlEndPoint6: string = this.urlEndPoint + 'DeleteTipoTumba/';
  private urlEndPoint7: string = this.urlEndPoint + 'DeleteContrato/';



  ContratoList: Contrato[] = [];


  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })


  constructor(private http: HttpClient, private router: Router) { }

  private agregarAuthorizationHeader() {
    let token = this.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  hasRole(role: string): boolean {
    if (this.usuario.roles.includes(role)) {
      return true;
    }
    return false;
  }

  logout(): void {
    this._token = null;
    this._usuario = null;
    sessionStorage.clear();
  }

  login(usuario: Usuario): Observable<any> {
    const urlEndPoint2: string = this.urlEndPoint + 'oauth/token';


    const credenciales = btoa('angularapp' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', usuario.username);
    params.set('password', usuario.password);
    
    return this.http.post<any>(urlEndPoint2, params.toString(), { headers: httpHeaders });
  }

  isAuthenticated(): boolean {
    let payload = this.obtenerDatosToken(this.token);
    if (payload != null && payload.user_name && payload.user_name.length > 0) {
      return true;
    }
    return false;
  }

  guardarUsuario(accessToken: string): void {
    this._usuario = new Usuario();
    let payload = this.obtenerDatosToken(accessToken);

    this._usuario.username = payload.user_name;
    this._usuario.roles = payload.authorities;
    this._usuario.id_Usuario = payload.id;
    this._usuario.nombre = payload.nombre;
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }
  guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);

  }
  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }


  private isNoAutorizado(e): boolean {
    if (e.status == 401 || e.status == 402) {
      if (this.isAuthenticated()) {
        this.logout();
      }
      this.router.navigate(['/personal'])
      return true;
    }
    return false;
  }
  /*TRASLADO */

  saveTraslado(traslado: traslado3): Observable<Traslado> {
    return this.http.post(this.urlEndPoint + "saveTrasladoInterno", traslado, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.traslado as Traslado),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el traslado', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  saveTraslado2(traslado: Traslado): Observable<Traslado> {
    return this.http.post(this.urlEndPoint + "saveTrasladoExterno", traslado, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.traslado as Traslado),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el traslado', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  getTrasladoXID(id: number): Observable<traslado2> {
    return this.http.get<traslado2>(this.urlEndPoint + 'findTraslado/' + id, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }
  /*CLIENTES*/

  getClientePorID(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.urlEndPoint + "findCliente/" + id, { headers: this.agregarAuthorizationHeader() });
  }
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPoint + "listClientes", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  updateCliente(cliente: Cliente, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}updateCliente/${id}`, cliente, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al editar el cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  saveCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post(this.urlEndPoint + "saveCliente", cliente, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.cliente as Cliente),
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  deleteCliente(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint4}${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  darAltaCliente(cliente: Cliente, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}darAltaCliente/${id}`, cliente, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al dar de alta el cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }


  /*CONTRATO*/
  saveContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post(this.urlEndPoint + "saveContrato", contrato, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.contrato as Contrato),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el Contrato', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  saveContrato3(contratoString: string): Observable<string> {
    return this.http.post(this.urlEndPoint + "saveContratoPorString", contratoString, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.contrato as string),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el Contrato', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  getContrato(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.urlEndPoint + "listContratos", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  getContratoDistinct(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPoint + "ListDistinct", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  updateContrato(contrato: Contrato, id: number): Observable<any> {
    return this.http.put<any>(this.urlEndPoint + "updateContrato/" + id, contrato, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al actualizar el contrato de venta', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  getContratoPorID(id: number): Observable<Contrato> {

    return this.http.get<Contrato>(`${this.urlEndPoint}findContrato/${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }        
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })

    );
  }
  deleteContrato(id: number): Observable<Contrato> {
    return this.http.delete<Contrato>(`${this.urlEndPoint7}${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el Contrato', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  cambiarEstadoContrato(contrato: Contrato, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}CambiarEstadoContrato/${id}`, contrato, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al cambiar el estado del contrato', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  /* CONTRATO 2 */

  getContrato2(): Observable<ContratoDos[]> {
    return this.http.get<ContratoDos[]>(this.urlEndPoint + "listContratoV2", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  getContrato2ID(id: number): Observable<ContratoDos> {
    return this.http.get<ContratoDos>(this.urlEndPoint + 'findcontratoV2/' + id, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        
        console.error(e.error.mensaje);
        
        return throwError(e);
      })
    );
  }

  getContratoXID(id: number): Observable<Contrato> {
    return this.http.get<Contrato>(this.urlEndPoint + 'findContrato/' + id, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        
        console.error(e.error.mensaje);
        
        return throwError(e);
      })
    );
  }
  /* FUNCIONARIO  */

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.urlEndPoint + "listFuncionarios", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  getFuncionariosPorID(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(this.urlEndPoint + "findFuncionario/" + id, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        this.router.navigate(['/administracion-inicio/Afuncionarios']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  getFuncionariosPorRut(rut: string): Observable<Funcionario> {
    return this.http.get<Funcionario>(this.urlEndPoint + "findByRutFuncionario/" + rut, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }        
        return throwError(e);
      })
    );
  }
  getFuncionarioBuscar(rut_Funcionario: String): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.urlEndPoint + "findByRutFuncionario/" + rut_Funcionario, { headers: this.agregarAuthorizationHeader() });
  }
  saveFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post(this.urlEndPoint + "saveFuncionario", funcionario, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.funcionario as Funcionario),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el funcionario', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  deleteFuncionario(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${this.urlEndPoint2}${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el Funcionario', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  darAlta(funcionario: Funcionario, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}darAlta/${id}`, funcionario, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al dar de alta el funcionario', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  updateFuncionario(funcionario: Funcionario, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}updateFuncionario/${id}`, funcionario, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al editar el funcionario', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  /*TERRENO*/  /**no existe update en terreno */

  getTerreno(): Observable<Terreno[]> {
    return this.http.get<Terreno[]>(this.urlEndPoint + "listTerrenos").pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  updateTerreno(terreno: Terreno, id: number) {
    return this.http.put<any>(`${this.urlEndPoint}updateTerreno/${id}`, terreno, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al editar el terreno', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  saveTerreno(terreno: Terreno): Observable<Terreno> {
    terreno.estado_Terreno = true;
    return this.http.post(this.urlEndPoint + "saveTerrenos", terreno, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.terreno as Terreno),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el terreno', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  getTerrenoxID(id: number): Observable<Terreno> {

    return this.http.get<Terreno>(`${this.urlEndPoint}findTerreno/${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        this.router.navigate(['/administracion-inicio/ACementerio']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })

    );
  }
  deleteTerreno(id: number): Observable<Terreno> {
    return this.http.delete<Terreno>(`${this.urlEndPoint}+"deleteTerreno/"${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el Terreno', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  deleteTerreno2(id: number): Observable<Terreno> {
    return this.http.delete<Terreno>(`${this.urlEndPoint3}${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el Terreno', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  cambiarEstadoTerreno(terreno: Terreno, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}CambiaEstadoTerreno/${id}`, terreno, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al cambiar el estado del terreno', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  /*PATIO*/  /**no existe update en patio */

  getPatio(): Observable<Patio[]> {
    return this.http.get<Patio[]>(this.urlEndPoint + "listPatios", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  getPatioxID(id: number): Observable<Patio> {

    return this.http.get<Patio>(`${this.urlEndPoint}findPatio/${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        this.router.navigate(['/administracion-inicio/APatio']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })

    );
  }
  savePatio(patio: Patio): Observable<Patio> {
    return this.http.post(this.urlEndPoint + "savePatio", patio, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.patio as Patio),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el patio', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  deletePatio(id: number): Observable<Patio> {
    return this.http.delete<Patio>(`${this.urlEndPoint}"deletePatio/"${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el Patio', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  deletePatio2(id: number): Observable<Patio> {
    return this.http.delete<Patio>(`${this.urlEndPoint5}${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el Patio', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  cambiarEstadoPatio(patio: Patio, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}CambiaEstadoPatio/${id}`, patio, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al cambiar el estado del patio', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  updatePatio(patio: Patio, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}updatePatio/${id}`, patio, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al editar el patio', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  /*tipoTumba*/  /*tipo tumba no tiene delete */

  getTipoTumba(): Observable<TipoTumba[]> {
    return this.http.get<TipoTumba[]>(this.urlEndPoint + "listTipotumbas", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  saveTipoTumba(tipoTumba: TipoTumba): Observable<TipoTumba> {
    return this.http.post(this.urlEndPoint + "saveTipoTumba", tipoTumba, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.tipoTumba as TipoTumba),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el tipo de tumba', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  updateTipoTumba(tipoTumba: TipoTumba, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}updateTipoTumba/${id}`, tipoTumba, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al editar el tipo de tumba', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  getTipoTumbaPorID(id: number): Observable<TipoTumba> {
    return this.http.get<TipoTumba>(this.urlEndPoint + "findTipoTumba/" + id, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        this.router.navigate(['/administracion-inicio//ATumba']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  deleteTipoTumba(id: number): Observable<TipoTumba> {
    return this.http.delete<TipoTumba>(`${this.urlEndPoint6}${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al eliminar el Tipo de Tumba', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  cambiarEstadoTipoTumba(tipoTumba: TipoTumba, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}CambiaEstadoTipoTumba/${id}`, tipoTumba, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al cambiar el estado del tipo de tumba', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  /*TUMBA*/ /*NO TIENE DELETE*/

  getTumba(): Observable<Tumba[]> {
    return this.http.get<Tumba[]>(this.urlEndPoint + "listTumbas").pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  getReservedTumbs(): Observable<Tumba[]> {
    return this.http.get<Tumba[]>(this.urlEndPoint + "listReservadoTumbas", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  getfreeTumbs(): Observable<Tumba[]> {
    return this.http.get<Tumba[]>(this.urlEndPoint + "listFreeTumbas", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  getOcupadoTumbs(): Observable<Tumba[]> {
    return this.http.get<Tumba[]>(this.urlEndPoint + "listOcupadoTumbas", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  getReservadoTumbs(): Observable<Tumba[]> {
    return this.http.get<Tumba[]>(this.urlEndPoint + "listReservadoTumbas", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  getTumbasPorID(id: number): Observable<Tumba> {
    return this.http.get<Tumba>(this.urlEndPoint + "findTumba/" + id, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        this.router.navigate(['/administracion-inicio/ACreaTumba']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  saveTumba(tumba: Tumba): Observable<Tumba> {
    return this.http.post(this.urlEndPoint + "saveTumbas", tumba, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.tumba as Tumba),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear la tumba', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  updateTumba(tumba: Tumba, id: number): Observable<any> {
    return this.http.put<any>(this.urlEndPoint + "updateTumba/" + id, tumba, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al editar la tumba', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  /*CEMENTERIO */

  getCementerio(): Observable<Cementerio[]> {
    return this.http.get<Cementerio[]>(this.urlEndPoint + "listCementerios", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  getCementerioID(id: number): Observable<Cementerio> {

    return this.http.get<Cementerio>(`${this.urlEndPoint}Cementerio/${id}`, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {

        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        this.router.navigate(['/administracion-inicio/ACementerio']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })

    );
  }
  saveCementerio(cementerio: Cementerio): Observable<Cementerio> {
    return this.http.post(this.urlEndPoint + "saveCementerio", cementerio, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.cementerio as Cementerio),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el cementerio', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  updateCementerio(cementerio: Cementerio, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}update/${id}`, cementerio, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al editar el cementerio', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  /*Derecho */

  getDerecho(): Observable<Derecho[]> {
    return this.http.get<Derecho[]>(this.urlEndPoint + "listDerechos", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  saveDerecho(derecho: Derecho): Observable<Derecho> {
    return this.http.post(this.urlEndPoint + "saveCementerio", derecho, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.derecho as Derecho),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al crear el cementerio', e.error.mensaje, 'error');
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

  /*DIFUNTOS */

  getDifuntos(): Observable<Difunto[]> {
    return this.http.get<Difunto[]>(this.urlEndPoint + "listDifuntos", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  saveDifunto(difunto: Difunto): Observable<Difunto> {
    return this.http.post(this.urlEndPoint + "saveDifunto", difunto, { headers: this.agregarAuthorizationHeader() }).pipe(
      map((response: any) => response.difunto as Difunto),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al registrar el difunto', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  subirFoto(archivo: File, id_Difunto): Observable<Difunto> {

    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", id_Difunto);
    return this.http.post(`${this.urlEndPoint}upload/`, formData).pipe(
      map((response: any) => response.difunto as Difunto),
      catchError(e => {
        this.isNoAutorizado(e);
        Swal.fire('Error al crear el cementerio', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  getDifuntoPorID(id: number): Observable<Difunto> {
    return this.http.get<Difunto>(this.urlEndPoint + "findDifunto/" + id, { headers: this.agregarAuthorizationHeader() });
  }

  reduccionDifunto(id: number): Observable<Difunto> {
    return this.http.delete<Difunto>(this.urlEndPoint + "DeleteDifunto/" + id, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al reduccir el Difunto', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }


  getCuotasMantencion(id: number): Observable<pagosMantencion[]> {
    return this.http.get<pagosMantencion[]>(this.urlEndPoint + "listCuotasPorIDClienteEnContrato/" + id,
      { headers: this.agregarAuthorizationHeader() }).pipe(
        catchError(e => {
          if (this.isNoAutorizado(e)) {
            return throwError(e);
          }
          return throwError(e);
        })
      );
  }

  updatePM(pagosMantencion: pagosMantencion, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}updatePagoMantencion/${id}`,
      pagosMantencion,
      { headers: this.agregarAuthorizationHeader() }).pipe(
        catchError(e => {
          if (this.isNoAutorizado(e)) {
            return throwError(e);
          }
          console.error(e.error.mensaje);
          Swal.fire('Error al pagar la cuota', e.error.mensaje, 'error');
          return throwError(e);
        })
      );
  }

  updatePD(pagosMantencion: pagoDerecho, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}updatePagoDerecho/${id}`,
      pagosMantencion,
      { headers: this.agregarAuthorizationHeader() }).pipe(
        catchError(e => {
          if (this.isNoAutorizado(e)) {
            return throwError(e);
          }
          console.error(e.error.mensaje);
          Swal.fire('Error al pagar la cuota', e.error.mensaje, 'error');
          return throwError(e);
        })
      );
  }
  getCuotasDerecho(id: number): Observable<pagoDerecho[]> {
    return this.http.get<pagoDerecho[]>(this.urlEndPoint + "listCuotasDerecho/" + id,
      { headers: this.agregarAuthorizationHeader() }).pipe(
        catchError(e => {
          if (this.isNoAutorizado(e)) {
            return throwError(e);
          }
          return throwError(e);
        })
      );
  }

  updateDifunto(difunto: Difunto, id: number): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}updateDifunto/${id}`, difunto, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al editar el difunto', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  cambioPass(user: Usuario): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}cambioPass/`, user, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire('Error al cambiar la contraseña', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  /*TUMBADIFUNTO*/

  getTumbaDifunto(): Observable<TumbaDifunto[]> {
    return this.http.get<TumbaDifunto[]>(this.urlEndPoint + "listTumbaDifunto", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }


  getMostrarDifuntos(id: string): Observable<TumbaDifunto[]> {
    return this.http.get<TumbaDifunto[]>(this.urlEndPoint + "mostrarDifunto/" + id, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }


  saveTumbaDifunto(tumbaDif: TumbaDifunto) {
    return this.http.post(this.urlEndPoint + "saveTumbaDifunto", tumbaDif, { headers: this.agregarAuthorizationHeader() });
  }

  getSepulturaXID(id: number): Observable<TumbaDifunto> {
    return this.http.get<TumbaDifunto>(this.urlEndPoint + 'findTumbaDifunto/' + id, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }


  /**REPORTES*/
  getContratoFechas(fechas: IntervaloFecha) {
    return this.http.post<Contrato[]>(this.urlEndPoint + "getContratoFechas", fechas, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  renovarCuotaMantencion(id: number): Observable<any> {
    return this.http.post<any>(this.urlEndPoint + "renovarCuotaMantencion/" + id,
      { headers: this.agregarAuthorizationHeader() }).pipe(
        catchError(e => {          
          return throwError(e);
        })
      );
  }
  renovarcuotasDerecho10(id: number): Observable<any> {
    return this.http.post<any>(this.urlEndPoint + "renovarCuotaDerechopor10anios/" + id,
      { headers: this.agregarAuthorizationHeader() }).pipe(
        catchError(e => {          
          return throwError(e);
        })
      );
  }
  renovarcuotasDerecho20(id: number): Observable<any> {
    return this.http.post<any>(this.urlEndPoint + "renovarCuotaDerechopor20anios/" + id,
      { headers: this.agregarAuthorizationHeader() }).pipe(
        catchError(e => {
          
          return throwError(e);
        })
      );
  }
  findContratoPorDifunto1(id: number): Observable<TumbaDifunto> {
    return this.http.get<TumbaDifunto>(this.urlEndPoint + 'findContratoPorDifunto/' + id, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }

  getDistinctDifuntos(): Observable<Difunto[]> {
    return this.http.get<Difunto[]>(this.urlEndPoint + "distincDifunto", { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  ContratosPorUsuario(username: string): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.urlEndPoint + 'ContratosByUsername/' + username, { headers: this.agregarAuthorizationHeader() }).pipe(
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }

}