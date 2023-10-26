/* #4 FizzBuzz
Escreva um programa que imprima os números de 1 a 100. Mas para múltiplos de três imprima "Fizz" 
em vez do número e para os múltiplos de cinco imprima "Buzz". 
Para números que são múltiplos de três e cinco, imprima "FizzBuzz” */


import * as leitor from 'readline-sync'

for (let i=1; i <=100; i++) {
    if (i % 3 === 0 && 5 ===0)
    console.log("FizzBuzz")
} else if (i % 3 === 0) {
    console.log("Fizz")
} else if (i % 5 === 0) {
    console.log("Buzz")
}

