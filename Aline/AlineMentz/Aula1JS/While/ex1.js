const leitor = require("readline-sync")

let numero = 1
let soma = 0

while (numero !== 0) {
     numero = leor.questionInt("Digite um numero: ")
     soma = soma + numero
}

console.log(soma)
