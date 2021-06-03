import { AuthGuard } from './../commons/helpers/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerfilComponent} from "./components/perfil/perfil.component";

const routes: Routes = [
  {
    path: "",
    component: PerfilComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjustesRoutingModule { }
