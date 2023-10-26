import { Livro } from "./ex2";
import * as leitor from "readline-sync";

const titulo = leitor.question("Digite o título do livro: ")
const autor = leitor.question("Digite o autor do livro: ")
const ano = leitor.questionInt("Digite o ano do livro: ")

const novoLivro = new Livro (titulo, autor, ano);


novoLivro.obterDetalhes()






