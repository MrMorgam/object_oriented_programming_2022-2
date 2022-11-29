var Relogio = /** @class */ (function () {
    function Relogio(_hora, _minuto, _segundo) {
        this._hora = _hora;
        this._minuto = _minuto;
        this._segundo = _segundo;
    }
    Object.defineProperty(Relogio.prototype, "hora", {
        get: function () {
            return this._hora;
        },
        set: function (hora) {
            this._hora = hora;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Relogio.prototype, "minuto", {
        get: function () {
            return this._minuto;
        },
        set: function (minuto) {
            this._minuto = minuto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Relogio.prototype, "segundo", {
        get: function () {
            return this._segundo;
        },
        set: function (segundo) {
            this._segundo = segundo;
        },
        enumerable: false,
        configurable: true
    });
    Relogio.prototype.mostrarHora = function () {
        var horaFormatoHH = this.hora.toString().padStart(2, '0');
        var minutoFormatoMM = this.minuto.toString().padStart(2, '0');
        var segundoFormatoSS = this.segundo.toString().padStart(2, '0');
        return "".concat(horaFormatoHH, ":").concat(minutoFormatoMM, ":").concat(segundoFormatoSS);
    };
    return Relogio;
}());
function main() {
    var relogio = new Relogio(7, 31, 43);
    console.log(relogio.mostrarHora());
}
main();
