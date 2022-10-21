import { Calculadora } from "./02_calculadora";


class CalculadoraCientifica extends Calculadora {
    constructor(operando1: number, operando2: number) {
        super(operando1, operando2);
    }

    exponenciar(): number {
        return this.operando1 ** this.operando2;
    }
}


function main(): void {
    let calculadoraCientifica: CalculadoraCientifica = new CalculadoraCientifica(2, 3);

    console.log(calculadoraCientifica.exponenciar());
}


main();