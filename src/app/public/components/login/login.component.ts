import { ToastrService } from 'ngx-toastr';
import { ConstantesUtil } from './../../../commons/helpers/constantes-util';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthenticationService} from "../../../commons/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  goToResetPassword() {
    this.router.navigate(['/reset-password']);
  };

  isPerfilVendedor(): Boolean {
    return this.authenticationService.perfiles.indexOf(ConstantesUtil.PERFIL_PROVEEDOR) !== -1;
  }

  isPerfilAdministrador(): Boolean {
    return this.authenticationService.perfiles.indexOf(ConstantesUtil.PERFIL_ADMINISTRADOR) !== -1;
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.authenticationService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(this.isPerfilVendedor()){
            this.router.navigate(['/home/proveedor']);
          }
          else if(this.isPerfilAdministrador()){
            this.router.navigate(['/home/administrador']);
          }
        },
        error => {
          this.toastr.error(error);
        });
  }
}
