"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var nome = leitor.question("Digite o seu nome:");
console.log("MENU DE PERÍODO DO DIA");
console.log("M - Manhã");
console.log("T - TARDE");
console.log("N - NOITE");
var horarioDia = leitor.question("Digite o horário do dia:");
switch (horarioDia) {
    case "M":
        console.log("Bom dia,", nome);
        break;
    case "T":
        console.log("Boa tarde,", nome);
        break;
    case "N":
        console.log("Boa noite,", nome);
        break;
}
