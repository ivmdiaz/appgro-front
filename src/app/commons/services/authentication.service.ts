import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import {Entidad} from '../models/entidad.model';
import {Usuario} from '../../public/models/usuario.model'
import {HttpClient} from "@angular/common/http";
import {Login} from "../../public/models/login.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<Entidad<Login>>;
  public currentUser: Observable<Entidad<Login>>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Entidad<Login>>(
      JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Entidad<Login> {
    return this.currentUserSubject.value;
  }

  actualizarCurrentUser(usuario:Usuario){

    const tempUser = Object.assign({}, this.currentUserValue);
    tempUser.entidad.usuario = usuario;
    localStorage.setItem('currentUser', JSON.stringify(tempUser));
    this.currentUserSubject.next(tempUser);

  }

  login(peticion: any) {
    const url = `${environment.apiPublicUrl}/login`;
    return this.http.post<Entidad<Login>>(url, peticion)
      .pipe(map(user => {

        //Si el token no existe arrojamos mensaje de error
        if (!user.entidad) {
          throw new Error(user.estado.mensaje);
        }

        // almacenar los detalles del usuario y el token jwt en el almacenamiento local para mantener
        // al usuario conectado entre las actualizaciones de la página
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // eliminar al usuario del almacenamiento local para cerrar la sesión del usuario
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public get perfiles():string[]{
    return this.getPerfiles();
  }

  private getPerfiles(): string[] {

    const jwt = this.currentUserValue.entidad.jwt.replace('Bearer ','');
    //const jwt = 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJBcHBncm8iLCJzdWIiOiJmc2Fib2dhbHBAY29ycmVvLnVkaXN0cml0YWwuZWR1LmNvIiwiYXV0aG9yaXRpZXMiOlsiMSJdLCJpYXQiOjE2MTgwODc4MTUsImV4cCI6MTYxODEyMzgxNn0.RU3zD1nv3gB5J8U-xhLXRKCRK7flSZ8gZP82AnxF4tUQfjBz9LtITHYMc4XYEV_Jaiqy0IRykBL0KIvvHOiJ-g';

    let jwtData = jwt.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)

    return <string[]>decodedJwtData.authorities;
  }
}
