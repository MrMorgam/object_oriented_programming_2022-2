"use strict";
exports.__esModule = true;
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operanod2) {
        this._operando1 = operando1;
        this._operando2 = operanod2;
    }
    Calculadora.prototype.soma = function () {
        return this._operando1 + this._operando2;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
function main() {
    var calculadora = new Calculadora(3, 5);
    console.log(calculadora.soma());
}
main();
