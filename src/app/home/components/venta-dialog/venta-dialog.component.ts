import { ToastrService } from 'ngx-toastr';
import { HomeService } from './../../services/home.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { HistoricoComprasModel } from './../../models/historico-compras.model';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ConfirmDialogComponent } from 'src/app/commons/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-venta-dialog',
  templateUrl: './venta-dialog.component.html',
  styleUrls: ['./venta-dialog.component.scss']
})
export class VentaDialogComponent implements OnInit {

  @ViewChild('matExpansionPanel') _matExpansionPanel: any

  constructor(
    private homeService:HomeService,
    private toastr: ToastrService,
    public dialogo: MatDialogRef<VentaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HistoricoComprasModel,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    
  }

  expandPanel(event): void {
    event.stopPropagation(); // Preventing event bubbling
    this._matExpansionPanel.close()
  }

  onSubmit(): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: `¿Está seguro de entregar el producto? Esta acción no se puede revertir.`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.entregarPedido();
        }
      });
  }

  entregarPedido():void {
    this.homeService.entregarPedido(this.data.idCompra).subscribe(
      data => {
        this.toastr.success(data.mensaje);
        this.dialogo.close({data:true});
      },
      errorRegister => {
        this.toastr.error(errorRegister);
      }
    );
  }
}
