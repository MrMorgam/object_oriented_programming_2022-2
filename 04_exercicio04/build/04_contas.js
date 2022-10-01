var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        this.saldo -= valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Conta;
}());
function main() {
    var c1 = new Conta("1", 100);
    var c2 = new Conta("2", 100);
    var c3;
    c1 = c2;
    c3 = c1;
    c1.sacar(10);
    c1.transferir(c2, 50);
    console.log(c1.consultarSaldo());
    console.log(c2.consultarSaldo());
    console.log(c3.consultarSaldo());
}
main();
