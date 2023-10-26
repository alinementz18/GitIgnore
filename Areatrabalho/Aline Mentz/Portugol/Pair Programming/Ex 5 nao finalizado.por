programa
{
	
	funcao inicio()
	{
		caracter instrucoes, sair
		inteiro opcoes, jogar, jogar2, jogar3, pf, valor1=0, valor2=0, valor3=0

		escreva ("Escolha uma das opções: \n")
		escreva ("1 - Jogar \n")
		escreva ("2 - Instruções \n")
		escreva ("3 - Sair \n")

		leia (opcoes)

		escolha (opcoes) {
			caso 1:
				escreva ("Qual foi a primeira versão do Windows? \n")
	
				escreva (" 1 - Windows 1.01 \n")
				escreva (" 2 - Windows 0.01 \n")
				escreva (" 3 - Windows 1.00 \n")
				escreva (" 4 - Windows 2.00 \n")
	
				leia (jogar)
	
				se (jogar == 1) {
					valor1 = 1
					escreva ("A resposta está correta. \n ")
				} senao {
					valor1 = 0
					escreva ("Respota incorreta. \n ")
				}


			caso 2:
				escreva ("Em que ano foi lançado o primeiro computador? \n")

				escreva (" 1 - 1945 \n")
				escreva (" 2 - 2000 \n")
				escreva (" 3 - 1996 \n")
				escreva (" 4 - 1946 \n")

				leia (jogar2)

				se (jogar2 == 4) {
					valor2 = 1
					escreva ("A respota está correta. ")
				}senao{
					valor2 = 0
					escreva ("Resposta incorreta.")
				}

			caso 3:
				escreva ("O que significa a sigla WWW? \n")

				escreva (" 1 - World Wide Web \n")
				escreva (" 2 - Web Wide Word \n")
				escreva (" 3 - Wide Web Word \n")
				escreva (" 4 - Word Wide Web \n")

				leia (jogar3)

				se (jogar3 == 1) {
					valor3 = 1
					escreva ("A resposta está correta.")
				}senao{
					valor3 = 0
					escreva ("Resposta incorreta. \n")
				}
				
				pf = valor1 + valor2 + valor3
				escreva ("A sua pontuação final foi: ", pf)
				}
	}
}
	
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1537; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */