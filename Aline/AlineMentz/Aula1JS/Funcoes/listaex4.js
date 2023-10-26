const leitor = require("readline-sync")
const cateto1 = leitor.question("Digite o cateto1: ")
const cateto2 = leitor.question("Digite o cateto2: ")

function teoremaDePitagoras(cateto1, cateto2){
const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))

return hipotenusa
}

console.log(teoremaDePitagoras(cateto1, cateto2))
