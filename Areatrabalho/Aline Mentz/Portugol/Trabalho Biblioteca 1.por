//Programa de informações de livros e clientes e permita realizar empréstimos
	     
		//cadastro até 5 cliente
		//cadastro até 10 livros

		//vetor para armazenar o nome dos clientes
		//vetor para armazenar o CPF
          //vetor para armazenar o nome dos livros

          //cada cliente ou livro receberá um código único que será utilzado como índice dos vetores
          //Exemplo: o cliente João Silva pode receber o cod 0 e terá seus dados armazenados
          // na posição 0 do vetor de nomes e de CPF

          //Para os livros, o sistema também utilizará o código como indice do vetor
          //Exemplo: o livro "Dom Casmurro" pode receber o código 0 e terá seu nome armazenado 

          //O programa deverá ter um menu com as seguintes opções:

          //1. Cadastrar cliente
          //2. Listar clientes
          //3. Listar livros
          //4. Emprestar livros
          //5. Devolver livros
          //6. Sair
          //Escolha uma opção

          //Ao selecionar uma opção deve ser chamada uma função que execute a respectiva ação:

          //1. Cadastrar cliente: o programa deve solicitar o nome e o CPF e atribuir um código único a ele
          //o vetor de nome e o vetor de CPF devem ser atualizados com as informações do novo cliente
          //o vetor de status do cliente sempre inicia com falso, o que significa que ele não pegou nenhum livro
          //ainda

          //2. Cadastro de Livro: o programa deve solicitar o nome do livro e atribuir um código único a ele.
          //o vetor de livros deve ser atualizado com as informações do novo livro
          //o vetor de status do livro sempre inicia com falso, o que significa que ele não foi emprestado ainda

          //3. Listar clientes: essa opção lista todos os clientes cadastrados no sistema 
          //mostrando seus códigos, nomes, CPF e se está ou não com livro.
          
          // Exemplo:
          // CÓDIGO |     NOME     |         CPF        |    STATUS
         // -----------------------------------------------------------
             //001  | João da Silva| 123.456.789-10     | Não está com livro
             //002  | Maria Santos | 987.654.321-98     | Não está com livro
             //003  | José Almeida | 555.444.333-22     | Está com livro
             //004  | Ana Oliveira | 777.888.999-11     | Não está com livro
             //005  | Carlos Silva | 111.222.333-44     | Está com livro
             //-----------------------------------------------------------

         //4. Listar livros: ssa opção lista todos os livros cadastrados no sistema,
         //mostrando seus códigos, nomes e status.

         //Exemplo:
         // | CÓDIGO |          NOME           | STATUS     |
          //|--------|-------------------------|------------|
          //|   001  | A Arte da Guerra        | DISPONÍVEL |
          //|   002  | O Senhor dos Anéis      | EMPRESTADO |
          //|   003  | 1984                    | DISPONÍVEL |
          //|   004  | O Pequeno Príncipe      | DISPONÍVEL |
          //|   005  | Dom Casmurro            | EMPRESTADO |

          //5. Emprestar livros: O programa deve solicitar o código do cliente e o código do livro.
          // Se o livro estiver disponível para empréstimo (ou seja, seu status estiver como falso), 
          //o programa deve atualizar o status do livro para "emprestado" e o status do cliente para verdadeiro
          //Caso contrário, o programa deve exibir uma mensagem informando que o livro já está emprestado 
          //e/ou que o cliente já está com um livro.

          //6. Devolver Livro: O programa deve solicitar o código do cliente e o código do livro. 
          // Se o livro estiver emprestado para o cliente 
          //(ou seja, seu status estiver como verdadeiro e o status do cliente estiver como verdadeiro)
          //o programa deve atualizar o status do livro para falso e o status do cliente para falso.
          //Caso contrário, o programa deve exibir uma mensagem informando que o livro não está com o cliente. 
          //O programa deve perguntar se o livro está em atraso e se estiver deve perguntar quantos dias. 
          //Calcule uma taxa de 5 reais por dia de atraso e exiba. 

          //O nosso sistema não armazena quem está com o livro, então você não precisa se preocupar com isso.

          //7.  ao selecionar a opção "Sair", o programa deve encerrar a execução.

          //Requisitos:

          //Toda ação deve solicitar uma senha.
          //A senha é admin e se estiver errada, deve retornar um erro e voltar ao menu.

          //Após cada ação o sistema deve retornar ao menu
          //Você é livre para construir as mensagens de erro. Respeite o usuário e seja ético.

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
	escreva("Senha inválidA. Tente novamente.")
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
			lista()
			pare
		caso 3:
		     cadastroLivros()	
	}
	
	
	}
	
	funcao cadastrarClientes()
	{
		escreva("\nNome do cliente: ")
		leia(clientes[contadorClientes])
		escreva("\nCPF do cliente: ")
		leia(cpf[contadorClientes])

		contadorClientes++

		menu()
	}
	
	funcao lista()
	{

          escreva("\nLISTA DE CLIENTE\n")
          para(inteiro i=0; i<contadorClientes; i++) {
          	se(clientes[i] != "") {
          		escreva(clientes[i] + "\n")
          	}
          }
	

	}

          funcao livro()
          {
          
		
		escreva("\nNome do livro: ")
		leia(nomeLivro)
		para (inteiro i =0; i<contadorLivros; i++) {
			se(livros[i] == "") {
				livros[i] = nomeLivro
				pare
			}
		}

		
	}
		
	
	
	

	
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 4819; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */