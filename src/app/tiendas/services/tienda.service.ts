import { Estado } from './../../commons/models/estado.model';
import { TiendaRequestModel } from './../models/tienda-request.model';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Entidad} from "../../commons/models/entidad.model";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {TiendaModel} from "../models/tienda.model";

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http: HttpClient) {
  }


  obtenerTiendasProveedor(): Observable<Entidad<TiendaModel[]>> {
    const url = `${environment.apiProveedorUrl}/obtenerTiendas`;
    return this.http.get<Entidad<TiendaModel[]>>(url)
      .pipe(map(entidad => {
        //Si arrojo un estado fallido retornamos error
        if (!entidad || !entidad.estado || entidad.estado.exitoso !== true) {
          throw new Error(entidad.estado.mensaje);
        }
        return entidad;
      }));
  }

  guardarTienda(peticion:TiendaRequestModel){
    const url = `${environment.apiTiendaUrl}/guardar`;
    return this.http.put<Estado>(url, peticion)
      .pipe(map(estado => {
        //Si arrojo un estado fallido retornamos error
        if (!estado || estado.exitoso !== true) {
          throw new Error(estado.mensaje);
        }
        return estado;
      }));
  }

  eliminarTienda(idTienda:number){
    const url = `${environment.apiTiendaUrl}/eliminar/${idTienda}`;
    return this.http.delete<Estado>(url)
      .pipe(map(estado => {
        //Si arrojo un estado fallido retornamos error
        if (!estado || estado.exitoso !== true) {
          throw new Error(estado.mensaje);
        }
        return estado;
      }));
  }
}
