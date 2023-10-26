"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var nome = leitor.question("Qual o seu nome?");
var genero = leitor.question("Qual o seu genero?");
if (genero === "masculino") {
    console.log("Bem-vindo", nome);
}
else if (genero === "feminino") {
    console.log("Bem vinda", nome);
}
else {
    (genero === "não-binário");
    console.log("Bem vinde", nome);
}
