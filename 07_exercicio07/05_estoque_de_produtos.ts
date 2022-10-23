class Produto {
    private _identificador: string;
    private _descricao: string;
    private _quantidadeEmEstoque: number;
    private _valorUnitario: number;

    constructor(identificador: string, descricao: string, quantidade: number, valor: number) {
        this._identificador = identificador;
        this._descricao = descricao;
        this._quantidadeEmEstoque = quantidade;
        this._valorUnitario = valor;
    }

    public repor(quantidade: number): void {
        this._quantidadeEmEstoque += quantidade;
    }

    public darBaixa(quantidade: number): void {
        this._quantidadeEmEstoque -= quantidade;
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
        return this._dataDeValidade == dataAtual;
    }

    
}


function main(): void {

}


main();