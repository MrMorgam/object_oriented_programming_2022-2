var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produto = /** @class */ (function () {
    function Produto(id, descricao, quantidade, valor) {
        this._identificador = id;
        this._descricao = descricao;
        this._quantidadeEmEstoque = quantidade;
        this._valorUnitario = valor;
    }
    Produto.prototype.repor = function (quantidade, dataAtual) {
        this._quantidadeEmEstoque += quantidade;
    };
    Produto.prototype.darBaixa = function (quantidade, dataAtual) {
        if (this._quantidadeEmEstoque - quantidade < 0) {
            this._quantidadeEmEstoque = 0;
        }
        else {
            this._quantidadeEmEstoque -= quantidade;
        }
    };
    Object.defineProperty(Produto.prototype, "identificador", {
        get: function () {
            return this._identificador;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
var ProdutoPerecivel = /** @class */ (function (_super) {
    __extends(ProdutoPerecivel, _super);
    function ProdutoPerecivel(identificador, descricao, quantidade, valor, validade) {
        var _this = _super.call(this, identificador, descricao, quantidade, valor) || this;
        _this._dataDeValidade = validade;
        return _this;
    }
    ProdutoPerecivel.prototype.estaNaValidade = function (dataAtual) {
        return this._dataDeValidade <= dataAtual;
    };
    ProdutoPerecivel.prototype.repor = function (quantidade, dataAtual) {
        if (this.estaNaValidade(dataAtual)) {
            _super.prototype.repor.call(this, quantidade);
        }
    };
    ProdutoPerecivel.prototype.darBaixa = function (quantidade, dataAtual) {
        if (this.estaNaValidade(dataAtual)) {
            _super.prototype.darBaixa.call(this, quantidade);
        }
    };
    return ProdutoPerecivel;
}(Produto));
var Estoque = /** @class */ (function () {
    function Estoque() {
        this._produtos = [];
    }
    Estoque.prototype.inserir = function (produto) {
        var indice = this.consultarIndice(produto.identificador);
        if (indice == -1) {
            this._produtos.push(produto);
        }
    };
    Estoque.prototype.consultar = function (id) {
        var produto;
        for (var i = 0; i < this._produtos.length; i++) {
            if (this._produtos[i].identificador == id) {
                produto = this._produtos[i];
                break;
            }
        }
        return produto;
    };
    Estoque.prototype.consultarIndice = function (id) {
        var indice = -1;
        for (var i = 0; i < this._produtos.length; i++) {
            if (this._produtos[i].identificador == id) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Estoque.prototype.excluir = function (id) {
        var indice = this.consultarIndice(id);
        if (indice > -1) {
            for (var i = indice; i < this._produtos.length; i++) {
                this._produtos[i] = this._produtos[i + 1];
            }
        }
        this._produtos.pop();
    };
    Estoque.prototype.repor = function (id, quantidade, dataAtual) {
        var indice = this.consultarIndice(id);
        if (indice != -1) {
            this._produtos[indice].repor(quantidade, dataAtual);
        }
    };
    Estoque.prototype.darBaixa = function (id, quantidade, dataAtual) {
        var indice = this.consultarIndice(id);
        if (indice != -1) {
            this._produtos[indice].darBaixa(quantidade, dataAtual);
        }
    };
    Estoque.prototype.listarProdutosVencidos = function (dataAtual) {
        var produtosVencidos = [];
        for (var i = 0; i < this._produtos.length; i++) {
            if (this._produtos[i] instanceof ProdutoPerecivel) {
                if (this._produtos[i].estaNaValidade(dataAtual)) {
                    produtosVencidos.push(this._produtos[i]);
                }
            }
        }
        return produtosVencidos;
    };
    return Estoque;
}());
function main() {
    var dataAtual = new Date("2022-10-24");
    var dataDeValidade1 = new Date("2022-10-25");
    var dataDeValidade2 = new Date("2022-10-24");
    console.log(dataAtual, dataDeValidade1, dataDeValidade2);
    var produto = new Produto('0452', 'Sabonete', 5, 2.5);
    var produtoPerecivel1 = new ProdutoPerecivel('0563', 'Arroz', 9, 6.75, dataDeValidade2);
    var produtoPerecivel2 = new ProdutoPerecivel('0689', 'Feijão', 11, 8.25, dataDeValidade1);
    console.log(produtoPerecivel1.estaNaValidade(dataAtual));
    console.log(produtoPerecivel2.estaNaValidade(dataAtual));
    var estoque = new Estoque();
    estoque.inserir(produto);
    estoque.inserir(produtoPerecivel1);
    estoque.inserir(produtoPerecivel2);
    console.log(estoque.listarProdutosVencidos(dataAtual));
}
main();
