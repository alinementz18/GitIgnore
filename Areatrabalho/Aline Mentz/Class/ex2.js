"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    Livro.prototype.obterDetalhes = function () {
        console.log("Nome", this.titulo, ", Autor", this.autor, ", Ano", this.ano);
    };
    return Livro;
}());
exports.Livro = Livro;
