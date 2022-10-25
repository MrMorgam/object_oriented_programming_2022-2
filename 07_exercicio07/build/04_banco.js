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
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this._numero = numero;
        this._saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this._saldo - valor >= 0) {
            this._saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this._saldo += valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        if (this.sacar(valor)) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(numero, saldo, taxaDeJuros) {
        var _this = _super.call(this, numero, saldo) || this;
        _this._taxaDeJuros = taxaDeJuros;
        return _this;
    }
    Poupanca.prototype.renderJuros = function () {
        this.depositar(this.saldo * (this._taxaDeJuros / 100));
    };
    Object.defineProperty(Poupanca.prototype, "taxaDeJuros", {
        get: function () {
            return this._taxaDeJuros;
        },
        enumerable: false,
        configurable: true
    });
    return Poupanca;
}(Conta));
var ContaImposto = /** @class */ (function (_super) {
    __extends(ContaImposto, _super);
    function ContaImposto(numero, saldo, taxaDesconto) {
        var _this = _super.call(this, numero, saldo) || this;
        _this._taxaDesconto = taxaDesconto;
        return _this;
    }
    ContaImposto.prototype.debitar = function (valor) {
        var total = valor + valor * (this._taxaDesconto / 100);
        _super.prototype.sacar.call(this, total);
    };
    return ContaImposto;
}(Conta));
var Banco = /** @class */ (function () {
    function Banco() {
        this._contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        this._contas.push(conta);
    };
    Banco.prototype.consultar = function (numero) {
        var conta;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero === numero) {
                conta = this._contas[i];
                break;
            }
        }
        return conta;
    };
    Banco.prototype.consultarIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero === numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarIndice(conta.numero);
        if (indice != -1) {
            this._contas[indice] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    };
    Banco.prototype.renderJuros = function (numero) {
        var indice = this.consultarIndice(numero);
        if (indice != -1) {
            if (this._contas[indice] instanceof Poupanca) {
                this._contas[indice].renderJuros();
            }
        }
    };
    Banco.prototype.debitar = function (numero, valor) {
        var indice = this.consultarIndice(numero);
        if (indice != -1) {
            if (this._contas[indice] instanceof ContaImposto) {
                this._contas[indice].debitar(valor);
            }
        }
    };
    return Banco;
}());
function main() {
    var conta = new Conta('4002', 200);
    var poupanca = new Poupanca('8922', 500, 5);
    var contaImposto = new ContaImposto('2222', 100, 0.03);
    var banco = new Banco();
    banco.inserir(conta);
    banco.inserir(poupanca);
    banco.inserir(contaImposto);
    console.log(banco);
    banco.renderJuros('4002');
    banco.renderJuros('8922');
    console.log(banco);
    banco.debitar('4002', 50);
    banco.debitar('2222', 50);
    console.log(banco);
}
main();
