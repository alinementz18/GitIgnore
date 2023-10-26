programa
{
	
	funcao inicio()
	{
		real livros, pontos

		escreva("Quantos livros foram comprados?")
		leia(livros)

		se(livros == 0) {
			escreva("0 pontos")
		} senao {
			se(livros == 1) {
				escreva("5 pontos")
			} senao {
				se(livros == 2) {
					escreva("15 pontos")
				}senao {
					se(livros == 3) {
						escreva("30 pontos")
					}senao {
						se(livros >=4) {
							escreva("60 pontos")
						}
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
 * @POSICAO-CURSOR = 410; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */