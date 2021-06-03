import { ProductoRequestModel } from './../models/producto-request.model';
import { ProductoModel } from './../models/producto.model';
import { Estado } from './../../commons/models/estado.model';
import { TiendaRequestModel } from './../models/tienda-request.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Entidad } from "../../commons/models/entidad.model";
import { environment } from "../../../environments/environment";
import { map } from "rxjs/operators";
import { TiendaModel } from "../models/tienda.model";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {
  }


  obtenerProductos(idTienda: number): Observable<ProductoModel[]> {
    const url = `${environment.apiProductoUrl}/obtenerProductosByTienda?idTienda=${idTienda}`;
    return this.http.get<Entidad<ProductoModel[]>>(url)
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || !data.estado || data.estado.exitoso !== true) {
          throw new Error(data.estado.mensaje);
        }
        return data.entidad;
      }));
  }


  guardarProducto(producto: ProductoRequestModel): Observable<Estado> {
    const url = `${environment.apiProductoUrl}/guardar`;
    return this.http.post<Estado>(url, producto)
      .pipe(map(data => {
        //Si arrojo un estado fallido retornamos error
        if (!data || data.exitoso !== true) {
          throw new Error(data.mensaje);
        }
        return data;
      }));
  }


  eliminarProducto(idProducto: number, idTienda: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {
        "idProducto": idProducto,
        "idTienda": idTienda
      }
    };
    const url = `${environment.apiProductoUrl}/eliminar`;
    return this.http.delete<Estado>(url, httpOptions)
      .pipe(map(estado => {
        //Si arrojo un estado fallido retornamos error
        if (!estado || estado.exitoso !== true) {
          throw new Error(estado.mensaje);
        }
        return estado;
      }));
  }
}
