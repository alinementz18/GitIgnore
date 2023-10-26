"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    return Produto;
}());
exports.Produto = Produto;
var Loja = /** @class */ (function () {
    function Loja(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.produtos = [];
    }
    Loja.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
        console.log("O produto \"".concat(produto.nome, "\" foi adicionado \u00E0 loja."));
    };
    Loja.prototype.removerProduto = function (produto) {
        var index = this.produtos.indexOf(produto);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log("O produto \"".concat(produto.nome, "\" foi removido da loja."));
        }
        else {
            console.log("O produto \"".concat(produto.nome, "\" n\u00E3o est\u00E1 dispon\u00EDvel na loja."));
        }
    };
    Loja.prototype.exibirProdutos = function () {
        console.log("Produtos dispon\u00EDveis na loja ".concat(this.nome, ":"));
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var produto = _a[_i];
            console.log("- ".concat(produto.nome, " (Pre\u00E7o: R$ ").concat(produto.preco.toFixed(2), ")"));
        }
    };
    return Loja;
}());
exports.Loja = Loja;
