"use strict";
/*Missão 2: A Herança dos Antigos Protetores
A Floresta Encantada é guardada por criaturas antigas e poderosas. Nesta missão,
você deve utilizar a herança para criar subclasses de criaturas mágicas. Crie uma
classe CriaturaMagica com atributos e métodos que são comuns a todas as
criaturas.
Em seguida, crie subclasses como GuardiãoAncião , DragãoMilenar , SereiaEncantada ,
etc., cada uma com características únicas e específicas. Utilize a herança para
compartilhar os atributos e métodos comuns entre as subclasses */
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
exports.SereiaEncantada = exports.DragaoMilenar = exports.GuardiaoAnciao = exports.CriaturaMagica = void 0;
var CriaturaMagica = /** @class */ (function () {
    function CriaturaMagica(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    CriaturaMagica.prototype.getNome = function () {
        return this.nome;
    };
    CriaturaMagica.prototype.getTipo = function () {
        return this.tipo;
    };
    CriaturaMagica.prototype.usarMagia = function () {
        console.log(this.nome, "está usando magia");
    };
    CriaturaMagica.prototype.conjurarFeitico = function () {
        console.log(this.nome, "está conjurando feitiço");
    };
    return CriaturaMagica;
}());
exports.CriaturaMagica = CriaturaMagica;
var GuardiaoAnciao = /** @class */ (function (_super) {
    __extends(GuardiaoAnciao, _super);
    function GuardiaoAnciao(nome) {
        return _super.call(this, nome, "Gandlf, o Guardião Ancião") || this;
    }
    return GuardiaoAnciao;
}(CriaturaMagica));
exports.GuardiaoAnciao = GuardiaoAnciao;
var DragaoMilenar = /** @class */ (function (_super) {
    __extends(DragaoMilenar, _super);
    function DragaoMilenar(nome) {
        return _super.call(this, nome, "Niv, o Dragão Milenar") || this;
    }
    return DragaoMilenar;
}(CriaturaMagica));
exports.DragaoMilenar = DragaoMilenar;
var SereiaEncantada = /** @class */ (function (_super) {
    __extends(SereiaEncantada, _super);
    function SereiaEncantada(nome) {
        return _super.call(this, nome, "Ariel, a Sereia Encantada") || this;
    }
    return SereiaEncantada;
}(CriaturaMagica));
exports.SereiaEncantada = SereiaEncantada;
