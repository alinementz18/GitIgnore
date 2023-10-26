const leitor = require("readline-sync")

const numId = leitor.questionInt("Qual seu numero de identificacao? ")
const nota1 = leitor.questionInt("Qual a primeira nota da avaliacao? ")
const nota2 = leitor.questionInt("Qual a segunda nota da avaliacao? ")
const nota3 = leitor.questionInt("Qual a terceira nota da avaliacao? ")

media = (nota1 + nota2 + nota3) / 3
ma = (nota1 + nota2 * 2 + nota3 * 3 + media)/7

if(ma>=90){
    conceito = "A"
    situação = "Aprovado"
} else if (ma >=75 ) {
    conceito = "B"
    situação = "Aprovado"
} else if (ma >=60){
    conceito = "C"
    situação = "Aprovado"
} else if (ma >=40){
    conceito = "D"
    situação = "Reprovado"
} else if (ma <40) { 
    conceito = "E"
    situação = "Reprovado"
}

console.log("Seu númeiro de identificação é: ", numId) 
console.log("Primeira nota: ", nota1)
console.log("Segunda nota: ", nota2)
console.log("Terceira nota: ",  nota3)
console.log("Sua média é: ", media)
console.log("Sua média de aproveitamento é: ", ma)
console.log("Seu conceito é: ", conceito)
console.log("Você foi: ", situação)
