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


class Banco {
    contas: Conta[] = [];

    inserir(conta: Conta): void {
        this.contas.push(conta);
    }

    consultar(numero: string): Conta {
        let conta!: Conta;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                conta = this.contas[i];
                break;
            }
        }

        return conta;
    }

    consultarIndice(numero: string): number {
        let indice: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                indice = i;
                break;
            }
        }

        return indice;
    }

    alterar(conta: Conta): void {
        let indice: number = this.consultarIndice(conta.numero);

        if (indice != -1) {
            this.contas[indice] = conta;
        }
    }

    excluir(numero: string): void {
        let indice: number = this.consultarIndice(numero);
        
        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }

            this.contas.pop();
        }
    }

    depositar(numero: string, valor: number) {
        let conta: Conta = this.consultar(numero);
        
        if (conta != null) {
            conta.depositar(valor);
        }
    }
}

export { Conta, Banco }