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
var JaEliminadoException = /** @class */ (function (_super) {
    __extends(JaEliminadoException, _super);
    function JaEliminadoException(message) {
        return _super.call(this, message) || this;
    }
    return JaEliminadoException;
}(Error));
var Guerreiro = /** @class */ (function () {
    function Guerreiro(_id, _descricao, _forcaAtaque, _vida) {
        if (_vida === void 0) { _vida = 10; }
        this._id = _id;
        this._descricao = _descricao;
        this._forcaAtaque = _forcaAtaque;
        this._vida = _vida;
    }
    Guerreiro.prototype.estaEliminado = function () {
        return this._vida <= 0;
    };
    Guerreiro.prototype.defenderAtaque = function (valorAtaque) {
        this._vida -= valorAtaque;
    };
    Guerreiro.prototype.atacar = function (defensor) {
        if (defensor.estaEliminado()) {
            throw new JaEliminadoException("Alvo já eliminado");
        }
        defensor.defenderAtaque(this._forcaAtaque);
    };
    return Guerreiro;
}());
var BaseMilitar = /** @class */ (function () {
    function BaseMilitar(_id, _x, _y, _percentualDano) {
        if (_percentualDano === void 0) { _percentualDano = 0; }
        this._id = _id;
        this._x = _x;
        this._y = _y;
        this._percentualDano = _percentualDano;
    }
    BaseMilitar.prototype.estaEliminado = function () {
        return this._percentualDano >= 90;
    };
    BaseMilitar.prototype.defenderAtaque = function (valorAtaque) {
        this._percentualDano += valorAtaque;
    };
    return BaseMilitar;
}());
var ResultadoBatalha1;
(function (ResultadoBatalha1) {
    ResultadoBatalha1["EXERCITO01"] = "Ex\u00E9rcito 01";
    ResultadoBatalha1["EXERCITO02"] = "Ex\u00E9rcito 02";
    ResultadoBatalha1["EMPATE"] = "Empate";
})(ResultadoBatalha1 || (ResultadoBatalha1 = {}));
var CenarioBatalha = /** @class */ (function () {
    function CenarioBatalha() {
    }
    CenarioBatalha.prototype.avaliar = function (exercito1, exercito2) {
        var totalEliminadosExercito1 = 0;
        var totalEliminadosExercito2 = 0;
        for (var i = 0; i < exercito1.length; i++) {
            if (exercito1[i].estaEliminado()) {
                totalEliminadosExercito1++;
            }
        }
        for (var i = 0; i < exercito2.length; i++) {
            if (exercito2[i].estaEliminado()) {
                totalEliminadosExercito2++;
            }
        }
        var resultadoBatalha;
        if (totalEliminadosExercito1 < totalEliminadosExercito2) {
            resultadoBatalha = ResultadoBatalha1.EXERCITO01;
        }
        else if (totalEliminadosExercito2 < totalEliminadosExercito1) {
            resultadoBatalha = ResultadoBatalha1.EXERCITO02;
        }
        else {
            resultadoBatalha = ResultadoBatalha1.EMPATE;
        }
        return resultadoBatalha;
    };
    return CenarioBatalha;
}());
function main() {
    var baseMilitar1 = new BaseMilitar(1, 153, 252);
    var baseMilitar2 = new BaseMilitar(1, 759, 857);
    var guerreiro1 = new Guerreiro(123, "Guerreiro comum", 5);
    var guerreiro2 = new Guerreiro(321, "Guerreiro especial", 10);
    var guerreiro3 = new Guerreiro(456, "Guerreiro comum", 5);
    var guerreiro4 = new Guerreiro(654, "Guerreiro especial", 10);
    var exercito1 = [baseMilitar1, guerreiro1, guerreiro2];
    var exercito2 = [baseMilitar2, guerreiro3, guerreiro4];
    try {
        guerreiro1.atacar(guerreiro3);
        guerreiro1.atacar(guerreiro3);
        guerreiro1.atacar(guerreiro3);
    }
    catch (e) {
        console.log(e.message);
    }
    var cenarioBatalha = new CenarioBatalha();
    console.log(cenarioBatalha.avaliar(exercito1, exercito2));
}
main();
