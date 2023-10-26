programa
{
	
	funcao inicio()
	{
		real salario_base=0, salario_liquido=0, imposto

		escreva("Qual o seu salario base? ")
		leia(salario_base)

		
		
		se(salario_base <= 2000) {
			salario_liquido = salario_base - (salario_base * 0.1)
		}senao  {
			se (salario_base <= 4000) {
			salario_liquido = salario_base - (salario_base * 0.2) 
			} senao { 
				se (salario_base > 4000) {
				salario_liquido = salario_base - (salario_base * 0.3)

				}
			}
		}

		
		escreva(" Seu salario líquido é: ", salario_liquido)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 479; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */