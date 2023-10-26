import * as leitor from 'readline-sync'

let valorReais: number = leitor.questionInt("Digite o valor em reais:")
console.log("MENU DE MOEDAS")
console.log("1 - Dolar")
console.log("2 - Pesos Uruguaios")
console.log("3 - Euros")

let moeda: number = leitor.questionInt("Digite a moeda que deseja converter:")
let valorConvertido =0 
if(moeda===1){
    valorConvertido = valorReais * 0.21
    console.log(valorConvertido, "Dolares")

}else if (moeda ===2) {
    valorConvertido = valorReais * 7.97
    console.log(valorConvertido, "Pesos")

}else if (moeda ===3) {
    valorConvertido = valorReais * 0.19
    console.log(valorConvertido, "Euros")
}





