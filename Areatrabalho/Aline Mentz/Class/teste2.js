"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex2_1 = require("./ex2");
var leitor = require("readline-sync");
var titulo = leitor.question("Digite o título do livro: ");
var autor = leitor.question("Digite o autor do livro: ");
var ano = leitor.questionInt("Digite o ano do livro: ");
var novoLivro = new ex2_1.Livro(titulo, autor, ano);
novoLivro.obterDetalhes();
