import { LocationModel } from './../../models/location.model';
import { GeocodeService } from './../../services/geocode.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { TiendaService } from './../../services/tienda.service';
import { NombreIdModel } from './../../../commons/models/nombre-id.model';
import { ParametrizacionService } from './../../../commons/services/parametrizacion.service';
import { Observable, of } from 'rxjs';
import { Component, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { first, map, startWith } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TiendaModel } from '../../models/tienda.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { RequiredMatch as RequireMatch } from '../../../commons/validators/required-match.validator';
import { similarity } from 'src/app/commons/helpers/strings-util';
import { TiendaRequestModel } from '../../models/tienda-request.model';

@Component({
  selector: 'app-tienda-dialog',
  templateUrl: './tienda-dialog.component.html',
  styleUrls: ['./tienda-dialog.component.scss']
})
export class TiendaDialogComponent implements OnInit {

  tiendaForm: FormGroup;
  consultaExitosa: boolean;

  departamentos: NombreIdModel[] = [];
  filterDepartamentos: Observable<NombreIdModel[]>;

  ciudades: NombreIdModel[] = [];
  filterCiudades: Observable<NombreIdModel[]>;
  idCiudadSeleccionada: number;

  imageBase64: string;

  //VALID: MAPS LOCATION
  lasLocationAddress: string;
  lastLocation: LocationModel;

  location: LocationModel;

  constructor(private formBuilder: FormBuilder,
    private tiendaService: TiendaService,
    private parametrizacionService: ParametrizacionService,
    private dialogo: MatDialogRef<TiendaDialogComponent>,
    private toastr: ToastrService,
    private sanitizer: DomSanitizer,
    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) private data: TiendaModel) {

    this.imageBase64 = data.imagen;

    //Consultamos los departamentos de Colombia
    this.parametrizacionService.obtenerDepartamentos(1)
      .subscribe(
        data => {

          this.departamentos = data;
          this.consultaExitosa = true;
          if (this.data.departamento) {
            const arrDepartamentoData = this.departamentos.filter(value => value.nombre === this.data.departamento);
            if (arrDepartamentoData && arrDepartamentoData[0]) {
              this.f.departamento.setValue(arrDepartamentoData[0])
              this.filtrarCiudad(arrDepartamentoData[0].id);
            }
          }
        },
        error => {
          this.toastr.error(error);
          this.dialogo.close();
        }
      );
  }

  ngOnInit() {

    this.configurarValidacionesFormulario();

    this.filterDepartamentos = this.f.departamento.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name, this.departamentos) : this.departamentos.slice())
    );

    //Guardamos la ubicación anterior:
    this.lasLocationAddress = this.data.direccion;
    this.lastLocation = new LocationModel();
    this.lastLocation.lat = this.data.latitud ? this.data.latitud : 0;
    this.lastLocation.lng = this.data.longitud ? this.data.longitud : 0;

    this.showLocation();

  }

  private configurarValidacionesFormulario() {

    this.tiendaForm = this.formBuilder.group({
      nombre: [this.data.nombre, Validators.required],
      descripcion: [this.data.descripcion, Validators.required],
      direccion: [this.data.direccion, Validators.required],
      telefono1: [this.data.telefono1, Validators.required],
      telefono2: [this.data.telefono2],
      departamento: [, [Validators.required, RequireMatch]],
      ciudad: [{ value: null, disabled: !this.data.ciudad }, [Validators.required, RequireMatch]]
    });
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

  /* MAPS */

  showLocation() {
    this.addressToCoordinates();
  }

  addressToCoordinates() {
    if(this.f.direccion.value){
      this.geocodeService.geocodeAddress(this.f.direccion.value)
      .subscribe((location: LocationModel) => {
        if(location.succes){
          this.location = location;
          this.ref.detectChanges();
        }
        else{
          this.f.direccion.setValue(null);
        }
      });
    }
  }

  /* AUTOCOMPLETADO */
  //https://stackblitz.com/edit/multiple-autocomplete?file=src%2Fapp%2Fapp.component.ts

  selectDepartamento(selected: MatAutocompleteSelectedEvent) {
    this.f.ciudad.enable();
    this.filtrarCiudad(selected.option.value.id);
  }

  private filtrarCiudad(id: number) {
    this.parametrizacionService.obtenerCiudades(id).pipe(first())
      .subscribe(
        data => {
          this.ciudades = data;
          this.filterCiudades = this.f.ciudad.valueChanges.pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name, this.ciudades) : this.ciudades.slice())
          );

          if (this.data.ciudad) {
            const arrCiudadData = this.ciudades.filter(value => value.nombre === this.data.ciudad);
            if (arrCiudadData && arrCiudadData[0]) {
              this.f.ciudad.setValue(arrCiudadData[0])
              this.idCiudadSeleccionada = arrCiudadData[0].id;
            }
          }
        },
        error => {
          this.toastr.error(error);
        });
  }

  selectCiudad(selected: MatAutocompleteSelectedEvent) {
    this.idCiudadSeleccionada = selected.option.value.id;
  }

  get f() {
    return this.tiendaForm.controls;
  }

  private _filter(name: string, options: NombreIdModel[]): NombreIdModel[] {
    const filterValue = name.toLowerCase();
    return options.filter(option => option.nombre.toLowerCase().indexOf(filterValue) === 0);
  }

  getOptionText(option: NombreIdModel) {
    if (option) {
      return option.nombre;
    }
  }

  onSubmit() {

    if (this.tiendaForm.valid && this.validarDireccion()) {

      const peticion: TiendaRequestModel = this.tiendaForm.value;
      peticion.idTienda = this.data.idTienda;
      peticion.idCiudad = this.idCiudadSeleccionada;
      peticion.imagen = this.imageBase64;
      peticion.latitud = this.location.lat;
      peticion.longitud = this.location.lng;
      peticion.correo = this.data.correo;

      this.tiendaService.guardarTienda(peticion).subscribe(
        data => {
          this.toastr.success(data.mensaje);
          this.dialogo.close({ "data": true });
        },
        errorRegister => {
          this.toastr.error(errorRegister);
        }
      );
    }
  }

  private validarDireccion(): Boolean {
    if (this.lasLocationAddress !== this.f.direccion.value) {

      const latEquals: boolean = this.lastLocation.lat === this.location.lat;
      const lngEquals: boolean = this.lastLocation.lng === this.location.lng;

      //Si las coordenadas son iguales aun cuando cambiaron las direcciones:
      if (latEquals && lngEquals) {

        //Si es una tienda nueva y no le dio clic en el botón de ubicación
        if (!this.location.lat && !this.location.lng) {
          this.toastr.warning("Debe seleccionar el botón de ubicación para guardar sus datos.");
          return false;
        }
        else {
          //Google deja misma LAT y LNG cuando las cadenas son casi iguales. Razón por la que agregamos un porcentaje de similitud
          const similitudDireccion: number = similarity(this.lasLocationAddress, this.f.direccion.value);

          //Si no cambió LAT Y LNG, y la similitud es menor al 85% la dirección seguramente cambió.
          if (latEquals && lngEquals && similitudDireccion < 0.85) {
            this.toastr.warning("Debe seleccionar el botón de ubicación para actualizar sus datos.");
            return false;
          }
        }
      }
    }
    return true;
  }
}
