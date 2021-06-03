import { ToastrService } from 'ngx-toastr';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "../../../commons/validators/must-match.validator";
import {RegistroPeticion} from "../../../commons/models/registro-peticion.model";
import {AuthenticationService} from "../../../commons/services/authentication.service";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfilForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    const usuario = this.authenticationService.currentUserValue.entidad.usuario;
    this.perfilForm = this.formBuilder.group({
      nombreCompleto: [usuario.nombreCompleto, Validators.required],
      primerApellido: [usuario.primerApellido, Validators.required],
      segundoApellido: [usuario.segundoApellido,Validators.required],
      correo: [usuario.correo, [Validators.required, Validators.email]],
      celular: [usuario.celular, [Validators.required]],
      contrasena: ['', Validators.minLength(6)],
      confirmarContrasena: ['',]
    }, {
      validator: MustMatch('contrasena', 'confirmarContrasena')
    });
  }

  get f() {
    return this.perfilForm.controls;
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.perfilForm.invalid) {
      return;
    }

    //Definimos petición y consumimos el ws:
    const peticion = new RegistroPeticion(this.perfilForm.value);


    this.usuarioService.actualizarDatos(peticion).subscribe(
      respuesta => {
        this.authenticationService.actualizarCurrentUser(this.perfilForm.value);
        this.toastr.success(respuesta.mensaje);
      },
      error => {
        this.toastr.error(error);
      }
    );
  }

}
