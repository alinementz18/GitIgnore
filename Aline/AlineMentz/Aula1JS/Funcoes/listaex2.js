

function somar(numero1,numero2){
   let resultado = numero1 + numero2
   return resultado
}

function subtração (numero1, numero2) {
   let resultado = numero1 - numero2
   return resultado
}

function multiplicação (numero1, numero2) {
    let resultado = numero1 * numero2
    return resultado
} 

function divisão (numero1, numero2) {
   let resultado = numero1 / numero2
   return resultado
}

const leitor = require("readline-sync")

const numero1 = leitor.questionInt ("Digite o primeiro numero: ")
const numero2 = leitor.questionInt("Digite o segundo numero: ")

console.log(somar(numero1, numero2))
console.log(subtração(numero1, numero2))
console.log(multiplicação(numero1, numero2))
console.log(divisão(numero1, numero2))


