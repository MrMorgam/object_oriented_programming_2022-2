class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }

    public sacar(valor: number): boolean {
        if (this._saldo - valor >= 0) {
            this._saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    public depositar(valor:number): void {
        this._saldo += valor;
    }

    public transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            this.sacar(valor);
            contaDestino.depositar(valor);

            return true;
        } else {
            return false;
        }
    }

    /*consultarSaldo(): number {
        return this._saldo;
    }*/

    get numero(): string {
        return this._numero;
    }

    get saldo(): number {
        return this._saldo;
    }
}


class Banco {
    private contas: Conta[] = [];

    public inserir(conta: Conta): void {
        this.contas.push(conta);
    }

    public consultar(numero: string): Conta {
        let conta!: Conta;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                conta = this.contas[i];
                break;
            }
        }

        return conta;
    }

    private consultarIndice(numero: string): number {
        let indice: number = -1;

        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                indice = i;
                break;
            }
        }

        return indice;
    }

    public alterar(conta: Conta): void {
        let indice: number = this.consultarIndice(conta.numero);

        if (indice != -1) {
            this.contas[indice] = conta;
        }
    }

    public excluir(numero: string): void {
        let indice: number = this.consultarIndice(numero);
        
        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }

            this.contas.pop();
        }
    }

    public depositar(numero: string, valor: number) {
        let conta: Conta = this.consultar(numero);
        
        if (conta != null) {
            conta.depositar(valor);
        }
    }
}


function main(): void {
    let conta1: Conta = new Conta("12345", 1000);
    let conta2: Conta = new Conta("54321", 500);

    let banco1: Banco = new Banco();

    banco1.inserir(conta1);
    banco1.inserir(conta2);

    console.log(banco1.consultarIndice("54321"));

    console.log(banco1.contas);
}

main();