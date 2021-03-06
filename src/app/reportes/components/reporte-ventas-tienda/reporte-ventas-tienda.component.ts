import { ParametrizacionService } from './../../../commons/services/parametrizacion.service';
import { ReporteService } from './../../services/reporte-services.service';
import { CampoModel } from './../../models/campo.model';
import { FiltroModel } from './../../models/filtro.model';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { NombreIdModel } from './../../../commons/models/nombre-id.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { RequiredMatch } from 'src/app/commons/validators/required-match.validator';
import { openPdfBase64NewTab } from 'src/app/commons/helpers/strings-util';

@Component({
  selector: 'app-reporte-ventas-tienda',
  templateUrl: './reporte-ventas-tienda.component.html',
  styleUrls: ['./reporte-ventas-tienda.component.scss']
})
export class ReporteVentasTiendaComponent implements OnInit {

  //Formulario 
  form: FormGroup;

  //View: Campos:
  @ViewChild('campos') camposSel: MatSelect;
  allSelected = false;

  //View: Tiendas
  tiendasBd: NombreIdModel[] = [];
  tiendasView: NombreIdModel[] = [];
  tiendasFilter: Observable<NombreIdModel[]>;

  //View: Departamento:
  departamentosBd: NombreIdModel[] = [];
  departamentosFilter: Observable<NombreIdModel[]>;

  //View: Ciudades:
  ciudadesBd: NombreIdModel[] = [];
  ciudadesFilter: Observable<NombreIdModel[]>;

  camposView: CampoModel[] = [
    { "campo": "nombreTienda", "cabecera": "Tienda" },
    { "campo": "direccion", "cabecera": "Dirección" },
    { "campo": "totalUnidades", "cabecera": "Unidades vendidas" },
    { "campo": "totalVentas", "cabecera": "Total Ventas" }
  ];

  constructor(
    private reporteService: ReporteService,
    private parametrizacionService: ParametrizacionService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.initFormFields();

    this.obtenerTiendasBd();
    this.obtenerDepartamentosBd();
  }

  initFormFields(): void {
    this.form = this.formBuilder.group({
      camposReporte: [, Validators.required],
      tiendas: [,],
      productos: [,],
      categorias: [,],
      departamento: [, RequiredMatch],
      ciudad: [, RequiredMatch],
      fechaDesde: [,],
      estado: [,]
    });
  }

  get f() {
    return this.form.controls;
  }

  //VIEWS: CHIPINPUT + AUTOCOMPLETABLE.
  _remove(value: NombreIdModel, dataView: NombreIdModel[]): void {
    const index = dataView.findIndex(obj2 => obj2.id == value.id);
    if (index >= 0) {
      dataView.splice(index, 1);
    }
  }
  _filter(value: string, dataBD: NombreIdModel[], dataView: NombreIdModel[]): NombreIdModel[] {
    const filterValue = value ? value.toLowerCase() : "";
    const filter: NombreIdModel[] = dataBD
      .filter(obj => dataView ? dataView.findIndex(obj2 => obj2.id === obj.id) === -1 : dataBD)
      .filter(obj => obj.nombre.toLowerCase().indexOf(filterValue) === 0);
    return filter;
  }
  getLabel(option: NombreIdModel) {
    if (option) {
      return option.nombre;
    }
  }

  // VIEW: CAMPOS
  toggleAllSelection(option: MatOption) {
    this.allSelected = !this.allSelected;  // to control select-unselect
    if (this.allSelected) {
      this.camposSel.options.forEach((item: MatOption) => item.select());
      option.deselect();
    } else {
      this.camposSel.options.forEach((item: MatOption) => { item.deselect() });
    }
  }

  // VIEW: TIENDAS
  obtenerTiendasBd(): void {
    this.reporteService.obtenerTiendasProveedor().subscribe(
      data => {
        this.tiendasBd = data;
        this.filtroTiendas();
      },
      error => {
        this.toastr.error(error);
      }
    );
  }
  filtroTiendas(): void {
    this.tiendasFilter = this.f.tiendas.valueChanges.pipe(
      startWith(''),
      map(obj => typeof obj === 'string' ? obj : obj.nombre),
      map(value => this._filter(value, this.tiendasBd, this.tiendasView))
    );
  }
  selectTienda(event: MatAutocompleteSelectedEvent): void {
    this.tiendasView.push(event.option.value);
    this.f.tiendas.setValue('');
    this.filtroTiendas();
  }
  removeTienda(value: NombreIdModel): void {
    this._remove(value, this.tiendasView);
    this.filtroTiendas();
  }

