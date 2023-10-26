export class Animal {
    nome: string;
    idade: number;
  
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
  
    fazerBarulho(): void {
      console.log('Barulho genérico de animal.');
    }
  }
  
 export class Cachorro extends Animal {
    constructor(nome: string, idade: number) {
    super(nome, idade);
    }

    fazerBarulho(): void {
      console.log('Au Au!');
    }
  }
  
 export class Gato extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
    }
    fazerBarulho(): void {
      console.log('Miau!');
    }
  }
  
 export class Passaro extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade);
    }
    fazerBarulho(): void {
      console.log('Piu Piu!');
    }
  }
  

  