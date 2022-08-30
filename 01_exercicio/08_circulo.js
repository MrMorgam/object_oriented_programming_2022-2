var Circulo = /** @class */ (function () {
    function Circulo() {
        this.raio = 0;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * (Math.pow(this.raio, 2));
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * Math.PI * this.raio;
    };
    return Circulo;
}());
var circulo = new Circulo;
circulo.raio = 3;
console.log("\u00C1rea do ret\u00E2ngulo: ".concat(circulo.calcularArea().toFixed(2)));
console.log("Per\u00EDmetro do ret\u00E2ngulo: ".concat(circulo.calcularPerimetro().toFixed(2)));
