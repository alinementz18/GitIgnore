programa
{
	
	funcao inicio()
	{
		inteiro idade
		cadeia sexo

		escreva ("Qual seu sexo? ")
		leia (sexo)

		escreva ("Qual a sua idade? ")
		leia (idade)

		se (sexo == "masculino" e idade >= 18 e idade <= 45) {
			escreva ("Está apto à se alistar! ")
		}senao{
			se(sexo == "masculino" e idade <=17 ou idade >= 46) {
				escreva ("Você não pode se alistar! ")
			}senao{
				se(sexo == "feminino") {
					escreva ("Alistamento não obrigatório. ")
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
 * @POSICAO-CURSOR = 311; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */