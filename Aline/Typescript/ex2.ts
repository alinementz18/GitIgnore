/* 2 Gasto de Combustível
Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, 
ao utilizar um automóvel que faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através de um simples programa. Para
efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) e a velocidade média durante a mesma (em
km/h). Assim, pode-se obter distância percorrida e, em seguida, calcular quantos litros seriam necessários. Mostre o
valor com 3 casas decimais após o ponto.
Entrada
A entrada contém dois inteiros. O primeiro é o tempo gasto na viagem (em horas) e o segundo é a velocidade média
durante a mesma (em km/h).
Saída
Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal
Exemplo de entrada: 10, 85 
Exemplo de saída: 70.833


import * as leitor from 'readline-sync' */


import * as leitor from 'readline-sync'

const tempo: number = leitor.questionInt("Tempo gasto na viagem (horas): ")
const velocidadeMedia: number = leitor.question("Velocidade média (km/h): ")
const distancia: number = tempo * velocidadeMedia
const litrosNecessarios: number = distancia / 12

console.log("Quantidade de litros necessários", litrosNecessarios.toFixed(3))