import { TarifaModel } from './../../../commons/models/tarifa.model';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tarifa-dialog',
  templateUrl: './tarifa-dialog.component.html',
  styleUrls: ['./tarifa-dialog.component.scss']
})
export class TarifaDialogComponent implements OnInit {

  //Formulario 
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogo: MatDialogRef<TarifaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TarifaModel
  ) { }

  ngOnInit(): void {
    this.initFormFields();
  }

  initFormFields(): void {
    this.form = this.formBuilder.group({
      rangoInicial: [this.data.rangoInicial,],
      rangoFinal: [this.data.rangoFinal,],
      tarifa: [this.data.tarifa, Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.dialogo.close({ data: this.f.tarifa.value });
    }
  }
}
