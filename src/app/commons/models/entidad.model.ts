import {Estado} from "./estado.model";

export interface Entidad<T> {
  estado: Estado;
  entidad: T;
}
