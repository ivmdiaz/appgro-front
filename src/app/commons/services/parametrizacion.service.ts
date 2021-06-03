import { Estado } from './../models/estado.model';
import { TarifaModel } from './../models/tarifa.model';
import { EtiquetaModel } from './../models/etiqueta.model';
import { CategoriaModel } from './../models/categoria.model';
import { NombreIdModel } from './../models/nombre-id.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Entidad } from '../models/entidad.model';

@Injectable({
  providedIn: 'root'
})
export class ParametrizacionService {

  constructor(private http: HttpClient) {
  }

  obtenerDepartamentos(idPais: number): Observable<NombreIdModel[]> {
    const url = `${environment.apiParametrizacionUrl}/obtenerDepartamentosPorPais/${idPais}`;
    return this.http.get<Entidad<NombreIdModel[]>>(url)
      .pipe(map(entidad => {
        //Si arrojo un estado fallido retornamos error
        if (!entidad || !entidad.estado || entidad.estado.exitoso !== true) {
          throw new Error(entidad.estado.mensaje);
        }
        return entidad.entidad;
      }));
  }

  obtenerCiudades(idDepartamento: number): Observable<NombreIdModel[]> {
    const url = `${environment.apiParametrizacionUrl}/obtenerCiudadesPorDepartamento/${idDepartamento}`;
    return this.http.get<Entidad<NombreIdModel[]>>(url)
      .pipe(map(entidad => {
        //Si arrojo un estado fallido retornamos error
        if (!entidad || !entidad.estado || entidad.estado.exitoso !== true) {
          throw new Error(entidad.estado.mensaje);
        }
        return entidad.entidad;
      }));
  }

  obtenerCategorias(): Observable<CategoriaModel[]> {
    const url = `${environment.apiCategoriaUrl}/obtenerCategorias`;
    return this.http.get<Entidad<CategoriaModel[]>>(url)
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || !data.estado || data.estado.exitoso !== true) {
          throw new Error(data.estado.mensaje);
        }
        return data.entidad;
      }));
  }

  obtenerEtiquetas(): Observable<EtiquetaModel[]> {
    const url = `${environment.apiEtiquetaUrl}/obtenerEtiquetas`;
    return this.http.get<Entidad<EtiquetaModel[]>>(url)
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || !data.estado || data.estado.exitoso !== true) {
          throw new Error(data.estado.mensaje);
        }
        return data.entidad;
      }));
  }

  obtenerTarifas(): Observable<TarifaModel[]> {
    const url = `${environment.apiProveedorUrl}/obtenerTarifas`;
    return this.http.get<Entidad<TarifaModel[]>>(url)
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || !data.estado || data.estado.exitoso !== true) {
          throw new Error(data.estado.mensaje);
        }
        return data.entidad;
      }));
  }

  guardarEtiqueta(etiqueta: string, id: Number): Observable<Estado> {
    const url = `${environment.apiEtiquetaUrl}/guardar`;
    return this.http.put<Estado>(url, {id:id, nombre:etiqueta})
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || data.exitoso !== true) {
          throw new Error(data.mensaje);
        }
        return data;
      }));
  }

  guardarCategoria(categoria : CategoriaModel): Observable<Estado> {
    const url = `${environment.apiCategoriaUrl}/guardar`;
    return this.http.put<Estado>(url, categoria)
      .pipe(map(data => {
       //Si arrojo un estado fallido retornamos error
       if (!data || data.exitoso !== true) {
        throw new Error(data.mensaje);
      }
      return data;
      }));
  }

  guardarTarifas(peticion: TarifaModel[]): Observable<Estado> {
    const url = `${environment.apiProveedorUrl}/guardarTarifas`;
    return this.http.post<Estado>(url, {tarifas:peticion})
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || data.exitoso !== true) {
          throw new Error(data.mensaje);
        }
        return data;
      }));
  }

  eliminarEtiqueta(idEtiqueta: Number): Observable<Estado> {
    const url = `${environment.apiEtiquetaUrl}/eliminar/${idEtiqueta}`;
    return this.http.delete<Estado>(url)
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || data.exitoso !== true) {
          throw new Error(data.mensaje);
        }
        return data;
      }));
  }

  eliminarCategoria(idCategoria: Number): Observable<Estado> {
    const url = `${environment.apiCategoriaUrl}/eliminar/${idCategoria}`;
    return this.http.delete<Estado>(url)
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || data.exitoso !== true) {
          throw new Error(data.mensaje);
        }
        return data;
      }));
  }
}
