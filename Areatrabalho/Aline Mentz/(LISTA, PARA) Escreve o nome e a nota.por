programa
{
	
	funcao inicio()
	{
	//Crie um vetor para notas e um vetor para nomes, com 10 posições em cada. Leia nome e nota de 10 estudantes

	real nota [10]
	cadeia nome [10]

      para (inteiro i = 0 ; i < 10 ; i++){

      	escreva ("SEU NOME: ")
      	leia(nome [i])

      	escreva ("SUA NOTA: ")
      	leia(nota [i])
      	
      }
       para (inteiro i = 0 ; i < 10 ; i++){
      
      escreva ("SEU NOME ",nome [i])
      escreva ("\nSUA NOTA ",nota [i])
	}
	}
	}
	
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 459; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */