class Postagem {
    id: number;
    texto: string;
    quantCurtidas: number;

    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
        this.quantCurtidas = 0;
    }

    incremetar(): void {
        this.quantCurtidas++;
    }

    toString(): string {
        return "Postagem: " + this.texto + "\n" + "Curtidas: " + this.quantCurtidas; 
    }
}


class Microblog {
    postagens: Postagem[] = [];

    incluir(postagem: Postagem): void {
        this.postagens.push(postagem);
    }
    
    consultarIndice(id: number): number {
        let indice: number = -1;

        for (let i: number = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id === id) {
                indice = i;
                break;
            }
        }

        return indice;
    }

    excluir(id: number): void {
        let indice: number = this.consultarIndice(id);
        
        if (indice != -1) {
            for (let i: number = indice; i < this.postagens.length; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }

            this.postagens.pop();
        }
    }

    consultar(id: number): Postagem {
        let postagem!: Postagem;

        for (let i: number = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id === id) {
                postagem = this.postagens[i];
                break;
            }
        }

        return postagem;
    }
}