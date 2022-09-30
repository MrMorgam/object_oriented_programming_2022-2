var Triangulo = /** @class */ (function () {
    function Triangulo(l1, l2, l3) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    Triangulo.prototype.trianguloSegueRegra = function () {
        return ((Math.abs(this.l2 - this.l3)) < this.l1 &&
            this.l1 < (this.l2 + this.l3));
    };
    Triangulo.prototype.ehIsoceles = function () {
        if (!this.trianguloSegueRegra()) {
            return false;
        }
        else {
            return ((this.l1 == this.l2 && this.l2 != this.l3) ||
                (this.l2 == this.l3 && this.l1 != this.l2) ||
                (this.l1 == this.l3 && this.l2 != this.l3));
        }
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (!this.trianguloSegueRegra()) {
            return false;
        }
        else {
            return (this.l1 == this.l2 && this.l2 == this.l3);
        }
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (!this.trianguloSegueRegra()) {
            return false;
        }
        else {
            return (this.l1 != this.l2 && this.l2 != this.l3);
        }
    };
    return Triangulo;
}());
function main() {
    var triangulo1 = new Triangulo(2, 3, 5);
    console.log(triangulo1.trianguloSegueRegra());
    console.log(triangulo1.ehEquilatero());
    console.log(triangulo1.ehIsoceles());
    console.log(triangulo1.ehEscaleno());
    var triangulo2 = new Triangulo(1, 1, 1);
    console.log(triangulo2.trianguloSegueRegra());
    console.log(triangulo2.ehEquilatero());
    console.log(triangulo2.ehIsoceles());
    console.log(triangulo2.ehEscaleno());
    var triangulo3 = new Triangulo(1, 2, 2);
    console.log(triangulo3.trianguloSegueRegra());
    console.log(triangulo3.ehEquilatero());
    console.log(triangulo3.ehIsoceles());
    console.log(triangulo3.ehEscaleno());
    var triangulo4 = new Triangulo(3, 4, 5);
    console.log(triangulo4.trianguloSegueRegra());
    console.log(triangulo4.ehEquilatero());
    console.log(triangulo4.ehIsoceles());
    console.log(triangulo4.ehEscaleno());
}
main();
