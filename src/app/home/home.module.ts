import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeProveedorComponent } from './components/home-proveedor/home-proveedor.component';
import {CommonsModule} from "../commons/commons.module";
import {MaterialModule} from "../material/material.module";
import { VentaDialogComponent } from './components/venta-dialog/venta-dialog.component';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { UsuarioDialogComponent } from './components/usuario-dialog/usuario-dialog.component';


@NgModule({
  declarations: [HomeProveedorComponent, VentaDialogComponent, HomeAdministradorComponent, UsuarioDialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonsModule,
    MaterialModule,
  ]
})
export class HomeModule { }
