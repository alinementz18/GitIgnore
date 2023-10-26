"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var quest4_1 = require("./quest4");
var opcao;
var prova = null;
do {
    console.log("Escolha uma operação:");
    console.log("1 - Construir o Gabarito");
    console.log("2 - Receber as respostas");
    console.log("3 - Contabilizar acertos");
    console.log("4 - Verificar nota");
    console.log("5 - Comparar notas");
    console.log("0 - Sair");
    opcao = leitor.questionInt("Digite o número da operação desejada: ");
    switch (opcao) {
        case 1:
            console.log("Construindo o Gabarito:");
            prova = new quest4_1.Prova();
            console.log("Gabarito construído com sucesso!");
            break;
        case 2:
            if (prova === null) {
                console.log("Construa o Gabarito antes de receber as respostas.");
            }
            else {
                console.log("Recebendo as respostas do Aluno:");
                for (var i = 1; i <= 15; i++) {
                    var resposta = leitor.question("Resposta " + i + ": ");
                    prova.respostaAluno(resposta);
                }
                console.log("Respostas recebidas com sucesso!");
            }
            break;
        case 3:
            if (prova === null) {
                console.log("Construa o Gabarito antes de contabilizar os acertos.");
            }
            else {
                console.log("Número de acertos: " + prova.acertos());
            }
            break;
        case 4:
            if (prova === null) {
                console.log("Construa o Gabarito antes de verificar a nota.");
            }
            else {
                console.log("Nota do Aluno: " + prova.nota());
            }
            break;
        case 5:
            if (prova === null) {
                console.log("Construa o Gabarito antes de comparar as notas.");
            }
            else {
                var outraProva = new quest4_1.Prova();
                console.log("Comparando notas com outra prova:");
                var maiorNota = prova.maior(outraProva);
                console.log("A maior nota entre as provas é: " + maiorNota);
            }
            break;
        case 0:
            console.log("Saindo do programa. Até mais!");
            break;
        default:
            console.log("Operação inválida. Tente novamente.");
            break;
    }
} while (opcao !== 0);
