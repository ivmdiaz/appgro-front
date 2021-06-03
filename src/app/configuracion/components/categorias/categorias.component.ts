import { CategoriaDialogComponent } from './../categoria-dialog/categoria-dialog.component';
import { ConfirmDialogComponent } from './../../../commons/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { CategoriaModel } from './../../../commons/models/categoria.model';
import { ParametrizacionService } from './../../../commons/services/parametrizacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss', '../../../app.component.scss']
})
export class CategoriasComponent implements OnInit {

  categoriaForm: FormGroup;

  dataSource: MatTableDataSource<CategoriaModel>;
  displayedColumns = ['id', 'nombre', 'acciones'];

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
    this.obtenerCategorias();
    this.configurarValidacionesFormulario();
  }

  private configurarValidacionesFormulario() {
    this.categoriaForm = this.formBuilder.group({
      categoria: [, Validators.required]
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerCategorias() {
    this.parametrizacionService.obtenerCategorias()
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

  editar(mData: CategoriaModel): void {
    if (!mData) {
      mData = new CategoriaModel(null, null);
    }
    const dialogRef = this.dialog.open(CategoriaDialogComponent, {
      width: '90vh',
      maxHeight: '90vh',
      data: mData
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result && result.data) {
        this.obtenerCategorias();
      }
    });
  }

  get f() {
    return this.categoriaForm.controls;
  }

  eliminar(item: CategoriaModel) {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: `¿Está seguro de eliminar la categoria (${item.categoria})?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.parametrizacionService.eliminarCategoria(item.idCategoria)
            .subscribe(
              data => {
                this.obtenerCategorias();
                this.toastr.success(data.mensaje);
              },
              error => {
                this.toastr.error(error);
              }
            );
        }
      });
  }

}
