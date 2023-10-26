export class Pessoa {
    nome: string;
    idade: number;

    constructor(nome:string, idade:number){
    this.nome = nome;
    this.idade = idade;
    }

cumprimentar(): void {
    console.log("Bem-vindo", this.nome)

}
}