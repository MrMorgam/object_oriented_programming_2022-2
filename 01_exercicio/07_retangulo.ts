class Retangulo {
    base: number = 0
    altura: number = 0

    calcularArea(): number {
        return this.base * this.altura
    }
    
    calcularPerimetro(): number {
        return (this.base + this.altura) * 2
    }
}

const retangulo1 = new Retangulo
retangulo1.base = 5
retangulo1.altura = 3

console.log(`Área do retângulo: ${retangulo1.calcularArea()}`)
console.log(`Perímetro do retângulo: ${retangulo1.calcularPerimetro()}`)