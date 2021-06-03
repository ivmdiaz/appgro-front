export class TarifaModel {
  idTarifa: number;
  rangoInicial: number;
  rangoFinal: number;
  tarifa: number;

  constructor(rangoInicial:number, rangoFinal:number){
    this.idTarifa = null;
    this.tarifa = null;
    this.rangoInicial = rangoInicial;
    this.rangoFinal = rangoFinal;
  }

}
