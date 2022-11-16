abstract class FiguraGeometrica {
    protected _area: number;
    protected _perimetro: number;

    get area(): number {
        return this._area;
    }

    get perimetro(): number {
        return this._perimetro;
    }

    abstract calcularArea(): void;
    abstract calcularPerimetro(): void;
}

class Quadrado extends FiguraGeometrica {
    private _lado: number;
    
    constructor(lado: number) {
        super();
        this._lado = lado;
    }

    get lado(): number {
        return this._lado;
    }
    
    public calcularArea(): void {
        this._area = this._lado ** 2;
    }

    public calcularPerimetro(): void {
        this._perimetro = this._lado * 4;
    }
    
}

class Circulo extends FiguraGeometrica {
    private _raio: number;

    constructor(raio: number) {
        super();
        this._raio = raio;
    }

    get raio(): number {
        return this._raio;
    }

    public calcularArea(): void {
        this._area = Math.PI * (this._raio ** 2);
    }
    public calcularPerimetro(): void {
        this._perimetro = 2 * Math.PI * this._raio;
    }
}


function main(): void {
    let quadrado: Quadrado = new Quadrado(2);
    let circulo: Circulo = new Circulo(1);

    circulo.calcularArea();
    circulo.calcularPerimetro();

    quadrado.calcularArea();
    quadrado.calcularPerimetro();

    console.log(quadrado.area);
    console.log(quadrado.perimetro);

    console.log(circulo.area);
    console.log(circulo.perimetro);
}


main();