var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.raio = raio;
    }
    Circulo.prototype.calcPerimetro = function () {
        return 2 * Math.PI * this.raio;
    };
    Circulo.prototype.calcArea = function () {
        return Math.PI * (Math.pow(this.raio, 2));
    };
    return Circulo;
}());
function main() {
    var circulo1 = new Circulo(1);
    var circulo2 = new Circulo(3);
    console.log(circulo1.calcPerimetro().toFixed(2));
    console.log(circulo1.calcArea().toFixed(2));
    console.log(circulo2.calcPerimetro().toFixed(2));
    console.log(circulo2.calcArea().toFixed(2));
}
main();
