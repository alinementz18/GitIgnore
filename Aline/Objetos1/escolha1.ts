import * as leitor from 'readline-sync'

let nome: string = leitor.question("Digite o seu nome:")


console.log("MENU DE PERÍODO DO DIA")
console.log("M - Manhã")
console.log("T - TARDE")
console.log("N - NOITE")

let horarioDia: string = leitor.question("Digite o horário do dia:")

switch (horarioDia) {
    case "M":
        console.log("Bom dia,",nome)
        break;
    case "T":
        console.log("Boa tarde,",nome)
        break;
    case "N":
        console.log("Boa noite,",nome)
        break;
}

