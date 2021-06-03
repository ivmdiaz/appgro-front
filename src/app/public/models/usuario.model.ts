import { PerfilModel } from "./perfil.model";

export interface Usuario {
  idUsuario: number;
  nombreCompleto: string;
  primerApellido: string;
  segundoApellido: string;
  correo: string;
  celular: string;
  perfiles: PerfilModel[];
  estado: string;
}
