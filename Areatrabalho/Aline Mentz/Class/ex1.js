"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.cumprimentar = function () {
        console.log("Bem-vindo", this.nome);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
