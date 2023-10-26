import * as leitor from 'readline-sync'

let num1: number = leitor.questionInt("Digite o primeiro número:")
let num2: number = leitor.questionInt("Digite o primeiro número:")

let soma =0
let divisao =0
let multiplicacao =0
let subtracao =0
let mediasoma =0
let mediadiv =0
let mediamult =0
let mediasub =0

soma = num1 + num2
divisao = num1 / num2
multiplicacao = num1 * num2
subtracao = num1 - num2
mediasoma = (soma)/2
mediadiv = (divisao)/2
mediamult = (multiplicacao)/2
mediasub = (divisao)/2

console.log("A soma dos num é", soma, "e a média é", mediasoma)
console.log("A divisão dos num é", divisao, "e a media é", mediadiv)
console.log("A multiplicação dos num é", multiplicacao, "e a media é", mediamult)
console.log("A divisão dos num é", divisao, "e a média é", mediasub)



