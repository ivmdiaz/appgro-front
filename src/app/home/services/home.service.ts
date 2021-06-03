import { Usuario } from './../../public/models/usuario.model';
import { Estado } from './../../commons/models/estado.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HistoricoComprasModel } from "../models/historico-compras.model";
import { environment } from "../../../environments/environment";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Entidad } from "../../commons/models/entidad.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private http: HttpClient) {
  }

  obtenerCompras(): Observable<Entidad<HistoricoComprasModel[]>> {
    const url = `${environment.apiProveedorUrl}/obtenerCompras`;
    return this.http.get<Entidad<HistoricoComprasModel[]>>(url)
      .pipe(map(entidad => {
        //Si arrojo un estado fallido retornamos error
        if (!entidad || !entidad.estado || entidad.estado.exitoso !== true) {
          throw new Error(entidad.estado.mensaje);
        }
        return entidad;
      }));
  }

  entregarPedido(idCompra: number): Observable<Estado> {
    const url = `${environment.apiProveedorUrl}/entregarPedido`;
    return this.http.put<Estado>(url, { id: idCompra })
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || data.exitoso !== true) {
          throw new Error(data.mensaje);
        }
        return data;
      }));
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    const url = `${environment.apiAdministradorUrl}/obtenerUsuarios`;
    return this.http.get<Entidad<Usuario[]>>(url)
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || !data.estado || data.estado.exitoso !== true) {
          throw new Error(data.estado.mensaje);
        }
        return data.entidad;
      }));
  }

  actualizarPerfil(usuario: number, perfil: number): Observable<Estado> {
    const url = `${environment.apiAdministradorUrl}/actualizarPerfil`;
    return this.http.post<Estado>(url, {
      idUsuario: usuario,
      idPerfil: perfil
    })
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || data.exitoso !== true) {
          throw new Error(data.mensaje);
        }
        return data;
      }));
  }

  eliminarUsuario(idUsuario: number): Observable<Estado> {
    const url = `${environment.apiAdministradorUrl}/inhabilitarUsuario/${idUsuario}`;
    return this.http.delete<Estado>(url)
      .pipe(map(data => {
        if (!data || data.exitoso !== true) {
          throw new Error(data.mensaje);
        }
        return data;
      }));
  }

  habilitarUsuario(idUsuario: number): Observable<Estado> {
    const url = `${environment.apiAdministradorUrl}/habilitarUsuario/${idUsuario}`;
    return this.http.put<Estado>(url, {})
      .pipe(map(data => {
        if (!data || data.exitoso !== true) {
          throw new Error(data.mensaje);
        }
        return data;
      }));
  }

}
