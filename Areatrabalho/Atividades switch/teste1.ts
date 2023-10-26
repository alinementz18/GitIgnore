import {Aluno} from "./quest1";

const aluno1 = new Aluno(12345, "João Silva", 8.5, 9.0, 7.5);

console.log(aluno1.media())

if(aluno1.media() >= 7) {
    console.log("Aprovado")
} else  {
    console.log("Reprovado")
}
console.log(aluno1)

console.log(aluno1.final());
