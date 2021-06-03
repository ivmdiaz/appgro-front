import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {PublicRoutingModule} from './public-routing.module';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, HeaderComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PublicModule {
}
