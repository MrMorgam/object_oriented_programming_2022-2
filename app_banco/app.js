"use strict";
exports.__esModule = true;
var banco_1 = require("./banco");
function main() {
    var c = new banco_1.Conta("00001");
    var p = new banco_1.ContaPoupanca("00024", 0.5);
    var ci = new banco_1.ContaImposto("00013", 0.03);
    c.depositar(1000);
    c.sacar(2000);
    console.log(c.saldo);
    p.depositar(1000);
    p.renderJuros();
    console.log(p.saldo);
    ci.depositar(1000);
    ci.sacar(100);
    console.log(ci.saldo);
}
main();
