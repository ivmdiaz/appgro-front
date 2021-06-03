import { HomeService } from './../../services/home.service';
import { NombreIdModel } from './../../../commons/models/nombre-id.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './../../../public/models/usuario.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Inject } from '@angular/core';
import { RequiredMatch } from 'src/app/commons/validators/required-match.validator';

@Component({
  selector: 'app-usuario-dialog',
  templateUrl: './usuario-dialog.component.html',
  styleUrls: ['./usuario-dialog.component.scss']
})
export class UsuarioDialogComponent implements OnInit {

  usuarioForm: FormGroup;

  filterPerfiles: Observable<NombreIdModel[]>;
  perfiles: NombreIdModel[] = [
    {
      id: 1,
      nombre: "Administrador"
    },
    {
      id: 2,
      nombre: "Comprador"
    },
    {
      id: 3,
      nombre: "Vendedor"
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private homeService: HomeService,
    public dialogo: MatDialogRef<UsuarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) { }

  ngOnInit(): void {

    const userPerfil: NombreIdModel = {
      id: this.data.perfiles[0].idPerfil,
      nombre: this.data.perfiles[0].nombre
    };

    this.usuarioForm = this.formBuilder.group({
      nombres: [this.data.nombreCompleto],
      primerApellido: [this.data.primerApellido],
      segundoApellido: [this.data.segundoApellido],
      correo: [this.data.correo],
      celular: [this.data.celular],
      pefil: [userPerfil, [Validators.required, RequiredMatch]],
    });

    this.filterPerfiles = this.f.pefil.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.nombre),
      map(name => name ? this._filter(name, this.perfiles) : this.perfiles.slice())
    );
  }

  private _filter(name: string, options: any[]): any[] {
    const filterValue = name.toLowerCase();
    return options.filter(option => option.nombre.toLowerCase().indexOf(filterValue) === 0);
  }

  get f() {
    return this.usuarioForm.controls;
  }

  getOptionText(option: any) {
    if (option) {
      return option.nombre;
    }
  }


  onSubmit() {
    if (this.usuarioForm.valid) {
      this.homeService.actualizarPerfil(this.data.idUsuario, this.f.pefil.value.id).subscribe(
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

}

