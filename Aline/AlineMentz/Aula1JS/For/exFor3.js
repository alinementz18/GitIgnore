const array = [1,2,3,4,5]
let maior = 0

function retornaMaior(vetor) {

for(let i=0; i < vetor.length; i++){
       if(vetor[i]>maior){
        maior = vetor[i]
       }
       }
       return maior
     
}

console.log(retornaMaior(array))