
export interface HistoricoComprasModel {
  idCompra: number;
  fecha: string;

  idTienda: number;
  nombreTienda: string;

  idComprador: number;
  nombreComprador: string;
  celularComprador: string;
  correoComprador: string;

  idProducto: number;
  nombreProducto: string;
  cantidad: number;
  unidadProducto: string;

  flete: number;
  precioTotal: number;
  total: number;

  fechaEntrega: string;
  aclaracion: string;
  estado: string;

  barrio: string;
  direccion: string;
  ciudad: string;
  direccionDatosAdicionales: string;
  direccionLatitud: number;
  direccionLongitud: number;

}
