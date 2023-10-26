programa
{
	
	funcao inicio()
	{
		inteiro n1, n2, n3

		escreva("Qual o primeiro número? ")
		leia(n1)

		escreva("Qual o segundo número? ")
		leia(n2)

		escreva("Qual o terceiro número? ")
		leia(n3)

		 se (n1 == 0 ou n2 == 0 ou n3 == 0) {
		 	escreva ("Não é possivel formar um triângulo.")
		 }senao{
			 se(n1 == n2 e n2 == n3) {
		 		escreva ("Seu Triângulo é Equilátero.") 
		 }senao{
		 		se (n1 == n2 ou n2 == n3 ou n1 == n3) {
		 			escreva ("Seu Triângulo é Isósceles.")
		 	}senao{
		 			se (n1 != n2 e n2 != n3) {
		 				escreva ("Seu Triângulo é Escaleno.")
		 			}
		 		}
		 	}
		 }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 606; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */