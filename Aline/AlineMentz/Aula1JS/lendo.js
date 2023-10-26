const leitor = require("readline-sync")

const nota1 = leitor.questionInt("Qual a primeira nota?")
const nota2 = leitor.questionInt("Qual a segunda nota?")
const nota3 = leitor.questionInt("Qual a terceira nota?")

console.log(nota1, nota2, nota3)

const media = (nota1 + nota2 + nota3)/3

console.log("Sua média é:", media)

if (media >7) {
    console.log("Aprovado")
}else {
    console.log("Reprovado")
}

if(sexo === "feminino") {
    const pesoIdeal = (62.1 * altura) - 44.7
    console.log("Seu peso ideal é: ", pesoIdeal) 
}
else (sexo === "masculino") 
    const pesoIdeal = (72.7 * altura) - 58
    console.log("Seu peso ideal é: ", pesoIdeal)








