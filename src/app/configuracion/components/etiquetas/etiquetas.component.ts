import { ConfirmDialogComponent } from './../../../commons/components/confirm-dialog/confirm-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ParametrizacionService } from './../../../commons/services/parametrizacion.service';
import { MatDialog } from '@angular/material/dialog';
import { EtiquetaModel } from './../../../commons/models/etiqueta.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.scss', '../../../app.component.scss']
})
export class EtiquetasComponent implements OnInit {

  etiquetaForm: FormGroup;

  dataSource: MatTableDataSource<EtiquetaModel>;
  displayedColumns = ['id', 'nombre', 'fecha', 'acciones'];

  idSelect: Number = null;

  @ViewChild('editEtiqueta') editElement: ElementRef;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private parametrizacionService: ParametrizacionService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.obtenerEtiquetas();
    this.configurarValidacionesFormulario();
  }

  private configurarValidacionesFormulario() {
    this.etiquetaForm = this.formBuilder.group({
      etiqueta: [, Validators.required]
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerEtiquetas() {
    this.parametrizacionService.obtenerEtiquetas()
      .subscribe(
        data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          this.toastr.error(error);
        });
  }

  editarEtiqueta(mData: EtiquetaModel): void {
    this.idSelect = mData.idEtiqueta;
    this.f.etiqueta.setValue(mData.etiqueta);
    this.editElement.nativeElement.focus();
  }

  get f() {
    return this.etiquetaForm.controls;
  }

  eliminarEtiqueta(item: EtiquetaModel) {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: `¿Está seguro de eliminar la etiqueta (${item.etiqueta})?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.parametrizacionService.eliminarEtiqueta(item.idEtiqueta)
            .subscribe(
              data => {
                this.toastr.success(data.mensaje);
                this.obtenerEtiquetas();
              },
              error => {
                this.toastr.error(error);
              }
            );
          this.clearSeleccion();
        }
      });
  }

  guardarEtiqueta(): void {
    this.parametrizacionService.guardarEtiqueta(this.f.etiqueta.value, this.idSelect)
      .subscribe(
        data => {
          this.toastr.success(data.mensaje);
          this.obtenerEtiquetas();
        },
        error => {
          this.toastr.error(error);
        }
      );

    this.clearSeleccion();
  }

  clearSeleccion(): void {
    this.idSelect = null;
    this.f.etiqueta.setValue('');
    this.f.etiqueta.setErrors(null);
  }
}
