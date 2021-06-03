import { ReportesModule } from './reportes/reportes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "",
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: "home",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: "ajustes",
    loadChildren: () => import('./ajustes/ajustes.module').then(m => m.AjustesModule)
  },
  {
    path: "tiendas",
    loadChildren: () => import('./tiendas/tiendas.module').then(m => m.TiendasModule)
  },
  {
    path: "configuracion",
    loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionModule)
  },
  {
    path: "reportes",
    loadChildren: () => import('./reportes/reportes.module').then(m => m.ReportesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
