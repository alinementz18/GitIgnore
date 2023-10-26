//Programa de informações de livros e clientes e permita realizar empréstimos
programa
{
	cadeia senha
	cadeia  clientes[5]
	cadeia nome
	cadeia livros[10]
	cadeia nomeLivro
	inteiro cpf[5]
	inteiro contadorClientes = 0
	inteiro contadorLivros = 0
	inteiro opcao
	inteiro codigoCliente
	inteiro livroEmprestado
	inteiro statusCliente[5]
	inteiro emprestado[10]
	
	funcao inicio()
	{    
        login()  
        menu()             
	}

	
	funcao login()
	{
	
	escreva(" Digite a senha: ")
	leia(senha)

	se (senha == "admin")
	escreva("Senha válida. Bem- vindo!")
	senao 
	escreva("Senha inválida. Tente novamente.")
	}

	funcao menu() {
	escreva("\nMENU DE OPÇÕES:\n")
	escreva("1) Cadastrar cliente\n")
	escreva("2) Listar clientes\n")
	escreva("3) Cadastrar livros\n")
	escreva("4) Listar livros\n")
	escreva("5) Emprestar livro\n")
	escreva("6) Devolver livro\n")
	escreva("7) Sair\n")
	escreva("Escolha uma opção: ")
	leia (opcao)

	escolha(opcao) {
		caso 1:
			cadastrarClientes()
			pare
		caso 2:
			listarClientes()
			pare
		caso 3:
		     cadastrarLivros()
		     pare
		caso 4: 
		     listarLivros()
		     pare
		caso 5: 
		     emprestarLivros() 
		     pare         	
	}	
	}
	
	funcao cadastrarClientes(){
	se(contadorClientes<5){
		escreva("\nNome do cliente: ")
		leia(clientes[contadorClientes])
		
		escreva("\nCPF do cliente: ")
		leia(cpf[contadorClientes])
		statusCliente[contadorClientes]=0

		contadorClientes++
	}
	menu()
	}
	
	funcao listarClientes()
	{
          escreva("\nLISTA DE CLIENTE\n")
          se(contadorClientes>1){
          para(inteiro i=0; i<contadorClientes; i++) {

          	escreva ("\nCódigo: ",i," - Nome: ", clientes[i]," - CPF: ",cpf[i], " - Status: ")    
          	
          	se(statusCliente[i] == 0) {
          		escreva("Não está com o livro\n")
          	} senao {
          		escreva("Está com o livro\n")
          	}
          }
          }senao {
          	escreva("Sistema ainda não possui cadastro de cliente!") 
          }
          	menu()
          }
	

          
          funcao cadastrarLivros()
          {
		escreva("\nNome do livro: ")
		leia(livros[contadorLivros])
		emprestado[contadorLivros]=0
		
		contadorLivros++

		menu()			
		}

		funcao listarLivros()
		{
	     escreva("\nLISTA DE LIVROS\n")
          para(inteiro i=0; i<contadorLivros; i++) {
          	se(livros[i] != "") {
          		escreva(livros[i] + "\n")
	
          	}
          }
          menu()
          	}

          	funcao emprestarLivros(){
          	inteiro emprestimoCliente
          	inteiro emprestimoLivro	
         	
               escreva("Digite o código de cliente: ")
          	leia(emprestimoCliente)
          	
          	escreva("Digite o numero do livro que será emprestado: ")
          	leia(emprestimoLivro)

          	se (statusCliente[emprestimoCliente]== 0 e emprestado[emprestimoLivro] ==0) {
          	emprestado[emprestimoLivro] =1
          	statusCliente[emprestimoCliente] =1
          	} senao {
          		escreva ("Livro indisponível no momento!\n")
          	}
          	menu()
          	}

          	funcao devolverLivro(){
          	inteiro diasAtraso, multa, emprestimoLivro, emprestimoCliente
          	cadeia atraso

          	escreva("Digite o código de cliente: ")
          	leia(emprestimoCliente)
          	
          	escreva("Digite o numero do livro que será emprestado: ")
          	leia(emprestimoLivro)
          	
          	se (statusCliente[emprestimoCliente]== 1 e emprestado[emprestimoLivro] ==1) {
          	emprestado[emprestimoLivro] =0
          	statusCliente[emprestimoCliente] =0

          	escreva("O livro está em atraso para devolução? ")
          	leia(atraso)
          	se(atraso == "Sim"){
          		escreva("Quantos dias de atraso?")
          		leia(diasAtraso)

          		multa = diasAtraso * 5

          		escreva("Livro devolvido!O pagamento da multa é no valor de", multa, "reais.\n")
                
          	}senao {
          		escreva("Livro devolvido com sucesso!")
          	}
          	}senao {
          		escreva("O livro selecionado não está com o cliente.")
          	}
          	menu()
          	}
}

          
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2122; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {contadorClientes, 10, 9, 16}-{contadorLivros, 11, 9, 14}-{codigoCliente, 13, 9, 13}-{statusCliente, 15, 9, 13}-{emprestado, 16, 9, 10}-{emprestimoLivro, 147, 38, 15}-{emprestimoCliente, 147, 55, 17};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */