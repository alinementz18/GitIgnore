"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prova = void 0;
var Prova = /** @class */ (function () {
    function Prova() {
        this.respostas = [];
        this.gabarito = [];
        this.gabarito = ["A", "B", "C", "A", "B", "D", "B", "C", "A", "B", "C", "D", "A", "C", "D"];
    }
    ;
    Prova.prototype.respostaAluno = function (resposta) {
        this.respostas.push(resposta);
    };
    ;
    Prova.prototype.acertos = function () {
        var _this = this;
        return this.respostas.filter(function (resposta, indice) { return resposta === _this.gabarito[indice]; }).length;
    };
    ;
    Prova.prototype.nota = function () {
        var acertos = this.acertos();
        return acertos * 0.5 + (15 - acertos);
    };
    ;
    Prova.prototype.maior = function (outraProva) {
        var notaAtual = this.nota();
        var notaOutra = outraProva.nota();
        if (notaAtual > notaOutra) {
            return notaAtual;
        }
        else {
            return notaOutra;
        }
    };
    ;
    return Prova;
}());
exports.Prova = Prova;
