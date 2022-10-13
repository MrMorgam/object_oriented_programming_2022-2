class Retangulo {
    l1: number;
    l2: number;

    constructor(l1: number, l2: number) {
        this.l1 = l1;
        this.l2 = l2;
    }

    calcPerimetro(): number {
        return (this.l1 + this.l2) * 2;
    }
}


function main(): void {
    let retangulo1: Retangulo = new Retangulo(2, 3);
    
    console.log(retangulo1.calcPerimetro());
}


main();