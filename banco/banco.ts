export { Conta, ContaPoupanca, ContaImposto };


class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string) { // cria uma conta com saldo 0
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

    public sacar(valor: number): boolean {
        const saldoAposSaque: number = this.saldo - valor;
        
        if (saldoAposSaque < 0) {
            return false;
        } else {
            this._saldo -= valor;
            return true;
        }
    }

}


class ContaPoupanca extends Conta {
    private _taxaJuros: number; // taxa de juros em porcentagem

    constructor(numero: string, taxaJuros: number) {
        super(numero);
        this._taxaJuros = taxaJuros;
    }

    get taxaJuros(): number {
        return this._taxaJuros;
    }

    public renderJuros(): void {
        const valorAcrescimo: number = this.saldo + (this.saldo * this.taxaJuros / 100)
        this.depositar(valorAcrescimo);
    }
}


class ContaImposto extends Conta {
    private _taxaImposto: number; // taxa de imposto em porcentagem

    constructor(numero: string, taxaImposto: number) {
        super(numero);
        this._taxaImposto = taxaImposto;
    }

    get taxaImposto(): number {
        return this._taxaImposto;
    }

    public sacar(valor: number): boolean {
        const valorDebitado: number = valor + valor * this.taxaImposto;
        const saldoAposSaque: number = this.saldo - valorDebitado;
        
        if (saldoAposSaque < 0) {
            return false;
        } else {
            this.sacar(valorDebitado);
            return true;
        }
    }
}