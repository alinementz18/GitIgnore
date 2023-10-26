import {Carro} from "./carro";
import * as leitor from 'readline-sync';


const marca = leitor.question("Digite a marca do carro: ");
const modelo  = leitor.question("Digite o modelo do carro: ");
const ano = leitor.questionInt("Digite o ano do carro: ");
            
const civic = new Carro(marca, modelo, ano);

console.log(civic);
 
civic.ligar();

const velocidade = leitor.questionInt("Digite a velocidade do carro em km/h: ");
civic.acelerar(velocidade);

civic.desligar();