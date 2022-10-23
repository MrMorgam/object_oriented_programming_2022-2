import { Calculadora } from "./02_calculadora"; 
// Foi necessário alterar o modificador de acesso dos operandos de "private" para "protected"

class CalculadoraCientifica extends Calculadora {
    constructor(operando1: number, operando2: number) {
        super(operando1, operando2);
    }

    exponencia(): number {
        return Math.pow(this._operando1, this._operando2);
    }
}


function main(): void {
    let calculadoraCientifica: CalculadoraCientifica = new CalculadoraCientifica(2, 10);

    console.log(calculadoraCientifica.exponencia());
}


main();