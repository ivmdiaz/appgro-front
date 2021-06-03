import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { AuthGuard } from './../commons/helpers/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeProveedorComponent } from './components/home-proveedor/home-proveedor.component'

const routes: Routes = [
  {
    path: "proveedor",
    component: HomeProveedorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "administrador",
    component: HomeAdministradorComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
