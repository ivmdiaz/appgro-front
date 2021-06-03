import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../material/material.module";
import {HeaderPrincipalComponent} from "./components/header-principal/header-principal.component";
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [HeaderPrincipalComponent, ConfirmDialogComponent],
  exports: [
    HeaderPrincipalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class CommonsModule {
}
