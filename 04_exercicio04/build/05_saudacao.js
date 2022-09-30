var Saudacao = /** @class */ (function () {
    function Saudacao(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    Saudacao.prototype.obterSaudacao = function () {
        return this.texto + ", " + this.destinatario;
    };
    return Saudacao;
}());
function main() {
    var saudacao = new Saudacao("Bom dia", "João");
    console.log(saudacao.obterSaudacao());
}
main();
