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
var Calculadora = /** @class */ (function () {
    function Calculadora(_op1, _op2) {
        this._op1 = _op1;
        this._op2 = _op2;
    }
    Object.defineProperty(Calculadora.prototype, "op1", {
        get: function () {
            return this._op1;
        },
        set: function (op1) {
            this._op1 = op1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculadora.prototype, "op2", {
        get: function () {
            return this._op2;
        },
        set: function (op2) {
            this._op2 = op2;
        },
        enumerable: false,
        configurable: true
    });
    Calculadora.prototype.somar = function () {
        return this.op1 + this.op2;
    };
    Calculadora.prototype.subtrair = function () {
        return this.op1 - this.op2;
    };
    return Calculadora;
}());
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica(op1, op2) {
        return _super.call(this, op1, op2) || this;
    }
    CalculadoraCientifica.prototype.exponenciar = function () {
        return Math.pow(this.op1, this.op2);
    };
    return CalculadoraCientifica;
}(Calculadora));
function main() {
    var calculadora = new Calculadora(1, 2);
    console.log(calculadora.somar());
    console.log(calculadora.subtrair());
    var calculadoraCientifica = new CalculadoraCientifica(2, 3);
    console.log(calculadoraCientifica.somar());
    console.log(calculadoraCientifica.subtrair());
    console.log(calculadoraCientifica.exponenciar());
}
main();
