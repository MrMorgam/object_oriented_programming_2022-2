var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sobrenome", {
        get: function () {
            return this._sobrenome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "nomeCompleto", {
        get: function () {
            return this.nome + " " + this.sobrenome;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
function main() {
    var pessoa = new Pessoa("Gabriel", "Morais");
    console.log(pessoa.nomeCompleto);
}
main();
