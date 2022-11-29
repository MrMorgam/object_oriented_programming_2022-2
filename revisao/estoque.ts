class Produto {
    constructor(private _id: string,
                private _descricao: string,
                private _qtdEmEstoque: number,
                private _valorUnitario: number) {}

    get id(): string {
        return this._id;
    }

    get descricao(): string {
        return this._descricao;
    }
    
    get qtdEmEstoque(): number {
        return this._qtdEmEstoque;
    }

    get valorUnitario(): number {
        return this._valorUnitario;
    }

    public repor(quantidade: number): void {
        this._qtdEmEstoque += quantidade;
    }

    public darBaixa(quantidade: number): void {
        this._qtdEmEstoque -= quantidade;
    }
}


class ProdutoPerecivel extends Produto {
    constructor(id: string, descricao: string, 
                qtdEmEstoque: number, valorUnitario: number,
                private _dataValidade: Date) {
        super(id, descricao, qtdEmEstoque, valorUnitario);
    }

    public estaValido(): boolean {
        const dataAtual: Date = new Date();

        return this._dataValidade >= dataAtual;
    }

    public repor(quantidade: number): void {
        if (this.estaValido()) {
            super.repor(quantidade);
        }
    }

    public darBaixa(quantidade: number): void {
        if (this.estaValido()) {
            super.darBaixa(quantidade);
        }
    }
}


class Estoque {
    private _estoque: Produto[] = [];

    private consultarIndice(id: string): number {
        let indice: number = -1;

        for (let i: number = 0; i < this._estoque.length; i++) {
            if (this._estoque[i].id == id) {
                indice = i;
                break;
            }
        }

        return indice;
    }

    public inserir(produto: Produto): void {
        const indice: number = this.consultarIndice(produto.id);

        if (indice == -1) {
            this._estoque.push(produto);
        }
    }

    public excluir(id: string): void {
        // To do
    }
}