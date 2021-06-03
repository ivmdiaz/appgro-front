import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AjustesRoutingModule} from './ajustes-routing.module';
import {PerfilComponent} from './components/perfil/perfil.component';
import {CommonsModule} from "../commons/commons.module";
import {MaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    AjustesRoutingModule,
    CommonsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AjustesModule {
}
