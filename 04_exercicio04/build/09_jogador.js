var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontos) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontos;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacar = function (atacado) {
        if (atacado.estaVivo()) {
            atacado.pontosAtuais -= this.calcularAtaque();
        }
    };
    Jogador.prototype.estaVivo = function () {
        return this.pontosAtuais > 0;
    };
    Jogador.prototype.toString = function () {
        return "Força: " + this.forca + " | Nível: " + this.nivel + " | Pontos de vida: " + this.pontosAtuais;
    };
    return Jogador;
}());
function main() {
    var jogador1 = new Jogador(10, 10, 100);
    var jogador2 = new Jogador(7, 9, 100);
    console.log(jogador1.toString());
    console.log(jogador2.toString());
    jogador1.atacar(jogador2);
    jogador2.atacar(jogador1);
    console.log(jogador1.toString());
    console.log(jogador2.toString());
}
main();
