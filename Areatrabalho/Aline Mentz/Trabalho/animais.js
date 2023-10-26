"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passaro = exports.Gato = exports.Cachorro = exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Animal.prototype.fazerBarulho = function () {
        console.log('Barulho genérico de animal.');
    };
    return Animal;
}());
exports.Animal = Animal;
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome, idade) {
        return _super.call(this, nome, idade) || this;
    }
    Cachorro.prototype.fazerBarulho = function () {
        console.log('Au Au!');
    };
    return Cachorro;
}(Animal));
exports.Cachorro = Cachorro;
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nome, idade) {
        return _super.call(this, nome, idade) || this;
    }
    Gato.prototype.fazerBarulho = function () {
        console.log('Miau!');
    };
    return Gato;
}(Animal));
exports.Gato = Gato;
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro(nome, idade) {
        return _super.call(this, nome, idade) || this;
    }
    Passaro.prototype.fazerBarulho = function () {
        console.log('Piu Piu!');
    };
    return Passaro;
}(Animal));
exports.Passaro = Passaro;
