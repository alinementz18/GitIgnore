"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaDesenvolvimento = exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
    return Funcionario;
}());
exports.Funcionario = Funcionario;
var EmpresaDesenvolvimento = /** @class */ (function () {
    function EmpresaDesenvolvimento(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.funcionarios = [];
    }
    EmpresaDesenvolvimento.prototype.adicionarFuncionario = function (funcionario) {
        this.funcionarios.push(funcionario);
        console.log("O funcion\u00E1rio \"".concat(funcionario.nome, "\" foi adicionado \u00E0 empresa."));
    };
    EmpresaDesenvolvimento.prototype.removerFuncionario = function (funcionario) {
        var index = this.funcionarios.indexOf(funcionario);
        if (index !== -1) {
            this.funcionarios.splice(index, 1);
            console.log("O funcion\u00E1rio \"".concat(funcionario.nome, "\" foi removido da empresa."));
        }
        else {
            console.log("O funcion\u00E1rio \"".concat(funcionario.nome, "\" n\u00E3o est\u00E1 dispon\u00EDvel na empresa."));
        }
    };
    EmpresaDesenvolvimento.prototype.exibirInformacoes = function () {
        console.log("Informa\u00E7\u00F5es da empresa ".concat(this.nome, ":"));
        console.log("Endere\u00E7o: ".concat(this.endereco));
        console.log("Funcion\u00E1rios:");
        for (var _i = 0, _a = this.funcionarios; _i < _a.length; _i++) {
            var funcionario = _a[_i];
            console.log("- ".concat(funcionario.nome, " (Cargo: ").concat(funcionario.cargo, ")"));
        }
    };
    return EmpresaDesenvolvimento;
}());
exports.EmpresaDesenvolvimento = EmpresaDesenvolvimento;
