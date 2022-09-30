class Triangulo {
    l1: number;
    l2: number;
    l3: number;

    constructor(l1: number, l2:number, l3:number) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }

    ehTriangulo(): boolean {
        return ((Math.abs(this.l2 - this.l3)) < this.l1 && 
                this.l1 < (this.l2 + this.l3));
    }

    ehIsoceles(): boolean {
        if(!this.ehTriangulo()) {
            return false;
        } else {
            return ((this.l1 == this.l2 && this.l2 != this.l3) ||
                    (this.l2 == this.l3 && this.l1 != this.l2) ||
                    (this.l1 == this.l3 && this.l2 != this.l3));
        }
    }

    ehEquilatero(): boolean {
        if(!this.ehTriangulo()) {
            return false;
        } else {
            return (this.l1 == this.l2 && this.l2 == this.l3);
        }
    }

    ehEscaleno(): boolean {
        if(!this.ehTriangulo()) {
            return false;
        } else {
            return (this.l1 != this.l2 && this.l2 != this.l3);
        }
    }
}


function main(): void {
    let triangulo1: Triangulo = new Triangulo(2,3,5);
    
    console.log(triangulo1.ehTriangulo());
    console.log(triangulo1.ehEquilatero());
    console.log(triangulo1.ehIsoceles());
    console.log(triangulo1.ehEscaleno());

    let triangulo2: Triangulo = new Triangulo(1,1,1);
    
    console.log(triangulo2.ehTriangulo());
    console.log(triangulo2.ehEquilatero());
    console.log(triangulo2.ehIsoceles());
    console.log(triangulo2.ehEscaleno());

    let triangulo3: Triangulo = new Triangulo(1,2,2);
    
    console.log(triangulo3.ehTriangulo());
    console.log(triangulo3.ehEquilatero());
    console.log(triangulo3.ehIsoceles());
    console.log(triangulo3.ehEscaleno());

    let triangulo4: Triangulo = new Triangulo(3,4,5);
    
    console.log(triangulo4.ehTriangulo());
    console.log(triangulo4.ehEquilatero());
    console.log(triangulo4.ehIsoceles());
    console.log(triangulo4.ehEscaleno());
}


main();