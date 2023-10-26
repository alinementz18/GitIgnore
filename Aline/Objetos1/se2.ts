import * as leitor from 'readline-sync'

let num1: number = leitor.questionInt("Digite o primeiro número:")
let num2: number = leitor.questionInt("Digite o primeiro número:")
let operacao: string = leitor.question("Digite a operação :")

let soma = 0
let subtracao = 0
let multiplicacao = 0
let divisao = 0

if (operacao === "soma") {
    soma = num1 + num2
    console.log(soma)
} else if (operacao === "subtracao") {
    subtracao = num1 - num2
    console.log(subtracao)
} else if (operacao === "multiplicacao") {
    multiplicacao = num1 * num2
    console.log(multiplicacao)
} else if (operacao=== "divisao"){
    divisao = num1/num2
    console.log(divisao)
} else {
console.log("Operação inválida")
}
