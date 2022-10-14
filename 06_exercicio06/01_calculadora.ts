class Calculadora {
    private operando1: number;
    private operando2: number;

    constructor(n1: number, n2: number) {
        this.operando1 = n1;
        this.operando2 = n2;
    }

    public soma(): number {
        return this.operando1 + this.operando2;
    }

    public subtrai(): number {
        return this.operando1 - this.operando2;
    }
}


function main(): void {
    let calc: Calculadora = new Calculadora(2, 1)

    console.log(calc.soma());
    console.log(calc.subtrai());

    console.log(calc.operando1);
    calc.operando2 = 3;

    console.log(calc.soma());
    console.log(calc.subtrai());
}


main()