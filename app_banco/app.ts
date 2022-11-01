import { Conta, ContaPoupanca, ContaImposto } from "./banco";

function main(): void {
    let c: Conta = new Conta("00001");
    let p: ContaPoupanca = new ContaPoupanca("00024", 0.5);
    let ci: ContaImposto = new ContaImposto("00013", 0.03);

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