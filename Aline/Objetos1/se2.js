"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var num1 = leitor.questionInt("Digite o primeiro número:");
var num2 = leitor.questionInt("Digite o primeiro número:");
var operacao = leitor.question("Digite a operação :");
var soma = 0;
var subtracao = 0;
var multiplicacao = 0;
var divisao = 0;
if (operacao === "soma") {
    soma = num1 + num2;
    console.log(soma);
}
else if (operacao === "subtracao") {
    subtracao = num1 - num2;
    console.log(subtracao);
}
else if (operacao === "multiplicacao") {
    multiplicacao = num1 * num2;
    console.log(multiplicacao);
}
else if (operacao === "divisao") {
    divisao = num1 / num2;
    console.log(divisao);
}
else {
    console.log("Operação inválida");
}
