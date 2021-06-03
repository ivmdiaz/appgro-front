import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from './../../services/producto.service';
import { ProductoRequestModel } from './../../models/producto-request.model';
import { CategoriaModel } from './../../../commons/models/categoria.model';
import { ParametrizacionService } from './../../../commons/services/parametrizacion.service';
import { EtiquetaModel } from './../../../commons/models/etiqueta.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoModel } from './../../models/producto.model';
import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, startWith } from 'rxjs/operators';

import { RequiredMatch as RequireMatch } from '../../../commons/validators/required-match.validator';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.scss']
})
export class ProductoDialogComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];

  productoForm: FormGroup;
  consultaExitosa: boolean;

  filteredEtiquetas: Observable<string[]>;
  allEtiquetas: EtiquetaModel[];
  etiquetas: string[] = [];
  etiquetasIds: number[] = [];

  filteredCategorias: Observable<CategoriaModel[]>;
  allCategorias: CategoriaModel[];

  imageBase64: string;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private parametrizacionService: ParametrizacionService,
    private productoService: ProductoService,
    public dialogo: MatDialogRef<ProductoDialogComponent>,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) private data: ProductoModel
  ) {

    this.imageBase64 = data.imagen;

    //Consultamos los departamentos de Colombia
    this.parametrizacionService.obtenerEtiquetas()
      .subscribe(
        data => {
          this.allEtiquetas = data;

          if (this.data.etiquetas) {
            const arrEtiquetasData = this.allEtiquetas.filter(value => this.data.etiquetas.indexOf(value.etiqueta) !== -1).map(obj => obj.etiqueta);
            if (arrEtiquetasData) {
              this.etiquetas = arrEtiquetasData;
            }
          }

          this.parametrizacionService.obtenerCategorias()
            .subscribe(data2 => {
              this.allCategorias = data2;

              if (this.data.tipoProducto) {
                const arrCategoriasData = this.allCategorias.filter(value => value.categoria === this.data.tipoProducto);
                if (arrCategoriasData && arrCategoriasData[0]) {
                  this.f.objCategoria.setValue(arrCategoriasData[0]);
                }
              }
              this.consultaExitosa = true;
            }, error => {
              this.toastr.error(error);
            });

        },
        error => {
          this.toastr.error(error);
        }
      );
  }

  ngOnInit(): void {

    this.configurarValidacionesFormulario();

    this.filteredEtiquetas = this.f.etiqueta.valueChanges.pipe(
      startWith(''),
      map((etiqueta: string | null) => etiqueta ? this._filterEtiquetas(etiqueta)
        : this.allEtiquetas
          .map(obj => obj.etiqueta)
          .filter(etiqueta => this.etiquetas.indexOf(etiqueta) === -1)));

    this.filteredCategorias = this.f.objCategoria.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filterCategorias(name) : this.allCategorias.slice())
    );

  }

  limpiarArchivo(): void {
    this.imageBase64 = null;
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + this.imageBase64);
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imageBase64 = reader.result.toString().replace(/^data:(.*,)?/, '');
      }
    };
  }

  private configurarValidacionesFormulario() {
    this.productoForm = this.formBuilder.group({
      nombre: [this.data.nombre, Validators.required],
      descripcion: [this.data.descripcion, Validators.required],
      precio: [this.data.precio, Validators.required],
      unidadMedida: [this.data.unidadMedida, Validators.required],
      etiqueta: [,],
      objCategoria: [this.data.tipoProducto, [Validators.required, RequireMatch]],
      disponibilidad: [this.data.cantidadDisponible, Validators.required]
    });
  }

  get f() {
    return this.productoForm.controls;
  }


  /* FUNCIONES PARA VIEW DE ETIQUETAS */
  removeEtiqueta(etiqueta: string): void {
    const index = this.etiquetas.indexOf(etiqueta);
    if (index >= 0) {
      this.etiquetas.splice(index, 1);
    }

    //Actualizamos el Filtro
    this.filteredEtiquetas = this.f.etiqueta.valueChanges.pipe(
      startWith(''),
      map((etiqueta: string | null) => etiqueta ? this._filterEtiquetas(etiqueta)
        : this.allEtiquetas
          .map(obj => obj.etiqueta)
          .filter(etiqueta => this.etiquetas.indexOf(etiqueta) === -1)));
  }

  selectedEtiqueta(event: MatAutocompleteSelectedEvent): void {
    this.etiquetas.push(event.option.viewValue);
    this.f.etiqueta.setValue('');
  }

  private _filterEtiquetas(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allEtiquetas
      .map(obj => obj.etiqueta)
      .filter(etiqueta => this.etiquetas.indexOf(etiqueta) === -1)
      .filter(etiqueta => etiqueta.toLowerCase().indexOf(filterValue) === 0);

  }

  private _filterCategorias(value: string): CategoriaModel[] {
    const filterValue = value.toLowerCase();
    return this.allCategorias
      .filter(obj => obj.categoria.toLowerCase().indexOf(filterValue) === 0);
  }

  /* FUNCIONES PARA VIEW DE CATEGORIA */

  getOptionText(option: CategoriaModel) {
    if (option) {
      return option.categoria;
    }
  }

  onSubmit(): void {

    //Filtramos los ids de las etiquetas
    this.etiquetasIds = this.allEtiquetas.filter(obj => this.etiquetas.indexOf(obj.etiqueta) !== -1).map(obj => obj.idEtiqueta);

    if (this.productoForm.valid) {

      const peticion: ProductoRequestModel = this.productoForm.value;
      peticion.imagen = this.imageBase64;
      peticion.idProducto = this.data.idProducto;
      peticion.idTienda = this.data.idTienda;
      peticion.etiquetas = this.etiquetasIds;
      peticion.categoria = this.f.objCategoria.value.idCategoria;
      this.productoService.guardarProducto(peticion).subscribe(
        data => {
          this.toastr.success(data.mensaje);
          this.dialogo.close({ data: true });
        },
        error => {
          this.toastr.error(error);
        }
      );
    }

  }
}
