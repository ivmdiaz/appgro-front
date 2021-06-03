import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { CommonsModule } from './../commons/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReporteVentasProveedorComponent } from './components/reporte-ventas-proveedor/reporte-ventas-proveedor.component';
import { ReporteVentasTiendaComponent } from './components/reporte-ventas-tienda/reporte-ventas-tienda.component';
import { ReporteVentasProductoComponent } from './components/reporte-ventas-producto/reporte-ventas-producto.component';
import { ReporteAdmTiendasComponent } from './components/reporte-adm-tiendas/reporte-adm-tiendas.component';


@NgModule({
  declarations: [
    ReporteVentasProveedorComponent,
    ReporteVentasTiendaComponent,
    ReporteVentasProductoComponent,
    ReporteAdmTiendasComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    CommonsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReportesModule { }
