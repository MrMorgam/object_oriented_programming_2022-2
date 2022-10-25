class Produto {
    private _identificador: string;
    private _descricao: string;
    private _quantidadeEmEstoque: number;
    private _valorUnitario: number;

    constructor(id: string, descricao: string, quantidade: number, valor: number) {
        this._identificador = id;
        this._descricao = descricao;
        this._quantidadeEmEstoque = quantidade;
        this._valorUnitario = valor;
    }

    public repor(quantidade: number, dataAtual?: Date): void {
        this._quantidadeEmEstoque += quantidade;
    }

    public darBaixa(quantidade: number, dataAtual?: Date): void {
        if (this._quantidadeEmEstoque - quantidade < 0) {
            this._quantidadeEmEstoque = 0;
        } else {
            this._quantidadeEmEstoque -= quantidade;
        }
    }

    public get identificador(): string {
        return this._identificador;
    }

}


class ProdutoPerecivel extends Produto {
    private _dataDeValidade: Date;

    constructor(identificador: string, descricao: string, quantidade: number,
                valor: number, validade: Date) {
                    super(identificador, descricao, quantidade, valor);
                    this._dataDeValidade = validade;
    }

    public estaNaValidade(dataAtual: Date): boolean {
        return this._dataDeValidade <= dataAtual;
    }

    public repor(quantidade: number, dataAtual: Date): void {
        if (this.estaNaValidade(dataAtual)) {
           super.repor(quantidade);
        } 
    }

    public darBaixa(quantidade: number, dataAtual: Date): void {
        if (this.estaNaValidade(dataAtual)) {
            super.darBaixa(quantidade);
        }
    }
    
}


class Estoque {
    private _produtos: Produto[];

    constructor() {
        this._produtos = [];
    }

    public inserir(produto: Produto): void {
        const indice: number = this.consultarIndice(produto.identificador);

        if(indice == -1) {
            this._produtos.push(produto);        
        }
    }

    public consultar(id: string): Produto {
        let produto!: Produto;

        for (let i = 0; i < this._produtos.length; i++) {
            if (this._produtos[i].identificador == id) {
                produto = this._produtos[i];
                break;
            }
        }

        return produto;
    }

    private consultarIndice(id: string): number {
        let indice: number = -1;

        for (let i = 0; i < this._produtos.length; i++) {
            if (this._produtos[i].identificador == id) {
                indice = i;
                break;
            }
        }

        return indice;
    }

    public excluir(id: string): void {
        const indice: number = this.consultarIndice(id);

        if (indice > -1) {
            for (let i = indice; i < this._produtos.length; i++) {
                this._produtos[i] = this._produtos[i+1];
            }
        }

        this._produtos.pop();
    }

    public repor(id: string, quantidade: number, dataAtual: Date): void {
        const indice: number = this.consultarIndice(id);

        if (indice != -1) {
            this._produtos[indice].repor(quantidade, dataAtual);
        }
    }

    public darBaixa(id: string, quantidade: number, dataAtual: Date): void {
        const indice: number = this.consultarIndice(id);

        if (indice != -1) {
            this._produtos[indice].darBaixa(quantidade, dataAtual);
        }
    }

    public listarProdutosVencidos(dataAtual: Date): Produto[] {
        let produtosVencidos: ProdutoPerecivel[] = [];

        for (let i = 0; i < this._produtos.length; i++) {
            if (this._produtos[i] instanceof ProdutoPerecivel) {
                if ((<ProdutoPerecivel>this._produtos[i]).estaNaValidade(dataAtual)) {
                    produtosVencidos.push(<ProdutoPerecivel>this._produtos[i]);
                }
            }
        }

        return produtosVencidos;
    } 
}


function main(): void {
    let dataAtual: Date = new Date("2022-10-24");
    let dataDeValidade1: Date = new Date("2022-10-25");
    let dataDeValidade2: Date = new Date("2022-10-24");

    console.log(dataAtual, dataDeValidade1, dataDeValidade2);

    let produto: Produto = new Produto('0452', 'Sabonete', 5, 2.5);
    let produtoPerecivel1: ProdutoPerecivel = new ProdutoPerecivel('0563', 'Arroz', 9, 6.75, dataDeValidade2);
    let produtoPerecivel2: ProdutoPerecivel = new ProdutoPerecivel('0689', 'Feijão', 11, 8.25, dataDeValidade1);

    console.log(produtoPerecivel1.estaNaValidade(dataAtual));
    console.log(produtoPerecivel2.estaNaValidade(dataAtual));

    let estoque: Estoque = new Estoque();
    estoque.inserir(produto);
    estoque.inserir(produtoPerecivel1);
    estoque.inserir(produtoPerecivel2);

    console.log(estoque.listarProdutosVencidos(dataAtual));
}


main();