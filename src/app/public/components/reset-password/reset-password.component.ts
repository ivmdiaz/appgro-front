import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from './../../../commons/services/authentication.service';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    this.resetForm = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  get f() {
    return this.resetForm.controls;
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }

    //Definimos petición y consumimos el ws:
    this.loginService.resetPassword(this.f.correo.value).subscribe(
      data => {
        this.toastr.success(data.mensaje);
      },
      error => {
        this.toastr.error(error);
      }
    );
  }

}
