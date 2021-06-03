import { CategoriaModel } from './../../../commons/models/categoria.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { ParametrizacionService } from 'src/app/commons/services/parametrizacion.service';

@Component({
  selector: 'app-categoria-dialog',
  templateUrl: './categoria-dialog.component.html',
  styleUrls: ['./categoria-dialog.component.scss']
})
export class CategoriaDialogComponent implements OnInit {

  //Formulario 
  form: FormGroup;

  //VIEW: Imagen
  imageBase64: string;

  constructor(
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private parametrizacionService: ParametrizacionService,
    public dialogo: MatDialogRef<CategoriaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoriaModel
  ) { }

  ngOnInit(): void {
    this.initFormFields();
  }

  initFormFields(): void {
    this.imageBase64 = this.data.imagen;
    this.form = this.formBuilder.group({
      categoria: [this.data.categoria,]
    });
  }

  get f() {
    return this.form.controls;
  }

  //VIEW ARCHIVO:
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

  //SUBMIT FORMULARIO:

  onSubmit(): void {
    if (this.form.valid) {

      const peticion: CategoriaModel = this.form.value;
      peticion.idCategoria = this.data.idCategoria;
      peticion.imagen = this.imageBase64;

      this.parametrizacionService.guardarCategoria(peticion)
        .subscribe(
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
