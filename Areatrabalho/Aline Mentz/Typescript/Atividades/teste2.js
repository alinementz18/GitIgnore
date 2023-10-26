"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var quest2_1 = require("./quest2");
var data1 = new quest2_1.Data(11, 8, 2023);
var data2 = new quest2_1.Data(1, 2, 2023);
console.log(data1.compara(data2));
console.log(data1.getMesExtenso());
console.log(data1.clone());
