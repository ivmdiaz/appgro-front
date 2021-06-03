import { AuthGuardAdm } from './../commons/helpers/auth.guard-adm';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { AuthGuardPrv } from '../commons/helpers/auth.guard-prv';
import { EtiquetasComponent } from './components/etiquetas/etiquetas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "etiquetas",
    component: EtiquetasComponent,
    canActivate: [AuthGuardAdm]
  },
  {
    path: "categorias",
    component: CategoriasComponent,
    canActivate: [AuthGuardAdm]
  },
  {
    path: "tarifas",
    component: TarifasComponent,
    canActivate: [AuthGuardPrv]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
