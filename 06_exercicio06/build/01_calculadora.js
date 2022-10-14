var Calculadora = /** @class */ (function () {
    function Calculadora(n1, n2) {
        this.operando1 = n1;
        this.operando2 = n2;
    }
    Calculadora.prototype.soma = function () {
        return this.operando1 + this.operando2;
    };
    Calculadora.prototype.subtrai = function () {
        return this.operando1 - this.operando2;
    };
    return Calculadora;
}());
function main() {
    var calc = new Calculadora(2, 1);
    console.log(calc.soma());
    console.log(calc.subtrai());
    console.log(calc.operando1);
    calc.operando2 = 3;
    console.log(calc.soma());
    console.log(calc.subtrai());
}
main();
