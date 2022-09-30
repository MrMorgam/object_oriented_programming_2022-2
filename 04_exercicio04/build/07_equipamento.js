var Equipamento = /** @class */ (function () {
    function Equipamento() {
        this.ligado = false;
    }
    Equipamento.prototype.liga = function () {
        if (this.ligado == false) {
            this.ligado = true;
        }
    };
    Equipamento.prototype.desliga = function () {
        if (this.ligado == true) {
            this.ligado = false;
        }
    };
    Equipamento.prototype.inverte = function () {
        if (this.ligado == true) {
            this.ligado = false;
        }
        else {
            this.ligado = true;
        }
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
function main() {
    var equipamento = new Equipamento();
    console.log(equipamento.estaLigado());
    equipamento.liga();
    console.log(equipamento.estaLigado());
    equipamento.desliga();
    console.log(equipamento.estaLigado());
    equipamento.inverte();
    console.log(equipamento.estaLigado());
}
main();
