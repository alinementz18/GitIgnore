"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
var Voo = /** @class */ (function () {
    function Voo(numeroVoo, data) {
        this.passageiros = [];
        this.numeroVoo = numeroVoo;
        this.data = data;
        this.passageiros = Array(100).fill(false);
    }
    Voo.prototype.proximoLivre = function () {
        for (var i = 0; i < this.passageiros.length; i++) {
            if (!this.passageiros[i]) {
                return i + 1;
            }
        }
        return -1;
    };
    Voo.prototype.verifica = function (cadeira) {
        return this.passageiros[cadeira - 1];
    };
    Voo.prototype.ocupa = function (cadeira) {
        if (!this.verifica(cadeira)) {
            this.passageiros[cadeira - 1] = true;
            return true;
        }
        return false;
    };
    Voo.prototype.vagas = function () {
        return this.passageiros.filter(function (ocupado) { return !ocupado; }).length;
    };
    Voo.prototype.getVoo = function () {
        return this.numeroVoo;
    };
    Voo.prototype.getData = function () {
        return this.data;
    };
    Voo.prototype.clone = function () {
        return new Voo(this.numeroVoo, this.data);
    };
    return Voo;
}());
exports.Voo = Voo;
// Exemplo de uso:
