var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, sobrenome, matricula, salario) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this._matricula = matricula;
        if (salario >= 0) {
            _this._salario = salario;
        }
        else {
            _this._salario = 0;
        }
        return _this;
    }
    Object.defineProperty(Funcionario.prototype, "matricula", {
        get: function () {
            return this._matricula;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.calcularSalarioPrimeiraParcela = function () {
        return (this.salario * 0.6);
    };
    Funcionario.prototype.calcularSalarioSegundaParcela = function () {
        return (this.salario * 0.4);
    };
    return Funcionario;
}(Pessoa));
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, sobrenome, matricula, salario, titulacao) {
        var _this = _super.call(this, nome, sobrenome, matricula, salario) || this;
        _this._titulacao = titulacao;
        return _this;
    }
    Professor.prototype.calcularSalarioPrimeiraParcela = function () {
        return this.salario;
    };
    Professor.prototype.calcularSalarioSegundaParcela = function () {
        return 0;
    };
    return Professor;
}(Funcionario));
function main() {
    var professor = new Professor("Gabriel", "Morais", "00001", 2000, "Assistente");
    console.log(professor.calcularSalarioPrimeiraParcela());
    console.log(professor.calcularSalarioSegundaParcela());
}
main();
