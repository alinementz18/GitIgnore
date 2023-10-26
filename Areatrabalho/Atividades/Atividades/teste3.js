"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var quest3_1 = require("./quest3");
var opcao;
var voo = new quest3_1.Voo("12345", "2023-09-20");
do {
    console.log("Escolha uma operação:");
    console.log("1 - Verificar próxima cadeira livre");
    console.log("2 - Verificar cadeira");
    console.log("3 - Ocupar cadeira");
    console.log("4 - Verificar Vagas");
    console.log("5 - Verificar Vôo");
    console.log("6 - Verificar data de Vôo");
    console.log("7 - Clonar Vôo");
    console.log("0 - Sair");
    opcao = Number(leitor.question("Digite o número da operação desejada: "));
    switch (opcao) {
        case 1:
            var proximaCadeira = voo.proximoLivre();
            if (proximaCadeira !== -1) {
                console.log("A próxima cadeira livre é a número " + proximaCadeira);
            }
            else {
                console.log("Não há cadeiras livres neste vôo.");
            }
            break;
        case 2:
            var cadeira = Number(leitor.question("Digite o número da cadeira: "));
            if (voo.verifica(cadeira)) {
                console.log("A cadeira número " + cadeira + " está ocupada.");
            }
            else {
                console.log("A cadeira número " + cadeira + " está livre.");
            }
            break;
        case 3:
            var cadeiraOcupada = Number(leitor.question("Digite o número da cadeira a ser ocupada: "));
            if (voo.ocupa(cadeiraOcupada)) {
                console.log("Cadeira número " + cadeiraOcupada + " ocupada com sucesso!");
            }
            else {
                console.log("Cadeira número " + cadeiraOcupada + " já está ocupada.");
            }
            break;
        case 4:
            console.log("Vagas disponíveis: " + voo.vagas());
            break;
        case 5:
            console.log("Número do Vôo: " + voo.getVoo());
            break;
        case 6:
            console.log("Data do Vôo: " + voo.getData());
            break;
        case 7:
            var vooClonado = voo.clone();
            console.log("Vôo clonado: Número do Vôo: " + vooClonado.getVoo() + ", Data do Vôo: " + vooClonado.getData());
            break;
        case 0:
            console.log("Saindo do programa. Até mais!");
            break;
        default:
            console.log("Operação inválida. Tente novamente.");
            break;
    }
} while (opcao !== 0);
