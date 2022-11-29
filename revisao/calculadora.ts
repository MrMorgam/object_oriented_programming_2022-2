class Calculadora {
    constructor (private _op1: number, private _op2: number) {}

    get op1(): number {
        return this._op1;
    }

    set op1(op1: number) {
        this._op1 = op1;
    }

    get op2(): number {
        return this._op2;
    }

    set op2(op2: number) {
        this._op2 = op2;
    }

    public somar(): number {
        return this.op1 + this.op2;
    }

    public subtrair(): number {
        return this.op1 - this.op2;
    }
}


class CalculadoraCientifica extends Calculadora {
    constructor(op1: number, op2: number) {
        super(op1, op2);
    }

    public exponenciar(): number {
        return this.op1 ** this.op2;
    }
}


function main(): void {
    let calculadora: Calculadora = new Calculadora(1, 2);

    console.log(calculadora.somar());
    console.log(calculadora.subtrair());

    let calculadoraCientifica: CalculadoraCientifica = new CalculadoraCientifica(2, 3);
    console.log(calculadoraCientifica.somar());
    console.log(calculadoraCientifica.subtrair());
    console.log(calculadoraCientifica.exponenciar());   
}


main();