"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quest1_1 = require("./quest1");
var leitor = require("readline-sync");
var alunos = [];
function exibirMenu() {
    console.log("\nMenu:");
    console.log("1 - Cadastro de Aluno");
    console.log("2 - Inserção de Notas");
    console.log("3 - Média");
    console.log("4 - Nota Final");
    console.log("5 - Sair");
}
function cadastrarAluno() {
    var matricula = Number(leitor.question("Digite a matrícula do aluno: "));
    var nome = leitor.question("Digite o nome do aluno: ");
    var aluno = new quest1_1.Aluno(matricula, nome, 0, 0, 0);
    alunos.push(aluno);
    console.log("Aluno cadastrado com sucesso!");
}
function inserirNotas() {
    var matricula = Number(leitor.question("Digite a matrícula do aluno: "));
    var aluno = alunos.find(function (a) { return a.matricula === matricula; });
    if (aluno) {
        var nota1 = Number(leitor.question("Digite a nota 1: "));
        var nota2 = Number(leitor.question("Digite a nota 2: "));
        var notaTrabalho = Number(leitor.question("Digite a nota do trabalho: "));
        aluno.nota1 = nota1;
        aluno.nota2 = nota2;
        aluno.notaTrabalho = notaTrabalho;
        console.log("Notas inseridas com sucesso!");
    }
    else {
        console.log("Aluno não encontrado.");
    }
}
function calcularMedia() {
    var matricula = Number(leitor.question("Digite a matrícula do aluno: "));
    var aluno = alunos.find(function (a) { return a.matricula === matricula; });
    if (aluno) {
        var media = aluno.media();
        console.log("A m\u00E9dia do aluno ".concat(aluno.nome, " \u00E9: ").concat(media));
    }
    else {
        console.log("Aluno não encontrado.");
    }
}
function calcularNotaFinal() {
    var matricula = Number(leitor.question("Digite a matrícula do aluno: "));
    var aluno = alunos.find(function (a) { return a.matricula === matricula; });
    if (aluno) {
        var notaFinal = aluno.final();
        console.log("A nota final do aluno ".concat(aluno.nome, " \u00E9: ").concat(notaFinal));
    }
    else {
        console.log("Aluno não encontrado.");
    }
}
var opcao;
do {
    exibirMenu();
    opcao = Number(leitor.question("Digite a opção desejada: "));
    switch (opcao) {
        case 1:
            cadastrarAluno();
            break;
        case 2:
            inserirNotas();
            break;
        case 3:
            calcularMedia();
            break;
        case 4:
            calcularNotaFinal();
            break;
        case 5:
            console.log("Saindo do programa.");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== 5);
