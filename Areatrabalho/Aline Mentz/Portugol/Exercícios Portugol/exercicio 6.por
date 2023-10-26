//Faça uma urna eletrônica. Considere três candidatos: 31 –
//Polvo, 71 – Biroliro, 21 – Kiro Comes. Colete votos até que o
//número 0 seja digitado. Ao final informe a quantidade de
//votos que cada um recebeu, a porcentagem de votos e diga
//se haverá ou não segundo turno (para não haver, o primeiro
//colocado precisa ter recebido mais da metade dos votos
//válidos). Se não houver, informe o novo presidente. 

programa
{
	
	funcao inicio()
	{
		inteiro candidato, soma = 0, numero =1

		escreva("Digite seu voto: ")
		leia(candidato)

		
			
		

		escolha(candidato) {

		caso 31:
		escreva(" Voto no Polvo")
		pare
		caso 71:
		escreva("Voto no Biroliro")
		pare
		caso 21:
		escreva("Voto no Kiro Comes")
		pare
		}
		enquanto(numero != 0){
			leia(candidato)

		
				}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 626; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */