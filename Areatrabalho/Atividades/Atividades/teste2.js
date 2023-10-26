"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var quest2_1 = require("./quest2");
var opcao;
do {
    console.log("Escolha uma operação:");
    console.log("1 - Criar uma nova data");
    console.log("2 - Comparar duas datas");
    console.log("3 - Imprimir Dia / Mês / Ano");
    console.log("4 - Verificar se é ano bissexto");
    console.log("5 - Clonar a data");
    opcao = Number(leitor.question("Digite o número da operação desejada (ou 0 para sair): "));
    switch (opcao) {
        case 1:
            var dia = Number(leitor.question("Digite o dia: "));
            var mes = Number(leitor.question("Digite o mês: "));
            var ano = Number(leitor.question("Digite o ano: "));
            var novaData = new quest2_1.Data(dia, mes, ano);
            console.log("Criando uma nova data: Dia: " + dia + ", Mês: " + mes + ", Ano: " + ano);
            break;
        case 2:
            var dia1 = Number(leitor.question("Digite o dia da primeira data: "));
            var mes1 = Number(leitor.question("Digite o mês da primeira data: "));
            var ano1 = Number(leitor.question("Digite o ano da primeira data: "));
            var dia2 = Number(leitor.question("Digite o dia da segunda data: "));
            var mes2 = Number(leitor.question("Digite o mês da segunda data: "));
            var ano2 = Number(leitor.question("Digite o ano da segunda data: "));
            var data1 = new quest2_1.Data(dia1, mes1, ano1);
            var data2 = new quest2_1.Data(dia2, mes2, ano2);
            console.log("Comparando as datas: " + dia1 + "/" + mes1 + "/" + ano1 + " e " + dia2 + "/" + mes2 + "/" + ano2);
            break;
        case 3:
            var dia3 = Number(leitor.question("Digite o dia: "));
            var mes3 = Number(leitor.question("Digite o mês: "));
            var ano3 = Number(leitor.question("Digite o ano: "));
            var data3 = new quest2_1.Data(dia3, mes3, ano3);
            console.log("Imprimindo Dia / Mês / Ano: Dia: " + dia3 + ", Mês: " + mes3 + ", Ano: " + ano3);
            break;
        case 4:
            var ano4 = Number(leitor.question("Digite o ano: "));
            var data4 = new quest2_1.Data(1, 1, ano4);
            console.log("Verificando se " + ano4 + " é um ano bissexto: " + data4.isBissexto());
            break;
        case 5:
            var dia5 = Number(leitor.question("Digite o dia: "));
            var mes5 = Number(leitor.question("Digite o mês: "));
            var ano5 = Number(leitor.question("Digite o ano: "));
            var data5 = new quest2_1.Data(dia5, mes5, ano5);
            var dataClonada = data5.clone();
            console.log("Clonando a data: Dia: " + dia5 + ", Mês: " + mes5 + ", Ano: " + ano5);
            console.log("Data clonada: Dia: " + dataClonada.getDia() + ", Mês: " + dataClonada.getMesExtenso() + ", Ano: " + dataClonada.getAno());
            break;
        case 0:
            console.log("Saindo do programa. Até mais!");
            break;
        default:
            console.log("Operação inválida. Tente novamente.");
            break;
    }
} while (opcao !== 0);
