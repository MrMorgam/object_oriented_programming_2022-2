export { Calculadora };


class Calculadora {
    protected _operando1: number;
    protected _operando2: number;

    constructor(operando1: number, operanod2: number) {
        this._operando1 = operando1;
        this._operando2 = operanod2;
    }
    
    soma(): number {
        return this._operando1 + this._operando2;
    }
}


function main(): void {
    let calculadora: Calculadora = new Calculadora(3, 5);

    console.log(calculadora.soma());
}


main();