import { ConstantesUtil } from './../../helpers/constantes-util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.scss', '../../../app.component.scss']
})
export class HeaderPrincipalComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  isPerfilVendedor(): Boolean {
    return this.authenticationService.perfiles.indexOf(ConstantesUtil.PERFIL_PROVEEDOR) !== -1;
  }

  isPerfilAdministrador(): Boolean {
    return this.authenticationService.perfiles.indexOf(ConstantesUtil.PERFIL_ADMINISTRADOR) !== -1;
  }

  logout() {
    const url = '';
    this.authenticationService.logout();
    this.router.navigateByUrl('/').then(() =>
      this.router.navigate([url]));
  }

  goToHome() {
    let url = 'home';
    if (this.isPerfilVendedor()) {
      url = 'home/proveedor'
    } else if (this.isPerfilAdministrador()) {
      url = 'home/administrador'
    }
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url]));
  }

  goToAjustes() {
    const url = 'ajustes'
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url]));
  }

  goToTiendas() {
    const url = 'tiendas'
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url]));
  }

  goToEtiquetas() {
    const url = 'configuracion/etiquetas'
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url]));
  }


  goToCategorias() {
    const url = 'configuracion/categorias'
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url]));
  }

  goToTarifas() {
    const url = 'configuracion/tarifas'
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url]));
  }

  goToReporteVentasTodas(){
    const url = 'reportes/ventas'
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url]));
  }

  goToReporteVentasTiendas(){
    const url = 'reportes/tiendas'
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url]));
  }

  goToReporteVentasProductos(){
    const url = 'reportes/productos'
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url]));
  }

  goToReporteAdmTiendas(){
    const url = 'reportes/administrador/tiendas'
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url]));
  }
}
