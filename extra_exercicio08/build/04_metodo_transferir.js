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
            throw new Error("Saldo insuficiente");
        }
        this._saldo -= valor;
    };
    Conta.prototype.transferir = function (valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    };
    return Conta;
}());
function main() {
    var conta1 = new Conta("1");
    var conta2 = new Conta("2");
    conta1.depositar(100);
    conta1.transferir(101, conta2);
}
main();
