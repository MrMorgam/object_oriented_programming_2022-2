interface FiguraGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
}

interface Comparavel {
    comparar(figuraGeometrica: FiguraGeometrica): number;
}

class Quadrado implements FiguraGeometrica {
    constructor(private _lado: number) {}

    get lado(): number {
        return this._lado;
    }

    public calcularArea(): number {
        return this.lado ** 2;
    }

    public calcularPerimetro(): number {
        return this.lado * 4;
    }

    public comparar(figuraGeometrica: FiguraGeometrica): number {
        const areaQuadrado: number = this.calcularArea();
        const areaFigGeometrica: number = figuraGeometrica.calcularArea();

        if (areaQuadrado > areaFigGeometrica) {
            return 1;
        } else if (areaQuadrado == areaFigGeometrica) {
            return 0;
        } else {
            return -1;
        }
    }
}

class Triangulo implements FiguraGeometrica{
    constructor(private _lado1: number, private _lado2: number, private _lado3: number) {}

    get lado1(): number {
        return this._lado1;
    }

    get lado2(): number {
        return this._lado2;
    }

    get lado3(): number {
        return this._lado3;
    }

    public calcularArea(): number {
        const semiperimetro: number = (this.lado1 + this.lado2 + this.lado3) / 2;

        return Math.sqrt(semiperimetro * (semiperimetro - this.lado1) * (semiperimetro - this.lado2) * (semiperimetro - this.lado3));
    }

    public calcularPerimetro(): number {
        return this.lado1 + this.lado2 + this.lado3;
    }

    public comparar(figuraGeometrica: FiguraGeometrica): number {
        const areaTriangulo: number = this.calcularArea();
        const areaFigGeometrica: number = figuraGeometrica.calcularArea();

        if (areaTriangulo > areaFigGeometrica) {
            return 1;
        } else if (areaTriangulo == areaFigGeometrica) {
            return 0;
        } else {
            return -1;
        }
    }
}


class Circunferencia implements FiguraGeometrica {
    constructor(private _raio: number) {}

    get raio(): number {
        return this._raio;
    }

    public calcularArea(): number {
        return Math.PI * (this.raio ** 2);
    }

    public calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }

    public comparar(figuraGeometrica: FiguraGeometrica): number {
        const areaCircunferencia: number = this.calcularArea();
        const areaFigGeometrica: number = figuraGeometrica.calcularArea();

        if (areaCircunferencia > areaFigGeometrica) {
            return 1;
        } else if (areaCircunferencia == areaFigGeometrica) {
            return 0;
        } else {
            return -1;
        }
    }
}


function main(): void {
    let quadrado1: Quadrado = new Quadrado(1);
    let quadrado2: Quadrado = new Quadrado(1);
    let triangulo: Triangulo = new Triangulo(1,1,1);
    let circunferencia: Circunferencia = new Circunferencia(1);

    console.log(quadrado1.calcularArea());
    console.log(quadrado1.calcularPerimetro());

    console.log(triangulo.calcularArea());
    console.log(triangulo.calcularPerimetro());

    console.log(circunferencia.calcularArea());
    console.log(circunferencia.calcularPerimetro());

    console.log(quadrado1.comparar(triangulo));
    console.log(triangulo.comparar(circunferencia));
    console.log(circunferencia.comparar(quadrado1));
    console.log(quadrado1.comparar(quadrado2));
}


main();