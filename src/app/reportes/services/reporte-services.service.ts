import { NombreIdModel } from './../../commons/models/nombre-id.model';
import { CampoModel } from './../models/campo.model';
import { Observable } from 'rxjs';
import { Entidad } from './../../commons/models/entidad.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { FiltroModel } from '../models/filtro.model';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http: HttpClient) {
  }

  /** CAMPOS SELECT */
  obtenerTiendasProveedor(): Observable<NombreIdModel[]> {
    const url = `${environment.apiProveedorUrl}/obtenerTiendasSelect`;
    return this.http.get<Entidad<NombreIdModel[]>>(url)
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || !data.estado || data.estado.exitoso !== true) {
          throw new Error(data.estado.mensaje);
        }
        return data.entidad;
      }));
  }

  obtenerProductosProveedor(): Observable<NombreIdModel[]> {
    const url = `${environment.apiProveedorUrl}/obtenerProductosSelect`;
    return this.http.get<Entidad<NombreIdModel[]>>(url)
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || !data.estado || data.estado.exitoso !== true) {
          throw new Error(data.estado.mensaje);
        }
        return data.entidad;
      }));
  }

  obtenerCategoriasProveedor(): Observable<NombreIdModel[]> {
    const url = `${environment.apiProveedorUrl}/obtenerCategoriasSelect`;
    return this.http.get<Entidad<NombreIdModel[]>>(url)
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || !data.estado || data.estado.exitoso !== true) {
          throw new Error(data.estado.mensaje);
        }
        return data.entidad;
      }));
  }

  obtenerTiendasAdministrador(): Observable<NombreIdModel[]> {
    const url = `${environment.apiAdministradorUrl}/obtenerTiendasSelect`;
    return this.http.get<Entidad<NombreIdModel[]>>(url)
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || !data.estado || data.estado.exitoso !== true) {
          throw new Error(data.estado.mensaje);
        }
        return data.entidad;
      }));
  }

  obtenerReporteVentasTodas(filtros: FiltroModel[], campos: CampoModel[], reporte: string): Observable<Entidad<String>> {
    const url = `${environment.apiReportesUrl}/obtenerReporte`;
    return this.http.post<Entidad<String>>(url, {
      "reporte": reporte,
      "filtros": filtros,
      "campos": campos
    })
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || !data.estado || data.estado.exitoso !== true) {
          throw new Error(data.estado.mensaje);
        }
        return data;
      }));
  }

  obtenerReporteAdministrador(filtros: FiltroModel[], campos: CampoModel[], reporte: string): Observable<Entidad<String>> {
    const url = `${environment.apiReportesUrl}/obtenerReporteAdministrador`;
    return this.http.post<Entidad<String>>(url, {
      "reporte": reporte,
      "filtros": filtros,
      "campos": campos
    })
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || !data.estado || data.estado.exitoso !== true) {
          throw new Error(data.estado.mensaje);
        }
        return data;
      }));
  }
}
