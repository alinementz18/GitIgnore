import * as leitor from 'readline-sync'

let cotdolar: number = leitor.questionInt("Qual a cotação do dolar?")
let dolar: number = leitor.questionInt("Quantos dolares você tem?")
let real = 0
let taxacotacao = 0
3
real = dolar * cotdolar

console.log(real)

taxacotacao = real - (real * 0.01)

console.log(taxacotacao)




