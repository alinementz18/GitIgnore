
const leitor = require("readline-sync")

const professores = []
const disciplinas = []
const alunos = []

function menu() {
    console.log("\n")
    console.log("1 - Cadastrar professores")
    console.log("2 - Cadastrar disciplinas")
    console.log("3 - Cadastrar alunos")
    console.log("4 - Listar disciplinas")
    console.log("5 - Listar professores")
    console.log("6 - Listar alunos")
    console.log("7 - Listar alunos por disciplina")
    console.log("8 - Listar disciplinas por professores")
    console.log("9 - Listar alunos por disciplinas")
    console.log("0 - Sair")
    console.log("\n")

    let opcao = leitor.questionInt("Digite a opção desejada: ")

    switch (opcao) {
        case 1:
            cadastrarProfessor()
            break;
        case 2:
            cadastrarDisciplina()
            break;
        case 3:
            cadastrarAluno()
            break;
        case 4:
            listarDisciplinas()
            break;
        case 5:
            listarProfessores()
            break;
        case 6:
            listarAlunos()
            break;
        case 7:
            listarAlunosPorDisciplina()
            break;
        case 8:
            listarDisciplinasPorProfessor()
            break;
        case 9:
            listarAlunosPorProfessor()
            break;
        case 0:
            console.log("Saindo...")
            break;
        default:
            console.log("Opção inválida")
            setTimeout(() => {
                menu()
            }, 500)
    }

}

function cadastrarProfessor() {
    let nome = leitor.question("Digite o nome do professor: ")
    let existe = false
    //inicia um loop for para cadastrar os professores dentro do array professores
    for (let i = 0; i < professores.length; i++) {
        if (professores[i].nome == nome) { //É preciso uma validação que não permita que professores
            existe = true                  // repetidos sejam criados.
            break                          // Dentro do loop, é verificado se o nome 
            //do professor atual (professores[i].nome)
            //é igual ao nome digitado pelo usuário (nome).
            //Se essa condição for verdadeira,
            //significa que  já existe,
            // aparecendo a mensagem abaixo

        }
    }
    if (existe) {
        console.log("Professor já cadastrado")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        let professor = {
            nome: nome
        }

        professores.push(professor)

        console.log("Professor cadastrado com sucesso")
        setTimeout(() => {
            menu()
        }, 1000)
    }
}
// Cadastrar disciplinas
function cadastrarDisciplina() {

    // Verificar se existe professores cadastrados:
    if (professores.length == 0) { //verifica se o tamanho do array professores é igual a zero. Significa:
        console.log("Não existe professores cadastrados. Cadastre um professor primeiro.")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        let nome = leitor.question("Digite o nome da disciplina: ")
        // Verificar se a disciplina já existe. É preciso uma validação que não permita que disciplinas repetidas sejam criadas.
        let existe = false

        //inicia um loop for para cadastrar as disciplinas dentro do array disciplinas
        for (let i = 0; i < disciplinas.length; i++) {
            if (disciplinas[i].nome == nome) { // Dentro do loop, é verificado se o nome 
                existe = true                  //da disciplina atual (disciplinas[i].nome)
                break                          //é igual ao nome digitado pelo usuário (nome).
            }                                  //Se essa condição for verdadeira,
        }                                      //significa que a disciplina já existe,
        // aparecendo a mensagem abaixo

        if (existe) {
            console.log("Disciplina já cadastrada")
            setTimeout(() => {
                menu()
            }, 1000)
        } else {
            let idProfessor = leitor.question("Digite o código do professor: ")
            // se a disciplina ainda não existe, 
            //o código solicita ao usuário que digite o código do professor(idProfessor)

            if (professores[idProfessor] == undefined) { //verificado se o código do professor fornecido 
                console.log("Professor não cadastrado")  //pelo usuário corresponde a um professor cadastrado 
                setTimeout(() => {                       //no array professores. Se for indefinido, 
                }, 1000)                                 //significa que não existe um professor com o código fornecido
                menu()                                   //ex: professor 0, professor 1, ....
            }                                           //esse cod professores[idProfessor] acessa 
            //um elemento dentro do array professores
            else {
                let disciplina = {   //se o código do professor for válido e corresponder a um professor existente,
                    nome: nome,      // um objeto de disciplina é criado com as informações fornecidas
                    professor: idProfessor
                }

                disciplinas.push(disciplina)
                console.log("Disciplina cadastrada com sucesso")
                setTimeout(() => {
                    menu()
                }, 1000)
            }
        }
    }
}

