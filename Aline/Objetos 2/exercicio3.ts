// SE - SENÃO
// EXERCÍCIO 3
// Faça um algortimo que receba um valor em reais e pergunte para qual moeda
// deseja converter (dolar, pesos uruguaios ou euros). Informe o resultado final.
// (Utilize a cotação do google).
import * as leitor from 'readline-sync'
let valorReais: number = leitor.questionFloat("Informe o valor em Reais: ")
console.log("\n------ MENU DE MOEDAS ------")
console.log("1 - DOLAR")
console.log("2 - PESOS URUGUAIOS")
console.log("3 - EUROS")
let moeda: number = leitor.questionInt("\nInforme a moeda desejada para conversão: ")

if (moeda === 1){
    console.log("\nOpção selecionada: DOLAR -> Cotação em 13/06/2023 = 0.21")
    console.log(valorReais, "Reais *", 0.21, "(Cotação) =", valorReais * 0.21, "Doláres")
}else if (moeda === 2){
    console.log("\nOpção selecionada: PESOS URUGUAIOS -> Cotação em 13/06/2023 = 7.97")
    console.log(valorReais, "Reais *", 7.97, "(Cotação) =", valorReais * 7.97, "Pesos Uruguaios")
}else if (moeda === 3){
    console.log("\nOpção selecionada: EUROS -> Cotação em 13/06/2023 = 0.19")
    console.log(valorReais, "Reais *", 0.19, "(Cotação) =", valorReais * 0.19, "Euros")
}