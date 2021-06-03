import { GeocodeService } from './services/geocode.service';
import { AgmCoreModule } from '@agm/core';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TiendasRoutingModule} from './tiendas-routing.module';
import {TiendasComponent} from './components/tiendas/tiendas.component';
import {CommonsModule} from "../commons/commons.module";
import {MaterialModule} from "../material/material.module";
import { TiendaDialogComponent } from './components/tienda-dialog/tienda-dialog.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoDialogComponent } from './components/producto-dialog/producto-dialog.component';


@NgModule({
  declarations: [TiendasComponent, TiendaDialogComponent, ProductosComponent, ProductoDialogComponent],
  imports: [
    CommonModule,
    TiendasRoutingModule,
    CommonsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChxa5pkUYzkRJcFrI3ZWJPFR_z1DHNSvI'
    }),
  ],
  providers:[GeocodeService]
})
export class TiendasModule {
}
