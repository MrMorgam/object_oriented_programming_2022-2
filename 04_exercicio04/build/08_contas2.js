var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo - valor >= 0) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
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
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
function main() {
    var conta1 = new Conta("1", 100);
    var conta2 = new Conta("2", 200);
    console.log(conta1.sacar(200));
    console.log(conta1.transferir(conta2, 100));
    console.log(conta2.sacar(200));
    console.log(conta2.transferir(conta1, 200));
    console.log(conta1.consultarSaldo());
    console.log(conta2.consultarSaldo());
}
main();
