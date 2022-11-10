import { ContaInexistenteError, SaldoInsuficienteError, ValorInvalidoError, 
         PoupancaInvalidaError, ContaJaExistenteError } from "./01_classe_excecoes";

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

    private validarValor(valor: number): void {
        if (valor <= 0) {
            throw new ValorInvalidoError("Valor inválido");
        } 
    }

    public depositar(valor: number): void {
        this.validarValor(valor);

        this._saldo += valor;
    }

    public sacar(valor: number): void {
        this.validarValor(valor);
        
        const saldoAposSaque: number = this.saldo - valor;

        if (saldoAposSaque < 0) {
            throw new SaldoInsuficienteError("Saldo insuficiente");
        }

        this._saldo -= valor;
    }

    public transferir(valor: number, contaCredito: Conta): void {
        this.sacar(valor);
        contaCredito.depositar(valor);
    }
}

class Poupanca extends Conta {
    private _taxaJuros: number;

    constructor (numero: string, taxaJuros: number) {
        super(numero);

        this._taxaJuros = taxaJuros;
    }

    get taxaJuros(): number {
        return this._taxaJuros;
    }
}

class Banco {
    private _contas: Conta[];

    constructor() {
        this._contas = [];
    }

    public inserir(conta: Conta): void {
        try {
            this.consultar(conta.numero);
            throw new ContaJaExistenteError("Uma conta com o mesmo número já existe");
        } catch (e: any) {
            if (e instanceof ContaInexistenteError) {
                this._contas.push(conta);
            }
        }
    }

    public alterar(numero: string, conta: Conta): void {
        const indiceConta: number = this.consultarIndice(numero);
        
        this._contas[indiceConta] = conta;
    }

    public remover(numero: string): void {
        const indiceConta: number = this.consultarIndice(numero);

        for (let i: number = indiceConta; i < this._contas.length; i++) {
            this._contas[i] = this._contas[i+1];
        }

        this._contas.pop();
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

    public consultarBanco(): void {
        for (let i: number = 0; i < this._contas.length; i++) {
            console.log(this._contas[i]);
        }
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

    public renderJuros(numero: string): void {
        const indiceConta: number = this.consultarIndice(numero);

        if (!(this._contas[indiceConta] instanceof Poupanca)) {
            throw new PoupancaInvalidaError("A conta não é poupança");
        }

        this._contas[indiceConta].depositar(this._contas[indiceConta].saldo * (<Poupanca>this._contas[indiceConta]).taxaJuros);
    }
}


function main(): void {
    let conta1: Conta = new Conta("0001");
    let conta2: Conta = new Conta("0001");
    // let conta3: Poupanca = new Poupanca("0003", 0.05);

    let banco: Banco = new Banco();

    banco.inserir(conta1);
    banco.inserir(conta2);
   // banco.adicionar(conta3);

    //banco.depositar("0001", 100);
    /*banco.depositar("0002", 200);
    banco.depositar("0003", 300);*/

    banco.consultarBanco();
}


main();