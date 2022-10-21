"use strict";
exports.__esModule = true;
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operanod2) {
        this._operando1 = operando1;
        this._operando2 = operanod2;
    }
    Object.defineProperty(Calculadora.prototype, "operando1", {
        get: function () {
            return this._operando1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculadora.prototype, "operando2", {
        get: function () {
            return this._operando2;
        },
        enumerable: false,
        configurable: true
    });
    Calculadora.prototype.soma = function () {
        return this.operando1 + this.operando2;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
function main() {
    var calculadora = new Calculadora(1, 2);
    console.log(calculadora.soma());
}
main();
