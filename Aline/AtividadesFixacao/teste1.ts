import { Carro } from "./Atividade1DeFixacao";
import * as leitor from 'readline-sync';

const carro = new Carro(10); // Consumo de 10 km/L

while (true) {
  carro.obterGasolina();
  const escolha = leitor.question('Escolha uma opção (andar / abastecer / sair): ');

  if (escolha === 'andar') {
    const distancia = leitor.questionFloat('Digite a distância em km: ');
    carro.andar(distancia);
  } else if (escolha === 'abastecer') {
    carro.adicionarGasolina(100);
  } else if (escolha === 'sair') {
    break;
  } else {
    console.log('Opção inválida.');
  }
}