  // VIEW: DEPARTAMENTOS
  obtenerDepartamentosBd(): void {
    this.parametrizacionService.obtenerDepartamentos(1).subscribe(
      data => {
        this.departamentosBd = data;
        this.filtroDepartamentos();
      },
      error => {
        this.toastr.error(error);
      }
    );
  }
  private filtroDepartamentos(): void {
    this.departamentosFilter = this.f.departamento.valueChanges.pipe(
      startWith(''),
      map(obj => typeof obj === 'string' ? obj : obj.nombre),
      map(value => this._filter(value, this.departamentosBd, []))
    );
  }
  selectDepartamento(event: MatAutocompleteSelectedEvent): void {
    this.f.departamento.setValue(event.option.value);
    this.obtenerCiudadesBd(event.option.value.id);
    this.f.ciudad.setValue(null);
  }

  // VIEW: CIUDADES
  obtenerCiudadesBd(idDepartamento: number): void {
    this.parametrizacionService.obtenerCiudades(idDepartamento).subscribe(
      data => {
        this.ciudadesBd = data;
        this.filtroCiudades();
      },
      error => {
        this.toastr.error(error);
      }
    );
  }
  private filtroCiudades(): void {
    this.ciudadesFilter = this.f.ciudad.valueChanges.pipe(
      startWith(''),
      map(obj => typeof obj === 'string' ? obj : obj?.nombre),
      map(value => this._filter(value, this.ciudadesBd, []))
    );
  }
  selectCiudad(event: MatAutocompleteSelectedEvent): void {
    this.f.ciudad.setValue(event.option.value);
  }

  //VIEW: SUBMIT | CLEAR
  onSubmit(): void {
    if (this.form.valid) {
      const filtros = this._createFilters()
      const campos = this.f.camposReporte.value;

      console.log(filtros);

      this.reporteService.obtenerReporteVentasTodas(filtros, campos, "ventas_tiendas")
        .subscribe(
          data => {
            this.toastr.success(data.estado.mensaje);
            this.downloadPdf(data.entidad, "reporte-ventas-tiendas");
          },
          error => {
            if (error.toString().indexOf('no contiene información') !== -1) {
              this.toastr.warning(error);
            } else {
              this.toastr.error(error);
            }
          });
    }
  }

  onClear(): void {
    this.allSelected = false;
    this.initFormFields();

    this.tiendasView = []
    this.filtroTiendas();

    this.filtroDepartamentos();
    
    this.ciudadesBd = [];
    this.filtroCiudades();
  }

  private _createFilters(): FiltroModel[] {

    const filters: FiltroModel[] = [];

    const idTienda = new FiltroModel();
    idTienda.setFilterIn("idTienda", this.tiendasView.map(obj => obj.id));
    filters.push(idTienda);

    if(this.f.departamento.value){
      const idDepartamentoVenta = new FiltroModel();
      idDepartamentoVenta.setFilterIn("idDepartamentoVenta", [this.f.departamento.value.id]);
      filters.push(idDepartamentoVenta);  
    }
    
    if(this.f.ciudad.value){
      const idCiudadVenta = new FiltroModel();
      idCiudadVenta.setFilterIn("idCiudadVenta", [this.f.ciudad.value.id]);
      filters.push(idCiudadVenta);
    }

    const fechaVenta = new FiltroModel();
    fechaVenta.setFilterDateGreaterThan("fechaVenta", moment(this.f.fechaDesde.value).format('YYYY-MM-DD'));
    filters.push(fechaVenta);

    const estado = new FiltroModel();
    estado.setFilterEquals("estado", this.f.estado.value);
    filters.push(estado);

    return filters;
  }

  downloadPdf(base64String, fileName) {
    openPdfBase64NewTab(base64String);
  }

}
