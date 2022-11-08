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


function main(): void {
    let conta1: Conta = new Conta("1");

    conta1.depositar(100);

    conta1.sacar(101);
}


main();