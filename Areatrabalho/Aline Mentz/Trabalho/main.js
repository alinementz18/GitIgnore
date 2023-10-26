"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Teste do código
var loja_1 = require("./loja");
var loja = new loja_1.Loja('Minha Loja', 'Rua Principal');
var produto1 = new loja_1.Produto('Camiseta', 49.90);
var produto2 = new loja_1.Produto('Calça Jeans', 89.90);
var produto3 = new loja_1.Produto('Tênis', 129.90);
loja.adicionarProduto(produto1);
loja.adicionarProduto(produto2);
loja.exibirProdutos();
loja.removerProduto(produto2);
loja.removerProduto(produto3);
loja.exibirProdutos();
