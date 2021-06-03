import { ReporteAdmTiendasComponent } from './components/reporte-adm-tiendas/reporte-adm-tiendas.component';
import { AuthGuardAdm } from './../commons/helpers/auth.guard-adm';
import { ReporteVentasTiendaComponent } from './components/reporte-ventas-tienda/reporte-ventas-tienda.component';
import { ReporteVentasProveedorComponent } from './components/reporte-ventas-proveedor/reporte-ventas-proveedor.component';
import { AuthGuardPrv } from './../commons/helpers/auth.guard-prv';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteVentasProductoComponent } from './components/reporte-ventas-producto/reporte-ventas-producto.component';

const routes: Routes = [
  {
    path: "ventas",
    component: ReporteVentasProveedorComponent,
    canActivate: [AuthGuardPrv]
  },
  {
    path: "productos",
    component: ReporteVentasProductoComponent,
    canActivate: [AuthGuardPrv]
  },
  {
    path: "tiendas",
    component: ReporteVentasTiendaComponent,
    canActivate: [AuthGuardPrv]
  },
  {
    path: "administrador/tiendas",
    component: ReporteAdmTiendasComponent,
    canActivate: [AuthGuardAdm]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
