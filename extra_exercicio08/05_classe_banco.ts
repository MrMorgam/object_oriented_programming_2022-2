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
        this._saldo += valor;
    }

    public sacar(valor: number): void {
        const saldoAposSaque: number = this.saldo - valor;
        
        if (saldoAposSaque < 0) {
            throw new Error("Saldo insuficiente");
        }

        this._saldo -= valor;
    }

    public transferir(valor: number, conta: Conta): void {
        this.sacar(valor);
        conta.depositar(valor);
    }
}

class Banco {
    private _contas: Conta[];

    constructor() {
        this._contas = [];
    }

    private consultarIndice(numero: string): void{
        // To do
    }

    public creditar(numero: string): void {
        // To do
    }

    public debitar(numero: string): void {
        // To do
    }

    public transferir(numeroDebito: string, numeroCredito: string, valor: number): void {
        // To do
    }
}


function main(): void {
    // To do
}


main();