import { Aluno } from './quest1';
import * as leitor from 'readline-sync';

const alunos: Aluno[] = [];


function exibirMenu(): void {
    console.log("\nMenu:");
    console.log("1 - Cadastro de Aluno");
    console.log("2 - Inserção de Notas");
    console.log("3 - Média");
    console.log("4 - Nota Final");
    console.log("5 - Sair");
}


function cadastrarAluno(): void {
    const matricula = Number(leitor.question("Digite a matrícula do aluno: "));
    const nome = leitor.question("Digite o nome do aluno: ");
    const aluno = new Aluno(matricula, nome, 0, 0, 0);
    alunos.push(aluno);
    console.log("Aluno cadastrado com sucesso!");
}


function inserirNotas(): void {
    const matricula = Number(leitor.question("Digite a matrícula do aluno: "));
    const aluno = alunos.find((a) => a.matricula === matricula);
    if (aluno) {
        const nota1 = Number(leitor.question("Digite a nota 1: "));
        const nota2 = Number(leitor.question("Digite a nota 2: "));
        const notaTrabalho = Number(leitor.question("Digite a nota do trabalho: "));
        aluno.nota1 = nota1;
        aluno.nota2 = nota2;
        aluno.notaTrabalho = notaTrabalho;
        console.log("Notas inseridas com sucesso!");
    } else {
        console.log("Aluno não encontrado.");
    }
}


function calcularMedia(): void {
    const matricula = Number(leitor.question("Digite a matrícula do aluno: "));
    const aluno = alunos.find((a) => a.matricula === matricula);
    if (aluno) {
        const media = aluno.media();
        console.log(`A média do aluno ${aluno.nome} é: ${media}`);
    } else {
        console.log("Aluno não encontrado.");
    }
}

function calcularNotaFinal(): void {
    const matricula = Number(leitor.question("Digite a matrícula do aluno: "));
    const aluno = alunos.find((a) => a.matricula === matricula);
    if (aluno) {
        const notaFinal = aluno.final();
        console.log(`A nota final do aluno ${aluno.nome} é: ${notaFinal}`);
    } else {
        console.log("Aluno não encontrado.");
    }
}

let opcao: number;
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