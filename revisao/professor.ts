class Pessoa {
    private _nome: string;
    private _sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(): string {
        return this._nome;
    }

    get sobrenome(): string {
        return this._sobrenome;
    }

    get nomeCompleto(): string {
        return `${this._nome} ${this.sobrenome}`;
    }
}

class Funcionario extends Pessoa {
    private _matricula: string;
    private _salario: number;

    constructor(nome: string, sobrenome: string,
                matricula: string, salario: number) {
        super(nome, sobrenome);

        this._matricula = matricula;
        
        if (salario >= 0) {
            this._salario = salario;
        } else {
            this._salario = 0;
        }
    }

    get matricula(): string {
        return this._matricula;
    }

    get salario(): number {
        return this._salario;
    }

    public calcularSalarioPrimeriaParcela(): number {
        return this.salario * 0.6;
    }

    public calcularSalarioSegundaParcela(): number {
        return this.salario * 0.4;
    }
}

class Professor extends Funcionario {
    private _titulacao: string;

    constructor(nome: string, sobrenome: string, matricula: string,
                salario: number, titulacao: string) {
                super(nome, sobrenome, matricula, salario);

                this._titulacao = titulacao;
    }

    get titulacao(): string {
        return this._titulacao;
    }

    public calcularSalarioPrimeriaParcela(): number {
        return this.salario;
    }

    public calcularSalarioSegundaParcela(): number {
        return 0;
    }
}


function main(): void {
    let funcionario: Funcionario = new Funcionario("João", "Silva", "00147", 1200);
    let professor: Professor = new Professor("Pedro", "Sousa", "00845", 5000, "Titular");

    console.log(funcionario.nomeCompleto);
    console.log(funcionario.calcularSalarioPrimeriaParcela());
    console.log(funcionario.calcularSalarioSegundaParcela());

    console.log(professor.nomeCompleto);
    console.log(professor.calcularSalarioPrimeriaParcela());
    console.log(professor.calcularSalarioSegundaParcela());
}


main();