const leitor = require("readline-sync")

const altura = leitor.questionFloat("Qual a sua altura?")
const sexo = leitor.question("Qual seu sexo?")


if(sexo === "feminino") {
    pesoIdeal = (62.1 * altura) - 44.7
} else if(sexo === "masculino") {
    pesoIdeal = (72.7 * altura) - 58
}   
     console.log("Seu peso ideal é: ", pesoIdeal) 
    


