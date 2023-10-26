import * as leitor from 'readline-sync';
import { Data } from "./quest2"; 

let opcao: number;

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
            
            const dia = Number(leitor.question("Digite o dia: "));
            const mes = Number(leitor.question("Digite o mês: "));
            const ano = Number(leitor.question("Digite o ano: "));
            const novaData = new Data(dia, mes, ano); 
            console.log("Criando uma nova data: Dia: " + dia + ", Mês: " + mes + ", Ano: " + ano);
            break;
        case 2:
           
            const dia1 = Number(leitor.question("Digite o dia da primeira data: "));
            const mes1 = Number(leitor.question("Digite o mês da primeira data: "));
            const ano1 = Number(leitor.question("Digite o ano da primeira data: "));
            const dia2 = Number(leitor.question("Digite o dia da segunda data: "));
            const mes2 = Number(leitor.question("Digite o mês da segunda data: "));
            const ano2 = Number(leitor.question("Digite o ano da segunda data: "));
            const data1 = new Data(dia1, mes1, ano1); 
            const data2 = new Data(dia2, mes2, ano2); 
            console.log("Comparando as datas: " + dia1 + "/" + mes1 + "/" + ano1 + " e " + dia2 + "/" + mes2 + "/" + ano2);
            break;
        case 3:
           
            const dia3 = Number(leitor.question("Digite o dia: "));
            const mes3 = Number(leitor.question("Digite o mês: "));
            const ano3 = Number(leitor.question("Digite o ano: "));
            const data3 = new Data(dia3, mes3, ano3); 
            console.log("Imprimindo Dia / Mês / Ano: Dia: " + dia3 + ", Mês: " + mes3 + ", Ano: " + ano3);
            break;
        case 4:

            const ano4 = Number(leitor.question("Digite o ano: "));
            const data4 = new Data(1, 1, ano4); 
            console.log("Verificando se " + ano4 + " é um ano bissexto: " + data4.isBissexto());
            break;
        case 5:
            
            const dia5 = Number(leitor.question("Digite o dia: "));
            const mes5 = Number(leitor.question("Digite o mês: "));
            const ano5 = Number(leitor.question("Digite o ano: "));
            const data5 = new Data(dia5, mes5, ano5); 
            const dataClonada = data5.clone(); 
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