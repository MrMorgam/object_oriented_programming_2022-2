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
var _01_classe_excecoes_1 = require("./01_classe_excecoes");
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
    Conta.prototype.validarValor = function (valor) {
        if (valor <= 0) {
            throw new _01_classe_excecoes_1.ValorInvalidoError("Valor inválido");
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.validarValor(valor);
        this._saldo += valor;
    };
    Conta.prototype.sacar = function (valor) {
        this.validarValor(valor);
        var saldoAposSaque = this.saldo - valor;
        if (saldoAposSaque < 0) {
            throw new _01_classe_excecoes_1.SaldoInsuficienteError("Saldo insuficiente");
        }
        this._saldo -= valor;
    };
    Conta.prototype.transferir = function (valor, contaCredito) {
        this.sacar(valor);
        contaCredito.depositar(valor);
    };
    return Conta;
}());
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(numero, taxaJuros) {
        var _this = _super.call(this, numero) || this;
        _this._taxaJuros = taxaJuros;
        return _this;
    }
    Object.defineProperty(Poupanca.prototype, "taxaJuros", {
        get: function () {
            return this._taxaJuros;
        },
        enumerable: false,
        configurable: true
    });
    return Poupanca;
}(Conta));
var Banco = /** @class */ (function () {
    function Banco() {
        this._contas = [];
    }
    Banco.prototype.adicionar = function (conta) {
        this._contas.push(conta);
    };
    Banco.prototype.alterar = function (numero, conta) {
        var indiceConta = this.consultarIndice(numero);
        this._contas[indiceConta] = conta;
    };
    Banco.prototype.excluir = function (numero) {
        var indiceConta = this.consultarIndice(numero);
        for (var i = indiceConta; i < this._contas.length; i++) {
            this._contas[i] = this._contas[i + 1];
        }
        this._contas.pop();
    };
    Banco.prototype.consultarIndice = function (numero) {
        var indiceContaProcurada = -1;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceContaProcurada = i;
                break;
            }
        }
        if (indiceContaProcurada == -1) {
            throw new _01_classe_excecoes_1.ContaInexistenteError("Conta não encontrada");
        }
        return indiceContaProcurada;
    };
    Banco.prototype.consultar = function (numero) {
        var indiceConta = this.consultarIndice(numero);
        return this._contas[indiceConta];
    };
    Banco.prototype.depositar = function (numero, valor) {
        var indiceConta = this.consultarIndice(numero);
        this._contas[indiceConta].depositar(valor);
    };
    Banco.prototype.sacar = function (numero, valor) {
        var indiceConta = this.consultarIndice(numero);
        this._contas[indiceConta].sacar(valor);
    };
    Banco.prototype.transferir = function (numeroContaDebito, numeroContaCredito, valor) {
        var indiceContaDebito = this.consultarIndice(numeroContaDebito);
        var indiceContaCredito = this.consultarIndice(numeroContaCredito);
        this._contas[indiceContaDebito].transferir(valor, this._contas[indiceContaCredito]);
    };
    Banco.prototype.renderJuros = function (numero) {
        var indiceConta = this.consultarIndice(numero);
        if (this._contas[indiceConta] instanceof Poupanca) {
            this._contas[indiceConta].depositar(this._contas[indiceConta].saldo * this._contas[indiceConta].taxaJuros);
        }
    };
    return Banco;
}());
function main() {
    var conta1 = new Conta("0001");
    var conta2 = new Conta("0002");
    var conta3 = new Poupanca("0003", 0.05);
    var banco = new Banco();
    banco.adicionar(conta1);
    banco.adicionar(conta2);
    banco.adicionar(conta3);
    banco.sacar("0001", 1);
    /*banco.depositar("0002", 200);
    banco.depositar("0003", 300);*/
    console.log(banco.consultar("0001"));
    /*console.log(banco.consultar("0002"));
    console.log(banco.consultar("0003"));

    banco.excluir("0002");

    console.log(banco.consultar("0001"));
    console.log(banco.consultar("0002"));
    console.log(banco.consultar("0003"));*/
}
main();
