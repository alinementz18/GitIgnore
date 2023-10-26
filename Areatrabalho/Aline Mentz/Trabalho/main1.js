"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Teste do código
var animais_1 = require("./animais");
var cachorro = new animais_1.Cachorro('Rex', 2);
var gato = new animais_1.Gato('Garfield', 5);
var passaro = new animais_1.Passaro('Piu', 3);
cachorro.fazerBarulho();
gato.fazerBarulho();
passaro.fazerBarulho();
