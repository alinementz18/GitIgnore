"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Teste do código
var conta_1 = require("./conta");
var leitor = require("readline-sync");
var contas = [];
var teste = true;
var _loop_1 = function () {
    var opcao = leitor.questionInt("Escolha a opção: \n1 - Criar Conta \n2 - Depositar \n3 - Sacar \n4 - Extrato \n5 - Sair\n");
    switch (opcao) {
        case 1:
            var nomeConta = leitor.question("Digite o nome do proprietário da conta: ");
            var numeroConta = leitor.question("Digite o número da conta: ");
            var novaConta = new conta_1.ContaBancaria(nomeConta, numeroConta);
            contas.push(novaConta);
            console.log("A conta número: ", numeroConta, " foi criada");
            break;
        case 2:
            var contaDeposito_1 = leitor.question("Digite o número da conta: ");
            var contaEncontrarDeposito = contas.find(function (conta) { return conta.numeroConta === contaDeposito_1; });
            if (contaEncontrarDeposito) {
                var deposito = leitor.questionFloat("Ok, conta encontrada, digite o valor a depositar: ");
                contaEncontrarDeposito.depositar(deposito);
            }
            else {
                console.log("Conta não encontrada :/");
            }
            break;
        case 3:
            var contaSaque_1 = leitor.question("Digite o número da conta: ");
            var contaEncontrarSaque = contas.find(function (conta) { return conta.numeroConta === contaSaque_1; });
            if (contaEncontrarSaque) {
                var saque = leitor.questionFloat("Ok, conta encontrada, digite o valor a retirar: ");
                contaEncontrarSaque.sacar(saque);
            }
            else {
                console.log("Conta não encontrada :/");
            }
            break;
        case 4:
            var contaExtrato_1 = leitor.question("Digite o número da conta: ");
            var contaEncontrarExtrato = contas.find(function (conta) { return conta.numeroConta === contaExtrato_1; });
            if (contaEncontrarExtrato) {
                contaEncontrarExtrato.verificarSaldo();
            }
            else {
                console.log("Conta não encontrada :/");
            }
            break;
        case 5:
            console.log("Saindo... :D");
            teste = false;
            break;
    }
};
while (teste === true) {
    _loop_1();
}
