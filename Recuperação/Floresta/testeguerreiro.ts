import {Guerreiro} from "./guerreiro";

const guerreiro = new Guerreiro ("Soldado", 10, 100, 20);
console.log("Nome do Guerreiro:", guerreiro.getNome()); 
guerreiro.setNivel();

console.log("Vida do Guerreiro:", guerreiro.getVida());
guerreiro.setDano(); 



