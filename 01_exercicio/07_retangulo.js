var Retangulo = /** @class */ (function () {
    function Retangulo() {
        this.base = 0;
        this.altura = 0;
    }
    Retangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    Retangulo.prototype.calcularPerimetro = function () {
        return (this.base + this.altura) * 2;
    };
    return Retangulo;
}());
var retangulo1 = new Retangulo;
retangulo1.base = 5;
retangulo1.altura = 3;
console.log("\u00C1rea do ret\u00E2ngulo: ".concat(retangulo1.calcularArea()));
console.log("Per\u00EDmetro do ret\u00E2ngulo: ".concat(retangulo1.calcularPerimetro()));
