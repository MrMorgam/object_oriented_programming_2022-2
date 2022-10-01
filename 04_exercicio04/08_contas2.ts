class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo:number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor >= 0) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
        
    }

    depositar(valor:number): void {
        this.saldo += valor;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            this.sacar(valor);
            contaDestino.depositar(valor);

            return true;
        } else {
            return false;
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}


function main() {
    let conta1: Conta = new Conta("1", 100);
    let conta2: Conta = new Conta("2", 200);

    console.log(conta1.sacar(200));
    console.log(conta1.transferir(conta2, 100));

    console.log(conta2.sacar(200));
    console.log(conta2.transferir(conta1, 200));

    console.log(conta1.consultarSaldo());
    console.log(conta2.consultarSaldo());
    
}


main();