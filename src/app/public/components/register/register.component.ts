import { ToastrService } from 'ngx-toastr';
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MustMatch} from "../../../commons/validators/must-match.validator";
import {LoginService} from "../../services/login.service";
import {RegistroPeticion} from "../../../commons/models/registro-peticion.model";
import {AuthenticationService} from "../../../commons/services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombreCompleto: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required]
    }, {
      validator: MustMatch('contrasena', 'confirmarContrasena')
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    //Definimos petición y consumimos el ws:
    const peticion = new RegistroPeticion(this.registerForm.value);
    this.loginService.register(peticion).subscribe(
      register => {
        this.authenticationService.login({
          usuario:peticion.correo, 
          contrasena:peticion.contrasena
        }).subscribe(
          login => {
            this.router.navigate(['/home/proveedor']);
          },
          error => {
            this.toastr.error(error);
            
          });
      },
      error => {
        this.toastr.error(error);
      }
    );
  }
}
