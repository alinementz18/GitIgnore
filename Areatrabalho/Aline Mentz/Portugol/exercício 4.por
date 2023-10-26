programa
{
	
	funcao inicio()
	{
		inteiro numero=0, intervalo1=0, intervalo2=0, intervalo3=0, intervalo4=0


		     enquanto(numero >= 0){
		     	
	        escreva("Digite um número: ")
			leia(numero)	
		     	se(numero>=0 e numero<=25){
				intervalo1++
		     }senao se(numero >=26 e numero <=50) {
				intervalo2++
			}senao se (numero >=51 e numero <=75) {
				intervalo3++
			}senao se(numero>=76 e numero <=100) {
				intervalo4++
	
		}	
		}
          escreva("A quantidade de numeros no intervalo 0-25: ", intervalo1, "\n")
		escreva("A quantidade de numeros no intervalo 26-50: ", intervalo2, "\n")
		escreva("A quantidade de numeros no intervalo 51-75: ", intervalo3, "\n")
		escreva("A quantidade de numeros no intervalo 76-100: ", intervalo4, "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 767; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */