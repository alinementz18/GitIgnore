// ESCOLHA - CASO
// EXERCÍCIO 1
// Faça um algoritmo que pergunte o nome e horário do dia. Receba M para manhã, T
// para tarde e N para noite. Escreva “Bom dia, nome”, “Boa tarde, nome” ou “Boa
// noite, nome”, de acordo com o horário.
import * as leitor from 'readline-sync'
let nome: string = leitor.question("Informe seu nome: ")
console.log("\n------ MENU DE PERÍODO DO DIA ------")
console.log("M - Manhã")
console.log("T - TARDE")
console.log("N - NOITE")
let periodoDia: string = leitor.question("\nInforme o período atual do dia: ")

switch (periodoDia) {
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