const leitor = require("readline-sync")

const nome = leitor.question("Qual seu nome: ")
const email = leitor.question("Qual seu e-mail: ")

console.log("O e-mail",email.trim(), "foi cadastrado com sucesso.\nSeja bem-vinda(o)", nome)