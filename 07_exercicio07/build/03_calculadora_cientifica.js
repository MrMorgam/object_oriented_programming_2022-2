"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var _02_calculadora_1 = require("./02_calculadora");
// Foi necessário alterar o modificador de acesso dos operandos de "private" para "protected"
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica(operando1, operando2) {
        return _super.call(this, operando1, operando2) || this;
    }
    CalculadoraCientifica.prototype.exponencia = function () {
        return Math.pow(this._operando1, this._operando2);
    };
    return CalculadoraCientifica;
}(_02_calculadora_1.Calculadora));
function main() {
    var calculadoraCientifica = new CalculadoraCientifica(2, 10);
    console.log(calculadoraCientifica.exponencia());
}
main();
