export { Calculadora };


class Calculadora {
    private _operando1: number;
    private _operando2: number;

    constructor(operando1: number, operanod2: number) {
        this._operando1 = operando1;
        this._operando2 = operanod2;
    }

    public get operando1(): number {
        return this._operando1;
    }

    public get operando2(): number {
        return this._operando2;
    }
    
    soma(): number {
        return this.operando1 + this.operando2;
    }
}


function main(): void {
    let calculadora: Calculadora = new Calculadora(1, 2);

    console.log(calculadora.soma());
}


main();