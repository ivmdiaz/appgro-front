import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import {AuthenticationService} from '../services/authentication.service';
import {finalize} from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private spinnerService: NgxSpinnerService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Mostramos Spinner
    this.spinnerService.show();

    //Obtenemos usuario de storage
    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.entidad && currentUser.entidad.jwt) {
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUser.entidad.jwt}`
        }
      });
    }

    //Cuando finalice quitamos spinner.
    return next.handle(request).pipe(finalize( () => this.finalizarProcesando()));
  }

  finalizarProcesando(): void {
    //Quitamos Spinner
    this.spinnerService.hide();
  }
}
