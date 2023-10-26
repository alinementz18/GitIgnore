//Faça um algoritmo que solicite números enquanto 0 não
//for pressionado. Ao final exiba o maior número digitado
programa
{
	
	funcao inicio()
	{
		inteiro numero= 1, maior=0


		
		enquanto(numero != 0 ) {
			escreva("Digite um número: ")
	         leia(numero)
			
		se(numero >maior) {
			maior = numero 
		}
		}
		escreva("O maior número digitado é: ", maior)

	}
}
	
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 370; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */