var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this._numero = numero;
        this._saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this._saldo - valor >= 0) {
            this._saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this._saldo += valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        if (this.sacar(valor)) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(Conta.prototype, "numero", {
        /*consultarSaldo(): number {
            return this._saldo;
        }*/
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        this.contas.push(conta);
    };
    Banco.prototype.consultar = function (numero) {
        var conta;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                conta = this.contas[i];
                break;
            }
        }
        return conta;
    };
    Banco.prototype.consultarIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero === numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    };
    return Banco;
}());
function main() {
    var conta1 = new Conta("12345", 1000);
    var conta2 = new Conta("54321", 500);
    var banco1 = new Banco();
    banco1.inserir(conta1);
    banco1.inserir(conta2);
    console.log(banco1.consultarIndice("54321"));
    console.log(banco1.contas);
}
main();
