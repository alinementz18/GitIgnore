"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var cotdolar = leitor.questionInt("Qual a cotação do dolar?");
var dolar = leitor.questionInt("Quantos dolares você tem?");
var real = 0;
var taxacotacao = 0;
3;
real = dolar * cotdolar;
console.log(real);
taxacotacao = real - (real * 0.01);
console.log(taxacotacao);