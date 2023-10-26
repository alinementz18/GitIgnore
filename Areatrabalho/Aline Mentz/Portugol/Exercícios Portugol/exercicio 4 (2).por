// Faça um algoritmo que receba a quantidade de
//funcionários de uma empresa. Faça um laço que peça a
//idade de cada um e mostre mensagem informando “Pode
//aposentar” ou “Não pode aposentar” para cada pessoa.
//Considere a idade de 65 anos para se aposentar.


programa
{
	
	funcao inicio()
	{

	inteiro quantidade, idade, contador=0

	escreva("Qual a quantidade de funcionários? ")
	leia(quantidade)

	enquanto(contador < quantidade) {
	escreva("Digite sua idade: ")
	leia(idade)
	se(idade >= 65) {
		escreva("Pode aposentar\n")
	}senao {
		escreva("Não pode aposentar\n")
	}
	contador ++
	}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 581; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */