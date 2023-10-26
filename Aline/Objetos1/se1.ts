import * as leitor from 'readline-sync'

let nome: string = leitor.question("Qual o seu nome?")
let genero: string = leitor.question("Qual o seu genero?")

if(genero === "masculino") {
    console.log("Bem-vindo", nome)
} else if (genero === "feminino") {
    console.log("Bem vinda", nome)
} else { 
    console.log("Bem vinde", nome)
}
