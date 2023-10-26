//Missão 1: Os Encapsulamentos da Floresta
//Nesta missão, você deve dominar os conceitos de encapsulamento para proteger as
//informações importantes da guilda.

//Crie uma classe Guerreiro que possua atributos como nome , nivel , vida e dano.
//Utilize modificadores de acesso para proteger os atributos sensíveis.
//Além disso, implemente métodos para definir e obter informações do guerreiro,
//como getVida() , setDano() , etc.
//Garanta que apenas membros da guilda tenham acesso aos métodos e atributos necessários.

export class Guerreiro {
    nome: string;
    nivel: number;
    vida: number;
    dano: number;
  
    constructor(nome: string, nivel: number, vida: number, dano: number) {
      this.nome = nome;
      this.nivel = nivel;
      this.vida = vida;
      this.dano = dano;
    }
    getNome():string {
        return this.nome
    }
    setNivel(): number {
        return this.nivel
    }
    getVida(): number {
        return this.vida
    }
    setDano(): number {
        return this.dano
    }
  }

  