var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira() {
        this.valorCreditos = 0;
        this.valorDebitos = 0;
    }
    SituacaoFinanceira.prototype.saldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinanceira;
}());
var situacaoFinanceira1 = new SituacaoFinanceira;
situacaoFinanceira1.valorCreditos = 599;
situacaoFinanceira1.valorDebitos = 1000;
console.log("Saldo: R$ ".concat(situacaoFinanceira1.saldo().toFixed(2)));
