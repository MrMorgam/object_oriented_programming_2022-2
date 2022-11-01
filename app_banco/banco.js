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
exports.ContaImposto = exports.ContaPoupanca = exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero) {
        this._numero = numero;
        this._saldo = 0;
    }
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.depositar = function (valor) {
        this._saldo += valor;
    };
    Conta.prototype.sacar = function (valor) {
        var saldoAposSaque = this.saldo - valor;
        if (saldoAposSaque < 0) {
            return false;
        }
        else {
            this._saldo -= valor;
            return true;
        }
    };
    return Conta;
}());
exports.Conta = Conta;
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(numero, taxaJuros) {
        var _this = _super.call(this, numero) || this;
        _this._taxaJuros = taxaJuros;
        return _this;
    }
    Object.defineProperty(ContaPoupanca.prototype, "taxaJuros", {
        get: function () {
            return this._taxaJuros;
        },
        enumerable: false,
        configurable: true
    });
    ContaPoupanca.prototype.renderJuros = function () {
        var valorAcrescimo = this.saldo + (this.saldo * this.taxaJuros / 100);
        this.depositar(valorAcrescimo);
    };
    return ContaPoupanca;
}(Conta));
exports.ContaPoupanca = ContaPoupanca;
var ContaImposto = /** @class */ (function (_super) {
    __extends(ContaImposto, _super);
    function ContaImposto(numero, taxaImposto) {
        var _this = _super.call(this, numero) || this;
        _this._taxaImposto = taxaImposto;
        return _this;
    }
    Object.defineProperty(ContaImposto.prototype, "taxaImposto", {
        get: function () {
            return this._taxaImposto;
        },
        enumerable: false,
        configurable: true
    });
    ContaImposto.prototype.sacar = function (valor) {
        var valorDebitado = valor + valor * this.taxaImposto;
        var saldoAposSaque = this.saldo - valorDebitado;
        if (saldoAposSaque < 0) {
            return false;
        }
        else {
            this.sacar(valorDebitado);
            return true;
        }
    };
    return ContaImposto;
}(Conta));
exports.ContaImposto = ContaImposto;
