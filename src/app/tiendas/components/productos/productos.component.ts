import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { ProductoDialogComponent } from './../producto-dialog/producto-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ProductoModel } from './../../models/producto.model';
import { ProductoService } from './../../services/producto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ConfirmDialogComponent } from 'src/app/commons/components/confirm-dialog/confirm-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss', '../../../app.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ProductosComponent implements OnInit {

  idTienda: number;
  dataSource: MatTableDataSource<ProductoModel>
  displayedColumns = ['id', 'nombre', 'descripcion', 'precio', 'cantidad', 'unidadMedida', 'acciones'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {
    this.idTienda = parseInt(this.activatedRoute.snapshot.paramMap.get('idTienda'));
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoService.obtenerProductos(this.idTienda)
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialogEditar(mData: ProductoModel): void {

    //Validar data:
    if (!mData) {
      mData = new ProductoModel();
    }
    mData.idTienda = this.idTienda;

    const dialogRef = this.dialog.open(ProductoDialogComponent, {
      width: '120vh',
      maxHeight: '90vh',
      data: mData
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.data){
        this.obtenerProductos();
      }
    });
  }

  openDialogEliminar(mData: ProductoModel): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: `¿Está seguro de eliminar el producto (${mData.nombre})?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.productoService.eliminarProducto(mData.idProducto, mData.idTienda).subscribe(
            data => {
              this.toastr.success(data.mensaje);
              this.obtenerProductos();
            },
            error => {
              this.toastr.error(error);
            });
        }
      });
  }
}
