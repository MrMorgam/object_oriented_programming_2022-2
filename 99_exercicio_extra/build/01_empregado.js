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
var Empregado = /** @class */ (function () {
    function Empregado() {
        this._salario = 500;
    }
    Empregado.prototype.calcularSalario = function () {
        return this._salario;
    };
    return Empregado;
}());
var Diarista = /** @class */ (function (_super) {
    __extends(Diarista, _super);
    function Diarista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Diarista.prototype.calcularSalario = function () {
        return (_super.prototype.calcularSalario.call(this) / 30);
    };
    return Diarista;
}(Empregado));
var Horista = /** @class */ (function (_super) {
    __extends(Horista, _super);
    function Horista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Horista.prototype.calcularSalario = function () {
        return (_super.prototype.calcularSalario.call(this) / 24);
    };
    return Horista;
}(Diarista));
function main() {
    var empregado = new Empregado();
    var diarista = new Diarista();
    var horista = new Horista();
    console.log(empregado.calcularSalario());
    console.log(diarista.calcularSalario());
    console.log(horista.calcularSalario());
}
main();
