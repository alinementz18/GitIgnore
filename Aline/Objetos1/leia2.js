"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var num1 = leitor.questionInt("Digite o primeiro número:");
var num2 = leitor.questionInt("Digite o primeiro número:");
var soma = 0;
var divisao = 0;
var multiplicacao = 0;
var subtracao = 0;
var mediasoma = 0;
var mediadiv = 0;
var mediamult = 0;
var mediasub = 0;
soma = num1 + num2;
divisao = num1 / num2;
multiplicacao = num1 * num2;
subtracao = num1 - num2;
mediasoma = (soma) / 2;
mediadiv = (divisao) / 2;
mediamult = (multiplicacao) / 2;
mediasub = (divisao) / 2;
console.log("A soma dos num é", soma, "e a média é", mediasoma);
console.log("A divisão dos num é", divisao, "e a media é", mediadiv);
console.log("A multiplicação dos num é", multiplicacao, "e a media é", mediamult);
console.log("A divisão dos num é", divisao, "e a média é", mediasub);
