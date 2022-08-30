class Circulo {
    raio: number = 0

    calcularArea(): number {
        return Math.PI * (this.raio ** 2)
    }
    
    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio
    }
}

const circulo = new Circulo
circulo.raio = 3    

console.log(`Área do retângulo: ${circulo.calcularArea().toFixed(2)}`)
console.log(`Perímetro do retângulo: ${circulo.calcularPerimetro().toFixed(2)}`)