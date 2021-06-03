import { NgxSpinnerService } from 'ngx-spinner';
import { ConstantesUtil } from './../../../commons/helpers/constantes-util';
import { ConfirmDialogComponent } from './../../../commons/components/confirm-dialog/confirm-dialog.component';
import { UsuarioDialogComponent } from './../usuario-dialog/usuario-dialog.component';
import { HomeService } from './../../services/home.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Usuario } from './../../../public/models/usuario.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.scss', '../../../app.component.scss']
})
export class HomeAdministradorComponent implements OnInit {

  //VIEW: SELECCIONAR
  mostrarHabilitados : boolean = true;
  mostrarInhabilitados : boolean = false;

  dataSourceHabilitados: MatTableDataSource<Usuario>;
  dataSourceInhabilitados: MatTableDataSource<Usuario>;
  
  displayedColumns = [
    'nombreCompleto',
    'correo',
    'celular',
    'perfiles',
    'acciones'
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private homeService: HomeService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.homeService.obtenerUsuarios()
    .subscribe(
      data => {
        this.dataSourceHabilitados = new MatTableDataSource(data.filter(ds => ds.estado === 'HABILITADO'));
        if(this.dataSourceHabilitados.paginator){
          this.dataSourceHabilitados.paginator = this.paginator;
        }
        if(this.dataSourceHabilitados.sort){
          this.dataSourceHabilitados.sort = this.sort;
        }

        this.dataSourceInhabilitados = new MatTableDataSource(data.filter(ds => ds.estado !== 'HABILITADO'));
        
        if(this.dataSourceInhabilitados.paginator){
          this.dataSourceInhabilitados.paginator = this.paginator;
        }
        if(this.dataSourceInhabilitados.sort){
          this.dataSourceInhabilitados.sort = this.sort;
        }
      },
      error => {
        this.toastr.error(error);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    
    this.dataSourceHabilitados.filter = filterValue.trim().toLowerCase();
    this.dataSourceInhabilitados.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceHabilitados.paginator) {
      this.dataSourceHabilitados.paginator.firstPage();
    }

    if (this.dataSourceInhabilitados.paginator) {
      this.dataSourceInhabilitados.paginator.firstPage();
    }
  }

  getNombreCompleto(item:Usuario): string{
    return (item.nombreCompleto ? item.nombreCompleto + " " : "")
      + (item.primerApellido ? item.primerApellido + " " : "")
      + (item.segundoApellido ? item.segundoApellido  : "")
  }

  getPerfiles(item: Usuario): string{
    return item.perfiles.map(p => p.nombre).toString();
  }


  isPerfilAdministrador(item: Usuario): Boolean {
    return item.perfiles.map(p => p.idPerfil.toString()).indexOf(ConstantesUtil.PERFIL_ADMINISTRADOR) !== -1;
  }

  edit(item: Usuario){
    const dialogRef = this.dialog.open(UsuarioDialogComponent, {
      width: '120vh',
      maxHeight: '90vh',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.data){
        this.obtenerUsuarios();
      }
    });
  }

  delete(item: Usuario){
    this.dialog
      .open(ConfirmDialogComponent, {
        data: `¿Está seguro de inhabilitar el usuario (${item.nombreCompleto})?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.homeService.eliminarUsuario(item.idUsuario).subscribe(
            data => {
              this.toastr.success(data.mensaje);
              this.obtenerUsuarios();
            },
            error => {
              this.toastr.error(error);
            });
        }
      });
  }


  habilitar(item: Usuario){
    this.dialog
      .open(ConfirmDialogComponent, {
        data: `¿Está seguro de habilitar el usuario (${item.nombreCompleto})?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.homeService.habilitarUsuario(item.idUsuario).subscribe(
            data => {
              this.toastr.success(data.mensaje);
              this.obtenerUsuarios();
            },
            error => {
              this.toastr.error(error);
            });
        }
      });
  }
}
