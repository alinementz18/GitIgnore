programa
{
	
	funcao inicio()
	{
		inteiro codigo 
		real peso, valor =0

		escreva("Qual o código da mercadoria? ")
		leia(codigo)

		escreva("Qual o peso da mercadoria? ")
		leia(peso)

		se(codigo == 1) {
		valor = peso * 5
		} senao {
			se(codigo == 2) {
				valor = peso * 7.5
			} senao {
				se (codigo == 3) {
					valor = peso * 10
				}
			}
		}
		escreva(" O valor da mercadoria é: ", valor)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 77; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */