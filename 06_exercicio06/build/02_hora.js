var Hora = /** @class */ (function () {
    function Hora(hora, minuto, segundo) {
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }
    Hora.prototype.lerHora = function () {
        return this.hora;
    };
    Hora.prototype.lerMinuto = function () {
        return this.minuto;
    };
    Hora.prototype.lerSegundo = function () {
        return this.segundo;
    };
    Hora.prototype.exibirHorario = function () {
        var hora = String(this.lerHora());
        var minuto = String(this.lerMinuto());
        var segundo = String(this.lerSegundo());
        console.log("".concat(hora.padStart(2, '0'), ":").concat(minuto.padStart(2, '0'), ":").concat(segundo.padStart(2, '0')));
    };
    return Hora;
}());
function main() {
    var horario = new Hora(17, 4, 37);
    console.log("".concat(horario.lerHora(), " hora(s)"));
    console.log("".concat(horario.lerMinuto(), " minuto(s)"));
    console.log("".concat(horario.lerSegundo(), " segundo(s)"));
    horario.exibirHorario();
}
main();
