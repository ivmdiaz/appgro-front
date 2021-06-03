import { ConstantesUtil } from './constantes-util';
import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthenticationService} from '../services/authentication.service';

@Injectable({providedIn: 'root'})
export class AuthGuardAdm implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    const perfiles = this.authenticationService.perfiles;
    if (currentUser && perfiles && perfiles.indexOf(ConstantesUtil.PERFIL_ADMINISTRADOR) !== -1) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/home'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
