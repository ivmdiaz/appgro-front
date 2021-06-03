import { AuthenticationService } from './../../../commons/services/authentication.service';
import { Router } from '@angular/router';
import { TiendaModel } from './../../models/tienda.model';
import { ConfirmDialogComponent } from './../../../commons/components/confirm-dialog/confirm-dialog.component';
import { Component, OnInit } from '@angular/core';
import { first } from "rxjs/operators";
import { TiendaService } from "../../services/tienda.service";
import { MatDialog } from '@angular/material/dialog';
import { TiendaDialogComponent } from '../tienda-dialog/tienda-dialog.component';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss', '../../../app.component.scss']
})
export class TiendasComponent implements OnInit {

  consultaExitosa: boolean;
  dataSource: TiendaModel[] = null;

  constructor(
    private tiendaService: TiendaService,
    private authenticationService: AuthenticationService,
    private dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit() {
    this.obtenerTiendas();
  }

  obtenerTiendas(): void {
    this.tiendaService.obtenerTiendasProveedor().pipe(first())
      .subscribe(
        data => {
          this.dataSource = data.entidad;
          this.consultaExitosa = true;
        },
        error => {
          this.toastr.error(error);
        });
  }

  openDialogEditar(mData: TiendaModel): void {

    //Validar data:
    if (!mData) {
      mData = new TiendaModel();
      mData.correo = this.authenticationService.currentUserValue.entidad.usuario.correo;
    }

    const dialogRef = this.dialog.open(TiendaDialogComponent, {
      width: '120vh',
      maxHeight: '90vh',
      data: mData
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.data){
        this.obtenerTiendas();
      }
    });
  }

  openDialogEliminar(mData: TiendaModel): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: `¿Está seguro de eliminar la tienda (${mData.nombre})?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.tiendaService.eliminarTienda(mData.idTienda).subscribe(
            data => {
              this.toastr.success(data.mensaje);
              this.obtenerTiendas();
            },
            error => {
              this.toastr.error(error);
            });
        }
      });
  }

  goToProductos(mData: TiendaModel): void {
    this.router.navigateByUrl(`/tiendas/${mData.idTienda}/productos`);
  }
  
}
