export class FiltroModel {
    campo: string;
    valorIgualA: string;
    valorEntreIds: number[];
    numeroMayorA: number;
    numeroMenorA: number;
    fechaMayorA: string;
    fechaMenorA: string;

    setFilterEquals(campo: string, valorIgualA: string) {
        this.campo = campo;
        this.valorIgualA = valorIgualA;
    }

    setFilterIn(campo: string, valorEntreIds: number[]) {
        this.campo = campo;
        this.valorEntreIds = valorEntreIds;
    }

    setFilterNumGreaterThan(campo: string, numeroMayorA: number) {
        this.campo = campo;
        if(numeroMayorA){
            this.numeroMayorA = numeroMayorA;
        }
    }

    setFilterNumLessThan(campo: string, numeroMenorA: number) {
        this.campo = campo;
        if(numeroMenorA){
            this.numeroMenorA = numeroMenorA;
        }
    }

    setFilterDateGreaterThan(campo: string, fechaMayorA: string) {
        this.campo = campo;
        if(fechaMayorA && fechaMayorA !== 'Invalid date'){
        this.fechaMayorA = fechaMayorA;
        }
    }

    setFilterDateLessThan(campo: string, fechaMenorA: string) {
        this.campo = campo;
        if(fechaMenorA && fechaMenorA !== 'Invalid date'){
        this.fechaMenorA = fechaMenorA;
        }
    }
}