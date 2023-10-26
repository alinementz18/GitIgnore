programa
{
	
	funcao inicio()
	{
	
		real massa_quilograma, peso_newtons, peso, massa
		  		

		escreva("Qual a massa do objeto? ")
		leia(massa)


		peso = massa * 9.8 
		
		se(peso > 1000) {
			escreva("Muito pesado")
		}senao {
			se(peso < 10 )
				escreva("Muito leve")
			}
		}	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 146; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */