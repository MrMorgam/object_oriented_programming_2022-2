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
        if (valor < 0) {
            throw new Error("Valor não pode ser negativo");
        }
        this._saldo += valor;
    };
    Conta.prototype.sacar = function (valor) {
        if (valor < 0) {
            throw new Error("Valor não pode ser negativo");
        }
        var saldoAposSaque = this.saldo - valor;
        if (saldoAposSaque < 0) {
            throw new Error("Saldo insuficiente");
        }
        this._saldo -= valor;
    };
    Conta.prototype.transferir = function (valor, contaCredito) {
        this.sacar(valor);
        contaCredito.depositar(valor);
    };
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco() {
        this._contas = [];
    }
    Banco.prototype.adicionar = function (conta) {
        this._contas.push(conta);
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
            throw new Error("Conta não encontrada");
        }
        return indiceContaProcurada;
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
    return Banco;
}());
function main() {
    var conta1 = new Conta("0001");
    var conta2 = new Conta("0002");
    var banco = new Banco();
    banco.adicionar(conta1);
    banco.adicionar(conta2);
    banco.depositar("0001", -1);
}
main();
