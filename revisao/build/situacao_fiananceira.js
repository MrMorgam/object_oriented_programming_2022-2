var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira(credito, debito) {
        this.valorCreditos = credito;
        this.valorDebitos = debito;
    }
    SituacaoFinanceira.prototype.saldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinanceira;
}());
function main() {
    var situacaoFinanceira1 = new SituacaoFinanceira(100, 150);
    var situacaoFinanceira2 = new SituacaoFinanceira(150, 100);
    var situacaoFinanceira3 = new SituacaoFinanceira(100, 100);
    console.log(situacaoFinanceira1.saldo());
    console.log(situacaoFinanceira2.saldo());
    console.log(situacaoFinanceira3.saldo());
}
main();
