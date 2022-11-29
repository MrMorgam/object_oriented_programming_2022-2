abstract class Funcionario {
    constructor(protected salario: number) {}

    public abstract getBonificacao(): number;    
}

class Gerente extends Funcionario {
    public getBonificacao(): number {
        return this.salario * 1.4;
    }
}

class Diretor extends Gerente {
    public getBonificacao(): number {
        return this.salario * 1.6;
    }
}

class Presidente extends Diretor {
    public getBonificacao(): number {
        return (this.salario * 2) + 1000;
    }
}