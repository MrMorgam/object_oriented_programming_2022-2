import { ContaInexistenteError } from "./01_classe_excecoes";

class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string) {
        this._numero = numero;
        this._saldo = 0;
    }

    get saldo(): number {
        return this._saldo;
    }

    get numero(): string {
        return this._numero;
    }

    public depositar(valor: number): void {
        if (valor < 0) {
            throw new Error("Valor do depósito inválido");
        }

        this._saldo += valor;
    }

    public sacar(valor: number): void {
        if (valor < 0) {
            throw new Error("Valor do saque inválido");
        }

        const saldoAposSaque: number = this.saldo - valor;
        
        if (saldoAposSaque < 0) {
            throw new Error("Saldo insuficiente");
        }

        this._saldo -= valor;
    }

    public transferir(valor: number, contaCredito: Conta): void {
        this.sacar(valor);
        contaCredito.depositar(valor);
    }
}

class Banco {
    private _contas: Conta[];

    constructor() {
        this._contas = [];
    }

    public adicionar(conta: Conta): void {
        this._contas.push(conta);
    }

    private consultarIndice(numero: string): number {
        let indiceContaProcurada: number = -1;

        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceContaProcurada = i;
                break;
            }
        }

        if (indiceContaProcurada == -1) {
            throw new ContaInexistenteError("Conta não encontrada");
        }

        return indiceContaProcurada;
    }

    public consultar(numero: string): Conta {
        const indiceConta: number = this.consultarIndice(numero);

        return this._contas[indiceConta];
    }

    public depositar(numero: string, valor: number): void {
        const indiceConta: number = this.consultarIndice(numero);

        this._contas[indiceConta].depositar(valor);
    }

    public sacar(numero: string, valor: number): void {
        const indiceConta: number = this.consultarIndice(numero);

        this._contas[indiceConta].sacar(valor);
    }

    public transferir(numeroContaDebito: string, numeroContaCredito: string, valor: number): void {
        const indiceContaDebito: number = this.consultarIndice(numeroContaDebito);
        const indiceContaCredito: number = this.consultarIndice(numeroContaCredito);

        this._contas[indiceContaDebito].transferir(valor, this._contas[indiceContaCredito]);
    }
}


function main(): void {
    let conta1: Conta = new Conta("0001");
    let conta2: Conta = new Conta("0002");

    let banco: Banco = new Banco();

    banco.adicionar(conta1);
    banco.adicionar(conta2);

    banco.depositar("0001", 100);
    banco.depositar("0002", 200);

    console.log(banco.consultar("0003"));
}


main();