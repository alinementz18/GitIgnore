/* Escreva um programa para ler o número de gols marcados pelo Inter e pelo Grêmio em um
GRENAL. Logo após escrever a mensagem "Novo grenal (1-sim 2-nao)" e solicitar uma resposta. 
Se a resposta for 1, o algoritmo deve ser executado novamente solicitando o número de
gols marcados pelos times em uma nova partida, caso contrário deve ser encerrado imprimindo:

Quantos GRENAIS fizeram parte da estatística.
O número de vitórias do Inter.
O número de vitórias do Grêmio.
O número de Empates.
Uma mensagem indicando qual o time que venceu o maior número de GRENAIS (ou "Nao houve vencedor",
caso termine empatado).

Entrada
A entrada contém 2 valores inteiros, correspondentes aos gols marcados pelo Inter e pelo Grêmio respectivamente.
Em seguida háverá um inteiro (1 ou 2), correspondente à repetição do programa.
Saída
Após cada leitura dos gols, deve ser impressa a mensagem "Novo grenal (1-sim 2-nao)". Quando o algoritmo for
encerrado devem ser mostradas as estatísticas conforme a descrição apresentada acima. Obs: a palavra "Gremio"
deve ser impressa sem acento, conforme o exemplo abaixo. */

import * as leitor from 'readline-sync'

let grenais = 0
let vitoriasInter = 0
let vitoriasGremio = 0
let empates = 0

while(true) {
    grenais++

const golsInter: number = leitor.questionInt("Gols do Inter: ")
const golsGremio: number = leitor.questionInt("Gols do Grêmio: ")

if (golsInter > golsGremio) {
    vitoriasInter++
}else if (golsGremio > golsInter) {
vitoriasGremio++
} else {
    empates++
}

const resposta: number = leitor.questionInt("Novo grenal (1-sim 2-nao): ")
if (resposta !== 1) {
    break
} 
}

console.log (grenais, "grenais")
console.log ("Inter:", vitoriasInter)
console.log ("Gremio: ", vitoriasGremio)
console.log ("Empates:", empates)

if (vitoriasInter > vitoriasGremio) {
    console.log("Inter venceu mais grenais")
} else if (vitoriasGremio > vitoriasInter) {
    console.log("Gremio venceu mais grenais")
} else {
    console.log("Não houve vencedor")
}