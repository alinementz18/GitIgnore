programa
{
	
	funcao inicio()
	{
		real altura=0, menor= 2.58, maior= 0, i

		 para(i=0; i<15; i++) {
		 	escreva("Digite sua altura: ") 
		 	leia(altura)

		 	se(menor>altura){
		 		menor= altura
		 	}senao
		 	maior= altura
		 }

		 escreva("A maior altura é ", maior, "\n")
		 escreva("A menor altura é ", menor, "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 98; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */