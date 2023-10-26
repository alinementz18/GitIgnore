
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
            listarAlunosPorProfessor()
            break;
        case 9:
            listarAlunosPorDisciplina()
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

    for (let i = 0; i < professores.length; i++) {
        if (professores[i].nome == nome) {
            existe = true
            break
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

    // Verificar se existe professores
    if (professores.length == 0) {
        console.log("Não existe professores cadastrados. Cadastre um professor primeiro.")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
            let nome = leitor.question("Digite o nome da disciplina: ")
            // Verificar se a disciplina já existe
            let existe = false
            
            for (let i = 0; i < disciplinas.length; i++) {
                if (disciplinas[i].nome == nome) {
                    existe = true
                    break
                }
            }

            if (existe) {
                console.log("Disciplina já cadastrada")
                setTimeout(() => {
                    menu()
                }, 1000)
            } else {
                let idProfessor = leitor.question("Digite o código do professor: ")
                // verifica se existe professor com esse índice

                if(professores[idProfessor] == undefined) {
                    console.log("Professor não cadastrado")
                    setTimeout(() => {
                        menu()
                    }, 1000)
                }
                else {
                    let disciplina = {
                        nome: nome,
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
function cadastrarAlunos() {
    let nome = leitor.question("Digite o nome do aluno: ")
    let existe = false 

    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nome == nome) {
            existe = true
            break
        }
    }

    if (existe) {
        console.log("Aluno já cadastrado")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        let aluno = {
            nome: nome
        }

        alunos.push(aluno)

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
            for(let j = 0; j < disciplinas.length; j++) {
                if(disciplinas[j].professor == i) {
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
    if (alunos.length == 0) {
        console.log("Não existe alunos cadastrados")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        console.log("\n")
        console.log("Alunos cadastrados")
        for (let i = 0; i < alunos.length; i++) {
            console.log(`Código: ${i} \nNome: ${alunos[i].nome}`)
        }
}
}

function listarAlunosPorDisciplina () {
    if (professores.length == 0) {
        console.log("Não existe professores cadastrados")
        setTimeout(() => {
            menu()
        }, 1000)
}
        for(let j = 0; j < disciplinas.length; j++) {
    if(disciplinas[j].alunos == i) {
        console.log(`- ${disciplinas[j].nome}`)
    }
}
}

function listarDisciplinasPorProfessor(){
    if (disciplinas.length == 0) {
        console.log("Não existe disciplinas cadastrados")
        setTimeout(() => {
            menu()
        }, 1000)
    }
        for(let j = 0; j < disciplinas.length; j++) {
            if(disciplinas[j].alunos == i) {
                console.log(`- ${disciplinas[j].nome}`)
                

}
menu()