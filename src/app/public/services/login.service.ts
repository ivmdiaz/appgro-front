import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Estado} from "../../commons/models/estado.model";
import {RegistroPeticion} from "../../commons/models/registro-peticion.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  register(peticion: RegistroPeticion) {
    const url = `${environment.apiPublicUrl}/registro/vendedor`;
    return this.http.put<Estado>(url, peticion)
      .pipe(map(estado => {
        //Si arrojo un estado fallido retornamos error
        if (!estado || estado.exitoso !== true) {
          throw new Error(estado.mensaje);
        }
        return estado;
      }));
  }

  resetPassword(correo:string) {
    const url = `${environment.apiPublicUrl}/send-password-recovery`;
    return this.http.post<Estado>(url, {
      "correo":correo
    })
      .pipe(map(estado => {
        //Si arrojo un estado fallido retornamos error
        if (!estado || estado.exitoso !== true) {
          throw new Error(estado.mensaje);
        }
        return estado;
      }));
  }
}
