class Jogador {
    forca: number;
    nivel: number;
    pontosAtuais: number;

    constructor(forca: number, nivel: number, pontos: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontos;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    atacar(atacado: Jogador): void {
        if (atacado.estaVivo()) {
            atacado.pontosAtuais -= this.calcularAtaque();
        }
    }

    estaVivo(): boolean {
        return this.pontosAtuais > 0;
    }

    toString(): string {
        return "Força: " + this.forca + " | Nível: " + this.nivel + " | Pontos de vida: " + this.pontosAtuais;
    }
}


function main(): void {
    let jogador1: Jogador = new Jogador(10, 10, 100);
    let jogador2: Jogador = new Jogador(7, 9, 100);

    console.log(jogador1.toString());
    console.log(jogador2.toString());
    
    jogador1.atacar(jogador2);
    jogador2.atacar(jogador1);

    console.log(jogador1.toString());
    console.log(jogador2.toString());
}


main();