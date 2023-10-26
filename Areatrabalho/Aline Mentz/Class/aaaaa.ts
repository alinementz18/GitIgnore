//Missão 1: Os Encapsulamentos da Floresta
//Nesta missão, você deve dominar os conceitos de encapsulamento para proteger as
//informações importantes da guilda.

//Crie uma classe Guerreiro que possua atributos como nome , nivel , vida e dano.
//Utilize modificadores de acesso para proteger os atributos sensíveis.
//Além disso, implemente métodos para definir e obter informações do guerreiro,
//como getVida() , setDano() , etc.
//Garanta que apenas membros da guilda tenham acesso aos métodos e atributos necessários.

export class Guerreiro {
    private nome: string;
    private nivel: number;
    private vida: number;
    private dano: number;

    constructor(nome: string, nivel: number) {
        this.nome = nome;
        this.nivel = nivel;
        this.vida = 100;
        this.dano = 10;
    }
    public getNome(): string {
        return this.nome
    }
    public getNivel(): number {
        return this.nivel
    }
    public getVida(): number {
        return this.vida
    }
    public setDano(dano: number): void{
        this.dano = dano
    }
}