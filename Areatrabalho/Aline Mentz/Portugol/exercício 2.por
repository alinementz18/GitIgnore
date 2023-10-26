programa
{
	
	funcao inicio()
	{
		inteiro numero = 0, numeros_pares=0, numeros_impares=0, soma=0

		enquanto(numero < 1000) {
			escreva("Digite um número: \n")
			leia(numero)

			se(numero%2 == 0) {
				numeros_pares = numeros_pares + numero	
			}senao {
				numeros_impares= numeros_impares + numero
				
			}
		}
		escreva("A soma dos numeros pares é: ", numeros_pares)
		escreva("A soma dos numeros pares é:" , numeros_impares)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 58; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */