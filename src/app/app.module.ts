import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { CommonsModule } from './commons/commons.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from "./commons/helpers/jwt.interceptor";
import { ErrorInterceptor } from "./commons/helpers/error.interceptor";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { CurrencyPipe, DecimalPipe, DatePipe } from '@angular/common';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from './commons/helpers/custom-mat-paginator-intl';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },
    CurrencyPipe, DecimalPipe, DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
