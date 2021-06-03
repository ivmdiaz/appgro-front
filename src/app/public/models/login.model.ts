import {Usuario} from "./usuario.model";

export interface Login {
  usuario: Usuario;
  jwt: string;
}
