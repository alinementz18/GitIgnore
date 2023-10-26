const leitor = require("readline-sync")

const comidas = ["hamburguer", "pizza", "sushi", "chocolate", "camarão"]

console.log(comidas)

console.log("Essas são as minhas comidas preferidas: ")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

const usuario = leitor.question("Qual sua comida favorita? :")

comidas.push(usuario)

console.log(comidas)




