programa
{
	
	funcao inicio()
	{
		inteiro numero, i=0, dentro_intervalo = 0, fora_intervalo = 0

		para(i=0; i<10; i++) {
		escreva("Digite um numero: ")
		leia(numero)

		se(numero > 10 e numero < 20) {
			dentro_intervalo = dentro_intervalo + 1
		} senao {
			fora_intervalo++
		}
		}

		escreva("O Total dentro do intervalo é", dentro_intervalo, "\n")
		escreva("O Total fora do intervalo é ", fora_intervalo, "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 199; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */