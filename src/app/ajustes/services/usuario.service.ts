import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Estado} from "../../commons/models/estado.model";
import {RegistroPeticion} from "../../commons/models/registro-peticion.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
  }

  actualizarDatos(peticion: RegistroPeticion) {
    const url = `${environment.apiUsuarioUrl}/actualizarDatos`;
    return this.http.put<Estado>(url, peticion)
      .pipe(map(estado => {
        //Si arrojo un estado fallido retornamos error
        if (!estado || estado.exitoso !== true) {
          throw new Error(estado.mensaje);
        }
        return estado;
      }));
  }
}
