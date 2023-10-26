  // Teste do código
  import { Animal, Cachorro, Gato, Passaro } from "./animais";
  const cachorro = new Cachorro('Rex', 2);
  const gato = new Gato('Garfield', 5);
  const passaro = new Passaro('Piu', 3);
  
  cachorro.fazerBarulho();
  gato.fazerBarulho();
  passaro.fazerBarulho();