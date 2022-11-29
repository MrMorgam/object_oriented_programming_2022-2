var Quadrado = /** @class */ (function () {
    function Quadrado(_lado) {
        this._lado = _lado;
    }
    Object.defineProperty(Quadrado.prototype, "lado", {
        get: function () {
            return this._lado;
        },
        enumerable: false,
        configurable: true
    });
    Quadrado.prototype.calcularArea = function () {
        return Math.pow(this.lado, 2);
    };
    Quadrado.prototype.calcularPerimetro = function () {
        return this.lado * 4;
    };
    Quadrado.prototype.comparar = function (figuraGeometrica) {
        var areaQuadrado = this.calcularArea();
        var areaFigGeometrica = figuraGeometrica.calcularArea();
        if (areaQuadrado > areaFigGeometrica) {
            return 1;
        }
        else if (areaQuadrado == areaFigGeometrica) {
            return 0;
        }
        else {
            return -1;
        }
    };
    return Quadrado;
}());
var Triangulo = /** @class */ (function () {
    function Triangulo(_lado1, _lado2, _lado3) {
        this._lado1 = _lado1;
        this._lado2 = _lado2;
        this._lado3 = _lado3;
    }
    Object.defineProperty(Triangulo.prototype, "lado1", {
        get: function () {
            return this._lado1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangulo.prototype, "lado2", {
        get: function () {
            return this._lado2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangulo.prototype, "lado3", {
        get: function () {
            return this._lado3;
        },
        enumerable: false,
        configurable: true
    });
    Triangulo.prototype.calcularArea = function () {
        var semiperimetro = (this.lado1 + this.lado2 + this.lado3) / 2;
        return Math.sqrt(semiperimetro * (semiperimetro - this.lado1) * (semiperimetro - this.lado2) * (semiperimetro - this.lado3));
    };
    Triangulo.prototype.calcularPerimetro = function () {
        return this.lado1 + this.lado2 + this.lado3;
    };
    Triangulo.prototype.comparar = function (figuraGeometrica) {
        var areaTriangulo = this.calcularArea();
        var areaFigGeometrica = figuraGeometrica.calcularArea();
        if (areaTriangulo > areaFigGeometrica) {
            return 1;
        }
        else if (areaTriangulo == areaFigGeometrica) {
            return 0;
        }
        else {
            return -1;
        }
    };
    return Triangulo;
}());
var Circunferencia = /** @class */ (function () {
    function Circunferencia(_raio) {
        this._raio = _raio;
    }
    Object.defineProperty(Circunferencia.prototype, "raio", {
        get: function () {
            return this._raio;
        },
        enumerable: false,
        configurable: true
    });
    Circunferencia.prototype.calcularArea = function () {
        return Math.PI * (Math.pow(this.raio, 2));
    };
    Circunferencia.prototype.calcularPerimetro = function () {
        return 2 * Math.PI * this.raio;
    };
    Circunferencia.prototype.comparar = function (figuraGeometrica) {
        var areaCircunferencia = this.calcularArea();
        var areaFigGeometrica = figuraGeometrica.calcularArea();
        if (areaCircunferencia > areaFigGeometrica) {
            return 1;
        }
        else if (areaCircunferencia == areaFigGeometrica) {
            return 0;
        }
        else {
            return -1;
        }
    };
    return Circunferencia;
}());
function main() {
    var quadrado1 = new Quadrado(1);
    var quadrado2 = new Quadrado(1);
    var triangulo = new Triangulo(1, 1, 1);
    var circunferencia = new Circunferencia(1);
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
