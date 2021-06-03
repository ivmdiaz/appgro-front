import { MaterialModule } from './../material/material.module';
import { CommonsModule } from './../commons/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { EtiquetasComponent } from './components/etiquetas/etiquetas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { TarifaDialogComponent } from './components/tarifa-dialog/tarifa-dialog.component';
import { CategoriaDialogComponent } from './components/categoria-dialog/categoria-dialog.component';


@NgModule({
  declarations: [EtiquetasComponent, CategoriasComponent, TarifasComponent, TarifaDialogComponent, CategoriaDialogComponent],
  imports: [
    CommonModule,
    CommonsModule,
    ConfiguracionRoutingModule,
    MaterialModule
  ]
})
export class ConfiguracionModule { }
