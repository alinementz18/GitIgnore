"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia > 1 || dia < 31 || mes > 1 || mes < 12 || ano > 1) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }
        else {
            throw new Error("Data inválida");
        }
    }
    ;
    Data.prototype.compara = function (outraData) {
        if (this.ano === outraData.ano && this.mes === outraData.mes && this.ano === outraData.ano) {
            return "Datas iguais";
        }
        else {
            return "Datas diferentes";
        }
    };
    ;
    Data.prototype.getDia = function () {
        return this.dia;
    };
    ;
    Data.prototype.getMes = function () {
        return this.mes;
    };
    ;
    Data.prototype.getMesExtenso = function () {
        switch (this.mes) {
            case 1: return "Janeiro";
            case 2: return "Fevereiro";
            case 3: return "Março";
            case 4: return "Abril";
            case 5: return "Maio";
            case 6: return "Junho";
            case 7: return "Julho";
            case 8: return "Agosto";
            case 9: return "Setembro";
            case 10: return "Outubro";
            case 11: return "Novembro";
            case 12: return "Dezembro";
        }
        return "";
    };
    ;
    Data.prototype.getAno = function () {
        return this.ano;
    };
    ;
    Data.prototype.isBissexto = function () {
        var retorno;
        var bissexto = (this.ano % 4 === 0 && this.ano % 100 != 0) || this.ano % 400 === 0;
        if (bissexto) {
            retorno = "O ano é bissexto";
        }
        else {
            retorno = "O ano não é bissexto";
        }
        return retorno;
    };
    ;
    Data.prototype.clone = function () {
        return new Data(this.dia, this.mes, this.ano);
    };
    ;
    return Data;
}());
exports.Data = Data;
