var Retangulo = /** @class */ (function () {
    function Retangulo(l1, l2) {
        this.l1 = l1;
        this.l2 = l2;
    }
    Retangulo.prototype.calcPerimetro = function () {
        return (this.l1 + this.l2) * 2;
    };
    return Retangulo;
}());
function main() {
    var retangulo1 = new Retangulo(2, 3);
    console.log(retangulo1.calcPerimetro());
}
main();
