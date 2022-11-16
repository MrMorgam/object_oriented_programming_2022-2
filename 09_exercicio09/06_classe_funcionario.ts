abstract class Funcionario {
    protected _salario: number;

    constructor(salario: number) {
        this._salario = salario;
    }

    abstract getBonificacao(): number;
}

class Gerente extends Funcionario {
    public getBonificacao(): number {
        return this._salario * 1.4;
    }
}

class Diretor extends Gerente {
    public getBonificacao(): number {
        return this._salario * 1.6;
    }
}

class Presidente extends Diretor {
    public getBonificacao(): number {
        return (this._salario * 2) + 1000;
    }
}