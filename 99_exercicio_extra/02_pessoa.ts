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
        return this.nome + " " + this.sobrenome;
    }
}


function main(): void {
    let pessoa: Pessoa = new Pessoa("Gabriel", "Morais");

    console.log(pessoa.nomeCompleto);
}


main();