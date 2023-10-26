"use strict";
//Missão 1: Os Encapsulamentos da Floresta
//Nesta missão, você deve dominar os conceitos de encapsulamento para proteger as
//informações importantes da guilda.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
//Crie uma classe Guerreiro que possua atributos como nome , nivel , vida e dano.
//Utilize modificadores de acesso para proteger os atributos sensíveis.
//Além disso, implemente métodos para definir e obter informações do guerreiro,
//como getVida() , setDano() , etc.
//Garanta que apenas membros da guilda tenham acesso aos métodos e atributos necessários.
var Guerreiro = /** @class */ (function () {
    function Guerreiro(nome, nivel, vida, dano) {
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
        this.dano = dano;
    }
    Guerreiro.prototype.getNome = function () {
        return this.nome;
    };
    Guerreiro.prototype.setNivel = function () {
        return this.nivel;
    };
    Guerreiro.prototype.getVida = function () {
        return this.vida;
    };
    Guerreiro.prototype.setDano = function () {
        return this.dano;
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
