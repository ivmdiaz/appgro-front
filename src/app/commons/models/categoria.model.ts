export class CategoriaModel {
  idCategoria: number;
  categoria: string;
  imagen: string;

  constructor(idCategoria: number, categoria: string) {
    this.idCategoria = idCategoria;
    this.categoria = categoria;
  }

}
