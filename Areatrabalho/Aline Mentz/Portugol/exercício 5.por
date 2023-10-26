programa
{
	
	funcao inicio()
	{
		inteiro contador=1
		inteiro numero
		inteiro resultado =1

		escreva("Digite um número: ")
		leia(numero)

		enquanto(contador<= numero){
			resultado=resultado * contador
			contador++
		}
		escreva("Resultado é ", resultado)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 204; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */