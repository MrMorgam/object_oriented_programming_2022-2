class Relogio {
    constructor (private _hora: number,
                 private _minuto: number,
                 private _segundo: number) {}

    get hora(): number {
        return this._hora;
    }

    set hora(hora: number) {
        this._hora = hora;
    }

    get minuto(): number {
        return this._minuto;
    }

    set minuto(minuto: number) {
        this._minuto = minuto;
    }

    get segundo(): number {
        return this._segundo;
    }

    set segundo(segundo: number) {
        this._segundo = segundo
    }

    public mostrarHora(): string {
        const horaFormatoHH: string = this.hora.toString().padStart(2, '0');
        const minutoFormatoMM: string = this.minuto.toString().padStart(2, '0');
        const segundoFormatoSS: string = this.segundo.toString().padStart(2, '0');

        return `${horaFormatoHH}:${minutoFormatoMM}:${segundoFormatoSS}`
    }
}


function main(): void {
    let relogio: Relogio = new Relogio(7,31,43);

    console.log(relogio.mostrarHora());
}


main();