export class RegistroPeticion {
  nombreCompleto: string;
  primerApellido: string;
  segundoApellido: string;
  correo: string;
  celular: string;
  contrasena: string;

  public constructor(init?: Partial<RegistroPeticion>) {
    Object.assign(this, init);
  }
}
