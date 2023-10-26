programa
{
	
	funcao inicio()
	{

  real  idade, altura
  cadeia sexo, concursado 
  inteiro matricula=1, num_concursadas = 0, num_homens =0, idade_maior=0, num_mulheres_30=0, num_concursados=0, num_homens_menos40=0, soma_altura_homens_menos40 = 0

      
      
      enquanto(matricula!=0) {
      escreva("Digite a matrícula do funcionário: ")
      leia(matricula)
     
     
     se(matricula>0) {
      
      escreva("Digite a idade: ")
      leia(idade)
      
      escreva("Digite o sexo (M ou F): ")
      leia(sexo)
      
      escreva("Digite a altura: ")
      leia(altura)
      
      escreva("É concursado? (S ou N): ")
      leia(concursado) 
    
      
      se(sexo == "F" e concursado == "S") {
        num_concursadas++
      }
      
      senao se (sexo == "M") {
        num_homens++
        se (concursado == "S") {
          se (idade > idade_maior) {
          }
          num_concursados++
        }senao se (idade > 30) 
            num_mulheres_30++
        
        se (idade < 40) {
          num_homens_menos40++
        }
      }
      }
      }
  escreva("O número de funcionárias concursadas é: ", num_concursadas, "\n")
  escreva("O número de funcionários homens é: ", num_homens, "\n")
  escreva("A maior idade dos homens concursados é: ", idade_maior, "\n")
  escreva("O número de mulheres com mais de 30 anos sem concurso é: ", num_mulheres_30, "\n")
  escreva("O número de funcionários concursados é: ", num_concursados, "\n")
  se (num_homens_menos40 < 0) {
    escreva(" A média das alturas dos homens com menos de 40 anos é: ", soma_altura_homens_menos40 / num_homens_menos40, "\n")
  } senao {
    escreva(" Não há homens com menos de 40 anos na empresa.\n")
  
	
      }
	}

}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1088; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */