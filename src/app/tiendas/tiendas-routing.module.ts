import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardPrv} from "../commons/helpers/auth.guard-prv";
import { ProductosComponent } from './components/productos/productos.component';
import {TiendasComponent} from "./components/tiendas/tiendas.component";

const routes: Routes = [
  {
    path: "",
    component: TiendasComponent,
    canActivate: [AuthGuardPrv]
  },
  {
    path: ":idTienda/productos",
    component: ProductosComponent,
    canActivate: [AuthGuardPrv]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendasRoutingModule { }
