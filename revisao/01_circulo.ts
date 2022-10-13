class Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }

    calcArea(): number {
        return Math.PI * (this.raio ** 2);
    }
}


function main(): void {
    let circulo1: Circulo = new Circulo(1);
    let circulo2: Circulo = new Circulo(3);

    console.log(circulo1.calcPerimetro().toFixed(2));
    console.log(circulo1.calcArea().toFixed(2));

    console.log(circulo2.calcPerimetro().toFixed(2));
    console.log(circulo2.calcArea().toFixed(2));
}


main();