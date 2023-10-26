export class Guerreiro {
    nomeGuerreiro: string;
    nivel: number;
    vida: number;
    dano: number;
  
    constructor(nomeGuerreiro: string, nivel: number, vida: number, dano: number) {
      this.nomeGuerreiro = nomeGuerreiro;
      this.nivel = nivel;
      this.vida = vida;
      this.dano = dano;
    }

    getVida(): number {
     return this.vida
    }
    setDano(): number{
    return this.dano
    }
    getNome(): string{
    return this.nomeGuerreiro   
    }
    setNivel(): number{
    return this.nivel    
    }
}

export class CriaturaMagica {
    nomeCriatura: string;

    constructor(nomeCriatura: string) {
        
    }

}