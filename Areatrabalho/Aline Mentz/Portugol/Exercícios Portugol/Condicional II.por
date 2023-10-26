programa
{
	
	funcao inicio()
	{
		caracter candidato
		
		candidato = 'p' 
		candidato = 'b'
		candidato = 'k'

		escreva("Qual o candidato? ")
		leia(candidato)

		escolha(candidato) {

		caso 'p':
		escreva("Voto no Polvo")
		pare
		caso 'b':
		escreva("Voto no Biroliro")
		pare
		caso 'k':
		escreva("Voto no Kiro")
		pare
		caso contrario:
		escreva("Voto inválido")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 377; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */