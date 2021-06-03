import { MatDialog } from '@angular/material/dialog';
import { TarifaDialogComponent } from './../tarifa-dialog/tarifa-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarifaModel } from './../../../commons/models/tarifa.model';
import { ParametrizacionService } from './../../../commons/services/parametrizacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.scss', '../../../app.component.scss']
})
export class TarifasComponent implements OnInit {

  //VIEW TABLA:
  consultaExitosa: boolean;
  dataSource: TarifaModel[] = [];
  displayedColumns = ['tarifa', 'rangoInicial', 'rangoFinal', 'acciones'];

  constructor(
    private parametrizacionService: ParametrizacionService,
    private toastr: ToastrService,
    private dialog: MatDialog,
  ) {
    this.consultaExitosa = false;
  }

  ngOnInit(): void {
    this.obtenerFormatoTarifas();
    this.obtenerTarifas();
  }

  obtenerTarifas() {
    this.parametrizacionService.obtenerTarifas()
      .subscribe(
        data => {
          this.dataSource.forEach(ds => {
            const tarifa = data.find(x => x.rangoInicial == ds.rangoInicial)
            if (tarifa) {
              ds.idTarifa = tarifa.idTarifa;
              ds.tarifa = tarifa.tarifa;
              ds.rangoInicial = tarifa.rangoInicial;
              ds.rangoFinal = tarifa.rangoFinal;
            }
          });
          this.consultaExitosa = true;
        },
        error => {
          this.toastr.error(error);
        });
  }

  guadarTarifas(): void {
    if (this.dataSource && !this.dataSource.some(x => x.tarifa === null)) {
      this.parametrizacionService.guardarTarifas(this.dataSource)
        .subscribe(
          data => {
            this.toastr.success(data.mensaje);
          },
          error => {
            this.toastr.error(error);
          }
        );
    }
    else {
      this.toastr.warning("Debe diligenciar las tarifas para todos los rangos.", "Alerta");
    }
  }

  obtenerFormatoTarifas() {
    this.dataSource.push(new TarifaModel(0, 5));
    this.dataSource.push(new TarifaModel(5, 10));
    this.dataSource.push(new TarifaModel(10, 20));
    this.dataSource.push(new TarifaModel(20, 40));
    this.dataSource.push(new TarifaModel(40, null));
  }

  openDialogEditar(mData: TarifaModel): void {
    const dialogRef = this.dialog.open(TarifaDialogComponent, {
      width: '90vh',
      maxHeight: '90vh',
      data: mData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result && result.data) {
        mData.tarifa = result.data;
        this.asignarTarifa(mData);
      }
    });
  }

  asignarTarifa(mData: TarifaModel) {
    const item = this.dataSource.find(x => x.rangoInicial == mData.rangoInicial);
    if (item) {
      const index = this.dataSource.indexOf(item);
      this.dataSource[index] = mData;
    }
  }
}
