import { VentaDialogComponent } from '../venta-dialog/venta-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HistoricoComprasModel } from "../../models/historico-compras.model";
import { HomeService } from "../../services/home.service";
import { first } from "rxjs/operators";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-home',
  templateUrl: './home-proveedor.component.html',
  styleUrls: ['./home-proveedor.component.scss', '../../../app.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeProveedorComponent implements AfterViewInit {

  dataSource: MatTableDataSource<HistoricoComprasModel>;
  displayedColumns = [
    'compra',
    'fecha',
    'estado',
    'tienda',
    'usuario',
    'producto',
    'cantidad',
    'total',
    'acciones'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private homeService: HomeService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngAfterViewInit() {
    this.obtenerCompras();
  }

  obtenerCompras(){
    this.homeService.obtenerCompras().pipe(first())
    .subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data.entidad);
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

  verDetalleCompra(item: HistoricoComprasModel) {
    const dialogRef = this.dialog.open(VentaDialogComponent, {
      width: '120vh',
      maxHeight: '90vh',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.data){
        this.obtenerCompras();
      }
    });
  }
}