function cadastrarAluno() {
    //Você só pode cadastrar alunos caso já exista uma disciplina cadastrada
    if (disciplinas.length == 0) { // verifica se o tamanho do array disciplinas é igual a zero. Significa:
        console.log("Não existe disciplinas cadastradas")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {

        //[ { nome: 'Teste', professor: '0', codigo: 0 } ]

        //Crie uma função que pergunte o nome do aluno e quantas disciplinas ele irá cursar. 
        //Conforme a quantidade de disciplinas que ele cursar, pergunte quais serão
        let nome = leitor.question("Digite o nome do aluno: ")
        let numeroDisciplinas = leitor.question("Quantas disciplinas irá cursar?")

        //armazenar os códigos das disciplinas que o aluno irá cursar
        let disciplinasAluno = []

        //inicia um loop for para cadastrar as disciplinas que o aluno irá cursar
        for (let i = 0; i < numeroDisciplinas; i++) {

            let codigoDisciplina = leitor.question("Código da disciplina: ")
            let existe = false

            if (disciplinas[codigoDisciplina] != undefined) {
                existe = true
            }

            if (existe) {
                disciplinasAluno.push(codigoDisciplina)
            } else {
                console.log("Não existe disciplinas cadastradas")
                setTimeout(() => {
                    menu()
                }, 1000)
            }
        }
        alunos.push({
            nome: nome,
            disciplinas: disciplinasAluno,
            matricula: Math.floor(Math.random() * (10000 - 0)) + 0
        })

        console.log("Aluno cadastrado com sucesso")
        setTimeout(() => {
            menu()
        }, 1000)

    }

}

function listarDisciplinas() {
    if (disciplinas.length == 0) {
        console.log("Não existe disciplinas cadastradas")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        console.log("\n")
        console.log("Disciplinas cadastradas:")
        for (let i = 0; i < disciplinas.length; i++) {
            console.log(`${i} - ${disciplinas[i].nome} - ${professores[disciplinas[i].professor].nome}`)
        }
        console.log("\n")
        setTimeout(() => {
            menu()
        }, 1000)
    }
}

function listarProfessores() {
    if (professores.length == 0) {
        console.log("Não existe professores cadastrados")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        console.log("\n")
        console.log("Professores cadastrados")
        for (let i = 0; i < professores.length; i++) {
            console.log(`Código: ${i} \nNome: ${professores[i].nome}`)
            // disciplinas
            console.log("Disciplinas:")
            for (let j = 0; j < disciplinas.length; j++) {
                if (disciplinas[j].professor == i) {
                    console.log(`- ${disciplinas[j].nome}`)
                }
            }
        }
        console.log("\n")
        setTimeout(() => {
            menu()
        }, 1000)
    }
}

function listarAlunos() {
    if (alunos.length === 0) { //verifica se o tamanho do array alunos é igual a zero. Significa que:
        console.log("Não existem alunos cadastrados.")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        console.log("\n")
        console.log("Alunos cadastrados:")

        for (let i = 0; i < alunos.length; i++) {
            console.log("Matrícula: ", alunos[i].matricula)
            console.log("Nome: ", alunos[i].nome)
            console.log("Disciplinas: ")

            if (alunos[i].disciplinas.length === 0) {
                console.log(" Nenhuma disciplina cadastrada")
            } else {
                for (let j = 0; j < alunos[i].disciplinas.length; j++) {
                    console.log(" ", disciplinas[alunos[i].disciplinas[j]].nome)
                }
                console.log("\n")
                setTimeout(() => {
                    menu()
                }, 1000)
            }
        }
    }
}
function listarAlunosPorDisciplina() {
    let disciplinaAluno = leitor.question("Qual disciplina você quer a lista de alunos? ")

    if (alunos.length === 0) { //verifica se o tamanho do array alunos é igual a zero. Significa que:
        console.log("Não existem alunos cadastrados.")
        setTimeout(() => {
            menu()
        }, 1000)
    }
    if (disciplinas.length === 0) {
        console.log(" Nenhuma disciplina cadastrada")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        console.log("\n")
        console.log("Alunos matriculados em", disciplinaAluno, "-", disciplinas[disciplinaAluno].nome)

        for (let i = 0; i < alunos.length; i++) {
        if(alunos[i].disciplinas.includes(disciplinaAluno)) { // verifica se o array de disciplinas de um aluno contém 
            console.log("Matrícula: ", alunos[i].matricula) // disciplinaAluno e inclui
            console.log("Nome: ", alunos[i].nome)
            console.log("Disciplinas: ")

            for (let j = 0; j < alunos[i].disciplinas.length; j++) {
                console.log(" ", disciplinas[alunos[i].disciplinas[j]].nome)
            }
            console.log("\n")
        }
        setTimeout(() => {
            menu()
        }, 1000)
    }
}
}

function listarDisciplinasPorProfessor() {
let codigoProfessor = leitor.question("Qual professor você quer ver as disciplinas? ")

if (disciplinas.length === 0) {
    console.log(" Nenhuma disciplina cadastrada")
    setTimeout(() => {
        menu()
    }, 1000)
}
    if (professores[codigoProfessor] === undefined) {
        console.log(" Nenhum professor cadastrada")
        setTimeout(() => {
            menu()
        }, 1000)
    
    } else {
        console.log("\n")

for (let i = 0; i < disciplinas.length; i++) {
   if(disciplinas[i].professor == codigoProfessor) {
    console.log("Disciplinas do ")
   }
}
    }

}
    
    

menu()