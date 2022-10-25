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

    public get numero(): string {
        return this._numero;
    }

    public get saldo(): number {
        return this._saldo;
    }
}


class Poupanca extends Conta {
    private _taxaDeJuros: number;

    constructor(numero: string, saldo: number, taxaDeJuros: number) {
        super(numero, saldo);
        this._taxaDeJuros = taxaDeJuros;
    }

    public renderJuros(): void {
        this.depositar(this.saldo * (this._taxaDeJuros / 100));
    }

    public get taxaDeJuros(): number {
        return this._taxaDeJuros;
    }
}


class ContaImposto extends Conta {
    private _taxaDesconto: number;

    constructor(numero: string, saldo: number, taxaDesconto: number) {
        super(numero, saldo);

        this._taxaDesconto = taxaDesconto;
    }

    debitar(valor: number): void {
        let total = valor + valor * (this._taxaDesconto / 100);
        super.sacar(total);
    }
}


class Banco {
    private _contas: Conta[];

    constructor() {
        this._contas = [];
    }

    public inserir(conta: Conta): void {
        this._contas.push(conta);
    }

    public consultar(numero: string): Conta {
        let conta!: Conta;

        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero === numero) {
                conta = this._contas[i];
                break;
            }
        }

        return conta;
    }

    private consultarIndice(numero: string): number {
        let indice: number = -1;

        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero === numero) {
                indice = i;
                break;
            }
        }

        return indice;
    }

    public alterar(conta: Conta): void {
        let indice: number = this.consultarIndice(conta.numero);

        if (indice != -1) {
            this._contas[indice] = conta;
        }
    }

    public excluir(numero: string): void {
        let indice: number = this.consultarIndice(numero);
        
        if (indice != -1) {
            for (let i: number = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }

            this._contas.pop();
        }
    }

    public depositar(numero: string, valor: number) {
        let conta: Conta = this.consultar(numero);
        
        if (conta != null) {
            conta.depositar(valor);
        }
    }

    public renderJuros(numero: string): void {
        const indice: number = this.consultarIndice(numero);

        if (indice != -1) {
            if (this._contas[indice] instanceof Poupanca) {
                (<Poupanca> this._contas[indice]).renderJuros();
            }
        }
    }

    public debitar(numero: string, valor: number) {
        const indice: number = this.consultarIndice(numero);

        if (indice != -1) {
            if (this._contas[indice] instanceof ContaImposto) {
                (<ContaImposto> this._contas[indice]).debitar(valor);
            }
        }
    }
}


function main(): void {
    let conta: Conta = new Conta('4002', 200);
    let poupanca: Poupanca = new Poupanca('8922', 500, 5);
    let contaImposto: ContaImposto = new ContaImposto('2222', 100, 0.03);

    let banco: Banco = new Banco();

    banco.inserir(conta);
    banco.inserir(poupanca);
    banco.inserir(contaImposto);

    console.log(banco);

    banco.renderJuros('4002');
    banco.renderJuros('8922');

    console.log(banco);
   
    banco.debitar('4002', 50);
    banco.debitar('2222', 50);

    console.log(banco);
}


main();